CREATE TABLE IF NOT EXISTS "GameConditions" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"Ruleset" text NOT NULL,
	"Xws" text NOT NULL,
	"Name" text NOT NULL,
	"Ability" text NOT NULL,
	"Image" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "GameDataVersions" (
	"Ruleset" text PRIMARY KEY NOT NULL,
	"Version" text NOT NULL,
	"UpdatedAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "GameUpgrades" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"Ruleset" text NOT NULL,
	"Slot" text NOT NULL,
	"Xws" text NOT NULL,
	"Limited" integer NOT NULL,
	"Cost" jsonb,
	"Sides" jsonb NOT NULL,
	"Restrictions" jsonb,
	"Standard" boolean NOT NULL,
	"Extended" boolean DEFAULT true NOT NULL,
	"Epic" boolean NOT NULL,
	"Wildspace" boolean DEFAULT false NOT NULL,
	"Standarized" boolean DEFAULT false NOT NULL,
	"Keywords" jsonb,
	"StandardLoadoutOnly" boolean DEFAULT false NOT NULL,
	"Restricted" integer,
	"UpdatedAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ManifestEntries" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"Ruleset" text NOT NULL,
	"NumericId" integer NOT NULL,
	"XwsKey" text NOT NULL,
	"EntityType" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Pilots" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"ShipId" uuid NOT NULL,
	"Xws" text NOT NULL,
	"Name" text NOT NULL,
	"Caption" text,
	"Cost" integer NOT NULL,
	"Loadout" integer,
	"Initiative" integer NOT NULL,
	"Limited" integer NOT NULL,
	"Ability" text,
	"Text" text,
	"Slots" jsonb,
	"Conditions" jsonb,
	"ShipActions" jsonb,
	"ShipAbility" jsonb,
	"Force" jsonb,
	"Charges" jsonb,
	"Standard" boolean NOT NULL,
	"Extended" boolean DEFAULT true NOT NULL,
	"Epic" boolean NOT NULL,
	"Wildspace" boolean DEFAULT false NOT NULL,
	"Keywords" jsonb,
	"Image" text,
	"Artwork" text,
	"StandardLoadout" jsonb,
	"PilotStats" jsonb,
	"Ffg" integer,
	"Engagement" integer,
	"Restricted" integer,
	"UpdatedAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Ships" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"Ruleset" text NOT NULL,
	"Faction" text NOT NULL,
	"Xws" text NOT NULL,
	"Name" text NOT NULL,
	"Size" text NOT NULL,
	"Dial" jsonb NOT NULL,
	"DialCodes" jsonb,
	"Stats" jsonb NOT NULL,
	"Actions" jsonb NOT NULL,
	"Ability" jsonb,
	"Ffg" integer,
	"Icon" text,
	"UpdatedAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Sources" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"Category" text NOT NULL,
	"Ffg" integer NOT NULL,
	"Xws" text NOT NULL,
	"Name" text NOT NULL,
	"Wave" integer NOT NULL,
	"Released" boolean NOT NULL,
	"Contents" jsonb NOT NULL,
	"Sku" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "UserLoginCodes" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"UserId" uuid NOT NULL,
	"Code" text NOT NULL,
	"CreatedAt" timestamp NOT NULL,
	"Active" boolean NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Collections" DROP CONSTRAINT IF EXISTS "Collections_UserId_fkey";
--> statement-breakpoint
ALTER TABLE "Tournaments" DROP CONSTRAINT IF EXISTS "Tournaments_CreatorId_fkey";
--> statement-breakpoint
ALTER TABLE "Games" DROP CONSTRAINT IF EXISTS "Games_TournamentId_fkey";
--> statement-breakpoint
ALTER TABLE "Games" DROP CONSTRAINT IF EXISTS "Games_WinnerId_fkey";
--> statement-breakpoint
ALTER TABLE "Games" DROP CONSTRAINT IF EXISTS "Games_Player1Id_fkey";
--> statement-breakpoint
ALTER TABLE "Games" DROP CONSTRAINT IF EXISTS "Games_Player2Id_fkey";
--> statement-breakpoint
ALTER TABLE "Participants" DROP CONSTRAINT IF EXISTS "Participants_UserId_fkey";
--> statement-breakpoint
ALTER TABLE "Participants" DROP CONSTRAINT IF EXISTS "Participants_TournamentId_fkey";
--> statement-breakpoint
ALTER TABLE "Lists" DROP CONSTRAINT IF EXISTS "Lists_UserId_fkey";
--> statement-breakpoint
ALTER TABLE "Users" ADD COLUMN IF NOT EXISTS "IsAdmin" boolean DEFAULT false NOT NULL;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Pilots" ADD CONSTRAINT "Pilots_ShipId_Ships_Id_fk" FOREIGN KEY ("ShipId") REFERENCES "public"."Ships"("Id") ON DELETE cascade ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "UserLoginCodes" ADD CONSTRAINT "UserLoginCodes_UserId_Users_Id_fk" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "conditions_ruleset_xws" ON "GameConditions" USING btree ("Ruleset","Xws");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "upgrades_ruleset_slot_xws" ON "GameUpgrades" USING btree ("Ruleset","Slot","Xws");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "manifest_ruleset_numeric_id" ON "ManifestEntries" USING btree ("Ruleset","NumericId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "manifest_ruleset_entity_xws" ON "ManifestEntries" USING btree ("Ruleset","EntityType","XwsKey");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "pilots_ship_xws" ON "Pilots" USING btree ("ShipId","Xws");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "ships_ruleset_faction_xws" ON "Ships" USING btree ("Ruleset","Faction","Xws");--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Collections" ADD CONSTRAINT "Collections_UserId_Users_Id_fk" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Tournaments" ADD CONSTRAINT "Tournaments_CreatorId_Users_Id_fk" FOREIGN KEY ("CreatorId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Games" ADD CONSTRAINT "Games_TournamentId_Tournaments_Id_fk" FOREIGN KEY ("TournamentId") REFERENCES "public"."Tournaments"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Games" ADD CONSTRAINT "Games_WinnerId_Participants_Id_fk" FOREIGN KEY ("WinnerId") REFERENCES "public"."Participants"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Games" ADD CONSTRAINT "Games_Player1Id_Participants_Id_fk" FOREIGN KEY ("Player1Id") REFERENCES "public"."Participants"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Games" ADD CONSTRAINT "Games_Player2Id_Participants_Id_fk" FOREIGN KEY ("Player2Id") REFERENCES "public"."Participants"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Participants" ADD CONSTRAINT "Participants_TournamentId_Tournaments_Id_fk" FOREIGN KEY ("TournamentId") REFERENCES "public"."Tournaments"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Participants" ADD CONSTRAINT "Participants_UserId_Users_Id_fk" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;--> statement-breakpoint
DO $$ BEGIN ALTER TABLE "Lists" ADD CONSTRAINT "Lists_UserId_Users_Id_fk" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN null; END $$;