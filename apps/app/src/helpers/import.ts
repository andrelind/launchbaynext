import { xwsFromString } from 'lbn-core/src/helpers/import+export';
import { xwsStore } from '../stores/xws';

export const importFromClipboard = async (text: string): Promise<string | undefined> => {
  const { importSquadron } = xwsStore.getState();

  const xws = await xwsFromString(text);
  if (xws) {
    importSquadron(xws);
    return xws.vendor.lbn.uid;
  }
};
