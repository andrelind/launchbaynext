import { factionKeys } from 'lbn-core/src/helpers/enums';
import { xwingIcons } from 'lbn-core/src/helpers/icon';
import { FactionKey } from 'lbn-core/src/types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ClipboardIcon, QrCodeIcon } from 'react-native-heroicons/outline';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { Constants, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { colorForFactionKey } from '../helpers/colors';
import { factionFromKey } from '../helpers/convert';
import { darkgrey } from '../theme';

type Props = {
  onClipboard: () => void;
  onQRCode: () => void;
  onFaction: (f: FactionKey) => void;
};

export const SelectFactionScreen: NavigationFunctionComponent<Props> = ({
  onClipboard,
  onQRCode,
  onFaction,
  componentId,
}) => {
  return (
    <View flex center>
      <View bg-white marginH-10 br50 style={styles.container}>
        <View padding-10>
          <TouchableOpacity
            paddingV-8
            row
            centerV
            onPress={async () => {
              await Navigation.dismissModal(componentId);
              onClipboard();
            }}>
            <View style={styles.icon} center>
              <ClipboardIcon color={'black'} />
            </View>
            <Text color={'black'} text80M>
              Import from clipboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            paddingV-8
            row
            centerV
            onPress={async () => {
              await Navigation.dismissModal(componentId);
              onQRCode();
            }}>
            <View style={styles.icon} center>
              <QrCodeIcon color={'black'} />
            </View>
            <Text color={'black'} text80M>
              Import from QR
            </Text>
          </TouchableOpacity>
          <View backgroundColor={darkgrey} height={1} marginH-20 marginV-10 />

          {factionKeys.map(f => (
            <TouchableOpacity
              key={f}
              paddingV-8
              row
              centerV
              onPress={async () => {
                await Navigation.dismissModal(componentId);
                onFaction(f);
              }}>
              <Text
                center
                xwing25
                style={styles.icon}
                color={colorForFactionKey(f, true)}>
                {xwingIcons(f)}
              </Text>
              <Text color={'black'} text80M>
                {factionFromKey(f)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '85%' },
  nav: { borderBottomColor: darkgrey, borderBottomWidth: 1 },
  icon: { width: 35 },
});

SelectFactionScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default SelectFactionScreen;
