import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Gauntlet Fighter',
  xws: 'gauntletfighter',
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
  ],
  dialCodes: ['GtF'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  pilots: [
    {
      name: 'Maul',
      caption: 'Lord of the Shadow Collective',
      force: { side: ['dark'], value: 3, recovers: 1 },
      cost: 73,
      xws: 'maul',
      initiative: 5,
      limited: 1,
      ability:
        'While you perform a [Coordinate] action, if you choose a ship with an initiative lower than yours, you may spend 1 [Force]. If you do, treat the action as white and you may coordinate 1 additional friendly ship with an initiative lower than yours; each friendly ship you coordinate this way gains 1 strain token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/maul.png',
      standard: true,
      wildspace: true,
      epic: true,
      slots: [
        'Force Power',
        'Crew',
        'Gunner',
        'Illicit',
        'Device',
        'Modification',
        'Configuration',
        'Title',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/maul.png',
      keywords: ['Dark Side'],
    },
    {
      name: 'Rook Kast',
      caption: 'Stoic Super Commando',
      initiative: 3,
      limited: 1,
      cost: 61,
      xws: 'rookkast',
      ability:
        'Before you engage, you may gain 1 strain token. While you perform a primary attack, if you are strained, you may change 1 of your blank or [Focus] results to a [Hit] result.',
      standard: true,
      wildspace: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Illicit',
        'Device',
        'Modification',
        'Configuration',
        'Title',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/rookkast.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/rookkast.png',
      keywords: ['Mandalorian'],
    },
    {
      name: 'Shadow Collective Operator',
      initiative: 1,
      limited: 0,
      cost: 53,
      xws: 'shadowcollectiveoperator',
      text: "The former Death Watch soldiers who have sworn loyalty to Lord Maul continue to operate their versatile Gauntlet Fighters, sometimes using them as bombers in Maul's private battles.",
      standard: true,
      wildspace: true,
      epic: true,
      slots: [
        'Crew',
        'Gunner',
        'Illicit',
        'Device',
        'Modification',
        'Configuration',
        'Title',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/shadowcollectiveoperator.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/shadowcollectiveoperator.png',
      keywords: ['Mandalorian'],
    },
  ],
};

export default t;
