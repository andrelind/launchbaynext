import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  ClipboardIcon,
  LinkIcon,
  SparklesIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { Assets, Button, Text, View } from 'react-native-ui-lib';
import { SimpleItem } from '../components/SimpleItem';
import { systemStore } from '../stores/system';
import { darkgrey, red, yellow } from '../theme';

type Props = {};

export const SettingsScreen: NavigationFunctionComponent<Props> = ({
  componentId,
}) => {
  const user = systemStore(s => s.user);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SimpleItem
        text={user?.name || 'LBN Account'}
        subtitle={user?.provider}
        icon={<UserIcon color={'white'} />}
        onPress={() =>
          Navigation.push(componentId, { component: { name: 'Account' } })
        }
      />
      <SimpleItem
        text={'Collection'}
        icon={<ClipboardIcon color={'white'} />}
        onPress={() =>
          Navigation.push(componentId, { component: { name: 'Collection' } })
        }
      />
      <SimpleItem
        text={'Community Links'}
        icon={<LinkIcon color={'white'} />}
        onPress={() =>
          Navigation.push(componentId, { component: { name: 'Community' } })
        }
      />

      <View padding-8 marginT-20>
        <Text secondary>Like the app?</Text>
        <Text secondary>Please consider donating</Text>
        <View row style={styles.donateContainer}>
          <SimpleItem
            text={'Patreon'}
            icon={<SparklesIcon color={yellow} />}
            hideArrow
            onPress={() => {
              Navigation.push(componentId, {
                component: {
                  name: 'Web',
                  passProps: { url: 'https://www.patreon.com/andrelind' },
                },
              });
            }}
          />
          <SimpleItem
            text={'PayPal'}
            icon={<SparklesIcon color={yellow} />}
            hideArrow
            onPress={() => {
              Navigation.push(componentId, {
                component: {
                  name: 'Web',
                  passProps: { url: 'https://paypal.me/launchbaynext' },
                },
              });
            }}
          />
        </View>
      </View>

      <Button
        marginT-20
        text80
        link
        color={red}
        label={'Privacy Policy'}
        linkColor={darkgrey}
        onPress={() => {
          Navigation.push(componentId, {
            component: {
              name: 'Web',
              passProps: { url: 'https://launchbaynext.app/privacy' },
            },
          });
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  donateContainer: { justifyContent: 'space-around' },
});

SettingsScreen.options = {
  topBar: { title: { text: 'More' } },
  bottomTab: { text: 'More', icon: Assets.icons.settings },
};

export default SettingsScreen;
