import { blue, green, pink, red, yellow } from 'lbn-core/src/colors';
import { Grant } from 'lbn-core/src/types';
import React from 'react';

import { Text, View } from 'react-native';
import { useTailwind } from '../helpers/tailwind';
import { black } from '../theme';
import ActionsComponent from './Actions';
import { XWingFont } from './fonts/XWingIcon';

type Props = {
  grants: Grant[];
};

const colorForType = (type: string, lightContent: boolean) => {
  switch (type) {
    case 'attack':
      return red;
    case 'agility':
      return green;
    case 'hull':
      return yellow;
    case 'shields':
      return blue;
    case 'energy':
      return pink;
    default:
      return lightContent ? black : 'white';
  }
};

const mod = (grant: Grant) => {
  if (grant.value > 0) {
    return `+${grant.value}`;
  }
  return grant.value;
};

const GrantsComponent = ({ grants }: Props) => {
  const { tw } = useTailwind();
  const lightContent = tw.prefixMatch('light');

  return (
    <View style={tw`items-center`}>
      {grants.map((grant, index) => (
        <View style={tw`items-center`} key={`${grant.value}_${index}`}>
          {grant.slot && (
            <View style={tw`flex-row items-center`}>
              <Text style={tw`font-semibold`}>{mod(grant)}</Text>
              <XWingFont icons={[grant.slot]} size={6} />
            </View>
          )}
          {grant.stat === 'attack' && (
            <View style={tw`flex-row items-center`}>
              <XWingFont
                icons={[grant.stat]}
                size={5}
                color={colorForType(grant.stat, lightContent)}
              />

              <Text
                style={tw`font-semibold text-[${colorForType(grant.stat, tw.prefixMatch('light'))}]`}
              >
                {grant.value}
              </Text>
            </View>
          )}
          {grant.stat && grant.stat !== 'attack' && (
            <View style={tw`flex-row items-center`}>
              <XWingFont
                icons={[grant.stat]}
                size={5}
                color={colorForType(grant.stat, lightContent)}
              />

              <Text
                style={tw`font-semibold text-[${colorForType(grant.stat, tw.prefixMatch('light'))}]`}
              >
                {mod(grant)}
              </Text>
            </View>
          )}
          {grant.action && <ActionsComponent actions={[grant.action]} />}
        </View>
      ))}
    </View>
  );
};

export default GrantsComponent;
