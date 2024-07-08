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
import { loadShip2, TShip } from '../../helpers/loading';
import { XWS } from '../../stores/xws';
import { blue, darkgrey, red, yellow } from '../../theme';

type Props = {
  p1?: XWS;
  p2?: XWS;
};

type Value = 'full' | 'half' | 'destroyed';

export const MultiCalculatorScreen: NavigationFunctionComponent<Props> = ({
  p1,
  p2,
  componentId,
}) => {
  const p1Ships =
    p1?.pilots.map(p =>
      loadShip2(p, p1?.faction || 'rebelalliance', p1?.format || 'Extended'),
    ) || [];
  const p2Ships =
    p2?.pilots.map(p =>
      loadShip2(p, p2?.faction || 'rebelalliance', p2?.format || 'Extended'),
    ) || [];

  const [p1Rows, setP1Rows] = useState<Value[]>(
    new Array(p1Ships.length).fill('full'),
  );
  const [p2Rows, setP2Rows] = useState<Value[]>(
    new Array(p2Ships.length).fill('full'),
  );

  const toggleRow = (index: number) => {
    if (p1Rows[index] === 'full') {
      p1Rows[index] = 'half';
    } else if (p1Rows[index] === 'half') {
      p1Rows[index] = 'destroyed';
    } else if (p1Rows[index] === 'destroyed') {
      p1Rows[index] = 'full';
    }
    setP1Rows({ ...p1Rows });
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
      return Math.ceil(fullPoints * 0.5);
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

  const pointsForSquadron = (ships: TShip[], xws?: XWS) => {
    if (!ships || !xws) {
      return 0;
    }

    return (
      ships
        .map((s, i) => pointsForState(p1Rows[i], s.pointsWithUpgrades))
        .reduce((s, p) => s + p, 0) +
      (200 - xws.points)
    );
  };

  return (
    <View flex center>
      <View bg-white marginH-10 br50 style={styles.container}>
        <View row style={styles.nav}>
          <View flex centerV marginL-18>
            <Text text80M color={Colors.black}>
              {pointsForSquadron(p1Ships, p1)} points
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

        {p1Ships.map((s, i) => {
          const points = pointsForState(p1Rows[i], s.pointsWithUpgrades);
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
                  backgroundColor={colorForState(p1Rows[i])}
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

MultiCalculatorScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default MultiCalculatorScreen;
