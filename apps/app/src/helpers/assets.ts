import { Asset } from 'expo-asset';

const Assets = {
  loadAssetsGroup: async (name: string, assets: Record<string, any>) => {
    const keys = Object.keys(assets);
    const assetsToLoad = keys.map(k => assets[k]);
    await Asset.loadAsync(assetsToLoad);
    Object.keys(assets).forEach(k => {
      // @ts-ignore
      Assets[name][k] = assets[k];
    });
  },
  obstacles: {} as Record<string, any>,
};

Assets.loadAssetsGroup('obstacles', {
  coreasteroid0: require('../../assets/obstacles/coreasteroid0.png'),
  coreasteroid1: require('../../assets/obstacles/coreasteroid1.png'),
  coreasteroid2: require('../../assets/obstacles/coreasteroid2.png'),
  coreasteroid3: require('../../assets/obstacles/coreasteroid3.png'),
  coreasteroid4: require('../../assets/obstacles/coreasteroid4.png'),
  coreasteroid5: require('../../assets/obstacles/coreasteroid5.png'),
  core2asteroid0: require('../../assets/obstacles/core2asteroid0.png'),
  core2asteroid1: require('../../assets/obstacles/core2asteroid1.png'),
  core2asteroid2: require('../../assets/obstacles/core2asteroid2.png'),
  core2asteroid3: require('../../assets/obstacles/core2asteroid3.png'),
  core2asteroid4: require('../../assets/obstacles/core2asteroid4.png'),
  core2asteroid5: require('../../assets/obstacles/core2asteroid5.png'),
  gascloud1: require('../../assets/obstacles/gascloud1.png'),
  gascloud2: require('../../assets/obstacles/gascloud2.png'),
  gascloud3: require('../../assets/obstacles/gascloud3.png'),
  gascloud4: require('../../assets/obstacles/gascloud4.png'),
  gascloud5: require('../../assets/obstacles/gascloud5.png'),
  gascloud6: require('../../assets/obstacles/gascloud6.png'),
  pomasteroid1: require('../../assets/obstacles/pomasteroid1.png'),
  pomasteroid2: require('../../assets/obstacles/pomasteroid2.png'),
  pomasteroid3: require('../../assets/obstacles/pomasteroid3.png'),
  pomdebris1: require('../../assets/obstacles/pomdebris1.png'),
  pomdebris2: require('../../assets/obstacles/pomdebris2.png'),
  pomdebris3: require('../../assets/obstacles/pomdebris3.png'),
  vt49decimatordebris0: require('../../assets/obstacles/vt49decimatordebris0.png'),
  vt49decimatordebris1: require('../../assets/obstacles/vt49decimatordebris1.png'),
  vt49decimatordebris2: require('../../assets/obstacles/vt49decimatordebris2.png'),
  yt2400debris0: require('../../assets/obstacles/yt2400debris0.png'),
  yt2400debris1: require('../../assets/obstacles/yt2400debris1.png'),
  yt2400debris2: require('../../assets/obstacles/yt2400debris2.png'),
});

export default Assets;
