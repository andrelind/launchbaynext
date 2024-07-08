import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Navigation,
  NavigationFunctionComponent,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import { useNavigationModalDismiss } from 'react-native-navigation-hooks/dist';
import {
  Assets,
  Button,
  Card,
  Colors,
  Constants,
  Image,
  Text,
  View,
} from 'react-native-ui-lib';
import { xwsStore } from '../stores/xws';
import { darkgrey, red } from '../theme';

const list = [
  { n: 'Core', t: 'coreasteroid', count: 6, offset: 0 },
  { n: 'Force Awakens Core', t: 'core2asteroid', count: 6, offset: 0 },
  {
    n: 'VT49 Decimator',
    t: 'vt49decimatordebris',
    count: 3,
    offset: 0,
  },
  { n: 'YT2400', t: 'yt2400debris', count: 3, offset: 0 },
  { n: 'Gas Clouds', t: 'gascloud', count: 6, offset: 1 },
  { n: 'Pride of Mandalore Asteroids', t: 'pomasteroid', count: 3, offset: 1 },
  { n: 'Pride of Mandalore Debris', t: 'pomdebris', count: 3, offset: 1 },
];

type Props = {
  uid?: string;
};

export const SelectObstaclesScreen: NavigationFunctionComponent<Props> = ({
  uid,
  componentId,
}) => {
  const xws = xwsStore(s => s.lists?.find(l => l.vendor.lbn.uid === uid));
  const update = xwsStore(s => s.setObstacles);

  const [obstacles, setObstacles] = useState<string[]>(xws?.obstacles || []);

  useNavigationModalDismiss(() => {
    update(xws?.vendor.lbn.uid || '', obstacles);
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
            }}
          />
        </View>
        {list.map(o => (
          <View key={o.t} padding-10>
            <Text text80M color={Colors.black}>
              {o.n}
            </Text>
            <View row {...{ spread: o.count === 6 }}>
              {new Array(o.count).fill(0).map((_, i) => {
                const name = `${o.t}${i + o.offset}`;
                return (
                  <Card
                    backgroundColor={'white'}
                    enableShadow={false}
                    {...{
                      'marginH-4': o.count === 3,
                      selected: obstacles?.includes(name),
                    }}
                    key={`${o.t}${i}`}
                    onPress={() => {
                      const s = [...obstacles];
                      if (s.includes(name)) {
                        s.splice(s.indexOf(name), 1);
                      } else {
                        s.push(name);
                      }
                      setObstacles(s);
                    }}>
                    <Image
                      style={{ height: 55, width: 55 }}
                      source={Assets.obstacles[name]}
                    />
                  </Card>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '95%' },
  nav: { borderBottomColor: darkgrey, borderBottomWidth: 1 },
});

SelectObstaclesScreen.options = {
  modalPresentationStyle: Constants.isIOS
    ? OptionsModalPresentationStyle.formSheet
    : OptionsModalPresentationStyle.overCurrentContext,
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default SelectObstaclesScreen;
