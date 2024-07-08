import { Pilot, UpgradeSide } from 'lbn-core/src/types';

export const pilotCardUri = (pilot?: Pilot) => ({
  uri:
    pilot?.image && pilot?.image !== '???'
      ? pilot?.image
      : `https://github.com/andrelind/x-wing2.0-project-goldenrod/blob/main/src/images/En/pilots/${pilot?.xws}.png?raw=true`,
});

export const pilotArtUri = (pilot?: Pilot) => ({
  uri:
    pilot?.artwork && pilot?.artwork !== '???'
      ? pilot?.artwork
      : `https://github.com/andrelind/x-wing2.0-project-goldenrod/blob/main/src/images/Art/pilots/${pilot?.xws}.png?raw=true`,
});

export const upgradeCardUri = (upgradeSide?: UpgradeSide) => ({
  uri: upgradeSide?.image,
});

export const upgradeArtUri = (upgradeSide?: UpgradeSide) => ({
  uri: upgradeSide?.artwork,
  backupUri: upgradeSide?.image,
});
