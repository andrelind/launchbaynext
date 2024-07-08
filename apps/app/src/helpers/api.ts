import { parseJSON } from 'date-fns';

import { systemStore } from '../stores/system';
import {
  CollectionState,
  SystemState,
  TournamentResponse,
  TournamentState,
  XWS,
  XWSState,
} from '../stores/types';
import { smooth } from './animation';
import { trpc } from './trpc';

export interface CollectionRequest {
  expansions: { [s: string]: number };
  ships: { [s: string]: number };
  pilots: { [s: string]: number };
  upgrades: { [s: string]: number };
}

export interface CollectionResponse extends CollectionRequest {
  updatedUtc: Date;
}

export const syncWithServer = async (
  xwsState: XWSState,
  tournamentState: TournamentState,
  collectionState: CollectionState
) => {
  const { token } = systemStore.getState();
  if (!token) {
    return;
  }

  try {
    const local = xwsState.lists || [];
    const body = local.map((l) => ({
      id: l.vendor.lbn.uid,
      version: l.version,
    }));

    const { get: toGet, send, remove } = await trpc.lists.sync.query(body);

    const got: XWS[] = await trpc.lists.get.query(toGet);
    await trpc.lists.update.mutate(
      local.filter((l) => send.includes(l.vendor.lbn.uid))
    );

    const final = [
      ...local.filter(
        (l) =>
          !remove.includes(l.vendor.lbn.uid) &&
          !got.find((g) => g.vendor.lbn.uid === l.vendor.lbn.uid)
      ),
      ...got,
    ];

    smooth();
    xwsState.setLists(final);
  } catch (error) {
    console.log(error, 'lists');
  }

  try {
    const fromServer = await trpc.collection.get.query();
    collectionState.setExpansions(fromServer.expansions);
    collectionState.setShips(fromServer.ships);
    collectionState.setPilots(fromServer.pilots);
    collectionState.setUpgrades(fromServer.upgrades);
  } catch (error) {
    console.log(error, 'collection');
  }

  try {
    const local = tournamentState.tournaments || [];
    const body = local.map((l) => ({ id: l.id, version: l.version }));

    const {
      get: toGet,
      send,
      remove,
    } = await trpc.tournaments.sync.query(body);

    const got = await trpc.tournaments.get.query(toGet);
    await trpc.tournaments.update.mutate(
      local
        .filter((l) => send.includes(l.id))
        .map((l) => ({ ...l, date: parseJSON(l.date) }))
    );

    const final = [
      ...local
        .filter((l) => !remove.includes(l.id))
        .filter((l) => !toGet.includes(l.id)),
      ...got,
    ];

    smooth();
    tournamentState.setTournaments(final);
  } catch (error) {
    console.log(error, 'tournaments');
  }
};

export const saveListOnServer = async (xws: XWS) => {
  const token = systemStore.getState().token;
  if (!token) {
    return;
  }

  try {
    await trpc.lists.update.mutate([xws]);
  } catch (error) {
    console.log(error);
  }
};

export const removeListOnServer = async (id: string) => {
  const token = systemStore.getState().token;
  if (!token) {
    return;
  }

  try {
    await trpc.lists.remove.mutate([id]);
  } catch (error) {
    console.log(error);
  }
};

export const saveCollectionOnServer = async (req: CollectionRequest) => {
  const token = systemStore.getState().token;
  if (!token) {
    return;
  }

  try {
    await trpc.collection.update.mutate(req);
  } catch (error) {
    console.log(error);
  }
};

export const saveTournamentOnServer = async (
  state: SystemState,
  l: TournamentResponse
) => {
  const token = state.token;
  if (!token) {
    return;
  }

  try {
    await trpc.tournaments.update.mutate([{ ...l, date: parseJSON(l.date) }]);
  } catch (error) {
    console.log(error);
  }
};

export const removeTournamentOnServer = async (
  state: SystemState,
  id: string
) => {
  const token = state.token;
  if (!token) {
    return;
  }

  try {
    await trpc.tournaments.remove.mutate([id]);
  } catch (error) {
    console.log(error);
  }
};
