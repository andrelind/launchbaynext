const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter(
      (ext) => ext !== 'svg' && ext !== 'scss'
    ),
    sourceExts: [...resolver.sourceExts, 'svg', 'scss', 'sass'],
  };

  return config;
})();
