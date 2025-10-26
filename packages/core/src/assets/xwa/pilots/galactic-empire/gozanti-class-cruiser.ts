import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Gozanti-class Cruiser',
  xws: 'gozanticlasscruiser',
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
  faction: 'Galactic Empire',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 3 },
    { type: 'hull', value: 11 },
    { type: 'shields', value: 5, recovers: 1 },
    { type: 'energy', value: 3, recovers: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Reinforce', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Coordinate', difficulty: 'White' },
    { type: 'Jam', difficulty: 'White' },
  ],
  ability: {
    name: 'Docking Clamps',
    text: 'You can dock up to 4 small ships.',
  },
  pilots: [
    {
      name: 'Outer Rim Garrison',
      text: 'Capable of carrying TIE fighters and operating independently for long periods of time, the Gozanti-class cruiser is a common sight in the skies of downtrodden worlds across the Outer Rim.',
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 26,
      xws: 'outerrimgarrison',
      slots: [
        'Command',
        'Crew',
        'Gunner',
        'Cargo',
        'Title',
        'Hardpoint',
        'Crew',
        'Team',
        'Cargo',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 711,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/outerrimgarrison.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/outerrimgarrison.png',
      loadout: 40,
    },
    {
      name: 'Rik Virgilio',
      initiative: 7,
      cost: 20,
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/rikvirgilio-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/rikvirgilio-epicsl.png',
      standard: true,
      extended: true,
      epic: true,
      engagement: 0,
      xws: 'rikvirgilio-epicsl',
      caption: 'Blood Crow',
      ffg: 1121,
      loadout: 0,
      slots: [],
    },
  ],
  ffg: 81,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Gozanti.png',
};

export default t;
