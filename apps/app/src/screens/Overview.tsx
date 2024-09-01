import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import React, { FC, useLayoutEffect } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { XWingFont } from '../components/fonts/XWingIcon';
import { SimpleItem } from '../components/SimpleItem';
import { useTailwind } from '../helpers/tailwind';
import { captureScroll } from '../helpers/ui';
import { notifications } from '../notifications';
import { systemStore } from '../stores/system';
import { blue } from '../theme';
import { OverviewStackParams } from '../types/navigation';


type Props = NativeStackScreenProps<OverviewStackParams, 'Overview'>;

export const OverviewScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();

  const { user } = systemStore((s) => ({ user: s.user }));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={tw`items-center flex-row gap-x-1`}>
          <XWingFont style={tw`text-2xl`} icons={['coordinate']} color={tw.color('orange-500')} />
          <View>
            <Text style={tw`text-xs font-normal text-zinc-400 -mb-1`}>
              André Lind's
            </Text>
            <Text style={tw`text-base font-bold text-white`}>
              Launch Bay Next
            </Text>
          </View>
        </View>

      ),
      headerRight: user ? () => (
        <TouchableOpacity
          style={tw`px-2 py-4`}
          onPress={() => {
            navigation.push('Account');
          }}
        >
          <Feather name='user' size={20} color={tw.color('orange-500')} />
        </TouchableOpacity>
      ) : undefined,
    });
  }, [navigation, user]);

  return (
    <View style={tw`flex-1`}>
      <ScrollView {...captureScroll} contentContainerStyle={tw`gap-y-2 py-4`}>


        {user && (
          <View style={tw`px-2`}>
            <Text style={tw`text-white font-semibold`}>Welcome, {user.name}</Text>
          </View>
        )}
        {!user && (
          <TouchableOpacity
            style={tw`mx-2 py-3 justify-center items-center bg-orange-500 rounded-lg`}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={tw`text-white font-medium`}>Tap here to login</Text>
          </TouchableOpacity>
        )}

        <View style={tw`px-2 gap-y-2`}>
          {notifications.sort((a, b) => b.id - a.id).map((n) => (
            <View key={n.id} style={tw`px-2 py-3 gap-y-1 bg-white dark:bg-zinc-800 rounded-md`}>
              <Text style={tw`text-zinc-900 font-semibold`}>{n.title}</Text>
              <Text style={tw`text-zinc-900`}>{n.body}</Text>
            </View>

          ))}
        </View>

        <View style={tw`px-2`}>
          <Text style={tw`text-white`}>Like the app?</Text>
          <Text style={tw`text-white`}>Please consider donating</Text>
          <View style={tw`flex-row items-center justify-around`}>
            <SimpleItem
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
          </View>
        </View>

        <View style={tw`flex-row items-center justify-center`}>
          <SimpleItem
            text={'Privacy Policy'}
            color={blue}
            hideArrow
            onPress={async () => {
              if (
                await Linking.canOpenURL('https://launchbaynext.app/privacy')
              ) {
                Linking.openURL('https://launchbaynext.app/privacy');
              }
            }}
          />

        </View>

      </ScrollView>
    </View>
  );
};
