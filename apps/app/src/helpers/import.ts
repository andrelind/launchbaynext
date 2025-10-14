import { xwsFromString } from 'lbn-core/src/helpers/import+export';
import { useXwsStore } from '../stores/xws';

export const importFromClipboard = async (text: string): Promise<string | undefined> => {
  const { importSquadron } = useXwsStore.getState();

  const xws = await xwsFromString(text);
  if (xws) {
    importSquadron(xws);
    return xws.vendor.lbn.uid;
  }
};
