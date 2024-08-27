import textHelper from 'lbn-core/src/helpers/text';
import { type FC } from 'react';
import XwingFont from './fonts/xwing';

type Props = {
  text: string;
  color?: string;
  fontStyle?: 'italic' | 'normal';
};

export const FormattedText: FC<Props> = ({ text, color, fontStyle }) => {
  const content = textHelper(text);

  return (
    <span
      className={`text-xs sm:text-sm font-normal pt-1 mr-1 ${fontStyle === 'italic' && 'italic'
        }`}
      style={{ color }}
    >
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return (
              <span key={item.type + '_' + index} className="text-xs">
                {item.text}
              </span>
            );
          case 'strong':
            return (
              <span key={item.type + '_' + index} className="font-bold text-xs">
                {item.text}
              </span>
            );
          case 'icon': {
            return (
              <XwingFont
                key={item.type + '_' + index}
                icon={item.text}
                className="mx-1 text-xs"
              />
            );
          }
        }
      })}
    </span>
  );
};

export default FormattedText;
