import { eq } from 'drizzle-orm';
import { Md5 } from 'ts-md5';
import { db } from '../db';
import { GameConditions, GameDataVersions, GameUpgrades, Pilots, Ships } from '../drizzle/schema';

export async function computeAndUpdateVersion(ruleset: string): Promise<string> {
  // Fetch all game data for the ruleset and hash it
  const [ships, pilots, upgrades, conditions] = await Promise.all([
    db.select().from(Ships).where(eq(Ships.Ruleset, ruleset)),
    db.select().from(Pilots).innerJoin(Ships, eq(Pilots.ShipId, Ships.Id)).where(eq(Ships.Ruleset, ruleset)),
    db.select().from(GameUpgrades).where(eq(GameUpgrades.Ruleset, ruleset)),
    db.select().from(GameConditions).where(eq(GameConditions.Ruleset, ruleset)),
  ]);

  const hash = Md5.hashStr(JSON.stringify({ ships, pilots, upgrades, conditions }));

  await db
    .insert(GameDataVersions)
    .values({
      Ruleset: ruleset,
      Version: hash,
      UpdatedAt: new Date().toISOString(),
    })
    .onConflictDoUpdate({
      target: GameDataVersions.Ruleset,
      set: {
        Version: hash,
        UpdatedAt: new Date().toISOString(),
      },
    });

  return hash;
}
