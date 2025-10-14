import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Gozanti-class Cruiser',
  xws: 'gozanticlasscruiser',
  faction: 'Galactic Empire',
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
      name: 'Outer Rim Garrison',
      initiative: 7,
      cost: 66,
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/outerrimgarrison.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/outerrimgarrison.png',
      shipAbility: {
        name: 'Docking Clamps',
        text: 'You can dock up to 4 small ships.',
      },
      text: 'Capable of carrying TIE fighters and operating independently for long periods of time, the Gozanti-class cruiser is a common sight in the skies of downtrodden worlds across the Outer Rim.',
      standard: false,
      wildspace: false,
      epic: true,
      engagement: 1,
      xws: 'outerrimgarrison',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Cargo',
        'Cargo',
        'Title',
      ],
      ffg: 711,
    },
  ],
};

export default t;
