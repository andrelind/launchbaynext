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
  faction: 'Galactic Republic',
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
      xws: 'bokatankryze',
      name: 'Bo-Katan Kryze',
      caption: 'Nite Owl Commander',
      ability:
        'After you fully execute a maneuver, you may gain 1 deplete token to choose an object in your [Front Arc] at range 1-2. If you do, another friendly ship may perform a [Lock] action to lock that object.',
      cost: 6,
      loadout: 12,
      initiative: 4,
      limited: 1,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Torpedo',
        'Device',
        'Illicit',
        'Modification',
        'Modification',
        'Configuration',
        'Title',
      ],
      keywords: ['Mandalorian'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/bokatankryze-galactic-republic.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bokatankryze-galactic-republic.png',
    },
    {
      xws: 'niteowlliberator',
      name: 'Nite Owl Liberator',
      cost: 6,
      loadout: 16,
      initiative: 2,
      limited: 1,
      standard: true,
      extended: true,
      epic: true,
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Device',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      keywords: ['Mandalorian'],
      caption: 'Resolute Warrior',
      image:
        'https://infinitearenas.com/xw2/images/pilots/niteowlliberator.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/niteowlliberator.png',
    },
  ],
};

export default t;
