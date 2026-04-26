import assets from '../../src/assets/legacy';
import { manifest, revManifest } from '../../src/assets/legacy/manifest';
import { runMerge } from './merge';

const baseUrl = 'https://raw.githubusercontent.com/SogeMoge/xwing-data2-legacy/master';

const runner = async () => {
  await runMerge(baseUrl, assets, 'legacy', manifest, revManifest);
};

runner();
