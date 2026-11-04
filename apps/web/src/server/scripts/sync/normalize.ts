/**
 * Pure conversion from xwing-data2-legacy JSON to the shape of our database rows, plus field-level
 * diffing against live rows. No I/O here: the live database is the source of truth, so anything
 * that reads or writes it belongs in the calling script.
 */

export type Raw = Record<string, any>;

export class UnknownFieldError extends Error {}

const assertKnown = (raw: Raw, known: readonly string[], context: string) => {
  const unknown = Object.keys(raw).filter(key => !known.includes(key));
  if (unknown.length > 0) {
    throw new UnknownFieldError(`${context}: unknown field(s) ${unknown.join(', ')}`);
  }
};

// `alt` (alternate art), `name` on upgrades and `faction`/`pilots` on ships have no column of their own.
const SHIP_KEYS = ['name', 'xws', 'size', 'dial', 'dialCodes', 'faction', 'stats', 'actions', 'icon', 'pilots'];
const PILOT_KEYS = [
  'name',
  'initiative',
  'limited',
  'cost',
  'xws',
  'text',
  'image',
  'slots',
  'artwork',
  'standard',
  'wildspace',
  'extended',
  'keywords',
  'epic',
  'alt',
  'caption',
  'ability',
  'shipAbility',
  'charges',
  'shipActions',
  'standardLoadout',
  'shipStats',
  'force',
  'conditions',
  'engagement',
  'loadout',
  'restricted',
];
const UPGRADE_KEYS = [
  'name',
  'limited',
  'xws',
  'sides',
  'cost',
  'restrictions',
  'standard',
  'wildspace',
  'extended',
  'epic',
  'standardLoadoutOnly',
  'keywords',
  'restricted',
];
const SIDE_KEYS = [
  'title',
  'type',
  'ability',
  'slots',
  'image',
  'artwork',
  'charges',
  'grants',
  'attack',
  'text',
  'actions',
  'shipAbility',
  'conditions',
  'force',
  'alt',
  'device',
  'restrictions',
];
const RESTRICTION_KEYS = [
  'factions',
  'sizes',
  'action',
  'keywords',
  'ships',
  'standardized',
  'non-limited',
  'shipAbility',
  'names',
  'force_side',
  'arcs',
  'equipped',
  'agility',
  'solitary',
  'initiative',
];
const GRANT_TYPES = ['action', 'slot', 'stat', 'arc', 'force'];
const CONDITION_KEYS = ['name', 'limited', 'ability', 'xws', 'image'];

