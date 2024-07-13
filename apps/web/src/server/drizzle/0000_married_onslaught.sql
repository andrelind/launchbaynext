-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "Users" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"Name" text NOT NULL,
	"Email" text,
	"Provider" text,
	"ProviderId" text,
	"PasswordHash" text,
	"Salt" text,
	"Username" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Collections" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"UserId" uuid NOT NULL,
	"Expansions" jsonb,
	"Ships" jsonb,
	"Pilots" jsonb,
	"Upgrades" jsonb,
	"UpdatedUtc" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Tournaments" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"CreatedUtc" timestamp NOT NULL,
	"UpdatedUtc" timestamp NOT NULL,
	"DeletedUtc" timestamp,
	"CreatorId" uuid NOT NULL,
	"Name" text NOT NULL,
	"Format" text NOT NULL,
	"Date" timestamp NOT NULL,
	"Location" text,
	"Address" text,
	"Version" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Games" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"TournamentId" uuid NOT NULL,
	"GameType" text NOT NULL,
	"Round" integer NOT NULL,
	"Bye" boolean NOT NULL,
	"WinnerId" uuid,
	"Player1Id" uuid,
	"Player2Id" uuid,
	"Player1Score" integer,
	"Player2Score" integer,
	"Player1Signoff" boolean,
	"Player2Signoff" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Participants" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"TournamentId" uuid NOT NULL,
	"Name" text NOT NULL,
	"Xws" jsonb,
	"UserId" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lists" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"UserId" uuid NOT NULL,
	"Xws" jsonb NOT NULL,
	"CreatedUtc" timestamp NOT NULL,
	"UpdatedUtc" timestamp NOT NULL,
	"DeletedUtc" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Collections" ADD CONSTRAINT "Collections_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Tournaments" ADD CONSTRAINT "Tournaments_CreatorId_fkey" FOREIGN KEY ("CreatorId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Games" ADD CONSTRAINT "Games_TournamentId_fkey" FOREIGN KEY ("TournamentId") REFERENCES "public"."Tournaments"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Games" ADD CONSTRAINT "Games_WinnerId_fkey" FOREIGN KEY ("WinnerId") REFERENCES "public"."Participants"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Games" ADD CONSTRAINT "Games_Player1Id_fkey" FOREIGN KEY ("Player1Id") REFERENCES "public"."Participants"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Games" ADD CONSTRAINT "Games_Player2Id_fkey" FOREIGN KEY ("Player2Id") REFERENCES "public"."Participants"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Participants" ADD CONSTRAINT "Participants_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Participants" ADD CONSTRAINT "Participants_TournamentId_fkey" FOREIGN KEY ("TournamentId") REFERENCES "public"."Tournaments"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Lists" ADD CONSTRAINT "Lists_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."Users"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/