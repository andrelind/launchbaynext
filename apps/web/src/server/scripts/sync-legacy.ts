/**
 * Syncs a xwing-data2-legacy release into the live database. Without --apply it only reports, over
 * a read-only connection.
 *
 * Usage:
 *   bun run sync:legacy --ref 3.13.0 --out report.md             report what would change
 *   bun run sync:legacy --ref 3.13.0 --out report.md --apply     apply it
 *
 * Fields are compared against the release in GameDataVersions.UpstreamVersion, and only fields that
 * upstream changed since then are touched. Hand edits are kept and listed. Before anything has been
 * synced there is no previous release to compare against, so the first apply needs --baseline.
 *
 * New rows, removed rows and renames are only reported, never applied.
 *
 * Requires DATABASE_URL (bun loads it from .env.local when run from apps/web).
 */

import fs from 'fs';
import postgres from 'postgres';
import {
  FieldChange,
  Raw,
  UnknownFieldError,
  buildUpdate,
  diffCondition,
  diffPilot,
  diffShip,
  diffUpgrade,
  isSame,
  normalizeCondition,
  normalizePilot,
  normalizeShip,
  normalizeUpgrade,
  readField,
  reconcile,
} from './sync/normalize';

const REPO = 'https://raw.githubusercontent.com/SogeMoge/xwing-data2-legacy';
const RULESET = 'legacy';

/** Upstream ships whose xws differs from the row we already have. */
const SHIP_ALIASES: Record<string, string> = {
  'firstorder/upsilonclasscommandshuttle': 'upsilonclassshuttle',
};

/** Upstream pilots whose xws differs from the row we keep, because saved lists use our ID. */
const PILOT_ALIASES: Record<string, string> = {
  'galacticempire/whisper-pnp-lsl': 'galacticempire/whisper-pnp-ls',
};

/** Upstream values we have decided not to take, by `<entity> <id> <field>`. */
const SKIPPED_FIELDS: Record<string, string> = {
  'pilot rebelalliance/leebo-swz103-rebelalliance ShipActions':
    'upstream drops the linked Rotate Arc on this card only, every sibling card keeps it',
};

const JSON_COLUMNS = new Set([
  'Dial',
  'DialCodes',
  'Stats',
  'Actions',
  'Slots',
  'Conditions',
  'ShipActions',
  'ShipAbility',
  'Force',
  'Charges',
  'Keywords',
  'StandardLoadout',
  'PilotStats',
  'Cost',
  'Sides',
  'Restrictions',
]);

type Entity = 'ship' | 'pilot' | 'upgrade' | 'condition';
type UpstreamRow = { entity: Entity; id: string; next: Raw; cost?: unknown };
type Missing = { entity: string; id: string; cost?: unknown };
type RowPlan = {
  entity: Entity;
  id: string;
  live: Raw;
  apply: FieldChange[];
  keptLocal: FieldChange[];
  conflicts: FieldChange[];
  cleared: FieldChange[];
  skipped: FieldChange[];
};

const TABLES: Record<Entity, string> = {
  ship: 'Ships',
  pilot: 'Pilots',
  upgrade: 'GameUpgrades',
  condition: 'GameConditions',
};

const DIFFS: Record<Entity, (live: Raw, next: Raw) => FieldChange[]> = {
  ship: diffShip,
  pilot: diffPilot,
  upgrade: diffUpgrade,
  condition: diffCondition,
};

const factionKey = (faction: string) => faction.toLowerCase().replace(/[^a-z]/g, '');

const argument = (name: string) => {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
};

