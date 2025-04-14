import assets from '../../src/assets/xwa';
import { runMerge } from './merge';

const baseUrl = 'https://raw.githubusercontent.com/gregkash16/xwing-data2/master';

const runner = async () => {
  // @ts-ignore
  await runMerge(baseUrl, assets, 'xwa');
};

runner();
