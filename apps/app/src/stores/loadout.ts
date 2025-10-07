import AsyncStorage from '@react-native-async-storage/async-storage';
import { FactionKey, SlotKey } from 'lbn-core/src/types';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Loadout = {
  id: string;
  name: string;
  faction: FactionKey;
  shipXws: string;
  pilotXws: string;
  upgrades: { [key in SlotKey]?: string[] };
};

export type LoadoutState = {
  loadouts?: Loadout[];
  setLoadouts: (loadouts: Loadout[]) => void;

  addLoadout: (
    name: string,
    faction: FactionKey,
    shipXws: string,
    pilotXws: string,
    upgrades: { [key in SlotKey]?: string[] },
  ) => void;
  removeLoadout: (uid: string) => void;
};

export const useLoadoutStore = create<LoadoutState>()(
  persist(
    (set, get) => ({
      loadouts: [],
      setLoadouts: loadouts => set({ loadouts }),

      addLoadout: (name, faction, shipXws, pilotXws, upgrades) => {
        const loadouts = get().loadouts || [];
        const loadout: Loadout = {
          id: uuid(),
          name,
          faction,
          shipXws,
          pilotXws,
          upgrades,
        };

        // saveListOnServer(list);

        set({ loadouts: [...loadouts, loadout] });
      },
      removeLoadout: id => {
        // removeListOnServer(uid);
        const loadouts = get().loadouts;
        const list = loadouts?.find(l => l.id === id);
        if (!list) {
          return;
        }
        const filtered = loadouts?.filter(l => l.id !== id);
        return set({ loadouts: filtered });
      },
    }),
    {
      name: 'loadout',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