const fetchJson = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} fetching ${url}`);
  return response.json() as Promise<any>;
};

const display = (value: unknown) => (typeof value === 'string' ? value : (JSON.stringify(value) ?? 'none'));

/** Downloads and normalizes a release. Unknown fields are collected so that one doesn't hide the rest. */
const loadRelease = async (ref: string) => {
  const base = `${REPO}/${ref}/`;
  const manifest = await fetchJson(`${base}data/manifest.json`);
  const rows: UpstreamRow[] = [];
  const problems: string[] = [];

  const add = (entity: Entity, id: string, normalize: () => Raw, cost?: unknown) => {
    try {
      rows.push({ entity, id, next: normalize(), cost });
    } catch (error) {
      if (!(error instanceof UnknownFieldError)) throw error;
      problems.push(`${ref}: ${error.message}`);
    }
  };

  for (const { faction, ships } of manifest.pilots) {
    const files: { url: string; ship: Raw }[] = [];
    for (const url of ships) files.push({ url, ship: await fetchJson(base + url) });

    for (const { url, ship } of files) {
      // Upstream files can share an xws within a faction, the file name tells them apart.
      const collides = files.filter(file => file.ship.xws === ship.xws).length > 1;
      const fileKey = url.split('/').pop()!.replace('.json', '').replaceAll('-', '');
      const upstreamXws = collides ? fileKey : ship.xws;
      const shipXws = SHIP_ALIASES[`${faction}/${upstreamXws}`] ?? upstreamXws;

      add('ship', `${faction}/${shipXws}`, () => normalizeShip(ship));
      for (const pilot of ship.pilots) {
        const pilotId = `${faction}/${pilot.xws}`;
        add('pilot', PILOT_ALIASES[pilotId] ?? pilotId, () => normalizePilot(pilot), pilot.cost);
      }
    }
  }

  for (const url of manifest.upgrades) {
    const slot = url.split('/').pop().replace('.json', '').replaceAll('-', '');
    for (const upgrade of await fetchJson(base + url)) {
      add('upgrade', `${slot}/${upgrade.xws}`, () => normalizeUpgrade(upgrade), upgrade.cost);
    }
  }

  // Unlike the other manifest entries, conditions is a single path.
  for (const url of [manifest.conditions].flat()) {
    for (const condition of await fetchJson(base + url)) {
      add('condition', condition.xws, () => normalizeCondition(condition));
    }
  }

  return { version: manifest.version as string, rows, problems };
};

const loadLive = async (sql: postgres.Sql) => {
  const [ships, pilots, upgrades, conditions] = [
    await sql`select * from "Ships" where "Ruleset" = ${RULESET}`,
    await sql`
      select p.*, s."Faction" as "ShipFaction", s."Xws" as "ShipXws"
      from "Pilots" p join "Ships" s on p."ShipId" = s."Id"
      where s."Ruleset" = ${RULESET}`,
    await sql`select * from "GameUpgrades" where "Ruleset" = ${RULESET}`,
    await sql`select * from "GameConditions" where "Ruleset" = ${RULESET}`,
  ];
  const keyed: { entity: Entity; id: string; row: Raw }[] = [
    ...ships.map(row => ({ entity: 'ship' as const, id: `${factionKey(row.Faction)}/${row.Xws}`, row })),
    ...pilots.map(row => ({ entity: 'pilot' as const, id: `${factionKey(row.ShipFaction)}/${row.Xws}`, row })),
    ...upgrades.map(row => ({ entity: 'upgrade' as const, id: `${row.Slot}/${row.Xws}`, row })),
    ...conditions.map(row => ({ entity: 'condition' as const, id: row.Xws as string, row })),
  ];
  return keyed;
};

const buildPlan = (live: Awaited<ReturnType<typeof loadLive>>, target: UpstreamRow[], previous?: UpstreamRow[]) => {
  const key = (row: { entity: string; id: string }) => `${row.entity} ${row.id}`;
  const problems: string[] = [];
  const liveByKey = new Map<string, Raw>();
  for (const row of live) {
    if (liveByKey.has(key(row))) problems.push(`${key(row)}: more than one live row matches`);
    liveByKey.set(key(row), row.row);
  }
  const previousByKey = new Map(previous?.map(row => [key(row), row.next]));

  const plan: RowPlan[] = [];
  const added: Missing[] = [];
  const seen = new Set<string>();

  for (const row of target) {
    const liveRow = liveByKey.get(key(row));
    if (!liveRow) {
      added.push({ entity: row.entity, id: row.id, cost: row.cost });
      continue;
    }
    seen.add(key(row));

    const diff = DIFFS[row.entity];
    const changes = diff(liveRow, row.next);
    if (changes.length === 0) continue;

    let apply = changes;
    let keptLocal: FieldChange[] = [];
    let conflicts: FieldChange[] = [];
    if (previous) {
      const previousRow = previousByKey.get(key(row));
      if (previousRow) {
        ({ apply, keptLocal, conflicts } = reconcile(changes, diff(previousRow, row.next), diff(liveRow, previousRow)));
      } else {
        // We have a row that wasn't in the previous release, so we can't tell who changed what.
        apply = [];
        conflicts = changes;
      }
    }

    const isSkipped = (change: FieldChange) => SKIPPED_FIELDS[`${key(row)} ${change.field}`] !== undefined;
    plan.push({
      entity: row.entity,
      id: row.id,
      live: liveRow,
      apply: apply.filter(change => change.kind !== 'cleared' && !isSkipped(change)),
      keptLocal,
      conflicts,
      cleared: apply.filter(change => change.kind === 'cleared' && !isSkipped(change)),
      skipped: apply.filter(isSkipped),
    });
  }

  const removed: Missing[] = live.filter(row => !seen.has(key(row))).map(row => ({ entity: row.entity, id: row.id }));
  return { plan, added, removed, problems };
};

const renderFields = (plan: RowPlan[], pick: (row: RowPlan) => FieldChange[]) =>
  plan
    .flatMap(row =>
      pick(row).map(
        change =>
          `- **${row.entity} ${row.id}** \`${change.field}\` (last edited ${
            row.live.UpdatedAt?.toISOString().slice(0, 10) ?? 'unknown'
          })\n  - live: ${display(change.live)}\n  - upstream: ${display(change.next)}`,
      ),
    )
    .join('\n') || 'None';

