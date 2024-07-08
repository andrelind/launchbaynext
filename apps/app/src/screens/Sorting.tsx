import { StyleSheet } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {
  Button,
  Constants,
  RadioButton,
  RadioGroup,
  Text,
  View,
} from 'react-native-ui-lib';
import { smooth } from '../helpers/animation';
import { SortingType, filterStore } from '../stores/filter';
import { black, darkgrey, red } from '../theme';

const sortings: SortingType[] = [
  'Alphabetically',
  'Faction',
  'Points',
  'Wins',
  'Created Date',
  'Format',
  //   'Custom',
];

type Props = {
  //   onFormat: (f: Format) => void;
};

export const SortingScreen: NavigationFunctionComponent<Props> = ({
  //   onFormat,
  componentId,
}) => {
  const { sorting, setFirstSorting, setSecondSorting } = filterStore(
    s => ({
      sorting: s.sorting,
      setFirstSorting: s.setFirstSorting,
      setSecondSorting: s.setSecondSorting,
    }),
  );

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
          <View padding-10>
            <Text text80M color={black}>
              First sorting
            </Text>
            <RadioGroup
              paddingH-8
              initialValue={sorting.first}
              onValueChange={(v: SortingType) => {
                smooth();
                setFirstSorting(v);
              }}>
              {sortings.map(l => (
                <RadioButton
                  key={l}
                  value={l}
                  label={l}
                  marginV-10
                  labelStyle={styles.label}
                />
              ))}
            </RadioGroup>
          </View>
          <View padding-10>
            <Text text80M color={black}>
              Second sorting
            </Text>
            <RadioGroup
              paddingH-8
              initialValue={sorting.second}
              onValueChange={(v: SortingType) => {
                smooth();
                setSecondSorting(v);
              }}>
              {sortings.map(l => (
                <RadioButton
                  key={l}
                  value={l}
                  label={l}
                  marginV-10
                  labelStyle={styles.label}
                />
              ))}
            </RadioGroup>
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
  label: { color: black },
});

SortingScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default SortingScreen;
