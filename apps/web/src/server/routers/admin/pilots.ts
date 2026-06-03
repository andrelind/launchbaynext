import { and, eq, ilike } from 'drizzle-orm';
import { v4 } from 'uuid';
import { z } from 'zod';
import { db } from '../../db';
import { Pilots, Ships } from '../../drizzle/schema';
import { ensureManifestEntry } from '../../helpers/manifestEntry';
import { computeAndUpdateVersion } from '../../helpers/versionHash';
import { adminProcedure, router } from '../../trpc';

export const adminPilotsRouter = router({
  list: adminProcedure
    .input(
      z.object({
        ruleset: z.enum(['xwa', 'legacy']),
        shipId: z.string().uuid().optional(),
        faction: z.string().optional(),
        search: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      if (input.shipId) {
        const conditions = [eq(Pilots.ShipId, input.shipId)];
        if (input.search) {
          conditions.push(ilike(Pilots.Name, `%${input.search}%`));
        }
        return db.query.Pilots.findMany({
          where: and(...conditions),
          with: { Ship: true },
          orderBy: (p, { asc }) => [asc(p.Initiative), asc(p.Name)],
        });
      }

      // Join through ships for faction/ruleset filtering
      const shipConditions = [eq(Ships.Ruleset, input.ruleset)];
      if (input.faction) {
        shipConditions.push(eq(Ships.Faction, input.faction));
      }

      const ships = await db.query.Ships.findMany({
        where: and(...shipConditions),
        columns: { Id: true },
      });

      const shipIds = ships.map(s => s.Id);
      if (shipIds.length === 0) return [];

      const results = [];
      for (const shipId of shipIds) {
        const pilots = await db.query.Pilots.findMany({
          where: input.search
            ? and(eq(Pilots.ShipId, shipId), ilike(Pilots.Name, `%${input.search}%`))
            : eq(Pilots.ShipId, shipId),
          with: { Ship: true },
        });
        results.push(...pilots);
      }
      return results.sort((a, b) => a.Initiative - b.Initiative || a.Name.localeCompare(b.Name));
    }),

  get: adminProcedure.input(z.object({ id: z.string().uuid() })).query(async ({ input }) => {
    return db.query.Pilots.findFirst({
      where: (p, { eq }) => eq(p.Id, input.id),
      with: { Ship: true },
    });
  }),

  create: adminProcedure
    .input(
      z.object({
        shipId: z.string().uuid(),
        xws: z.string(),
        name: z.string(),
        caption: z.string().optional(),
        cost: z.number(),
        loadout: z.number().optional(),
        initiative: z.number(),
        limited: z.number(),
        ability: z.string().optional(),
        text: z.string().optional(),
        slots: z.any().optional(),
        conditions: z.any().optional(),
        shipActions: z.any().optional(),
        shipAbility: z.any().optional(),
        force: z.any().optional(),
        charges: z.any().optional(),
        standard: z.boolean(),
        extended: z.boolean().default(true),
        epic: z.boolean(),
        wildspace: z.boolean().default(false),
        keywords: z.any().optional(),
        image: z.string().optional(),
        artwork: z.string().optional(),
        standardLoadout: z.any().optional(),
        pilotStats: z.any().optional(),
        ffg: z.number().optional(),
        engagement: z.number().optional(),
        restricted: z.number().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const id = v4();
      const now = new Date().toISOString();
      await db.insert(Pilots).values({
        Id: id,
        ShipId: input.shipId,
        Xws: input.xws,
        Name: input.name,
        Caption: input.caption ?? null,
        Cost: input.cost,
        Loadout: input.loadout ?? null,
        Initiative: input.initiative,
        Limited: input.limited,
        Ability: input.ability ?? null,
        Text: input.text ?? null,
        Slots: input.slots ?? null,
        Conditions: input.conditions ?? null,
        ShipActions: input.shipActions ?? null,
        ShipAbility: input.shipAbility ?? null,
        Force: input.force ?? null,
        Charges: input.charges ?? null,
        Standard: input.standard,
        Extended: input.extended,
        Epic: input.epic,
        Wildspace: input.wildspace,
        Keywords: input.keywords ?? null,
        Image: input.image ?? null,
        Artwork: input.artwork ?? null,
        StandardLoadout: input.standardLoadout ?? null,
        PilotStats: input.pilotStats ?? null,
        Ffg: input.ffg ?? null,
        Engagement: input.engagement ?? null,
        Restricted: input.restricted ?? null,
        UpdatedAt: now,
      });

      // Get ship ruleset to bump version and ensure manifest entry
      const ship = await db.query.Ships.findFirst({ where: (s, { eq }) => eq(s.Id, input.shipId) });
      if (ship) {
        await ensureManifestEntry(ship.Ruleset, 'pilot', input.xws);
        await computeAndUpdateVersion(ship.Ruleset);
      }
      return { id };
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        xws: z.string().optional(),
        name: z.string().optional(),
        caption: z.string().nullable().optional(),
        cost: z.number().optional(),
        loadout: z.number().nullable().optional(),
        initiative: z.number().optional(),
        limited: z.number().optional(),
        ability: z.string().nullable().optional(),
        text: z.string().nullable().optional(),
        slots: z.any().optional(),
        conditions: z.any().optional(),
        shipActions: z.any().optional(),
        shipAbility: z.any().optional(),
        force: z.any().optional(),
        charges: z.any().optional(),
        standard: z.boolean().optional(),
        extended: z.boolean().optional(),
        epic: z.boolean().optional(),
        wildspace: z.boolean().optional(),
        keywords: z.any().optional(),
        image: z.string().nullable().optional(),
        artwork: z.string().nullable().optional(),
        standardLoadout: z.any().optional(),
        pilotStats: z.any().optional(),
        ffg: z.number().nullable().optional(),
        engagement: z.number().nullable().optional(),
        restricted: z.number().nullable().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      const now = new Date().toISOString();

      const updateData: Record<string, any> = { UpdatedAt: now };
      if (data.xws !== undefined) updateData.Xws = data.xws;
      if (data.name !== undefined) updateData.Name = data.name;
      if (data.caption !== undefined) updateData.Caption = data.caption;
      if (data.cost !== undefined) updateData.Cost = data.cost;
      if (data.loadout !== undefined) updateData.Loadout = data.loadout;
      if (data.initiative !== undefined) updateData.Initiative = data.initiative;
      if (data.limited !== undefined) updateData.Limited = data.limited;
      if (data.ability !== undefined) updateData.Ability = data.ability;
      if (data.text !== undefined) updateData.Text = data.text;
      if (data.slots !== undefined) updateData.Slots = data.slots;
      if (data.conditions !== undefined) updateData.Conditions = data.conditions;
      if (data.shipActions !== undefined) updateData.ShipActions = data.shipActions;
      if (data.shipAbility !== undefined) updateData.ShipAbility = data.shipAbility;
      if (data.force !== undefined) updateData.Force = data.force;
      if (data.charges !== undefined) updateData.Charges = data.charges;
      if (data.standard !== undefined) updateData.Standard = data.standard;
      if (data.extended !== undefined) updateData.Extended = data.extended;
      if (data.epic !== undefined) updateData.Epic = data.epic;
      if (data.wildspace !== undefined) updateData.Wildspace = data.wildspace;
      if (data.keywords !== undefined) updateData.Keywords = data.keywords;
      if (data.image !== undefined) updateData.Image = data.image;
      if (data.artwork !== undefined) updateData.Artwork = data.artwork;
      if (data.standardLoadout !== undefined) updateData.StandardLoadout = data.standardLoadout;
      if (data.pilotStats !== undefined) updateData.PilotStats = data.pilotStats;
      if (data.ffg !== undefined) updateData.Ffg = data.ffg;
      if (data.engagement !== undefined) updateData.Engagement = data.engagement;
      if (data.restricted !== undefined) updateData.Restricted = data.restricted;

      await db.update(Pilots).set(updateData).where(eq(Pilots.Id, id));

      const pilot = await db.query.Pilots.findFirst({
        where: (p, { eq }) => eq(p.Id, id),
        with: { Ship: true },
      });
      if (pilot) {
        await computeAndUpdateVersion(pilot.Ship.Ruleset);
      }
      return { id };
    }),

  delete: adminProcedure.input(z.object({ id: z.string().uuid() })).mutation(async ({ input }) => {
    const pilot = await db.query.Pilots.findFirst({
      where: (p, { eq }) => eq(p.Id, input.id),
      with: { Ship: true },
    });
    if (!pilot) return { success: false };

    await db.delete(Pilots).where(eq(Pilots.Id, input.id));
    await computeAndUpdateVersion(pilot.Ship.Ruleset);
    return { success: true };
  }),
});
