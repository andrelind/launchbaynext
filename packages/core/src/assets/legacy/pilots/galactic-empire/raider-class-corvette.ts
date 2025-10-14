import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Raider-class Corvette',
  xws: 'raiderclasscorvette',
  faction: 'Galactic Empire',
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Raider.png',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1NB',
    '1FW',
    '2BW',
    '2NW',
    '2FB',
    '3BR',
    '3NR',
    '3FB',
    '4FW',
    '5FR',
  ],
  dialCodes: ['RDR-I'],
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 4 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 20 },
    { type: 'shields', value: 8, recovers: 2 },
    { type: 'energy', value: 6, recovers: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Coordinate' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'Outer Rim Patrol',
      initiative: 8,
      cost: 134,
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/outerrimpatrol.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/outerrimpatrol.png',
      shipAbility: {
        name: 'Concentrated Batteries',
        text: 'While you perform a primary, [Torpedo], or [Missile] attack, if the defender is in your [Bullseye Arc], roll 1 additional die.',
      },
      text: "The Raider-class corvette is one of the Empire's smallest warships, often used for reconnaissance missions, surgical strikes, or suppressing enemy starfighters with its powerful ordnance.",
      standard: false,
      wildspace: false,
      epic: true,
      engagement: 0,
      xws: 'outerrimpatrol',
      slots: [
        'Command',
        'Torpedo',
        'Missile',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Team',
        'Cargo',
        'Title',
      ],
      ffg: 707,
    },
  ],
};

export default t;
