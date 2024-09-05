import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Trident-Class Assault Ship',
  xws: 'tridentclassassaultship',
  faction: 'Separatist Alliance',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Trident.png',
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
      name: 'Colicoid Destroyer',
      initiative: 8,
      cost: 85,
      limited: 0,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/colicoiddestroyer.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/colicoiddestroyer.png',
      shipAbility: {
        name: 'Tractor Grasp',
        text: 'After you perform a Tractor Tentacles attack that hits, the defender gains 1 tractor token.',
      },
      text: 'Designed by the Colicoid Creation Nest and equipped with powerful tentacles and a massive drill to tear though the hull of even the toughest starships and fortifications, the Trident-class Assault Ship is a terrifying testament to the threat posed by the Separatist Alliance.',
      standard: false,
      wildspace: false,
      epic: true,
      engagement: 0,
      xws: 'colicoiddestroyer',
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
    },
  ],
};

export default t;
