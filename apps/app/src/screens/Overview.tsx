import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import React, { FC, useRef } from 'react';
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SimpleItem } from '../components/SimpleItem';
import { useTailwind } from '../helpers/tailwind';
import { captureScroll, getSpoingyTransform } from '../helpers/ui';
import { systemStore } from '../stores/system';
import { yellow } from '../theme';
import { ListStackParams } from '../types/navigation';

const height = 120;

type Props = NativeStackScreenProps<ListStackParams, 'Squadrons'>;

export const OverviewScreen: FC<Props> = ({ navigation }) => {
  const { tw } = useTailwind();
  const scrollY = useRef(new Animated.Value(0)).current;

  const user = systemStore((s) => s.user);

  return (
    <View style={tw`flex-1`}>
      <ScrollView {...captureScroll} contentContainerStyle={tw`gap-y-2`}>
        <Animated.Image
          source={require('../assets/swz01_anc_slider.jpg')}
          style={[
            tw`w-full`,
            { height, transform: getSpoingyTransform(scrollY, height) },
          ]}
          resizeMode="contain"
        />

        {user && (
          <TouchableOpacity
            style={tw`px-2 py-4`}
            onPress={() => {
              // navigation.navigate('Profile');
            }}
          >
            <Text style={tw`text-white`}>Welcome, {user.name}</Text>
          </TouchableOpacity>
        )}
        {!user && (
          <TouchableOpacity
            style={tw`mx-2 py-3 justify-center items-center bg-orange-500 rounded-lg`}
            onPress={() => {
              // navigation.navigate('Login');
            }}
          >
            <Text style={tw`text-white font-medium`}>Tap here to login</Text>
          </TouchableOpacity>
        )}

        <View style={tw`px-2`}>
          <Text style={tw`text-white`}>Like the app?</Text>
          <Text style={tw`text-white`}>Please consider donating</Text>
          <View style={tw`flex-row items-center justify-around`}>
            <SimpleItem
              text={'Patreon'}
              icon={<Feather name="star" size={20} color={yellow} />}
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
              icon={<Feather name="star" size={20} color={yellow} />}
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
      </ScrollView>
    </View>
  );
};
