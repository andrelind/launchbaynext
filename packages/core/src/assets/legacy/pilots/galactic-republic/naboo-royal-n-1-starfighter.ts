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
  faction: 'Galactic Republic',
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
      name: 'Anakin Skywalker',
      initiative: 4,
      limited: 1,
      xws: 'anakinskywalker-nabooroyaln1starfighter',
      standard: true,
      wildspace: true,
      cost: 41,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ability:
        'Before you reveal your maneuver, you may spend 1 [Force] to barrel roll (this is not an action).',
      force: { value: 1, recovers: 1, side: ['light'] },
      shipAbility: {
        name: 'Full Throttle',
        text: 'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/anakinskywalker-nabooroyaln1starfighter.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/anakinskywalker-nabooroyaln1starfighter.png',
      caption: 'Hero of Naboo',
      keywords: ['Light Side'],
      epic: true,
      ffg: 558,
    },
    {
      name: 'Ric Olié',
      xws: 'ricolie',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text: 'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      caption: 'Bravo Leader',
      standard: true,
      wildspace: true,
      cost: 44,
      slots: ['Talent', 'Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ability:
        "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's, roll 1 additional die.",
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ricolie.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ricolie.png',
      epic: true,
      ffg: 557,
    },
    {
      name: 'Padmé Amidala',
      xws: 'padmeamidala',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text: 'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      caption: 'Aggressive Negotiator',
      standard: true,
      wildspace: true,
      cost: 35,
      slots: ['Talent', 'Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ability:
        'While an enemy ship in your [Front Arc] defends or performs an attack, that ship can modify only 1 [Focus] result (other results can still be modified).',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/padmeamidala.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/padmeamidala.png',
      epic: true,
      ffg: 559,
    },
    {
      name: 'Dineé Ellberger',
      xws: 'dineeellberger',
      caption: 'Bravo Five',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text: 'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      standard: true,
      wildspace: true,
      cost: 30,
      slots: ['Talent', 'Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ability:
        "While you defend or perform an attack, if the speed of your revealed maneuver is the same as the enemy ship's, that ship's dice cannot be modified.",
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dineeellberger.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dineeellberger.png',
      epic: true,
      ffg: 560,
    },
    {
      name: 'Bravo Flight Officer',
      xws: 'bravoflightofficer',
      initiative: 2,
      limited: 0,
      shipAbility: {
        name: 'Full Throttle',
        text: 'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      text: 'The volunteer pilots of the Royal Naboo Security Force are dedicated to protecting the people and ideals of their homeworld, and trust their Queen to send them into battle only when all other options have failed.',
      standard: true,
      wildspace: true,
      cost: 28,
      slots: ['Sensor', 'Torpedo', 'Astromech'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/bravoflightofficer.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/bravoflightofficer.png',
      epic: true,
      ffg: 562,
    },
    {
      name: 'Naboo Handmaiden',
      xws: 'naboohandmaiden',
      caption: 'Regal Ruse',
      initiative: 1,
      limited: 2,
      shipAbility: {
        name: 'Full Throttle',
        text: 'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      standard: true,
      wildspace: true,
      conditions: ['decoyed'],
      ability:
        'Setup: After placing forces, assign the Decoyed condition to 1 friendly ship other than Naboo Handmaiden.',
      cost: 31,
      slots: ['Talent', 'Sensor', 'Torpedo', 'Astromech'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/naboohandmaiden.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/naboohandmaiden.png',
      epic: true,
      ffg: 561,
    },
    {
      name: 'Gavyn Sykes',
      xws: 'gavynsykes',
      caption: 'Bravo Three',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Full Throttle',
        text: 'After you fully execute a speed 3-5 maneuver, you may perform an [Evade] action.',
      },
      standard: true,
      wildspace: true,
      cost: 31,
      slots: ['Talent', 'Talent', 'Sensor', 'Torpedo', 'Astromech'],
      ability:
        "While you defend or perform an attack, if the speed of your revealed maneuver is greater than the enemy ship's, you may reroll your blank results.",
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/gavynsykes.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/gavynsykes.png',
      epic: true,
      ffg: 987,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Royal_Naboo_N-1_Starfighter.png',
};

export default t;
