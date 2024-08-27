const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  expo: {
    name: IS_DEV ? 'LBN (dev)' : 'Launch Bay Next',
    slug: 'lbn',
    version: '4.0.0',
    runtimeVersion:{ policy: 'appVersion' },
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
      bundleIdentifier: IS_DEV
        ? 'se.andrelind.launch-bay-2.dev'
        : 'se.andrelind.launch-bay-2',
      associatedDomains: ['applinks:launchbaynext.app'],
    },
    android: {
      versionCode: 52,
      package: IS_DEV ? 'com.launchbaynext.dev' : 'com.launchbaynext',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#09090b',
      },
      permissions: [
        'android.permission.CAMERA',
        'android.permission.RECORD_AUDIO',
      ],
    },
    web: {
      favicon: './assets/favicon.png',
    },
    updates: { url: 'https://u.expo.dev/ef07a76c-686b-488d-a99c-41839da38ffc' },
    plugins: [
      [
        'expo-camera',
        { cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera' },
      ],
      'expo-apple-authentication',
      'expo-font',
    ],
    extra: {
      eas: {
        projectId: 'ef07a76c-686b-488d-a99c-41839da38ffc',
      },
    },
  },
};
