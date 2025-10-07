import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'M3-A Interceptor',
  xws: 'm3ainterceptor',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3BW',
    '3FB',
    '3NW',
    '3KR',
    '4FW',
    '5FW',
    '5KR',
  ],
  dialCodes: ['M3A'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Scyk.png',
  pilots: [
    {
      name: 'Cartel Spacer',
      initiative: 1,
      limited: 0,
      cost: 26,
      xws: 'cartelspacer',
      text: "MandalMotors' M3-A “Scyk” Interceptor is purchased in large quantities by the Hutt Cartel and the Car'das smugglers due to its low cost and customizability.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/cartelspacer.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/cartelspacer.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 190,
    },
    {
      name: 'Genesis Red',
      caption: 'Tansarii Point Crime Lord',
      initiative: 4,
      limited: 1,
      cost: 31,
      xws: 'genesisred',
      ability:
        'After you acquire a lock, you must remove all of your focus and evade tokens. Then, gain the same number of focus and evade tokens that the locked ship has.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/genesisred.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/genesisred.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 184,
    },
    {
      name: 'Inaldra',
      caption: 'Tansarii Point Boss',
      initiative: 2,
      limited: 1,
      cost: 27,
      xws: 'inaldra',
      ability:
        'While you defend or perform an attack, you may suffer 1 [Hit] damage to reroll any number of your dice.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/inaldra.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/inaldra.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 187,
    },
    {
      name: 'Laetin A’shera',
      caption: 'Car’das Enforcer',
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'laetinashera',
      ability:
        'After you defend or perform an attack, if the attack missed, gain 1 evade token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/laetinashera.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/laetinashera.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 185,
    },
    {
      name: 'Quinn Jast',
      caption: 'Fortune Seeker',
      initiative: 3,
      limited: 1,
      cost: 28,
      xws: 'quinnjast',
      ability:
        'At the start of the Engagement Phase, you may gain 1 disarm token to recover 1 [Charge] on 1 of your equipped upgrades.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/quinnjast.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/quinnjast.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 186,
    },
    {
      name: 'Serissu',
      caption: 'Flight Instructor',
      initiative: 5,
      limited: 1,
      cost: 40,
      xws: 'serissu',
      ability:
        'While a friendly ship at range 0-1 defends, it may reroll 1 of its dice.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/serissu.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/serissu.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 183,
    },
    {
      name: 'Sunny Bounder',
      caption: 'Incurable Optimist',
      initiative: 1,
      limited: 1,
      cost: 27,
      xws: 'sunnybounder',
      ability:
        'While you defend or perform an attack, after you roll or reroll your dice, if you have the same result on each of your dice, you may add 1 matching result.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sunnybounder.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sunnybounder.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 188,
    },
    {
      name: 'Tansarii Point Veteran',
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'tansariipointveteran',
      text: "The defeat of Black Sun ace Talonbane Cobra by Car'das smugglers turned the tide of the Battle of Tansarii Point Station. Survivors of the clash are respected throughout the sector.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tansariipointveteran.png',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Talent', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tansariipointveteran.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 189,
    },
    {
      name: 'G4R-G0R V/M',
      xws: 'g4rgorvm',
      initiative: 0,
      limited: 1,
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      caption: 'Tilted Droid',
      standard: true,
      wildspace: true,
      slots: ['Modification'],
      ability:
        'After you defend, each other ship at range 0 suffers 1 [Critical Hit] damage.',
      cost: 25,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/g4rgorvm.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/g4rgorvm.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
      ],
      keywords: ['Droid'],
      epic: true,
      ffg: 636,
    },
  ],
};

export default t;
