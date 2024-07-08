import AsyncStorage from '@react-native-async-storage/async-storage';
import { bumpMinor } from 'lbn-core/src/helpers/versioning';
import { v4 as uuid } from 'uuid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { removeListOnServer, saveListOnServer } from '../helpers/api';
import { addShip2, setUpgrade2 } from '../helpers/edit';

import { cleanupUpgrades2, loadShip2, pointsForSquadron2 } from 'lbn-core/src/helpers/loading';
import { sortXws } from '../helpers/misc';
import { filterStore } from './filter';
import { XWS, XWSState } from './types';

export const xwsStore = create<XWSState>()(
  persist(
    (set, get) => ({
      lists: [],
      setLists: (lists) => set({ lists }),

      loaded: false,
      setLoaded: () => set({ loaded: true }),

      addSquadron: (faction, format, ruleset) => {
        const list: XWS = {
          name: 'New Squadron',
          description: '',
          faction,
          format,
          pilots: [],
          points: 0,
          version: '2.5.0',
          obstacles: [],
          ruleset: ruleset || 'xwa',
          vendor: {
            lbn: {
              uid: uuid(),
              wins: 0,
              ties: 0,
              losses: 0,
              tags: [],
              created: new Date().toDateString(),
            },
          },
        };
        const { first, second } = filterStore.getState().sorting;
        const lists = [...(get().lists || []), list].sort((a, b) =>
          sortXws(a, b, first, second)
        );
        set({ lists });

        saveListOnServer(list);
        return list;
      },
      importSquadron: (list) => {
        const { first, second } = filterStore.getState().sorting;
        const lists = [...(get().lists || []), list].sort((a, b) =>
          sortXws(a, b, first, second)
        );

        set({ lists });

        saveListOnServer(list);
      },
      copySquadron: (uid) => {
        const lists = get().lists;

        const list = lists?.find((l) => l.vendor.lbn.uid === uid);
        if (list) {
          const copy: XWS = JSON.parse(JSON.stringify(list));
          copy.version = '2.5.0';
          copy.vendor.lbn.uid = uuid();
          copy.vendor.lbn.created = new Date().toDateString();
          if (!copy.pilots) {
            copy.pilots = [];
          }

          const { first, second } = filterStore.getState().sorting;
          set({
            lists: [...(lists || []), copy].sort((a, b) =>
              sortXws(a, b, first, second)
            ),
          });
          saveListOnServer(copy);

          return copy;
        }
      },
      removeSquadron: (uid) => {
        removeListOnServer(uid);

        const lists = get().lists;
        const list = lists?.find((l) => l.vendor.lbn.uid === uid);

        if (!list) {
          return;
        }

        const filtered = lists?.filter((l) => l.vendor.lbn.uid !== uid);

        const allTags = filtered
          ?.map((xws) => xws?.vendor?.lbn?.tags)
          ?.reduce((a, c) => {
            (c || []).forEach((tag) => {
              if (!a?.includes(tag)) {
                a?.push(tag);
              }
            });
            return a;
          }, []);

        for (const tag of list?.vendor.lbn.tags) {
          if (!allTags?.includes(tag)) {
            console.log('FILTER RESET');
            filterStore.getState().setTags([]);
          }
        }

        return set({ lists: filtered });
      },

      addShip: (uid, shipXws, pilotXws, upgrades) => {
        const lists = get().lists;
        const { first, second } = filterStore.getState().sorting;
        set({
          lists: lists
            ?.map((l) => {
              if (l.vendor.lbn.uid !== uid) {
                return l;
              }
              const list = addShip2(l, shipXws, pilotXws, upgrades);
              saveListOnServer(list);
              return list;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },

      copyShip: (xws, pilotIndex) => {
        const lists = get().lists;
        const { first, second } = filterStore.getState().sorting;
        set({
          lists: lists
            ?.map((l) => {
              if (l.vendor.lbn.uid !== xws.vendor.lbn.uid) {
                return l;
              }
              const edit: XWS = JSON.parse(JSON.stringify(l));

              const pilot = edit.pilots[pilotIndex];
              if (!pilot) {
                return l;
              }

              edit.pilots = [...edit.pilots, JSON.parse(JSON.stringify(pilot))];
              edit.points = pointsForSquadron2(edit);
              edit.version = bumpMinor(edit.version || '2.5.0');

              saveListOnServer(edit);
              return edit;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },

      changePilot: (uid: string, pilotIndex: number, pilotXws: string) => {
        const lists = get().lists;
        const { first, second } = filterStore.getState().sorting;
        set({
          lists: lists
            ?.map((l) => {
              if (l.vendor.lbn.uid !== uid) {
                return l;
              }

              const edit: XWS = JSON.parse(JSON.stringify(l));
              const pilot = edit.pilots[pilotIndex];
              pilot.id = pilotXws;
              const ship = loadShip2(pilot, l);
              edit.pilots[pilotIndex].upgrades = cleanupUpgrades2(
                pilot.upgrades,
                ship,
                l
              );

              const pilots = edit.pilots.map((p) => {
                const s = loadShip2(p, l);
                const upgrades = cleanupUpgrades2(p.upgrades, s, l);

                return {
                  ...p,
                  points: s.pilot?.cost || 0,
                  upgrades,
                };
              });
              const xws = {
                ...edit,
                pilots,
                points: pilots.reduce((a, c) => a + c.points, 0),
              };

              // console.log(xws);

              saveListOnServer(xws);
              return xws;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },

      setUpgrade: (xws, pilotIndex, key, slotIndex, upgrade) => {
        const lists = get().lists;
        const { first, second } = filterStore.getState().sorting;

        set({
          lists: lists
            ?.map((l) => {
              if (l.vendor.lbn.uid !== xws.vendor.lbn.uid) {
                return l;
              }
              const list = setUpgrade2(
                xws,
                pilotIndex,
                key,
                slotIndex,
                upgrade
              );
              saveListOnServer(list);
              return list;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },
      setUpgradesForPilot: (uid, pilotIndex, upgrades) => {
        const lists = get().lists;
        const { first, second } = filterStore.getState().sorting;

        set({
          lists: lists
            ?.map((l) => {
              if (l.vendor.lbn.uid !== uid) {
                return l;
              }

              const edit: XWS = JSON.parse(JSON.stringify(l));

              edit.pilots[pilotIndex].upgrades = upgrades;
              saveListOnServer(edit);
              edit.version = bumpMinor(edit.version || '2.5.0');

              return edit;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },

      setName: (uid, name) => {
        const lists = get().lists;
        set({
          lists: lists?.map((l) => {
            if (l.vendor.lbn.uid !== uid) {
              return l;
            }
            const edit: XWS = JSON.parse(JSON.stringify(l));

            edit.name = name;
            edit.version = bumpMinor(edit.version || '2.5.0');

            saveListOnServer(edit);

            return edit;
          }),
        });
      },
      setFormat: (uid, format) => {
        const lists = get().lists;
        set({
          lists: lists?.map((l) => {
            if (l.vendor.lbn.uid !== uid) {
              return l;
            }
            const edit: XWS = JSON.parse(JSON.stringify(l));

            edit.format = format;
            edit.version = bumpMinor(edit.version || '2.5.0');

            saveListOnServer(edit);

            return edit;
          }),
        });
      },
      setRuleset: (uid, ruleset) => {
        const lists = get().lists;
        set({
          lists: lists?.map((l) => {
            if (l.vendor.lbn.uid !== uid) {
              return l;
            }
            const edit: XWS = JSON.parse(JSON.stringify(l));

            edit.ruleset = ruleset;
            edit.version = bumpMinor(edit.version || '2.5.0');

            saveListOnServer(edit);

            return edit;
          }),
        });
      },
      setWins: (uid: string, wins: number) => {
        const lists = get().lists;
        const { first, second } = filterStore.getState().sorting;

        set({
          lists: lists
            ?.map((l) => {
              if (l.vendor.lbn.uid !== uid) {
                return l;
              }
              const edit: XWS = JSON.parse(JSON.stringify(l));

              edit.vendor.lbn.wins = wins;
              edit.version = bumpMinor(edit.version || '2.5.0');

              saveListOnServer(edit);

              return edit;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },
      setTies: (uid: string, ties: number) => {
        const lists = get().lists;
        const { first, second } = filterStore.getState().sorting;

        const updated = lists
          ?.map((l) => {
            if (l.vendor.lbn.uid !== uid) {
              return l;
            }
            const edit: XWS = JSON.parse(JSON.stringify(l));

            edit.vendor.lbn.ties = ties;
            edit.version = bumpMinor(edit.version || '2.5.0');

            saveListOnServer(edit);

            return edit;
          })
          .sort((a, b) => sortXws(a, b, first, second));

        console.log(
          'updated',
          updated?.map((l) => l.vendor.lbn)
        );

        set({
          lists: updated,
        });
      },
      setLosses: (uid: string, losses: number) => {
        const { first, second } = filterStore.getState().sorting;
        set({
          lists: get()
            .lists?.map((l) => {
              if (l.vendor.lbn.uid !== uid) {
                return l;
              }
              const edit: XWS = JSON.parse(JSON.stringify(l));

              edit.vendor.lbn.losses = losses;
              edit.version = bumpMinor(edit.version || '2.5.0');

              return edit;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },
      setObstacles: (uid: string, obstacles: string[]) => {
        set({
          lists: get().lists?.map((l) => {
            if (l.vendor.lbn.uid !== uid) {
              return l;
            }
            const edit: XWS = JSON.parse(JSON.stringify(l));

            edit.obstacles = obstacles;
            edit.version = bumpMinor(edit.version || '2.5.0');

            return edit;
          }),
        });
      },
      setTags: (uid: string, tags: string[]) => {
        set({
          lists: get().lists?.map((l) => {
            if (l.vendor.lbn.uid !== uid) {
              return l;
            }
            const edit: XWS = JSON.parse(JSON.stringify(l));

            edit.vendor.lbn.tags = tags;
            edit.version = bumpMinor(edit.version || '2.5.0');

            saveListOnServer(edit);

            return edit;
          }),
        });
      },

      removeShip: (xws, pilotIndex) => {
        const { first, second } = filterStore.getState().sorting;
        set({
          lists: get()
            .lists?.map((l) => {
              if (l.vendor.lbn.uid !== xws.vendor.lbn.uid) {
                return l;
              }

              const edit: XWS = JSON.parse(JSON.stringify(xws));

              edit.pilots.splice(pilotIndex, 1);
              edit.points = pointsForSquadron2(edit);
              edit.version = bumpMinor(edit.version || '2.5.0');

              saveListOnServer(edit);

              return edit;
            })
            .sort((a, b) => sortXws(a, b, first, second)),
        });
      },
    }),
    {
      name: 'xws',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => {
        const { loaded, ...rest } = state;
        return rest;
      }
    }
  )
);
