import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Trident-Class Assault Ship',
  xws: 'tridentclassassaultship',
  faction: 'Scum and Villainy',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Trident.png',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1SW',
    '2BB',
    '2NB',
    '2FB',
    '2SR',
    '3NW',
    '3FB',
    '3BW',
    '4FB',
    '4KR',
    '5FW',
  ],
  dialCodes: ['TAS'],
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 10 },
    { type: 'shields', value: 4, recovers: 1 },
    { type: 'energy', value: 3, recovers: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Evade' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  pilots: [
    {
      name: 'Lawless Pirates',
      initiative: 8,
      cost: 85,
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lawlesspirates.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lawlesspirates.png',
      shipAbility: {
        name: 'Tractor Grasp',
        text: 'After you perform a Tractor Tentacles attack that hits, the defender gains 1 tractor token.',
      },
      text: 'The Separatist Alliance has close ties with certain mercenaries and criminal groups and, as the war rages on, its technology sometimes finds its way into unsavory hands.',
      standard: false,
      wildspace: false,
      epic: true,
      engagement: 0,
      xws: 'lawlesspirates',
      slots: [
        'Command',
        'Torpedo',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Cargo',
        'Title',
      ],
      ffg: 1068,
    },
  ],
};

export default t;
