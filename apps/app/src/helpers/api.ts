
import { systemStore } from '../stores/system';
import {
  CollectionState,
  XWS,
  XWSState
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

    const got: XWS[] = await trpc.lists.multiple.query(toGet);
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
    final.forEach((l) => {
      if (!l.ruleset) {
        l.ruleset = l.points > 100 ? 'legacy' : 'xwa';
      }
    });

    smooth();
    xwsState.setLists(final);
  } catch (error) {
    console.log(error, 'lists');
  }

  try {
    const fromServer = await trpc.collection.get.query();
    collectionState.setExpansions(fromServer.expansions, false);
    collectionState.setShips(fromServer.ships, false);
    collectionState.setPilots(fromServer.pilots, false);
    collectionState.setUpgrades(fromServer.upgrades, false);
  } catch (error) {
    console.log(error, 'collection');
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

