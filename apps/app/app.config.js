const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  expo: {
    name: IS_DEV ? 'LBN (dev)' : 'Launch Bay Next',
    slug: 'lbn',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      runtimeVersion: '1.0.0',
      supportsTablet: true,
      bundleIdentifier: IS_DEV
        ? 'se.andrelind.launch-bay-2.dev'
        : 'se.andrelind.launch-bay-2',
      associatedDomains: ['applinks:launchbaynext.app'],
      usesAppleSignIn: true,
    },
    android: {
      runtimeVersion: {
        policy: 'appVersion',
      },
      package: IS_DEV ? 'com.launchbaynext.dev' : 'com.launchbaynext',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
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
    plugins: ['expo-camera', 'expo-apple-authentication', 'expo-font'],
    extra: {
      eas: {
        projectId: 'ef07a76c-686b-488d-a99c-41839da38ffc',
      },
    },
  },
};
