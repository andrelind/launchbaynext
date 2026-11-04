import AsyncStorage from '@react-native-async-storage/async-storage';
import type { RuleSet } from 'lbn-core/src';
import type { GameData, ManifestData } from 'lbn-core/src/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { trpc } from '../helpers/trpc';

type GameDataState = {
  data: GameData | null;
  manifestData: ManifestData | null;
  version: string | null;
  loading: boolean;
  lastFetched: number | null;
  fetchGameData: () => Promise<void>;
  checkForUpdates: () => Promise<void>;
};

const createGameDataStore = (ruleset: RuleSet, storageKey: string) =>
  create<GameDataState>()(
    persist(
      (set, get) => ({
        data: null,
        manifestData: null,
        version: null,
        loading: false,
        lastFetched: null,

        fetchGameData: async () => {
          set({ loading: true });
          try {
            const [data, versionResult, manifestData] = await Promise.all([
              trpc.gameData.all.query({ ruleset }),
              trpc.gameData.version.query({ ruleset }),
              trpc.gameData.manifest.query({ ruleset }),
            ]);
            set({
              data,
              manifestData,
              version: versionResult.version,
              lastFetched: Date.now(),
              loading: false,
            });
          } catch (error) {
            console.error(`Failed to fetch ${ruleset} game data:`, error);
            set({ loading: false });
          }
        },

        checkForUpdates: async () => {
          try {
            const { version } = get();
            const result = await trpc.gameData.version.query({ ruleset });
            if (result.version !== version) {
              await get().fetchGameData();
            }
          } catch (error) {
            console.error(`Failed to check ${ruleset} game data version:`, error);
          }
        },
      }),
      {
        name: storageKey,
        storage: createJSONStorage(() => AsyncStorage),
        partialize: state => ({
          data: state.data,
          manifestData: state.manifestData,
          version: state.version,
          lastFetched: state.lastFetched,
        }),
      },
    ),
  );

// One store, and one storage key, per ruleset. Each payload is close to 2 MB, and
// Android's AsyncStorage can't read a row over 2 MB, so they can't share a key.
const stores = {
  xwa: createGameDataStore('xwa', 'game-data'),
  legacy: createGameDataStore('legacy', 'game-data-legacy'),
};

const storeFor = (ruleset?: RuleSet) => (ruleset === 'legacy' ? stores.legacy : stores.xwa);

/** Game data for a ruleset, for use outside of React rendering. */
export const getGameData = (ruleset?: RuleSet) => storeFor(ruleset).getState().data;

export const useGameData = (ruleset?: RuleSet) => storeFor(ruleset)(s => s.data);

export const useManifestData = (ruleset?: RuleSet) => storeFor(ruleset)(s => s.manifestData);

export const checkForGameDataUpdates = async () => {
  await Promise.all(Object.values(stores).map(store => store.getState().checkForUpdates()));
};
