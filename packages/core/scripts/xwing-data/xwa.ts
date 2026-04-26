import assets from '../../src/assets/xwa';
import { manifest, revManifest } from '../../src/assets/xwa/manifest';
import { runMerge } from './merge';

const baseUrl = 'https://raw.githubusercontent.com/gregkash16/xwing-data2/master';

const runner = async () => {
  await runMerge(baseUrl, assets, 'xwa', manifest, revManifest);
};

runner();
