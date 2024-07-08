import textHelper from 'lbn-core/src/helpers/text';
import React, { FC, memo } from 'react';
import { TextProps as RNTextProps, Text } from 'react-native';
import { useTailwind } from '../helpers/tailwind';
import { XWingFont } from './fonts/XWingIcon';

type Props = RNTextProps & {
  text?: string;
};

const FormattedText: FC<Props> = ({ text, ...rest }) => {
  const { tw } = useTailwind();
  if (!text) {
    return null;
  }

  const content = textHelper(text);
  // console.log({ content });

  return (
    <Text {...rest}>
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return item.text;
          case 'strong':
            return (
              <Text
                key={`${item.type}_${index}`}
                style={tw`text-sm font-semibold`}
              >
                {item.text}
              </Text>
            );
          case 'icon':
            return (
              <XWingFont
                key={`${item.type}_${index}`}
                icons={[item.text]}
                size={5}
              />
              // <Text
              //   key={`${item.type}_${index}`}
              //   xwing20
              //   style={{ color: 'black' }}
              // >
              //   {xwingIcons(item.text)}
              // </Text>
            );
        }
      })}
    </Text>
  );
};

export default memo<Props>(FormattedText);
