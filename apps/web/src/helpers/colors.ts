import {
  buttonBlue,
  darkgrey,
  orange,
  red,
  scum,
} from 'lbn-core/src/colors';
import type { Faction, FactionKey } from 'lbn-core/src/types';

export const colorForFaction = (faction: Faction) => {
  switch (faction) {
    case 'First Order':
      return darkgrey;
    case 'Galactic Empire':
      return darkgrey;
    case 'Galactic Republic':
      return red;
    case 'Rebel Alliance':
      return red;
    case 'Resistance':
      return orange;
    case 'Scum and Villainy':
      return scum;
    case 'Separatist Alliance':
      return buttonBlue;
  }
};

export const colorForFactionKey = (faction: FactionKey) => {
  switch (faction) {
    case 'firstorder':
      return darkgrey;
    case 'galacticempire':
      return darkgrey;
    case 'galacticrepublic':
      return red;
    case 'rebelalliance':
      return red;
    case 'resistance':
      return orange;
    case 'scumandvillainy':
      return scum;
    case 'separatistalliance':
      return buttonBlue;
  }
};