/** Converts upstream's bracketed maneuvers, e.g. `[0 [Stationary]]` becomes `(0 [Stationary])`. */
export const normalizeText = (text?: string | null): string | null =>
  text == null
    ? null
    : text
        .replaceAll('[[', '([')
        .replaceAll(']]', '])')
        .replace(/\[(\d)/g, '($1');

const normalizeSlots = (slots?: string[]) => slots?.map(slot => (slot === 'Payload' ? 'Device' : slot)) ?? null;

export const normalizeCost = (cost?: Raw | null): Raw | null => {
  if (cost == null) return null;
  return cost.value !== undefined ? { ...cost, value: Number(cost.value) } : cost;
};

const FACTION_TYPOS: Record<string, string> = { firstrorder: 'firstorder' };

export const normalizeRestriction = (raw: Raw, context: string): Raw => {
  assertKnown(raw, RESTRICTION_KEYS, `${context} restriction`);
  const { sizes, ships, names, force_side, agility, action, factions, standardized: _standardized, ...rest } = raw;
  const res: Raw = { ...rest };

  if (sizes) res.baseSizes = sizes;
  if (ships) res.chassis = ships;
  if (names) res.character = names;
  if (force_side) res.sides = force_side;
  if (agility) res.stat = { type: 'agility', value: agility[0] };
  if (factions) res.factions = factions.map((faction: string) => FACTION_TYPOS[faction] ?? faction);
  if (action) {
    const first = Array.isArray(action) ? action[0] : action;
    if (first) res.action = { ...first, type: first.type === 'Target Lock' ? 'Lock' : first.type };
  }

  // The Legacy repo uses { max: 3 }, the XWA repo uses ['3 OR LOWER'].
  if (Array.isArray(rest.initiative)) {
    delete res.initiative;
    if (rest.initiative[0]?.includes('OR LOWER')) res.initiative = { max: parseInt(rest.initiative[0], 10) };
  }

  return res;
};

export const normalizeRestrictions = (raw: Raw[] | undefined, context: string): Raw[] | null => {
  const list = (raw ?? [])
    .filter(restriction => restriction.standardized === undefined)
    .map(restriction => normalizeRestriction(restriction, context));
  return list.length > 0 ? list : null;
};

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const normalizeGrant = (raw: Raw, context: string): Raw => {
  if (!GRANT_TYPES.includes(raw.type)) {
    throw new UnknownFieldError(`${context}: unknown grant type ${raw.type}`);
  }
  const value = raw.amount || 1;
  switch (raw.type) {
    case 'action':
      return { action: raw.value, value: 1 };
    case 'slot':
      return { slot: capitalize(raw.value), value };
    case 'stat':
      return raw.arc ? { stat: raw.value, value, arc: raw.arc } : { stat: raw.value, value };
    case 'arc':
      return { arc: raw.value, value: 1 };
    default: {
      const side = Array.isArray(raw.value) ? raw.value[0] : undefined;
      return side ? { side, value } : { value };
    }
  }
};

export const normalizeSide = (raw: Raw, context: string): Raw => {
  assertKnown(raw, SIDE_KEYS, `${context} side`);
  const side: Raw = { ...raw, ability: normalizeText(raw.ability), slots: normalizeSlots(raw.slots) };
  if (raw.grants) side.grants = raw.grants.map((grant: Raw) => normalizeGrant(grant, context));
  if (raw.restrictions) side.restrictions = normalizeRestrictions(raw.restrictions, context);
  return side;
};

export const normalizeShip = (raw: Raw): Raw => {
  assertKnown(raw, SHIP_KEYS, `ship ${raw.xws}`);
  return {
    Name: raw.name,
    Size: raw.size,
    Dial: raw.dial ?? null,
    DialCodes: raw.dialCodes ?? null,
    Stats: raw.stats,
    Actions: raw.actions,
    Icon: raw.icon ?? null,
  };
};

const isExtended = (raw: Raw) => (raw.wildspace !== undefined ? raw.wildspace : raw.extended !== false);

export const normalizePilot = (raw: Raw): Raw => {
  assertKnown(raw, PILOT_KEYS, `pilot ${raw.xws}`);
  return {
    Name: raw.name,
    Caption: raw.caption ?? null,
    Cost: raw.cost,
    Loadout: raw.loadout ?? null,
    Initiative: raw.initiative,
    Limited: raw.limited,
    Ability: normalizeText(raw.ability),
    Text: normalizeText(raw.text),
    Slots: normalizeSlots(raw.slots),
    Conditions: raw.conditions ?? null,
    ShipActions: raw.shipActions ?? null,
    ShipAbility: raw.shipAbility ?? null,
    Force: raw.force ?? null,
    Charges: raw.charges ?? null,
    Standard: raw.standard !== false,
    Extended: isExtended(raw),
    Epic: raw.epic !== false,
    Keywords: raw.keywords ?? null,
    Image: raw.image ?? null,
    Artwork: raw.artwork ?? null,
    StandardLoadout: raw.standardLoadout ?? null,
    PilotStats: raw.shipStats ?? null,
    Engagement: raw.engagement ?? null,
    Restricted: raw.restricted > 0 ? raw.restricted : null,
  };
};

export const normalizeUpgrade = (raw: Raw): Raw => {
  const context = `upgrade ${raw.xws}`;
  assertKnown(raw, UPGRADE_KEYS, context);
  return {
    Limited: raw.limited,
    Cost: normalizeCost(raw.cost),
    Sides: raw.sides.map((side: Raw) => normalizeSide(side, context)),
    Restrictions: normalizeRestrictions(raw.restrictions, context),
    Standard: raw.standard !== false,
    Extended: isExtended(raw),
    Epic: raw.epic !== false,
    Standarized: (raw.restrictions ?? []).some((restriction: Raw) => restriction.standardized !== undefined),
    Keywords: raw.keywords ?? null,
    StandardLoadoutOnly: !!raw.standardLoadoutOnly,
    Restricted: raw.restricted > 0 ? raw.restricted : null,
  };
};

export const normalizeCondition = (raw: Raw): Raw => {
  assertKnown(raw, CONDITION_KEYS, `condition ${raw.xws}`);
  return { Name: raw.name, Ability: raw.ability, Image: raw.image ?? null };
};

/** Sorts keys and drops null and empty values, so absent, null and [] compare equal. */
const canon = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.length > 0 ? value.map(canon) : null;
  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([key, item]) => [key, canon(item)] as const)
      .filter(([, item]) => item != null)
      .sort(([a], [b]) => (a < b ? -1 : 1));
    return entries.length > 0 ? Object.fromEntries(entries) : null;
  }
  return value ?? null;
};

const serialize = (value: unknown) => JSON.stringify(canon(value));

export const isSame = (a: unknown, b: unknown) => serialize(a) === serialize(b);

/**
 * real:     upstream has a different value
 * cosmetic: only brackets or whitespace differ
 * cleared:  upstream has no value but we do, which may be a value added by hand
 */
export type ChangeKind = 'real' | 'cosmetic' | 'cleared';

export type FieldChange = { field: string; live: unknown; next: unknown; kind: ChangeKind };

const withoutFormatting = (value: unknown) => serialize(value).replace(/[[\]()\s]/g, '');

export const classifyChange = (live: unknown, next: unknown): ChangeKind | null => {
  if (isSame(live, next)) return null;
  if (canon(next) == null) return 'cleared';
  return withoutFormatting(live) === withoutFormatting(next) ? 'cosmetic' : 'real';
};

