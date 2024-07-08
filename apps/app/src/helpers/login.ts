import { appleAuth } from '@invertase/react-native-apple-authentication';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { AccessToken, LoginResult } from 'react-native-fbsdk-next';
import { systemStore } from '../stores/system';
import { syncWithServer } from './api';
import { trpc } from './trpc';

export const loginWithApple = async () => {
  const response = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  const credentialState = await appleAuth.getCredentialStateForUser(
    response.user,
  );

  if (credentialState !== appleAuth.State.AUTHORIZED) {
    return false;
  }

  try {
    const accessToken = await trpc.auth.mutate({
      provider: 'Apple',
      providerId: response.user,
      name: response.fullName
        ? `${response.fullName.givenName} ${response.fullName.familyName}`
        : '',
      email: response.email || '',
    });

    systemStore.getState().setToken(accessToken);
    await syncWithServer();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const loginWithFacebook = async (error: any, result: LoginResult) => {
  if (!result) {
    console.log(error);
    return false;
  }

  const fbToken = await AccessToken.getCurrentAccessToken();
  if (!fbToken) {
    return false;
  }

  try {
    const accessToken = await trpc.auth.mutate({
      provider: 'Facebook',
      providerId: fbToken?.userID,
      name: 'Facebook user',
      email: '',
      access_token: fbToken?.accessToken,
    });
    systemStore.getState().setToken(accessToken);
    await syncWithServer();
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const loginWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    GoogleSignin.configure({
      webClientId:
        '611550568776-14t4152db2519sk2kkn31s040q06uodv.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false,
    });

    const userInfo = await GoogleSignin.signIn();
    const { user } = userInfo;
    if (user.id && user.name) {
      const accessToken = await trpc.auth.mutate({
        provider: 'Google',
        providerId: user.id,
        name: user.name,
        email: user.email,
      });
      console.log('Google accessToken', accessToken);

      systemStore.getState().setToken(accessToken);
      await syncWithServer();
      return true;
    }
  } catch (error) {
    if ((error as any).code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('Google SIGN_IN_CANCELLED');
    } else if ((error as any).code === statusCodes.IN_PROGRESS) {
      console.log('Google IN_PROGRESS');
    } else if (
      (error as any).code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
    ) {
      console.log('Google PLAY_SERVICES_NOT_AVAILABLE');
    } else {
      console.log('Google ', error);
    }
  }
  return false;
};
