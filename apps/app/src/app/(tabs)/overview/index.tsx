
import { SimpleItem } from '@/src/components/SimpleItem';
import { useTailwind } from '@/src/helpers/tailwind';
import { trpc } from '@/src/helpers/trpc';
import { notifications } from '@/src/notifications';
import { useSystemStore } from '@/src/stores/system';
import { blue } from '@/src/theme';
import { Button, Host, HStack, Spacer } from '@expo/ui/swift-ui';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import useSwr from 'swr';

export default function OverviewScreen() {
  const { tw } = useTailwind();
  const router = useRouter();

  const user = useSystemStore((s) => s.user);

  const { data, isValidating, mutate } = useSwr('stats', async () => {
    try {
      // Fetch the overview stats from the TRPC endpoint
      const res = await trpc.stats.overview.query()
      console.log('Overview stats:', res);
      return res;
    } catch (error) {
      console.error('Error fetching overview stats:', error);
      return { xwa: 0, legacy: 0, amg: 0 }; // Return default values in case of error
    }
  });
  const total = (data?.xwa || 0) + (data?.legacy || 0) + (data?.amg || 0) || 1;


  return (
    <>
      <ScrollView
        style={tw`bg-zinc-950 flex-1`}
        contentContainerStyle={tw`gap-y-4 py-4`}
        refreshControl={<RefreshControl tintColor={tw.color('zinc-300')} refreshing={isValidating} onRefresh={() => {
          mutate(); // Re-fetch the data when the user pulls to refresh
        }} />}>

        {user && (
          <View style={tw`px-2`}>
            <Text style={tw`text-white font-semibold`}>Welcome, {user.name}</Text>
          </View>
        )}
        {!user && Platform.OS === 'ios' && (
          <Host style={tw`mx-2 py-3`} colorScheme={'dark'}>
            <Button color={tw.color('orange-500')} variant='glassProminent' onPress={() => {
              // navigation.navigate('Login');
              router.push('/overview/login');
            }} >
              Tap here to login
            </Button>
          </Host>
        )}
        {!user && Platform.OS !== 'ios' && (
          <TouchableOpacity
            style={tw`mx-2 py-3 justify-center items-center bg-orange-500 rounded-lg`}
            onPress={() => {
              // navigation.navigate('Login');
              router.push('/overview/login');
            }}
          >
            <Text style={tw`text-white font-medium`}>Tap here to login</Text>
          </TouchableOpacity>
        )}

        <View style={tw`px-2 gap-y-2`}>
          {notifications.sort((a, b) => b.id - a.id).map((n) => (
            <View key={n.id} style={tw`px-2 py-3 gap-y-1 bg-white dark:bg-zinc-800 rounded-md`}>
              <Text style={tw`text-zinc-900 dark:text-white font-semibold`}>{n.title}</Text>
              <Text style={tw`text-zinc-900 dark:text-white`}>{n.body}</Text>
            </View>

          ))}
        </View>

        <View style={tw`gap-y-2`}>
          <View style={tw`px-2 flex-row items-center justify-around`}>
            <View style={tw`flex-col items-center`}>
              <Text style={tw`text-white font-bold`}>XWA</Text>
              <Text style={tw`text-orange-500 text-2xl font-bold`}>{Math.round(((data?.xwa || 0) / total) * 100)}%</Text>
            </View>
            <View style={tw`flex-col items-center`}>
              <Text style={tw`text-white font-bold`}>2.0 Legacy</Text>
              <Text style={tw`text-orange-500 text-2xl font-bold`}>{Math.round(((data?.legacy || 0) / total) * 100)}%</Text>
            </View>
            <View style={tw`flex-col items-center`}>
              <Text style={tw`text-white font-bold`}>AMG</Text>
              <Text style={tw`text-orange-500 text-2xl font-bold`}>{Math.round(((data?.amg || 0) / total) * 100)}%</Text>
            </View>
          </View>

          <View>
            <Text style={tw`text-white font-semibold text-center`}>Total # of lists {total}</Text>
            <Text style={tw`text-white text-center mx-3`}>These figures are based on new and updated lists for logged in users last 30 days</Text>
          </View>
        </View>

        <View style={tw`px-2`}>
          <Text style={tw`text-white`}>Like the app?</Text>
          <Text style={tw`text-white`}>Please consider donating</Text>

          {Platform.OS === 'ios' ? (
            <Host style={tw`flex-1 mt-6`}>
              <HStack >
                <Spacer />
                <Button systemImage='star' variant='glass' onPress={async () => {
                  if (
                    await Linking.canOpenURL('https://www.patreon.com/andrelind')
                  ) {
                    Linking.openURL('https://www.patreon.com/andrelind');
                  }
                }} >
                  Patreon
                </Button>
                <Spacer />
                <Button systemImage='star' variant='glass' onPress={async () => {
                  if (
                    await Linking.canOpenURL('https://paypal.me/launchbaynext')
                  ) {
                    Linking.openURL('https://paypal.me/launchbaynext');
                  }
                }} >
                  PayPal
                </Button>
                <Spacer />
              </HStack>
            </Host>
          ) : (<View style={tw`flex-row items-center justify-around pt-2`}><SimpleItem
            text={'Patreon'}
            icon={<Feather name="star" size={20} color={tw.color('yellow-500')} />}
            hideArrow
            onPress={async () => {
              if (
                await Linking.canOpenURL('https://www.patreon.com/andrelind')
              ) {
                Linking.openURL('https://www.patreon.com/andrelind');
              }
            }}
          />
            <SimpleItem
              text={'PayPal'}
              icon={<Feather name="star" size={20} color={tw.color('yellow-500')} />}
              hideArrow
              onPress={async () => {
                if (
                  await Linking.canOpenURL('https://paypal.me/launchbaynext')
                ) {
                  Linking.openURL('https://paypal.me/launchbaynext');
                }
              }}
            />
          </View>)}


        </View>

        <View style={tw`flex-row items-center justify-center`}>
          <SimpleItem
            text={'Privacy Policy'}
            color={blue}
            hideArrow
            disableBackground
            onPress={async () => {
              if (
                await Linking.canOpenURL('https://launchbaynext.app/privacy')
              ) {
                Linking.openURL('https://launchbaynext.app/privacy');
              }
            }}
          />
        </View>

        {/* <Text style={tw`text-white text-center`}>{TRPC_URL}</Text> */}
      </ScrollView >
    </>
  );
};
