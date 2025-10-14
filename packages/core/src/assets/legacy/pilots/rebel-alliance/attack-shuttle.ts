import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Attack Shuttle',
  xws: 'attackshuttle',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
    '4KR',
  ],
  dialCodes: ['AS'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_AttackShuttle.png',
  pilots: [
    {
      name: '“Zeb” Orrelios',
      caption: 'Spectre-4',
      initiative: 2,
      limited: 1,
      cost: 33,
      xws: 'zeborrelios',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zeborrelios.png',
      shipAbility: {
        name: 'Locked and Loaded',
        text: 'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zeborrelios.png',
      standard: true,
      wildspace: true,
      keywords: ['Spectre'],
      epic: true,
      ffg: 37,
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 40,
      xws: 'ezrabridger',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ezrabridger.png',
      force: { value: 1, recovers: 1, side: ['light'] },
      shipAbility: {
        name: 'Locked and Loaded',
        text: 'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
      },
      slots: ['Turret', 'Crew', 'Modification', 'Title', 'Force Power'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ezrabridger.png',
      standard: true,
      wildspace: true,
      keywords: ['Light Side', 'Spectre'],
      epic: true,
      ffg: 36,
    },
    {
      name: 'Hera Syndulla',
      caption: 'Spectre-2',
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'herasyndulla',
      ability:
        'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/herasyndulla.png',
      shipAbility: {
        name: 'Locked and Loaded',
        text: 'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/herasyndulla.png',
      standard: true,
      wildspace: true,
      keywords: ['Spectre'],
      epic: true,
      ffg: 34,
    },
    {
      name: 'Sabine Wren',
      caption: 'Spectre-5',
      initiative: 3,
      limited: 1,
      cost: 41,
      xws: 'sabinewren',
      ability:
        'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sabinewren.png',
      shipAbility: {
        name: 'Locked and Loaded',
        text: 'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
      },
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sabinewren.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian', 'Spectre'],
      epic: true,
      ffg: 35,
    },
  ],
};

export default t;
