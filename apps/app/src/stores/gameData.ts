import AsyncStorage from '@react-native-async-storage/async-storage';
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

export const useGameDataStore = create<GameDataState>()(
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
            trpc.gameData.all.query({ ruleset: 'xwa' }),
            trpc.gameData.version.query({ ruleset: 'xwa' }),
            trpc.gameData.manifest.query({ ruleset: 'xwa' }),
          ]);
          set({
            data,
            manifestData,
            version: versionResult.version,
            lastFetched: Date.now(),
            loading: false,
          });
        } catch (error) {
          console.error('Failed to fetch game data:', error);
          set({ loading: false });
        }
      },

      checkForUpdates: async () => {
        try {
          const { version } = get();
          const result = await trpc.gameData.version.query({ ruleset: 'xwa' });
          if (result.version !== version) {
            await get().fetchGameData();
          }
        } catch (error) {
          console.error('Failed to check game data version:', error);
        }
      },
    }),
    {
      name: 'game-data',
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
