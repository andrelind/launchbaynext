import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { saveCollectionOnServer } from '../helpers/api';
import { CollectionState } from './types';

export const collectionStore = create<CollectionState>()(
  persist(
    (set, get) => ({
      expansions: {},
      setExpansions: (expansions) => {
        set({ expansions });
        const { ships, pilots, upgrades } = get();
        saveCollectionOnServer({
          expansions,
          ships,
          pilots,
          upgrades,
        });
      },

      pilots: {},
      setPilots: (pilots) => {
        set({ pilots });

        const { expansions, ships, upgrades } = get();
        saveCollectionOnServer({
          expansions,
          ships,
          pilots,
          upgrades,
        });
      },

      ships: {},
      setShips: (ships) => {
        set({ ships });

        const { expansions, pilots, upgrades } = get();
        saveCollectionOnServer({
          expansions,
          ships,
          pilots,
          upgrades,
        });
      },

      upgrades: {},
      setUpgrades: (upgrades) => {
        set({ upgrades });
        const { expansions, ships, pilots } = get();
        saveCollectionOnServer({
          expansions,
          ships,
          pilots,
          upgrades,
        });
      },
    }),
    {
      name: 'collection',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
