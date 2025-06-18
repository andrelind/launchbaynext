import { boolean, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

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
});

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
  UpdatedUtc: timestamp('UpdatedUtc').notNull(),
  DeletedUtc: timestamp('DeletedUtc', { mode: 'string' }),
});
