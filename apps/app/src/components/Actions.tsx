import { Feather } from '@expo/vector-icons';
import { Action } from 'lbn-core/src/types';
import React, { FC } from 'react';
// import { ChevronRightIcon } from 'react-native-heroicons/solid';

import { View } from 'react-native';
import { colorForDifficulty } from '../helpers/colors';
import { useTailwind } from '../helpers/tailwind';
import { darkgrey } from '../theme';
import { XWingFont } from './fonts/XWingIcon';

type Props = {
  actions?: Action[];
};

export const ActionsComponent: FC<Props> = ({ actions }) => {
  const { tw } = useTailwind();

  if (!actions) {
    return null;
  }

  return (
    <View style={tw`items-center gap-y-1`}>
      {actions.map((a, index) => (
        <View
          style={tw`flex-row items-center`}
          key={`${a.type}_${a.difficulty}_${index}`}
        >
          <XWingFont
            icons={[a.type]}
            color={colorForDifficulty(a.difficulty)}
            size={5}
          />
          {a.linked && (
            <Feather name="chevron-right" size={14} color={darkgrey} />
          )}

          {a.linked && (
            <XWingFont
              icons={[a.linked.type]}
              color={colorForDifficulty(a.linked.difficulty)}
              size={5}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default ActionsComponent;
