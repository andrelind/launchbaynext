import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Raider-class Corvette',
  xws: 'raiderclasscorvette',
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
  faction: 'Galactic Empire',
  stats: [],
  actions: [],
  ability: {
    name: 'Concentrated Batteries',
    text: 'While you perform a primary, [Torpedo] or [Missile] attack, if the defender is in your [Bullseye Arc], roll 1 additional die.',
  },
  pilots: [
    {
      name: 'Outer Rim Patrol',
      text: "The Raider-class corvette is one of the Empire's smallest warships, often used for reconnaissance missions, surgical strikes, or suppressing enemy starfighters with its powerful ordnance.",
      initiative: 8,
      engagement: 0,
      limited: 0,
      cost: 15,
      xws: 'outerrimpatrol',
      slots: [
        'Command',
        'Missile',
        'Torpedo',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Team',
        'Cargo',
        'Title',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 707,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/outerrimpatrol.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/outerrimpatrol.png',
      loadout: 50,
    },
    {
      name: 'Iden Versio',
      initiative: 8,
      cost: 13,
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/idenversio-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/idenversio-epicsl.png',
      standard: true,
      extended: true,
      epic: true,
      engagement: 0,
      xws: 'idenversio-epicsl',
      caption: 'Corvus',
      ffg: 1122,
    },
  ],
  ffg: 79,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_Raider.png',
};

export default t;
