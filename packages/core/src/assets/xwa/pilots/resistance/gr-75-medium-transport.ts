import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'GR-75 Medium Transport',
  xws: 'gr75mediumtransport',
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
  faction: 'Resistance',
  stats: [],
  actions: [],
  ability: {
    name: 'Resupply Craft',
    text: 'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
  },
  pilots: [
    {
      name: 'New Republic Volunteers',
      text: 'In use since the Galactic Civil War, groups within the New Republic still utilize the GR-75 medium transport for supply and aid missions.',
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 10,
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
      standard: false,
      extended: false,
      epic: true,
      ffg: 710,
      ability:
        'In use since the Galactic Civil War, groups within the New Republic still utilize the GR-75 medium transport for supply and aid missions.',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/newrepublicvolunteers.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/newrepublicvolunteers.png',
      loadout: 25,
    },
    {
      name: 'Oraf Desyk',
      initiative: 7,
      cost: 8,
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/orafdesyk-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/orafdesyk-epicsl.png',
      standard: true,
      extended: true,
      epic: true,
      engagement: 0,
      xws: 'orafdesyk-epicsl',
      caption: 'Hosnian Lament',
      ffg: 1126,
    },
  ],
  ffg: 80,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_GR-75.png',
};

export default t;
