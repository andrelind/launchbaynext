import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { LoginButton, Settings } from 'react-native-fbsdk-next';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist';
import { Button, View } from 'react-native-ui-lib';
import { SimpleItem } from '../components/SimpleItem';
import {
  loginWithApple,
  loginWithFacebook,
  loginWithGoogle,
} from '../helpers/login';
import { systemStore } from '../stores/system';
import { darkgrey } from '../theme';

type Props = {};

export const AccountScreen: NavigationFunctionComponent<Props> = ({
  componentId,
}) => {
  const token = systemStore(s => s.token);
  const setToken = systemStore(s => s.setToken);

  useNavigationComponentDidAppear(() => {
    Settings.initializeSDK();
  }, componentId);

  useEffect(
    () => {
      if (Platform.OS !== 'ios') {
        return;
      }
      return appleAuth.onCredentialRevoked(async () => {
        setToken(undefined);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (token) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <SimpleItem text="Logout" onPress={() => setToken(undefined)} />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View centerH>
        {Platform.OS === 'ios' && (
          <AppleButton
            style={styles.button}
            onPress={async () => {
              const loggedIn = await loginWithApple();
              if (loggedIn) {
                Navigation.pop(componentId);
              }
            }}
          />
        )}
        <LoginButton
          style={styles.button}
          permissions={['email']}
          onLoginFinished={async (e, r) => {
            const loggedIn = await loginWithFacebook(e, r);
            if (loggedIn) {
              Navigation.pop(componentId);
            }
          }}
        />
        <View style={styles.google}>
          <GoogleSigninButton
            onPress={async () => {
              const loggedIn = await loginWithGoogle();
              if (loggedIn) {
                Navigation.pop(componentId);
              }
            }}
          />
        </View>

        <Button
          marginT-20
          text80
          link
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  button: {
    flex: 1,
    height: 40,
    width: 231,
    margin: 10,
  },
  google: {
    flex: 1,
    height: 48,
    width: 231,
    margin: 10,
  },
});

AccountScreen.options = {
  topBar: { title: { text: 'Account' } },
};

export default AccountScreen;
