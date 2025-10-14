import 'react-native-get-random-values';

import { green, orange, red } from '@/src/theme';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { cleanupUpgrades2, loadShip2 } from 'lbn-core/src/helpers/loading';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import '../components/sheets';
import { syncWithServer } from '../helpers/api';
import { useTailwind } from '../helpers/tailwind';
import { useCollectionStore } from '../stores/collection';
import { useXwsStore } from '../stores/xws';

export const unstable_settings = {
  anchor: '(tabs)',
};

const toastConfig = {
  success: (props: any) => (
    <BaseToast {...props} style={{ ...props.style, borderLeftColor: green }} />
  ),
  info: (props: any) => (
    <BaseToast {...props} style={{ ...props.style, borderLeftColor: orange }} />
  ),
  error: (props: any) => (
    <ErrorToast {...props} style={{ ...props.style, borderLeftColor: red }} />
  ),
};

const runUpdates = async () => {
  console.log('Running updates...');

  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      Toast.show({
        type: 'info',
        text1: 'Updating content...',
        text2: 'This can take a few seconds, please wait',
      });
      await Updates.fetchUpdateAsync();
      setTimeout(async () => {
        await Updates.reloadAsync(
          {
            reloadScreenOptions: {
              backgroundColor: 'black',
              image: require('../../assets/icon_transparent.png'),
              imageResizeMode: 'contain',
              fade: true,
              spinner: {
                enabled: true,
                color: 'white',
                size: 'large',
              }
            }
          }
        );
      }, 300);
    }
  } catch (error) {
    // You can also add an alert() to see the error message
    // in case of an error when fetching updates.
    // alert(`Error fetching latest Expo update: ${error}`);
  }

  await syncWithServer(
    useXwsStore.getState(),
    useCollectionStore.getState()
  );
};

useXwsStore.subscribe(state => {
  if (!state.loaded) {
    // Reload all lists at startup to clean and recount points
    const lists = useXwsStore.getState().lists?.map(l => {
      if (!l.ruleset) {
        l.ruleset = 'amg';
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
        ruleset: l.ruleset || 'amg',
        vendor: {
          ...l.vendor,
          lbn: {
            ...l.vendor.lbn,
            tags: l.vendor.lbn.tags || [],
          },
        },
      };
    });
    useXwsStore.getState().setLoaded();
    if (lists) {
      useXwsStore.getState().setLists(lists);
    }
    setTimeout(runUpdates, 500);
  }
});


export default function RootLayout() {
  const { tw } = useTailwind();

  const [fontsLoaded] = useFonts({
    'xwing-miniatures': require('../../assets/fonts/xwing-miniatures.ttf'),
    'xwing-miniatures-ships': require('../../assets/fonts/xwing-miniatures-ships.ttf'),
  });

  console.log('RootLayout fontsLoaded', fontsLoaded);

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
      <ThemeProvider value={DarkTheme}>
        <SheetProvider>
          <Stack screenOptions={{
            headerStyle: { backgroundColor: tw.color('zinc-950'), },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: tw.color('zinc-950') },
          }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            <Stack.Screen name="ships" options={{
              presentation: 'modal',
              sheetAllowedDetents: [0.75, 0.95],
              sheetGrabberVisible: true,
              headerShown: false,
              contentStyle: {
                backgroundColor: isLiquidGlassAvailable() ? "transparent" : "white",
              },
            }} />

            <Stack.Screen name="upgrades" options={{
              presentation: 'modal',
              headerShown: false,
              contentStyle: {
                backgroundColor: "transparent",
              },
            }} />

            <Stack.Screen name="sheets/image" options={{
              presentation: 'containedTransparentModal',
              animation: 'fade_from_bottom',
              animationDuration: 150,
              sheetAllowedDetents: [0.75],
              sheetGrabberVisible: true,
              contentStyle: {
                backgroundColor: isLiquidGlassAvailable() ? "transparent" : "white",
              },
              headerShown: false,
            }} />

            <Stack.Screen name="sheets/createSquadron" options={{
              presentation: 'formSheet',
              sheetAllowedDetents: [0.45],
              sheetGrabberVisible: true,
              contentStyle: {
                backgroundColor: isLiquidGlassAvailable() ? "transparent" : "white",
              },
              headerShown: false,
            }} />
            <Stack.Screen name="sheets/loadouts" options={{
              presentation: 'formSheet',
              sheetAllowedDetents: [0.45],
              sheetGrabberVisible: true,
              contentStyle: {
                backgroundColor: isLiquidGlassAvailable() ? "transparent" : "white",
              },
              headerShown: false,
            }} />
          </Stack>
        </SheetProvider>
      </ThemeProvider>
      <StatusBar style='light' />
      <Toast config={toastConfig} topOffset={Constants.statusBarHeight} />
    </GestureHandlerRootView>
  );

}
