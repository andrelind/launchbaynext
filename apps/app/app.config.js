const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  expo: {
    name: IS_DEV ? 'LBN (dev)' : 'Launch Bay Next',
    slug: 'lbn',
    scheme: 'lbn',
    version: '4.1.0',
    runtimeVersion: { policy: 'appVersion' },
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#09090b',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      buildNumber: '1',
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? 'se.andrelind.launch-bay-2.dev' : 'se.andrelind.launch-bay-2',
      associatedDomains: ['applinks:launchbaynext.app'],
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      versionCode: 54,
      package: IS_DEV ? 'com.launchbaynext.dev' : 'com.launchbaynext',
      edgeToEdgeEnabled: true,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#09090b',
      },
      permissions: ['android.permission.CAMERA', 'android.permission.RECORD_AUDIO'],
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    updates: { url: 'https://u.expo.dev/ef07a76c-686b-488d-a99c-41839da38ffc' },
    plugins: [
      ['expo-camera', { cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera' }],
      ['expo-font', { fonts: ['./assets/fonts/'] }],
      'expo-asset',
      'expo-web-browser',
      'expo-router',
      ['expo-drawable-assets', './assets/drawables'],
    ],
    extra: {
      eas: {
        projectId: 'ef07a76c-686b-488d-a99c-41839da38ffc',
      },
    },
    experiments: {
      reactCompiler: true,
    },
  },
};
