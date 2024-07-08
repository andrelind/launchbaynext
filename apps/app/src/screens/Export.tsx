import { setStringAsync, setUrlAsync } from 'expo-clipboard';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ClipboardIcon } from 'react-native-heroicons/outline';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import QRCode from 'react-native-qrcode-svg';
import { Button, Constants, View } from 'react-native-ui-lib';
import {
  exportAsTTS,
  exportAsText,
  exportAsXws,
  serialize,
} from '../helpers/export';
import { XWS } from '../stores/xws';
import { darkgrey, red } from '../theme';

type Props = {
  xws?: XWS;
  onMessage?: (s: string) => void;
};

export const ExportScreen: NavigationFunctionComponent<Props> = ({
  xws,
  onMessage,
  componentId,
}) => {
  const [, setClipboard] = useClipboard();

  if (!xws) {
    return null;
  }

  const lbx = serialize(xws);
  const url = `https://launchbaynext.app/?lbx=${lbx}`;
  const printUrl = `https://launchbaynext.app/print?lbx=${lbx}`;

  const close = (fn: () => void | Promise<void>, message: string) => {
    fn();
    onMessage?.(message);
    Navigation.dismissModal(componentId);
  };

  return (
    <View flex center>
      <View bg-white center marginH-10 br50>
        <View row style={styles.nav}>
          <View flex />
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
        <View center padding-18>
          <View center>
            <QRCode value={url} size={175} />
          </View>
          <View row marginV-10 marginT-20>
            <Button
              flex
              marginR-5
              text70M
              link
              color={red}
              label={'XWS'}
              iconSource={() => <ClipboardIcon color={red} />}
              onPress={() =>
                close(() => {
                  setStringAsync(exportAsXws(xws));
                }, 'XWS has been copied to your clipboard')
              }
            />
            <Button
              flex
              marginL-5
              text70M
              link
              color={red}
              label={'Link'}
              iconSource={() => <ClipboardIcon color={red} />}
              onPress={() =>
                close(
                  () => setUrlAsync(url),
                  'Squadron url has been copied to your clipboard'
                )
              }
            />
          </View>

          <View row marginV-10>
            <Button
              flex
              marginR-5
              text70M
              link
              color={red}
              label={'TTS'}
              iconSource={() => <ClipboardIcon color={red} />}
              onPress={() =>
                close(() => {
                  setStringAsync(exportAsTTS(xws));
                }, 'TTS export has been copied to your clipboard')
              }
            />
            <Button
              flex
              marginL-5
              text70M
              link
              color={red}
              label={'Text'}
              iconSource={() => <ClipboardIcon color={red} />}
              onPress={() =>
                close(() => {
                  setStringAsync(exportAsText(xws));
                }, 'Squadron text has been copied to your clipboard')
              }
            />
          </View>
          <View row marginV-10>
            <Button
              flex
              marginR-5
              text70M
              link
              color={red}
              label={'Print URL'}
              iconSource={() => <ClipboardIcon color={red} />}
              onPress={() =>
                close(
                  () => setUrlAsync(printUrl),
                  'Print url has been copied to your clipboard'
                )
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: { borderBottomColor: darkgrey, borderBottomWidth: 1 },
});

ExportScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default ExportScreen;
