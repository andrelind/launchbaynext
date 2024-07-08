import { factionKeys, formats } from 'lbn-core/src/helpers/enums';
import { Platform, StyleSheet } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {
  Button,
  Checkbox,
  Chip,
  Constants,
  Text,
  View,
} from 'react-native-ui-lib';
import { smooth } from '../helpers/animation';
import { colorForFactionKey, colorForFormat } from '../helpers/colors';
import { factionFromKey } from '../helpers/convert';
import { filterStore } from '../stores/filter';
import { xwsStore } from '../stores/xws';
import { black, darkgrey, red } from '../theme';

type Props = {
  //   onFormat: (f: Format) => void;
};

export const FilterScreen: NavigationFunctionComponent<Props> = ({
  //   onFormat,
  componentId,
}) => {
  const { filters, setFilters, tags, setTags } = filterStore(
    s => ({
      filters: s.filters,
      setFilters: s.setFilters,
      tags: s.tags,
      setTags: s.setTags,
    }),
  );

  const allTags = xwsStore(s => s.lists)
    ?.map(xws => xws?.vendor?.lbn?.tags)
    ?.reduce((a, c) => {
      (c || []).forEach(tag => {
        if (!a?.includes(tag)) {
          a?.push(tag);
        }
      });
      return a;
    }, []);

  for (const tag of tags) {
    if (!allTags?.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    }
  }

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
            onPress={() => Navigation.dismissModal(componentId)}
          />
        </View>
        <View row>
          <View padding-10 flex>
            <Text text80M color={black}>
              Faction
            </Text>
            {factionKeys.map(f => (
              <Checkbox
                key={f}
                marginV-5
                outline
                color={colorForFactionKey(f, true)}
                label={factionFromKey(f)}
                labelStyle={{
                  color: colorForFactionKey(f, true),
                  flexWrap: 'wrap',
                }}
                value={Boolean(filters[f])}
                onValueChange={v => {
                  Platform.OS === 'ios' && smooth();
                  if (!v) {
                    delete filters[f];
                    setFilters({ ...filters });
                  } else {
                    setFilters({ ...filters, [f]: v });
                  }
                }}
              />
            ))}
          </View>
          <View padding-10 flex>
            <Text text80M color={black}>
              Format
            </Text>
            {formats.map(f => (
              <Checkbox
                key={f}
                marginV-5
                outline
                color={colorForFormat(f)}
                label={f}
                labelStyle={{ color: colorForFormat(f) }}
                value={Boolean(filters[f])}
                onValueChange={v => {
                  Platform.OS === 'ios' && smooth();
                  if (!v) {
                    delete filters[f];
                    setFilters({ ...filters });
                  } else {
                    setFilters({ ...filters, [f]: v });
                  }
                }}
              />
            ))}
          </View>
        </View>
        <View paddingH-10 paddingB-10>
          <Text text80M color={black}>
            Tags
          </Text>
          <View row centerV style={styles.wrap}>
            {allTags?.map(f => (
              <Chip
                key={f}
                label={f}
                marginV-2
                containerStyle={
                  tags.includes(f) ? styles.chipActive : styles.chipInactive
                }
                onPress={() => {
                  Platform.OS === 'ios' && smooth();
                  if (tags.includes(f)) {
                    setTags([...tags.filter(t => t !== f)]);
                  } else {
                    setTags([...tags, f]);
                  }
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
  chipActive: { borderColor: black, marginHorizontal: 2 },
  chipInactive: { borderColor: darkgrey, marginHorizontal: 2 },
});

FilterScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default FilterScreen;
