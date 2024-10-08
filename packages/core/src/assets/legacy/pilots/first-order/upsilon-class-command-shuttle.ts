import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Upsilon-class command shuttle',
  xws: 'upsilonclasscommandshuttle',
  size: 'Large',
  dial: [
    '0OR',
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
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
  ],
  dialCodes: ['Ups'],
  faction: 'firstorder',
  stats: [
    { type: 'attack', value: 4, arc: 'Front Arc' },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 6 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_UpsilonShuttle.png',
  pilots: [
    {
      name: 'Lieutenant Dormitz',
      initiative: 2,
      limited: 1,
      cost: 64,
      xws: 'lieutenantdormitz',
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantdormitz.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantdormitz.png',
      standard: true,
      wildspace: true,
      epic: true,
      extended: true,
    },
    {
      name: 'Major Stridan',
      initiative: 4,
      limited: 1,
      cost: 61,
      xws: 'majorstridan',
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/majorstridan.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/majorstridan.png',
      standard: true,
      wildspace: true,
      epic: true,
      extended: true,
    },
    {
      name: 'Petty Officer Thanisson',
      xws: 'pettyofficerthanisson',
      initiative: 1,
      limited: 1,
      cost: 59,
      charges: { value: 1, recovers: 1 },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/pettyofficerthanisson.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/pettyofficerthanisson.png',
      standard: true,
      wildspace: true,
      epic: true,
      extended: true,
    },
    {
      name: 'Starkiller Base Pilot',
      xws: 'starkillerbasepilot',
      initiative: 2,
      limited: 0,
      cost: 58,
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/starkillerbasepilot.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/starkillerbasepilot.png',
      standard: true,
      wildspace: true,
      epic: true,
      extended: true,
    },
    {
      name: 'Lieutenant Tavson',
      initiative: 3,
      limited: 1,
      cost: 64,
      xws: 'lieutenanttavson',
      charges: { value: 2, recovers: 1 },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenanttavson.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenanttavson.png',
      standard: true,
      wildspace: true,
      epic: true,
      extended: true,
    },
    {
      name: 'Captain Cardinal',
      initiative: 4,
      limited: 1,
      cost: 60,
      xws: 'captaincardinal',
      charges: { value: 2, recovers: 0 },
      slots: [
        'Sensor',
        'Cannon',
        'Crew',
        'Crew',
        'Crew',
        'Modification',
        'Tech',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captaincardinal.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captaincardinal.png',
      standard: true,
      wildspace: true,
      epic: true,
      extended: true,
    },
  ],
};

export default t;
