import { slotKeys } from 'lbn-core/src/helpers/enums';
import { Upgrade } from 'lbn-core/src/types';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import {
  Button,
  Colors,
  Constants,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib';
import { loadShip2, TShip } from '../helpers/loading';
import { xwsStore } from '../stores/xws';
import { blue, darkgrey, red, yellow } from '../theme';

type Props = {
  uid?: string;
};

type Value = 'full' | 'half' | 'destroyed';

export const CalculatorScreen: NavigationFunctionComponent<Props> = ({
  uid,
  componentId,
}) => {
  const xws = xwsStore(s => s.lists?.find(l => l.vendor.lbn.uid === uid));
  const ships =
    xws?.pilots.map(p => loadShip2(p, xws.faction, xws.format)) || [];

  const [rowState, setRowState] = useState<Value[]>(
    new Array(ships.length).fill('full'),
  );

  const toggleRow = (index: number) => {
    if (rowState[index] === 'full') {
      rowState[index] = 'half';
    } else if (rowState[index] === 'half') {
      rowState[index] = 'destroyed';
    } else if (rowState[index] === 'destroyed') {
      rowState[index] = 'full';
    }
    setRowState({ ...rowState });
  };

  const colorForState = (state: string) => {
    if (state === 'full') {
      return blue;
    }
    if (state === 'half') {
      return yellow;
    }
    return red;
  };

  const pointsForState = (state: string, fullPoints: number) => {
    if (state === 'full') {
      return 0;
    }
    if (state === 'half') {
      return Math.floor(fullPoints * 0.5);
    }
    return fullPoints;
  };

  const getThreshold = (ship: TShip) => {
    const shields = ship.stats.filter(s => s.type === 'shields')[0]
      ? ship.stats.filter(s => s.type === 'shields')[0].value
      : 0;

    const hull = ship.stats.filter(s => s.type === 'hull')[0]
      ? ship.stats.filter(s => s.type === 'hull')[0].value
      : 0;

    return Math.ceil((shields + hull) * 0.5);
  };

  const pointsForSquadron = () => {
    if (!xws) {
      return 0;
    }

    return (
      ships
        .map((s, i) => pointsForState(rowState[i], s.pilot?.cost || 0))
        .reduce((s, p) => s + p, 0) +
      (20 - xws.points)
    );
  };

  return (
    <View flex center>
      <View bg-white marginH-10 br50 style={styles.container}>
        <View row style={styles.nav}>
          <View flex centerV marginL-18>
            <Text text80M color={Colors.black}>
              {pointsForSquadron()} points
            </Text>
          </View>
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

        {ships.map((s, i) => {
          const points = pointsForState(rowState[i], s.pilot?.cost || 0);
          const threshold = getThreshold(s);
          const upgrades: Upgrade[] = [];
          slotKeys.forEach(key => {
            const list = s.upgrades ? s.upgrades[key] : undefined;
            if (list) {
              upgrades.push(...list);
            }
          });
          return (
            <TouchableOpacity
              key={`${s.xws}_${i}`}
              onPress={() => toggleRow(i)}>
              <View row centerV paddingV-10 paddingH-18>
                <View
                  height={10}
                  width={10}
                  br100
                  marginR-10
                  backgroundColor={colorForState(rowState[i])}
                />
                <View flex>
                  <Text text80M color={Colors.black}>
                    {i + 1}. {s.pilot?.name}
                  </Text>
                  <Text text80 color={Colors.black}>
                    Threshold: {threshold}
                  </Text>
                  {upgrades.length > 0 && (
                    <Text secondary text80>
                      {upgrades.map(u => u.sides[0].title).join(', ')}
                    </Text>
                  )}
                </View>
                <Text marginL-10 text80M color={Colors.black}>
                  {points}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '95%' },
  nav: { borderBottomColor: darkgrey, borderBottomWidth: 1 },
});

CalculatorScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default CalculatorScreen;
