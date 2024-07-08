import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { useNavigationModalDismiss } from 'react-native-navigation-hooks/dist';
import {
  Button,
  Chip,
  Constants,
  Text,
  TextField,
  View,
} from 'react-native-ui-lib';
import { smooth } from '../helpers/animation';
import { xwsStore } from '../stores/xws';
import { black, darkgrey, red } from '../theme';

type Props = {
  tags: string[];
  onTags: (tags: string[]) => void;
};

export const SelectTagsScreen: NavigationFunctionComponent<Props> = ({
  tags,
  onTags,
  componentId,
}) => {
  const [selected, setSelected] = useState<string[]>(tags);
  const [inputValue, setInputValue] = useState<string>();

  const allTags =
    xwsStore(s => s.lists)
      ?.map(xws => xws.vendor.lbn.tags || [])
      .reduce((a, c) => {
        (c || []).forEach(tag => {
          if (!a?.includes(tag)) {
            a?.push(tag);
          }
        });
        return a;
      }, [] as string[]) || [];

  useNavigationModalDismiss(() => {
    onTags(selected);
  }, componentId);

  return (
    <View flex center>
      <View bg-white marginH-10 br50 style={styles.container}>
        <View row style={styles.nav}>
          <View flex />
          <Button
            marginV-14
            marginR-18
            text80M
            link
            color={red}
            label={'Close'}
            onPress={() => {
              Navigation.dismissModal(componentId);
              onTags(selected);
            }}
          />
        </View>
        {selected.length > 0 && (
          <>
            <Text marginL-10 marginT-5 text80M color={black}>
              Selected tags
            </Text>
            <View row centerV margin-10 style={styles.wrap}>
              {selected.map((tag, i) => (
                <Chip
                  key={tag}
                  label={tag}
                  margin-2
                  dismissColor={darkgrey}
                  onDismiss={() => {
                    const tt = [...selected];
                    tt.splice(i, 1);
                    setSelected(tt);
                    smooth();
                  }}
                />
              ))}
            </View>
          </>
        )}
        <View padding-10>
          <TextField
            value={inputValue}
            onChangeText={setInputValue}
            placeholder={'New tag'}
            placeholderTextColor={darkgrey}
            underlineColor={{
              default: darkgrey,
              error: red,
              focus: red,
              disabled: darkgrey,
            }}
            onSubmitEditing={(e: any) => {
              if (e.nativeEvent.text.length > 0) {
                const tt = [...selected];
                if (!tt.includes(e.nativeEvent.text.trim())) {
                  tt.push(e.nativeEvent.text.trim());
                }
                setSelected(tt);
                setInputValue(undefined);
                smooth();
              }
            }}
          />

          <Text marginB-10 text80M color={black}>
            From other squadrons
          </Text>
          <View row centerV marginB-10 style={styles.wrap}>
            {allTags
              .filter(tag => !selected.includes(tag))
              .map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  margin-2
                  onPress={() => {
                    const tt = [...selected];
                    if (!tt.includes(tag)) {
                      tt.push(tag);
                    }
                    setSelected(tt);
                    smooth();
                  }}
                />
              ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '85%' },
  nav: { borderBottomColor: darkgrey, borderBottomWidth: 1 },
  icon: { width: 35 },
  wrap: { flexWrap: 'wrap' },
});

SelectTagsScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default SelectTagsScreen;
