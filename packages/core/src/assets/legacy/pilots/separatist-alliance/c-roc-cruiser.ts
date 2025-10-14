import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'C-ROC Cruiser',
  xws: 'croccruiser',
  faction: 'Separatist Alliance',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_C-ROC.png',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FB',
    '2BW',
    '2NW',
    '2FB',
    '3NR',
    '3FW',
    '3BR',
    '4FR',
    '5FR',
  ],
  dialCodes: ['CRC-SE'],
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 4, recovers: 1 },
    { type: 'energy', value: 4, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'Separatist Privateers',
      initiative: 7,
      cost: 63,
      limited: 0,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/separatistprivateers.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/separatistprivateers.png',
      shipAbility: {
        name: 'Overdrive Burners',
        text: 'While you defend, if your revealed maneuver is speed 3-5, roll 1 additional defense die.',
      },
      text: 'The Separatist Alliance makes use of all manner of unsavory contacts in its fight against the Galactic Republic, including corsairs and criminal cartels.',
      standard: false,
      wildspace: false,
      epic: true,
      engagement: 1,
      xws: 'separatistprivateers',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Tactical Relay',
        'Team',
        'Cargo',
        'Device',
        'Configuration',
      ],
      ffg: 714,
    },
  ],
};

export default t;