const applyPlan = async (sql: postgres.Sql, plan: RowPlan[], ref: string) => {
  const now = new Date().toISOString();
  const toApply = plan.filter(row => row.apply.length > 0);

  await sql.begin(async tx => {
    for (const row of toApply) {
      const table = TABLES[row.entity];
      // Stop if anything moved since the plan was made, the whole sync rolls back.
      const [current] = await tx`select * from ${tx(table)} where "Id" = ${row.live.Id} for update`;
      for (const change of row.apply) {
        if (!current || !isSame(readField(current, change.field), change.live)) {
          throw new Error(`${row.entity} ${row.id} ${change.field} changed while syncing, nothing was applied`);
        }
      }

      const update: Raw = {};
      for (const [column, value] of Object.entries(buildUpdate(current, row.apply))) {
        update[column] = JSON_COLUMNS.has(column) && value !== null ? tx.json(value) : value;
      }
      // Conditions have no UpdatedAt column.
      if (row.entity !== 'condition') update.UpdatedAt = now;

      const result = await tx`update ${tx(table)} set ${tx(update)} where "Id" = ${row.live.Id}`;
      if (result.count !== 1) throw new Error(`${row.entity} ${row.id}: updated ${result.count} rows`);
    }

    const result = await tx`
      update "GameDataVersions" set "UpstreamVersion" = ${ref} where "Ruleset" = ${RULESET}`;
    if (result.count !== 1) throw new Error('No GameDataVersions row to record the synced release on');
  });
};

