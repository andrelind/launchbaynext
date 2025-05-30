import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'CR90 Corellian Corvette',
  xws: 'cr90corelliancorvette',
  faction: 'Resistance',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_CR90.png',
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
  dialCodes: ['CR90-REB'],
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
      name: 'Leia Organa',
      caption: 'Tantive IV',
      initiative: 8,
      engagement: 0,
      limited: 1,
      cost: 12,
      xws: 'leiaorgana-epicsl',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/leiaorgana-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/leiaorgana-epicsl.png',
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        {
          difficulty: 'White',
          type: 'Reinforce',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Coordinate' },
        { difficulty: 'White', type: 'Jam' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      standard: true,
      extended: true,
      epic: true,
      standardLoadout: [
        'niennunb-epicsl',
        'urcosfurdam-epicsl',
        'tibannareserves',
        'turbolaserbattery-epicsl',
        'tantiveiv-epicsl-resistance',
      ],
      ffg: 1125,
    },
  ],
};

export default t;