/** Upstream doesn't say which side of the Force a card uses, so a value we already have is kept. */
const inheritForceSide = (next: Raw | null | undefined, live: Raw | null | undefined) =>
  next && !next.side && live?.side ? { ...next, side: live.side } : next;

/** Existing images stay as they are, upstream's are only used to fill gaps. */
const keepExisting = (live: unknown, next: unknown) => (live != null ? live : next);

const diffObject = (live: Raw, next: Raw, preserve: readonly string[], prefix = ''): FieldChange[] => {
  const changes: FieldChange[] = [];
  for (const field of new Set([...Object.keys(live), ...Object.keys(next)])) {
    const nextValue = preserve.includes(field) ? keepExisting(live[field], next[field]) : next[field];
    const kind = classifyChange(live[field], nextValue);
    if (kind) changes.push({ field: prefix + field, live: live[field], next: nextValue, kind });
  }
  return changes;
};

const pick = (row: Raw, fields: string[]) => Object.fromEntries(fields.map(field => [field, row[field]]));

const IMAGE_FIELDS = ['Image', 'Artwork', 'Icon'];

export const diffShip = (live: Raw, next: Raw) => diffObject(pick(live, Object.keys(next)), next, IMAGE_FIELDS);

export const diffCondition = (live: Raw, next: Raw) => diffObject(pick(live, Object.keys(next)), next, IMAGE_FIELDS);

export const diffPilot = (live: Raw, next: Raw) =>
  diffObject(
    pick(live, Object.keys(next)),
    { ...next, Force: inheritForceSide(next.Force, live.Force) },
    IMAGE_FIELDS,
  );

const SIDE_IMAGE_FIELDS = ['image', 'artwork'];

const diffSide = (live: Raw, next: Raw, index: number): FieldChange[] => {
  const device =
    next.device && live.device ? { ...next.device, image: keepExisting(live.device.image, next.device.image) } : next.device;
  return diffObject(
    live,
    { ...next, device, force: inheritForceSide(next.force, live.force) },
    SIDE_IMAGE_FIELDS,
    `Sides[${index}].`,
  );
};

export const diffUpgrade = (live: Raw, next: Raw): FieldChange[] => {
  const { Sides: nextSides, ...nextRest } = next;
  const liveSides: Raw[] = live.Sides ?? [];
  const changes = diffObject(pick(live, Object.keys(nextRest)), nextRest, []);
  for (let i = 0; i < Math.max(liveSides.length, nextSides.length); i++) {
    if (!liveSides[i] || !nextSides[i]) {
      changes.push({ field: `Sides[${i}]`, live: liveSides[i], next: nextSides[i], kind: nextSides[i] ? 'real' : 'cleared' });
    } else {
      changes.push(...diffSide(liveSides[i], nextSides[i], i));
    }
  }
  return changes;
};

export type Reconciled = {
  /** Upstream changed the field and live still has the previous release's value. */
  apply: FieldChange[];
  /** Upstream didn't change the field, so live differs because someone edited it. */
  keptLocal: FieldChange[];
  /** Upstream changed the field and live was edited too. */
  conflicts: FieldChange[];
};

/**
 * Three-way comparison against the release we last synced from, so that hand edits survive a sync.
 * `upstreamChanges` is the diff from the previous release to the new one, `localChanges` the diff
 * from the previous release to live.
 */
export const reconcile = (
  changes: FieldChange[],
  upstreamChanges: FieldChange[],
  localChanges: FieldChange[],
): Reconciled => {
  const inUpstream = new Set(upstreamChanges.map(change => change.field));
  const inLocal = new Set(localChanges.map(change => change.field));
  const result: Reconciled = { apply: [], keptLocal: [], conflicts: [] };
  for (const change of changes) {
    if (!inUpstream.has(change.field)) result.keptLocal.push(change);
    else if (inLocal.has(change.field)) result.conflicts.push(change);
    else result.apply.push(change);
  }
  return result;
};

const SIDE_FIELD = /^Sides\[(\d+)\](?:\.(.+))?$/;

/** Reads the value a change refers to, including fields inside an upgrade side. */
export const readField = (row: Raw, field: string): unknown => {
  const match = field.match(SIDE_FIELD);
  if (!match) return row[field];
  const side = row.Sides?.[Number(match[1])];
  return match[2] ? side?.[match[2]] : side;
};

/** The column values that apply the changes to a row. Sides are rewritten as a whole, untouched values are kept. */
export const buildUpdate = (row: Raw, changes: FieldChange[]): Raw => {
  const update: Raw = {};
  for (const change of changes) {
    const match = change.field.match(SIDE_FIELD);
    if (!match) {
      update[change.field] = change.next ?? null;
      continue;
    }
    update.Sides ??= structuredClone(row.Sides ?? []);
    const index = Number(match[1]);
    if (!match[2]) {
      update.Sides[index] = change.next;
    } else if (change.next == null) {
      delete update.Sides[index][match[2]];
    } else {
      update.Sides[index][match[2]] = change.next;
    }
  }
  return update;
};
