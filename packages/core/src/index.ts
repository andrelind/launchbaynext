import * as lAssets from './assets/legacy';
import * as xAssets from './assets/xwa';

export type RuleSet = 'xwa' | 'legacy';

export type RulesetType = typeof xAssets;

export type { GameData, ManifestData } from './types';

export const assets: Record<string, RulesetType> = {
  xwa: xAssets,
  legacy: lAssets,
};

export default {
  ruleset: {
    xwa: xAssets,
    legacy: lAssets,
  },
};
