import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Gozanti-class Cruiser',
  xws: 'gozanticlasscruiser',
  faction: 'Galactic Republic',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Gozanti.png',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FB',
    '2BR',
    '2NR',
    '2FB',
    '3FB',
    '4FR',
  ],
  dialCodes: ['GOZ-I'],
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 11 },
    { type: 'shields', value: 5, recovers: 1 },
    { type: 'energy', value: 3, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'Wez Synat',
      caption: 'Spectre of Nayr',
      initiative: 7,
      engagement: 1,
      limited: 1,
      cost: 8,
      xws: 'wezsynat-epicsl',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wezsynat-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/wezsynat-epicsl.png',
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        {
          difficulty: 'White',
          type: 'Reinforce',
          linked: { difficulty: 'Red', type: 'Coordinate' },
        },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Coordinate' },
        { difficulty: 'White', type: 'Jam' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      standard: true,
      extended: true,
      epic: true,
      standardLoadout: [
        'clonecommandercody-epicsl',
        'pointdefensebattery-epicsl',
        'spectreofnayr-epicsl',
      ],
      ffg: 1150,
    },
  ],
};

export default t;
