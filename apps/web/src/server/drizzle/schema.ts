import { boolean, integer, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

export const UserLoginCodes = pgTable('UserLoginCodes', {
  Id: uuid('Id').primaryKey().notNull(),
  UserId: uuid('UserId')
    .notNull()
    .references(() => Users.Id),
  Code: text('Code').notNull(),
  CreatedAt: timestamp('CreatedAt', { mode: 'string' }).notNull(),
  Active: boolean('Active').notNull(),
});

export const Users = pgTable('Users', {
  Id: uuid('Id').primaryKey().notNull(),
  Name: text('Name').notNull(),
  Email: text('Email'),
  Provider: text('Provider'),
  ProviderId: text('ProviderId'),
  PasswordHash: text('PasswordHash'),
  Salt: text('Salt'),
  Username: text('Username'),
  IsAdmin: boolean('IsAdmin').notNull().default(false),
});

// ─── Game Data Tables ───────────────────────────────────────────────────────

export const GameDataVersions = pgTable('GameDataVersions', {
  Ruleset: text('Ruleset').primaryKey().notNull(),
  Version: text('Version').notNull(),
  UpdatedAt: timestamp('UpdatedAt', { mode: 'string' }).notNull(),
});

export const Ships = pgTable(
  'Ships',
  {
    Id: uuid('Id').primaryKey().notNull(),
    Ruleset: text('Ruleset').notNull(),
    Faction: text('Faction').notNull(),
    Xws: text('Xws').notNull(),
    Name: text('Name').notNull(),
    Size: text('Size').notNull(),
    Dial: jsonb('Dial').notNull(), // string[]
    DialCodes: jsonb('DialCodes'), // string[] | null
    Stats: jsonb('Stats').notNull(), // Stat[]
    Actions: jsonb('Actions').notNull(), // Action[]
    Ability: jsonb('Ability'), // { name, text, slotOptions? } | null
    Ffg: integer('Ffg'),
    Icon: text('Icon'),
    UpdatedAt: timestamp('UpdatedAt', { mode: 'string' }).notNull(),
  },
  table => ({
    uniqueRulesetFactionXws: uniqueIndex('ships_ruleset_faction_xws').on(table.Ruleset, table.Faction, table.Xws),
  }),
);

export const Pilots = pgTable(
  'Pilots',
  {
    Id: uuid('Id').primaryKey().notNull(),
    ShipId: uuid('ShipId')
      .notNull()
      .references(() => Ships.Id, { onDelete: 'cascade' }),
    Xws: text('Xws').notNull(),
    Name: text('Name').notNull(),
    Caption: text('Caption'),
    Cost: integer('Cost').notNull(),
    Loadout: integer('Loadout'),
    Initiative: integer('Initiative').notNull(),
    Limited: integer('Limited').notNull(),
    Ability: text('Ability'),
    Text: text('Text'),
    Slots: jsonb('Slots'), // Slot[]
    Conditions: jsonb('Conditions'), // string[]
    ShipActions: jsonb('ShipActions'), // Action[] (pilot-specific action overrides)
    ShipAbility: jsonb('ShipAbility'), // { name, text, slotOptions? }
    Force: jsonb('Force'), // { value, recovers, side }
    Charges: jsonb('Charges'), // { value, recovers }
    Standard: boolean('Standard').notNull(),
    Extended: boolean('Extended').notNull().default(true),
    Epic: boolean('Epic').notNull(),
    Wildspace: boolean('Wildspace').notNull().default(false),
    Keywords: jsonb('Keywords'), // string[]
    Image: text('Image'),
    Artwork: text('Artwork'),
    StandardLoadout: jsonb('StandardLoadout'), // string[]
    PilotStats: jsonb('PilotStats'), // Stat[] (pilot-specific stat overrides)
    Ffg: integer('Ffg'),
    Engagement: integer('Engagement'),
    Restricted: integer('Restricted'),
    UpdatedAt: timestamp('UpdatedAt', { mode: 'string' }).notNull(),
  },
  table => ({
    uniqueShipXws: uniqueIndex('pilots_ship_xws').on(table.ShipId, table.Xws),
  }),
);

export const GameUpgrades = pgTable(
  'GameUpgrades',
  {
    Id: uuid('Id').primaryKey().notNull(),
    Ruleset: text('Ruleset').notNull(),
    Slot: text('Slot').notNull(), // primary SlotKey
    Xws: text('Xws').notNull(),
    Limited: integer('Limited').notNull(),
    Cost: jsonb('Cost'), // UpgradeCost (value or variable)
    Sides: jsonb('Sides').notNull(), // UpgradeSide[]
    Restrictions: jsonb('Restrictions'), // Restrictions[]
    Standard: boolean('Standard').notNull(),
    Extended: boolean('Extended').notNull().default(true),
    Epic: boolean('Epic').notNull(),
    Wildspace: boolean('Wildspace').notNull().default(false),
    Standarized: boolean('Standarized').notNull().default(false),
    Keywords: jsonb('Keywords'), // string[]
    StandardLoadoutOnly: boolean('StandardLoadoutOnly').notNull().default(false),
    Restricted: integer('Restricted'),
    UpdatedAt: timestamp('UpdatedAt', { mode: 'string' }).notNull(),
  },
  table => ({
    uniqueRulesetSlotXws: uniqueIndex('upgrades_ruleset_slot_xws').on(table.Ruleset, table.Slot, table.Xws),
  }),
);

export const GameConditions = pgTable(
  'GameConditions',
  {
    Id: uuid('Id').primaryKey().notNull(),
    Ruleset: text('Ruleset').notNull(),
    Xws: text('Xws').notNull(),
    Name: text('Name').notNull(),
    Ability: text('Ability').notNull(),
    Image: text('Image'),
  },
  table => ({
    uniqueRulesetXws: uniqueIndex('conditions_ruleset_xws').on(table.Ruleset, table.Xws),
  }),
);

export const Sources = pgTable('Sources', {
  Id: uuid('Id').primaryKey().notNull(),
  Category: text('Category').notNull(), // SourceKey
  Ffg: integer('Ffg'),
  Xws: text('Xws').notNull(),
  Name: text('Name').notNull(),
  Wave: integer('Wave'),
  Released: boolean('Released').notNull(),
  Contents: jsonb('Contents').notNull(), // { ships, pilots, upgrades }
  Sku: text('Sku'),
});

export const ManifestEntries = pgTable(
  'ManifestEntries',
  {
    Id: uuid('Id').primaryKey().notNull(),
    Ruleset: text('Ruleset').notNull(),
    NumericId: integer('NumericId').notNull(),
    XwsKey: text('XwsKey').notNull(),
    EntityType: text('EntityType').notNull(), // 'pilot' | 'upgrade' | 'ship'
  },
  table => ({
    uniqueRulesetNumericId: uniqueIndex('manifest_ruleset_numeric_id').on(table.Ruleset, table.NumericId),
    uniqueRulesetEntityXws: uniqueIndex('manifest_ruleset_entity_xws').on(
      table.Ruleset,
      table.EntityType,
      table.XwsKey,
    ),
  }),
);

export const Collections = pgTable('Collections', {
  Id: uuid('Id').primaryKey().notNull(),
  UserId: uuid('UserId')
    .notNull()
    .references(() => Users.Id),
  Expansions: jsonb('Expansions'),
  Ships: jsonb('Ships'),
  Pilots: jsonb('Pilots'),
  Upgrades: jsonb('Upgrades'),
  UpdatedUtc: timestamp('UpdatedUtc', { mode: 'string' }).notNull(),
});

export const Tournaments = pgTable('Tournaments', {
  Id: uuid('Id').primaryKey().notNull(),
  CreatedUtc: timestamp('CreatedUtc', { mode: 'string' }).notNull(),
  UpdatedUtc: timestamp('UpdatedUtc', { mode: 'string' }).notNull(),
  DeletedUtc: timestamp('DeletedUtc', { mode: 'string' }),
  CreatorId: uuid('CreatorId')
    .notNull()
    .references(() => Users.Id),
  Name: text('Name').notNull(),
  Format: text('Format').notNull(),
  Date: timestamp('Date', { mode: 'string' }).notNull(),
  Location: text('Location'),
  Address: text('Address'),
  Version: text('Version'),
});

export const Games = pgTable('Games', {
  Id: uuid('Id').primaryKey().notNull(),
  TournamentId: uuid('TournamentId')
    .notNull()
    .references(() => Tournaments.Id),
  GameType: text('GameType').notNull(),
  Round: integer('Round').notNull(),
  Bye: boolean('Bye').notNull(),
  WinnerId: uuid('WinnerId').references(() => Participants.Id),
  Player1Id: uuid('Player1Id').references(() => Participants.Id),
  Player2Id: uuid('Player2Id').references(() => Participants.Id),
  Player1Score: integer('Player1Score'),
  Player2Score: integer('Player2Score'),
  Player1Signoff: boolean('Player1Signoff'),
  Player2Signoff: boolean('Player2Signoff'),
});

export const Participants = pgTable('Participants', {
  Id: uuid('Id').primaryKey().notNull(),
  TournamentId: uuid('TournamentId')
    .notNull()
    .references(() => Tournaments.Id),
  Name: text('Name').notNull(),
  Xws: jsonb('Xws'),
  UserId: uuid('UserId').references(() => Users.Id),
});

export const Lists = pgTable('Lists', {
  Id: uuid('Id').primaryKey().notNull(),
  UserId: uuid('UserId')
    .notNull()
    .references(() => Users.Id),
  Xws: jsonb('Xws').notNull(),
  CreatedUtc: timestamp('CreatedUtc', { mode: 'string' }).notNull(),
  UpdatedUtc: timestamp('UpdatedUtc', { mode: 'string' }).notNull(),
  DeletedUtc: timestamp('DeletedUtc', { mode: 'string' }),
});
