import { FactionKey, Format } from 'lbn-core/src/types';
import {
  black,
  blue,
  darkgrey,
  orange,
  purple,
  red,
  scum,
  yellow,
} from '../theme';

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

export const colorForFactionKey = (
  key: FactionKey,
  lightBackground?: boolean
) => {
  switch (key) {
    case 'rebelalliance':
      return red;
    case 'scumandvillainy':
      return scum;
    case 'galacticempire':
      return lightBackground ? black : '#fff';
    case 'resistance':
      return orange;
    case 'firstorder':
      return red;
    case 'galacticrepublic':
      return red;
    case 'separatistalliance':
      return blue;
  }
};

export const colorForObstacle = (obstacle: string) => {
  if (obstacle.includes('debris')) {
    return black;
  } else if (obstacle.includes('gascloud')) {
    return orange;
  }
  return darkgrey;
};

export const colorForDifficulty = (difficulty?: string) => {
  if (difficulty === 'Red') {
    return red;
  }
  if (difficulty === 'Purple') {
    return purple;
  }
  // return '#000';
};
