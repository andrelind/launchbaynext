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
  faction: 'Rebel Alliance',
  stats: [],
  actions: [],
  ability: {
    name: 'Resupply Craft',
    text: 'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
  },
  pilots: [
    {
      name: 'Echo Base Evacuees',
      text: "The GR-75 medium transport acquitted itself well at battles such as the evacuation of Hoth, where several of these ships were pivotal to the Rebel forces' escape.",
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 10,
      xws: 'echobaseevacuees',
      slots: [
        'Command',
        'Hardpoint',
        'Turret',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
        'Title',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 709,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/echobaseevacuees.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/echobaseevacuees.png',
      loadout: 25,
    },
    {
      name: 'Trebor Zednem',
      initiative: 7,
      cost: 8,
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/treborzednem-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/treborzednem-epicsl.png',
      standard: true,
      extended: true,
      epic: true,
      engagement: 0,
      xws: 'treborzednem-epicsl',
      caption: 'Bright Hope',
      ffg: 1105,
    },
  ],
  ffg: 80,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_GR-75.png',
};

export default t;
