import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { saveCollectionOnServer } from '../helpers/api';
import { CollectionState } from './types';

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set, get) => ({
      expansions: {},
      setExpansions: (expansions, sync) => {
        set({ expansions });

        if (sync) {
          const { ships, pilots, upgrades } = get();
          saveCollectionOnServer({
            expansions,
            ships,
            pilots,
            upgrades,
          });
        }
      },

      pilots: {},
      setPilots: (pilots, sync) => {
        set({ pilots });

        if (sync) {
          const { expansions, ships, upgrades } = get();
          saveCollectionOnServer({
            expansions,
            ships,
            pilots,
            upgrades,
          });
        }
      },

      ships: {},
      setShips: (ships, sync) => {
        set({ ships });

        if (sync) {
          const { expansions, pilots, upgrades } = get();
          saveCollectionOnServer({
            expansions,
            ships,
            pilots,
            upgrades,
          });
        }
      },

      upgrades: {},
      setUpgrades: (upgrades, sync) => {
        set({ upgrades });

        if (sync) {
          const { expansions, ships, pilots } = get();
          saveCollectionOnServer({
            expansions,
            ships,
            pilots,
            upgrades,
          });
        }
      },
    }),
    {
      name: 'collection',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
