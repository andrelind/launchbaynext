import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'GR-75 Medium Transport',
  xws: 'gr75mediumtransport',
  faction: 'Resistance',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_GR-75.png',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1NB',
    '1FB',
    '2BW',
    '2NW',
    '2FW',
    '3FR',
    '4FR',
  ],
  dialCodes: ['GR75-RES'],
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 3, recovers: 1 },
    { type: 'energy', value: 4, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'New Republic Volunteers',
      initiative: 7,
      cost: 62,
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/newrepublicvolunteers.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/newrepublicvolunteers.png',
      shipAbility: {
        name: 'Resupply Craft',
        text: 'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
      },
      text: 'In use since the Galactic Civil War, groups within the New Republic still utilize the GR-75 medium transport for supply and aid missions.',
      standard: false,
      wildspace: false,
      epic: true,
      ability:
        'In use since the Galactic Civil War, groups within the New Republic still utilize the GR-75 medium transport for supply and aid missions.',
      engagement: 1,
      xws: 'newrepublicvolunteers',
      slots: [
        'Command',
        'Hardpoint',
        'Turret',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
      ],
      ffg: 710,
    },
  ],
};

export default t;
