// @flow
import { blue, red, yellow } from 'lbn-core/src/colors';
import { type Format } from 'lbn-core/src/types';

type Props = {
  format: Format;
  onClick?: () => any;
};

export const colorForFormat = (f: Format) => {
  switch (f) {
    case 'Extended':
      return red;
    case 'Standard':
      return blue;
    case 'Epic':
      return yellow;
  }
};

export const FormatComponent = ({ format, onClick }: Props) => {
  const color = colorForFormat(format);
  return (
    <span className="cursor-pointer" style={{ color }} onClick={onClick}>
      {format}
    </span>
  );
};

export default FormatComponent;
