import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Naboo Royal N-1 Starfighter',
  xws: 'nabooroyaln1starfighter',
  size: 'Small',
  dial: [
    '1BW',
    '1FW',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3RR',
    '4FW',
    '5FW',
  ],
  dialCodes: ['N1'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  pilots: [
    {
      name: 'The Mandalorian',
      initiative: 5,
      limited: 1,
      xws: 'themandalorian-armedanddangerous',
      standard: true,
      extended: true,
      cost: 4,
      loadout: 0,
      ability:
        'While you defend or perform an attack, if you are in the [Front Arc] at range 1-2 of 2 or more enemy ships, you may change 1 of your blank results to a [Focus] result.',
      shipAbility: {
        name: 'Restored Speedster',
        text: 'While you have exactly 1 disarm token, you may perform primary attacks against enemy objects in your [Bullseye Arc]',
      },
      standardLoadout: [
        'outmaneuver',
        'thechild-armedanddangerous',
        'kinesoswitch-armedanddangerous',
        'calibratedlasertargeting',
      ],
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Boost' },
        {
          difficulty: 'White',
          type: 'SLAM',
          linked: { difficulty: 'Red', type: 'Lock' },
        },
      ],
      caption: 'Armed and Dangerous',
      keywords: ['Bounty Hunter'],
      epic: true,
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/themandalorian-armedanddangerous.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/themandalorian-armedanddangerous.png',
      ffg: 1114,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Royal_Naboo_N-1_Starfighter.png',
};

export default t;
