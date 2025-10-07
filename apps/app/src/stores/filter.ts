import AsyncStorage from '@react-native-async-storage/async-storage';
import { FactionKey, Format } from 'lbn-core/src/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { compare } from '../helpers/misc';
import { useXwsStore } from './xws';

export type FilterType = FactionKey | Format;
export type SortingType = 'Alphabetically' | 'Faction' | 'Points' | 'Wins' | 'Created Date' | 'Format' | 'Custom';
export type SortDirectionType = 'Ascending' | 'Descending';

export type FilterState = {
  filters: { [key in FilterType]?: boolean };
  setFilters: (f: { [key in FilterType]?: boolean }) => void;

  tags: string[];
  setTags: (t: string[]) => void;

  sorting: {
    first: SortingType;
    second: SortingType;
    direction: SortDirectionType;
  };

  setFirstSorting: (s: SortingType) => void;
  setSecondSorting: (s: SortingType) => void;
  setSortDirection: (s: SortDirectionType) => void;
};

export const useFilterStore = create<FilterState>()(
  persist(
    (set, get) => ({
      filters: {},
      setFilters: filters => set({ filters }),

      tags: [],
      setTags: tags => set({ tags }),

      sorting: {
        first: 'Faction',
        second: 'Alphabetically',
        direction: 'Ascending',
      },
      setFirstSorting: first => {
        set(s => ({ ...s, sorting: { ...s.sorting, first } }));

        const { second } = get().sorting;
        const lists = [...(useXwsStore.getState().lists || [])].sort((a, b) => {
          const c = compare(a, b, first);
          if (c === 0) {
            return compare(a, b, second);
          }
          return c;
        });
        useXwsStore.getState().setLists(lists);
      },
      setSecondSorting: second => {
        set(s => ({ ...s, sorting: { ...s.sorting, second } }));

        const { first } = get().sorting;
        const lists = [...(useXwsStore.getState().lists || [])].sort((a, b) => {
          const c = compare(a, b, first);
          if (c === 0) {
            return compare(a, b, second);
          }
          return c;
        });
        useXwsStore.getState().setLists(lists);
      },
      setSortDirection: direction => set(s => ({ ...s, sorting: { ...s.sorting, direction } })),
    }),
    {
      name: 'filter',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => {
        const { filters, tags, ...rest } = state;
        return rest;
      },
    },
  ),
);
