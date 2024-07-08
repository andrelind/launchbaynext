import * as lAssets from './assets/legacy';
import * as xAssets from './assets/xwa';
import * as Colors from './colors';
import * as Helpers from './helpers';

export type RuleSet = 'xwa' | 'legacy';

export type RulesetType = typeof xAssets;

export const assets = {
  xwa: xAssets,
  legacy: lAssets,
};
export const colors = Colors;
export const helpers = Helpers;

export default {
  ruleset: {
    xwa: xAssets,
    legacy: lAssets,
  },
  colors: Colors,
  helpers: Helpers,
};
