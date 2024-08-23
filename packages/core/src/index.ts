import * as aAssets from './assets/amg';
import * as lAssets from './assets/legacy';
import * as xAssets from './assets/xwa';

export type RuleSet = 'xwa' | 'legacy' | 'amg';

export type RulesetType = typeof xAssets;

export const assets = {
  xwa: xAssets,
  legacy: lAssets,
  amg: aAssets,
};

export default {
  ruleset: {
    xwa: xAssets,
    legacy: lAssets,
    amg: aAssets,
  },
};
