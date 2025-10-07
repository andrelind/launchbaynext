import { shipIcons } from 'lbn-core/src/helpers/icon';
import { FC } from 'react';
import { Platform, Text, TextStyle } from 'react-native';

import { useTailwind } from '../../helpers/tailwind';

type Props = {
  style?: TextStyle
  icons: string[];
  color?: string;
  size?: number;
};

export const ShipFont: FC<Props> = ({ icons, color, size, style: inStyle }) => {
  const { tw } = useTailwind();
  const fontSize = size || 25;
  const style = tw`text-${fontSize} text-${color ? `[${color}]` : 'black dark:text-white'} `;

  return (
    <Text
      style={[
        style,
        { fontFamily: Platform.OS === 'ios' ? 'x-wing-ships' : 'xwing-miniatures-ships' },
        inStyle
      ]}
    >
      {icons?.map((i) => shipIcons(i))}
    </Text>
  );
};
