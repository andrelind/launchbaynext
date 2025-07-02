import AsyncStorage from '@react-native-async-storage/async-storage';
import { parseJSON } from 'date-fns';
import { getFactionKey } from 'lbn-core/src/helpers/serializer';
import { bumpMinor, bumpPatch } from 'lbn-core/src/helpers/versioning';
import { SlotKey, Squadron, Upgrade } from 'lbn-core/src/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { removeTournamentOnServer, saveTournamentOnServer } from '../helpers/api';
import { useSystemStore } from './system';
import { GameResponse, TournamentResponse, TournamentState, XWS } from './types';

export const tournamentStore = create<TournamentState>()(
  persist(
    (set, get) => ({
      tournaments: [],
      setTournaments: (tournaments: TournamentResponse[]) => set({ tournaments }),

      addTournament: (tournament: TournamentResponse) => {
        const tournaments = [...(get().tournaments || []), tournament];
        set({ tournaments });

        saveTournamentOnServer(useSystemStore.getState(), tournament);
      },
      updateTournament: (tournament: TournamentResponse) => {
        const tournaments = [...(get().tournaments || []), tournament];
        const t = tournaments?.find(t => t.id === tournament.id);
        if (!t || !tournaments) {
          return;
        }
        const i = tournaments.findIndex(tt => tt.id === tournament.id);
        if (i !== -1) {
          tournaments.splice(i, 1, tournament);
          tournament.version = bumpMinor(tournament.version);

          set({ tournaments });
          saveTournamentOnServer(useSystemStore.getState(), tournament);
        }
      },
      removeTournament: (id: string) => {
        const tournaments = [...(get().tournaments || []).filter(t => t.id !== id)];
        set({ tournaments });

        removeTournamentOnServer(useSystemStore.getState(), id);
      },

      addGame: (tournamentId: string, game: GameResponse) => {
        const all = get().tournaments;
        const tournament = all?.find(t => t.id === tournamentId);
        if (!tournament || !all) {
          return;
        }
        tournament.games.push(game);
        tournament.version = bumpMinor(tournament.version);

        all.splice(all.indexOf(tournament), 1, { ...tournament });

        set({ tournaments: [...all] });
        saveTournamentOnServer(useSystemStore.getState(), tournament);
      },

      updateGame: (tournamentId: string, game: GameResponse, updateOnServer: boolean) => {
        const all = get().tournaments;
        const tournament = all?.find(t => t.id === tournamentId);
        if (!tournament || !all) {
          return;
        }

        const index = tournament.games.findIndex(t => t.id === game.id);
        if (index !== -1) {
          tournament.games.splice(index, 1, game);
          tournament.version = bumpPatch(tournament.version);

          all.splice(all.indexOf(tournament), 1, { ...tournament });
          set({ tournaments: [...all] });

          if (updateOnServer) {
            saveTournamentOnServer(useSystemStore.getState(), tournament);
          }
        }
      },

      removeGame: (tournamentId: string, gameId: string) => {
        const all = get().tournaments;
        const tournament = all?.find(t => t.id === tournamentId);
        if (!tournament || !all) {
          return;
        }

        const index = tournament.games.findIndex(t => t.id === gameId);
        if (index !== -1) {
          tournament.games.splice(index, 1);
          tournament.version = bumpMinor(tournament.version);

          all.splice(all.indexOf(tournament), 1, { ...tournament });
          set({ tournaments: [...all] });
          saveTournamentOnServer(useSystemStore.getState(), tournament);
        }
      },
    }),
    {
      name: 'tournaments',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

const xwsFromSquadron = (x?: Squadron): XWS | undefined => {
  if (!x) {
    return undefined;
  }

  const xws: XWS = {
    name: x.name,
    description: '',
    faction: getFactionKey(x.faction),
    format: x.format,
    points: x.cost,
    version: x.version || '2.5.0',
    pilots: x.ships.map(p => {
      const upgrades: { [s: string]: string[] } = {};
      Object.keys(p.upgrades || {}).map(key => {
        if (p.upgrades && p.upgrades?.[key as SlotKey]) {
          upgrades[key] = p.upgrades![key as SlotKey]!.map((u: Upgrade) => u.xws);
        }
      });

      return {
        id: p.pilot.xws,
        ship: p.xws,
        points: p.pointsWithUpgrades,
        upgrades,
      };
    }),
    vendor: {
      lbn: {
        uid: x.uid,
        wins: x.wins || 0,
        ties: x.ties || 0,
        losses: x.losses || 0,
        tags: x.tags || [],
        created: x.created ? parseJSON(x.created).toDateString() : new Date().toDateString(),
      },
    },
  };
  return xws;
};
