// @flow
import { blue, red, yellow } from 'lbn-core/src/assets/colors';
import { Format } from 'lbn-core/src/types';
import React from 'react';

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
