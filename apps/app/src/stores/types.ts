import { RuleSet } from 'lbn-core/src';
import {
  FactionKey,
  Format,
  SlotKey,
  Upgrade,
  UpgradeXWS,
} from 'lbn-core/src/types';
import { ColorSettings } from '../theme';

export type PilotXWS = {
  id: string;
  ship: string;
  points: number;
  upgrades: { [key in SlotKey]?: string[] };
};

export type XWS = {
  name: string;
  description: string;
  format: Format;
  faction: FactionKey;
  points: number;
  version: string;
  obstacles?: string[];
  pilots: PilotXWS[];
  ruleset: RuleSet;
  vendor: {
    lbn: {
      builder?: string;
      builder_url?: string;
      link?: string;
      uid: string;
      wins: number;
      ties: number;
      losses: number;
      tags: string[];
      created: Date;
    };
  };
};

export type Provider = 'Facebook' | 'Google' | 'Apple';

export type PushToken = {
  token: string;
  id: string;
};

export type User = {
  id?: string;
  name?: string;
  provider?: Provider;
};

export type TournamentResponse = {
  id: string;
  name: string;
  date: Date | string;
  format: Format;
  finalPosition?: number;
  numberOfPlayers?: number;
  games: GameResponse[];
  player?: ParticipantResponse;
  version: string;
};

export type GameResponse = {
  id: string;
  type: TGameType;
  round: number;
  bye: boolean;
  winnerId?: string;

  player1?: ParticipantResponse;
  player1Score: number;
  player1Signoff: boolean;

  player2?: ParticipantResponse;
  player2Score: number;
  player2Signoff: boolean;
};

export type ParticipantResponse = {
  id?: string;
  name?: string;
  xws?: XWS;
};

export type TGameType = 'Swiss' | 'Cut' | 'Final';

export type XWSState = {
  lists?: XWS[];
  setLists: (lists: XWS[]) => void;

  loaded: boolean;
  setLoaded: () => void;

  addSquadron: (faction: FactionKey, format: Format, ruleset: RuleSet) => XWS;
  importSquadron: (list: XWS) => void;
  copySquadron: (uid: string) => void;
  removeSquadron: (uid: string) => void;

  addShip: (
    uid: string,
    shipXws: string,
    pilotXws: string,
    upgrades?: UpgradeXWS
  ) => void;
  copyShip: (xws: XWS, pilotIndex: number) => void;
  changePilot: (uid: string, pilotIndex: number, pilotXws: string) => void;
  setUpgrade: (
    xws: XWS,
    pilotIndex: number,
    key: SlotKey,
    slotIndex: number,
    u?: Upgrade
  ) => void;
  setUpgradesForPilot: (
    uid: string,
    pilotIndex: number,
    upgrades: { [key in SlotKey]?: string[] }
  ) => void;
  setName: (uid: string, name: string) => void;
  setFormat: (uid: string, format: Format) => void;
  setRuleset: (uid: string, ruleset: RuleSet) => void;
  setWins: (uid: string, wins: number) => void;
  setTies: (uid: string, ties: number) => void;
  setLosses: (uid: string, losses: number) => void;
  setObstacles: (uid: string, obstacles: string[]) => void;
  setTags: (uid: string, tags: string[]) => void;
  removeShip: (xws: XWS, pilotIndex: number) => void;
};

export interface SystemState {
  token?: string;
  setToken: (token?: string) => void;

  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;

  user?: User;
  setUser: (user: User) => void;

  pushToken?: PushToken;
  setPushToken: (token: PushToken) => void;

  theme: ColorSettings;
  setTheme: (theme: ColorSettings) => void;

  lastRead: number;
  setLastRead: (r: number) => void;
}

export type TournamentState = {
  tournaments?: TournamentResponse[];
  setTournaments: (tournaments: TournamentResponse[]) => void;

  addTournament: (s: TournamentResponse) => void;
  updateTournament: (tournament: TournamentResponse) => void;
  removeTournament: (id: string) => void;

  addGame: (id: string, game: GameResponse) => void;
  updateGame: (id: string, game: GameResponse, updateOnServer: boolean) => void;
  removeGame: (id: string, gameId: string) => void;
};

export type CollectionState = {
  expansions: { [s: string]: number };
  setExpansions: (e: { [s: string]: number }, sync: boolean) => void;

  pilots: { [s: string]: number };
  setPilots: (e: { [s: string]: number }, sync: boolean) => void;

  ships: { [s: string]: number };
  setShips: (e: { [s: string]: number }, sync: boolean) => void;

  upgrades: { [s: string]: number };
  setUpgrades: (e: { [s: string]: number }, sync: boolean) => void;
};
