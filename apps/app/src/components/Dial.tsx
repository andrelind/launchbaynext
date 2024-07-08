import React, { memo } from 'react';
import { View } from 'react-native';

import { useTailwind } from '../helpers/tailwind';
import { blue, purple, red } from '../theme';
import { XWingFont } from './fonts/XWingIcon';

const colorForValue = (value: string) => {
  switch (value) {
    case 'B':
      return blue;
    case 'R':
      return red;
    case 'P':
      return purple;
    default:
    // return '#aaa'
  }
};

const iconForValue = (d: string) => {
  switch (d[1]) {
    case 'T':
      return { index: 0, data: `${d[2]}turnleft` };
    case 'B':
      return { index: 1, data: `${d[2]}bankleft` };
    case 'F':
      return { index: 2, data: `${d[2]}straight` };
    case 'N':
      return { index: 3, data: `${d[2]}bankright` };
    case 'Y':
      return { index: 4, data: `${d[2]}turnright` };
    case 'O':
      return { index: 2, data: `${d[2]}stop` };
    case 'K':
      return { index: 5, data: `${d[2]}kturn` };
    case 'L':
      return { index: 6, data: `${d[2]}sloopleft` };
    case 'P':
      return { index: 7, data: `${d[2]}sloopright` };
    case 'E':
      return { index: 8, data: `${d[2]}trollleft` };
    case 'R':
      return { index: 9, data: `${d[2]}trollright` };
    case 'A':
      return { index: 10, data: `${d[2]}reversebankleft` };
    case 'S':
      return { index: 11, data: `${d[2]}reversestraight` };
    case 'D':
      return { index: 12, data: `${d[2]}reversebankright` };
    default:
      console.log('UNKNOWN MANUEVER', d[1]);
  }
};

type Props = {
  data: string[];
};

const Row = ({ data }: Props) => {
  const { tw } = useTailwind();
  const rowData = [
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
  ];
  data.forEach(d => {
    const v = iconForValue(d);
    if (v) {
      rowData[v.index] = v.data;
    }
  });
  for (let i = rowData.length; i >= 5; i--) {
    if (rowData[i] === 'D') {
      rowData.splice(i, 1);
    }
  }

  return (
    <View style={tw`flex-row items-center`}>
      {rowData.map((d, index) => {
        // console.log(d);
        if (d === 'D') {
          return <View key={`row_${d}_${index}`} style={tw`w-5`} />;
        }
        return (
          <View style={tw`w-5`} key={`row_${d}_${index}`}>
            <XWingFont
              color={colorForValue(d.slice(0, 1))}
              icons={[d.slice(1)]}
              size={6}
            />
          </View>
        );
      })}
    </View>
  );
};

type DialProps = {
  dial?: string[];
};

const Dial = ({ dial }: DialProps) => {
  if (!dial) {
    return null;
  }
  return (
    <View>
      {['5', '4', '3', '2', '1', '0'].map((row, index) => {
        const data = dial.filter(d => d[0] === row);
        if (data.length === 0) {
          return null;
        }

        return <Row key={`row${row}${index}`} data={data} />;
      })}
    </View>
  );
};

export default memo(Dial);
