import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'CR90 Corellian Corvette',
  xws: 'cr90corelliancorvette',
  faction: 'Galactic Republic',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_CR90.png',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FW',
    '2BB',
    '2NB',
    '2FB',
    '3NR',
    '3FB',
    '3BR',
    '4FR',
    '5FR',
  ],
  dialCodes: ['CR90-REP'],
  stats: [
    { arc: 'Left Arc', type: 'attack', value: 4 },
    { arc: 'Right Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 18 },
    { type: 'shields', value: 7, recovers: 2 },
    { type: 'energy', value: 7, recovers: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'Republic Judiciary',
      initiative: 8,
      cost: 125,
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/republicjudiciary.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/republicjudiciary.png',
      shipAbility: {
        name: 'Broadside Batteries',
        text: 'You can acquire locks and perform primary attacks at range 1-4.',
      },
      text: 'The Galactic Republic uses small, swift warships such as the CR90 corvette to respond rapidly to Separatist incursions across the galaxy.',
      standard: false,
      wildspace: false,
      epic: true,
      engagement: 0,
      xws: 'republicjudiciary',
      slots: [
        'Command',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Team',
        'Cargo',
      ],
      ffg: 705,
    },
  ],
};

export default t;
