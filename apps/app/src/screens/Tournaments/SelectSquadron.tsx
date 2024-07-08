import React, { useCallback, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { useNavigationSearchBarUpdate } from 'react-native-navigation-hooks/dist';
import { View } from 'react-native-ui-lib';
import SquadronComponent from '../../components/SquadronComponent';
import { pilotName } from '../../helpers/names';
import { XWS, xwsStore } from '../../stores/xws';
import { darkgrey, red } from '../../theme';

type Props = {
  onSelect: (s: XWS) => void;
};

export const SelectSquadronScreen: NavigationFunctionComponent<Props> = ({
  componentId,
  onSelect,
}) => {
  const lists = xwsStore(s => s.lists);

  const [needle, setNeedle] = useState<string>('');

  useNavigationSearchBarUpdate(e => {
    setNeedle(e.text.toLowerCase());
  }, componentId);

  const filtered = lists?.filter(
    list =>
      list.name?.toLowerCase().includes(needle) ||
      list.pilots?.filter(pilot =>
        pilotName(pilot, list.faction).toLowerCase().includes(needle),
      ).length > 0,
  );

  const renderItem = useCallback(
    (s: ListRenderItemInfo<XWS>) => (
      <SquadronComponent
        key={s.item.vendor.lbn.uid}
        {...s}
        onPress={() => {
          onSelect(s.item);
          Navigation.pop(componentId);
        }}
      />
    ),
    [componentId],
  );

  const renderSeparator = useCallback(() => <View height={10} />, []);
  const renderFooter = useCallback(() => <View height={60} />, []);

  return (
    <View flex>
      {Platform.OS === 'android' && (
        <View paddingH-10>
          <TextInput
            autoCapitalize={'none'}
            placeholder={'Search'}
            autoCorrect={false}
            value={needle}
            onChangeText={t => setNeedle(t.toLowerCase())}
            placeholderTextColor={darkgrey}
            underlineColorAndroid={darkgrey}
            style={{ color: 'white' }}
          />
        </View>
      )}
      <FlatList
        contentContainerStyle={styles.container}
        data={filtered || []}
        keyExtractor={(l: XWS) => l.vendor.lbn.uid}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  button: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    borderRadius: 100,
    padding: 8,
  },
});

SelectSquadronScreen.options = {
  topBar: {
    title: { text: 'Select Squadron' },
    searchBar: {
      visible: true,
      hideTopBarOnFocus: true,
      hideOnScroll: true,
      tintColor: red,
      placeholder: 'Search',
    },
  },
};

export default SelectSquadronScreen;
