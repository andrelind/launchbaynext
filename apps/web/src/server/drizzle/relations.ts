import { relations } from "drizzle-orm/relations";
import { Users, UserLoginCodes, Collections, Tournaments, Games, Participants, Lists } from "./schema";

export const UserLoginCodesRelations = relations(UserLoginCodes, ({one}) => ({
	User: one(Users, {
		fields: [UserLoginCodes.UserId],
		references: [Users.Id]
	}),
}));

export const UsersRelations = relations(Users, ({many}) => ({
	UserLoginCodes: many(UserLoginCodes),
	Collections: many(Collections),
	Tournaments: many(Tournaments),
	Participants: many(Participants),
	Lists: many(Lists),
}));

export const CollectionsRelations = relations(Collections, ({one}) => ({
	User: one(Users, {
		fields: [Collections.UserId],
		references: [Users.Id]
	}),
}));

export const TournamentsRelations = relations(Tournaments, ({one, many}) => ({
	User: one(Users, {
		fields: [Tournaments.CreatorId],
		references: [Users.Id]
	}),
	Games: many(Games),
	Participants: many(Participants),
}));

export const GamesRelations = relations(Games, ({one}) => ({
	Tournament: one(Tournaments, {
		fields: [Games.TournamentId],
		references: [Tournaments.Id]
	}),
	Participant_WinnerId: one(Participants, {
		fields: [Games.WinnerId],
		references: [Participants.Id],
		relationName: "Games_WinnerId_Participants_Id"
	}),
	Participant_Player1Id: one(Participants, {
		fields: [Games.Player1Id],
		references: [Participants.Id],
		relationName: "Games_Player1Id_Participants_Id"
	}),
	Participant_Player2Id: one(Participants, {
		fields: [Games.Player2Id],
		references: [Participants.Id],
		relationName: "Games_Player2Id_Participants_Id"
	}),
}));

export const ParticipantsRelations = relations(Participants, ({one, many}) => ({
	Games_WinnerId: many(Games, {
		relationName: "Games_WinnerId_Participants_Id"
	}),
	Games_Player1Id: many(Games, {
		relationName: "Games_Player1Id_Participants_Id"
	}),
	Games_Player2Id: many(Games, {
		relationName: "Games_Player2Id_Participants_Id"
	}),
	User: one(Users, {
		fields: [Participants.UserId],
		references: [Users.Id]
	}),
	Tournament: one(Tournaments, {
		fields: [Participants.TournamentId],
		references: [Tournaments.Id]
	}),
}));

export const ListsRelations = relations(Lists, ({one}) => ({
	User: one(Users, {
		fields: [Lists.UserId],
		references: [Users.Id]
	}),
}));