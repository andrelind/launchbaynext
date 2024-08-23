import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import * as Updates from 'expo-updates';
import { cleanupUpgrades2, loadShip2 } from 'lbn-core/src/helpers/loading';
import { useEffect } from 'react';
import { AppState, StatusBar } from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-get-random-values';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { RootStackComponent } from './Navigation';
import './components/sheets';
import { syncWithServer } from './helpers/api';
import { useTailwind } from './helpers/tailwind';
import { collectionStore } from './stores/collection';
import { xwsStore } from './stores/xws';
import { green, orange, red, yellow } from './theme';

const runUpdates = async () => {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      Toast.show({
        type: 'info',
        text1: 'Updating system...',
        text2: 'This can take a few seconds, please wait',
      });
      await Updates.fetchUpdateAsync();
      setTimeout(async () => {
        await Updates.reloadAsync();
      }, 300);
    }
  } catch (error) {
    // You can also add an alert() to see the error message
    // in case of an error when fetching updates.
    // alert(`Error fetching latest Expo update: ${error}`);
  }

  await syncWithServer(
    xwsStore.getState(),
    collectionStore.getState()
  );
};

xwsStore.subscribe(state => {
  if (!state.loaded) {
    // Reload all lists at startup to clean and recount points
    const lists = xwsStore.getState().lists?.map(l => {
      if (!l.ruleset) {
        l.ruleset = 'xwa';
      }

      const pilots = l.pilots
        .filter(p => {
          try {
            loadShip2(p, l);
            return true;
          } catch (error) {
            return false;
          }
        })
        .map(p => {
          const s = loadShip2(p, l);
          const upgrades = cleanupUpgrades2(p.upgrades, s, l);
          return {
            ...p,
            points: s.pilot?.cost || 0,
            upgrades,
          };
        });
      return {
        ...l,
        pilots,
        points: pilots.reduce((a, c) => a + c.points, 0),
        obstacles: l.obstacles?.map(o => o.replace('obstacle-', '')),
        ruleset: l.ruleset || 'xwa',
        vendor: {
          ...l.vendor,
          lbn: {
            ...l.vendor.lbn,
            tags: l.vendor.lbn.tags || [],
          },
        },
      };
    });
    xwsStore.getState().setLoaded();
    if (lists) {
      xwsStore.getState().setLists(lists);
    }

    setTimeout(runUpdates, 500);
  }
});

const toastConfig = {
  success: (props: any) => (
    <BaseToast {...props} style={{ ...props.style, borderLeftColor: green }} />
  ),
  info: (props: any) => (
    <BaseToast {...props} style={{ ...props.style, borderLeftColor: yellow }} />
  ),
  error: (props: any) => (
    <ErrorToast {...props} style={{ ...props.style, borderLeftColor: red }} />
  ),
};

export default () => {
  const { tw } = useTailwind();
  const [fontsLoaded] = useFonts({
    'xwing-miniatures': require('./assets/fonts/xwing-miniatures.ttf'),
    'xwing-miniatures-ships': require('./assets/fonts/xwing-miniatures-ships.ttf'),
  });

  console.log({ fontsLoaded });

  useEffect(() => {
    // Kickstart the stores
    const memListener = AppState.addEventListener('memoryWarning', (_s) => {
      Image.clearMemoryCache();
    });

    const handler = AppState.addEventListener(
      'change',
      async (nextAppState) => {
        console.log({ nextAppState });
        if (nextAppState === 'active') {
          setTimeout(runUpdates, 100);
        }
      }
    );
    setTimeout(runUpdates, 200);

    return () => {
      memListener.remove();
      handler.remove();
    };
  }, []);

  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <SheetProvider>
        <NavigationContainer
          theme={{
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: orange,
              background: tw.color('zinc-950')!,
              card: tw.color('zinc-900')!,
            },
          }}
        >
          <StatusBar barStyle={'light-content'} translucent />

          <RootStackComponent />
        </NavigationContainer>
      </SheetProvider>
      <Toast config={toastConfig} topOffset={Constants.statusBarHeight} />

    </GestureHandlerRootView>
  );
};
