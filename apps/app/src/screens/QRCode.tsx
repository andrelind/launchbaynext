import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button, Constants, View } from 'react-native-ui-lib';
import { darkgrey, red } from '../theme';

type Props = {
  onReadQRCode: (data: string) => void;
};

export const QRCodeScreen: NavigationFunctionComponent<Props> = ({
  componentId,
  onReadQRCode,
}) => {
  return (
    <View flex center>
      <View bg-white marginH-10 br50 style={styles.container}>
        <View row right style={styles.nav}>
          <Button
            marginV-14
            marginR-18
            text80M
            link
            color={red}
            label={'Close'}
            onPress={() => Navigation.dismissModal(componentId)}
          />
        </View>

        <View center style={styles.wrapper}>
          <QRCodeScanner
            cameraProps={{ captureAudio: false }}
            // @ts-ignore
            cameraStyle={styles.camera}
            onRead={({ data }) => {
              Navigation.dismissModal(componentId);
              onReadQRCode?.(data);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: { height: 280, width: 280, alignSelf: 'center' },
  container: { width: '85%' },
  wrapper: { height: 320 },
  nav: { borderBottomColor: darkgrey, borderBottomWidth: 1 },
});

QRCodeScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default QRCodeScreen;
