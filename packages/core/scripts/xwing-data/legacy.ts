import assets from '../../src/assets/legacy';
import { runMerge } from './merge';

const baseUrl =
  'https://raw.githubusercontent.com/SogeMoge/xwing-data2-legacy/master';

const runner = async () => {
  // @ts-ignore
  await runMerge(baseUrl, assets, 'legacy');
};

runner();