const main = async () => {
  const ref = argument('ref');
  const out = argument('out');
  const shouldApply = process.argv.includes('--apply');
  const baseline = process.argv.includes('--baseline');
  if (!ref || !out) throw new Error('Usage: bun run sync:legacy --ref <release tag> --out <report.md> [--apply] [--baseline]');
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');

  const sql = postgres(process.env.DATABASE_URL, {
    max: 1,
    ...(shouldApply ? {} : { connection: { default_transaction_read_only: true } }),
  });
  if (!shouldApply) {
    const [{ transaction_read_only }] = await sql`show transaction_read_only`;
    if (transaction_read_only !== 'on') throw new Error('Connection is not read-only, aborting');
  }

  const [versionRow] = await sql`select "UpstreamVersion" from "GameDataVersions" where "Ruleset" = ${RULESET}`;
  const syncedVersion: string | null = versionRow?.UpstreamVersion ?? null;
  if (shouldApply && !syncedVersion && !baseline) {
    throw new Error('Nothing has been synced yet, review the report and pass --baseline to apply without a previous release');
  }
  if (baseline && syncedVersion) {
    throw new Error(`Already synced from ${syncedVersion}, --baseline would overwrite hand edits`);
  }

  const target = await loadRelease(ref);
  const previous = syncedVersion ? await loadRelease(syncedVersion) : undefined;
  const live = await loadLive(sql);
  const { plan, added, removed, problems: matchProblems } = buildPlan(live, target.rows, previous?.rows);
  const problems = [...target.problems, ...(previous?.problems ?? []), ...matchProblems];

  const countRows = (() => {
    const counts = new Map<string, { real: number; cosmetic: number }>();
    for (const row of plan) {
      for (const change of row.apply) {
        const field = `${row.entity} ${change.field.replace(/\[\d+\]/, '[]')}`;
        const count = counts.get(field) ?? { real: 0, cosmetic: 0 };
        if (change.kind !== 'cleared') count[change.kind]++;
        counts.set(field, count);
      }
    }
    return [...counts.entries()]
      .sort(([a], [b]) => (a < b ? -1 : 1))
      .map(([field, count]) => `| ${field} | ${count.real} | ${count.cosmetic} |`)
      .join('\n');
  })();

  const list = (items: Missing[]) =>
    items.map(item => `- ${item.entity} ${item.id}${item.cost !== undefined ? ` (cost ${display(item.cost)})` : ''}`).join('\n') ||
    'None';
  const renames = added.flatMap(a =>
    removed
      .filter(r => r.entity === a.entity && (a.id.startsWith(r.id) || r.id.startsWith(a.id)))
      .map(r => `- ${r.entity} ${r.id} -> ${a.id}`),
  );

  const report = [
    `# Legacy sync: ${ref} (manifest ${target.version}), ${shouldApply ? 'applied' : 'dry run'}`,
    `Compared against ${syncedVersion ? `release ${syncedVersion}` : 'nothing, this is the baseline sync'}. Existing images are kept, upstream images only fill empty values.`,
    `## To apply\n\n| Field | Real | Cosmetic |\n|---|---|---|\n${countRows || '| None | | |'}`,
    `## Problems\n\n${problems.map(problem => `- ${problem}`).join('\n') || 'None'}`,
    `## New upstream, not in the live database (not applied)\n\n${list(added)}`,
    `## In the live database, not upstream (never deleted)\n\n${list(removed)}`,
    `## Possible renames (not applied)\n\n${renames.join('\n') || 'None'}`,
    `## Conflicts: changed upstream and edited here (not applied)\n\n${renderFields(plan, row => row.conflicts)}`,
    `## Hand edits kept: upstream didn't change these\n\n${renderFields(plan, row => row.keptLocal)}`,
    `## Skipped on purpose\n\n${renderFields(plan, row => row.skipped)}`,
    `## Cleared: upstream has no value (not applied)\n\n${renderFields(plan, row => row.cleared)}`,
    `## Changes to apply\n\n${renderFields(plan, row => row.apply)}`,
  ].join('\n\n');
  fs.writeFileSync(out, `${report}\n`);
  console.log(`Report written to ${out}`);

  const fields = (pick: (row: RowPlan) => FieldChange[]) => plan.flatMap(pick).length;
  console.log(
    `${plan.filter(row => row.apply.length > 0).length} rows, ${fields(row => row.apply)} fields to apply. ` +
      `${fields(row => row.conflicts)} conflicts, ${fields(row => row.keptLocal)} hand edits kept, ` +
      `${fields(row => row.skipped)} skipped, ${fields(row => row.cleared)} cleared. ` +
      `${added.length} new, ${removed.length} not upstream, ${problems.length} problems.`,
  );

  // Unknown fields mean the plan is incomplete, so it must not be applied.
  if (problems.length > 0) {
    await sql.end();
    process.exit(1);
  }

  if (shouldApply) {
    const backup = `${out}.backup.json`;
    fs.writeFileSync(
      backup,
      JSON.stringify(
        plan.filter(row => row.apply.length > 0).map(({ entity, id, live: row, apply }) => ({ entity, id, rowId: row.Id, apply })),
      ),
    );
    await applyPlan(sql, plan, ref);
    console.log(`Applied ${ref}, previous values are in ${backup}`);

    // Also runs when there was nothing to apply, which repairs a crash right after the commit.
    const { computeAndUpdateVersion } = await import('../helpers/versionHash');
    console.log(`${RULESET} version hash: ${await computeAndUpdateVersion(RULESET)}`);
  }

  await sql.end();
  process.exit(0);
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
