import {
  blue,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
} from 'lbn-core/src/colors';
import { Stat } from 'lbn-core/src/types';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { TailwindFn } from 'twrnc';
import { useTailwind } from '../helpers/tailwind';
import { XWingFont } from './fonts/XWingIcon';

export const colorForStat = (stat: string) => {
  switch (stat) {
    case 'attack':
      return red;
    case 'agility':
      return green;
    case 'hull':
      return yellow;
    case 'initiative':
      return orange;
    case 'shields':
      return blue;
    case 'Force Power':
      return purple;
    case 'charges':
      return yellow;
    case 'energy':
      return pink;

    default:
      break;
  }
};

const renderValue = (
  tw: TailwindFn,
  stat: { value: number; recovers?: number; arc?: string },
  type: string,
  size?: string,
) => {
  const recovers = new Array((stat.recovers && stat.recovers > 0) || 0).fill(0);
  const color = colorForStat(type);
  return (
    <View
      style={tw`flex-row justify-between items-center`}
      key={`${type}_${stat.value}_${stat.arc || ''}`}>
      {stat.arc && <XWingFont size={6} color={color} icons={[stat.arc]} />}
      {!stat.arc && type !== 'initiative' && (
        <XWingFont size={5} color={color} icons={[type]} />
      )}
      {recovers.length === 1 && (
        <XWingFont size={5} color={color} icons={['recurring']} />
      )}
      {recovers.length >= 2 && (
        <XWingFont size={5} color={color} icons={['doublerecurring']} />
      )}

      <Text
        style={tw`ml-1 font-bold text-base text-[${color || 'black'
          }]`}>{`${stat.value}`}</Text>
    </View>
  );
};

type Props = {
  horizontal?: boolean;
  initiative?: number;
  engagement?: number;
  stats?: Stat[];
  force?: { value: number; recovers: number };
  charges?: { value: number; recovers: number };
};

export const StatsComponent: FC<Props> = ({
  horizontal,
  initiative,
  engagement,
  stats,
  force,
  charges,
}) => {
  const { tw } = useTailwind();

  return (
    <View
      style={tw`${horizontal ? 'justify-center flex-row' : 'items-center flex-col'
        }`}>
      {initiative !== undefined &&
        renderValue(tw, { value: initiative }, 'initiative', 'text70M')}
      {engagement !== undefined &&
        renderValue(tw, { value: engagement }, 'engagement')}
      {stats !== undefined &&
        stats.map(stat => renderValue(tw, stat, stat.type))}
      {charges !== undefined && renderValue(tw, charges, 'charges')}
      {force !== undefined && renderValue(tw, force, 'Force Power')}
    </View>
  );
};

export default StatsComponent;
