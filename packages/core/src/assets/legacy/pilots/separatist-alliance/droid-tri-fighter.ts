import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Droid Tri-Fighter',
  xws: 'droidtrifighter',
  size: 'Small',
  dial: [
    '1ER',
    '1TW',
    '1YW',
    '1RR',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '3TB',
    '3BW',
    '3FB',
    '3NW',
    '3YB',
    '3KR',
    '4FB',
    '5FW',
    '5KR',
  ],
  dialCodes: ['DTF'],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Evade' },
    },
    {
      difficulty: 'White',
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  pilots: [
    {
      name: 'DIS-T81',
      initiative: 4,
      limited: 1,
      xws: 'dist81',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      standard: true,
      wildspace: true,
      ability:
        "While you defend or perform an attack, you may spend 1 calculate token from a friendly ship in the enemy ship's firing arc to change 1 [Focus] result to an [Evade] or [Hit] result.",
      caption: 'Clever Circuits',
      cost: 36,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dist81.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dist81.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
      ffg: 794,
    },
    {
      name: 'Phlac-Arphocc Prototype',
      xws: 'phlacarphoccprototype',
      initiative: 5,
      limited: 2,
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      caption: 'Predictive Analysis Protocol',
      standard: true,
      wildspace: true,
      ability:
        "During the System Phase, you may spend your lock on a ship to look at that ship's dial.",
      cost: 38,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/phlacarphoccprototype.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/phlacarphoccprototype.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
      ffg: 796,
    },
    {
      name: 'Fearsome Predator',
      xws: 'fearsomepredator',
      initiative: 3,
      limited: 3,
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      caption: 'Fixated Pursuit',
      conditions: ['fearfulprey'],
      standard: true,
      wildspace: true,
      ability:
        'Setup: After placing forces, assign the Fearful Prey condition to 1 enemy ship.',
      cost: 35,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/fearsomepredator.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/fearsomepredator.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
      ffg: 797,
    },
    {
      name: 'DIS-347',
      xws: 'dis347',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      caption: 'Target Acquired',
      standard: true,
      wildspace: true,
      ability:
        'At the start of the Engagement Phase, you may acquire a lock on an object at range 1-3 that has a friendly lock.',
      cost: 36,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dis347.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dis347.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
      ffg: 795,
    },
    {
      name: 'Separatist Interceptor',
      xws: 'separatistinterceptor',
      initiative: 3,
      limited: 0,
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      text: 'Deployed late in the Clone Wars, these aggressive starfighters, and the destructive buzz droids they carry, pose a serious threat to even veteran Jedi pilots.',
      standard: true,
      wildspace: true,
      cost: 35,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/separatistinterceptor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/separatistinterceptor.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
      ffg: 798,
    },
    {
      name: 'Colicoid Interceptor',
      xws: 'colicoidinterceptor',
      initiative: 1,
      limited: 0,
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      text: 'Designed by the Colicoid Creation Nest and manufactured by Phlac-Arphocc Automata Industries, the heuristic processors of Droid Tri-Fighters allow these deadly ships to analyze and adapt to enemy tactics in-flight.',
      standard: true,
      wildspace: true,
      cost: 34,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/colicoidinterceptor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/colicoidinterceptor.png',
      slots: ['Sensor', 'Missile', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
      ffg: 799,
    },
    {
      name: 'DIS-347',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      cost: 40,
      xws: 'dis347-siegeofcoruscant',
      ability:
        'At the start of the Engagement Phase, you may acquire a lock on an object at range 1-3 that has a friendly lock.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dis347-siegeofcoruscant.png',
      standardLoadout: [
        'marksmanship',
        'afterburners',
        'contingencyprotocol-siegeofcoruscant',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dis347-siegeofcoruscant.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1085,
    },
    {
      name: 'DIS-347',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      cost: 36,
      xws: 'dis347-siegeofcoruscant-lsl',
      ability:
        'At the start of the Engagement Phase, you may acquire a lock on an object at range 1-3 that has a friendly lock.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dis347-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dis347-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1207,
    },
    {
      name: 'DIS-T81',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'dist81-siegeofcoruscant',
      ability:
        'While you defend or perform an attack, you may reroll any number of your dice. Then if you were defending, gain 1 strain token for each die that was rerolled. If you were attacking, gain 1 deplete token for each die that was rerolled instead.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dist81-siegeofcoruscant.png',
      standardLoadout: [
        'outmaneuver',
        'afterburners',
        'contingencyprotocol-siegeofcoruscant',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dist81-siegeofcoruscant.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1086,
    },
    {
      name: 'DIS-T81',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      cost: 38,
      xws: 'dist81-siegeofcoruscant-lsl',
      ability:
        'While you defend or perform an attack, you may reroll any number of your dice. Then if you were defending, gain 1 strain token for each die that was rerolled. If you were attacking, gain 1 deplete token for each die that was rerolled instead.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dist81-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dist81-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1208,
    },
    {
      name: 'Phlac-Arphocc Prototype',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 2,
      cost: 50,
      xws: 'phlacarphoccprototype-siegeofcoruscant',
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain a calculate token',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/phlacarphoccprototype-siegeofcoruscant.png',
      standardLoadout: [
        'afterburners',
        'contingencyprotocol-siegeofcoruscant',
        'evasionsequence7-siegeofcoruscant',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/phlacarphoccprototype-siegeofcoruscant.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1087,
    },
    {
      name: 'Phlac-Arphocc Prototype',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 2,
      cost: 41,
      xws: 'phlacarphoccprototype-siegeofcoruscant-lsl',
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain a calculate token',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/phlacarphoccprototype-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/phlacarphoccprototype-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1209,
    },
    {
      name: 'Volan Das',
      xws: 'volandas',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Modified for Organics',
        text: 'This ship is not affected by the Standardized restriction. Reduce the difficulty of your speed 2 and 3 bank [[Bank Left] or [Bank Right]] maneuvers. Increase the difficulty of your speed 3 turn [[Turn Left] or [Turn Right]] maneuvers.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Evade' },
        },
        {
          difficulty: 'White',
          type: 'Boost',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
      ],
      caption: 'Impatient Invader',
      standard: true,
      wildspace: true,
      ability:
        'After you fully execute a red maneuver, you may chose an enemy ship at range 1. The chosen ship gains 1 strain token and you may remove 1 stress token.',
      cost: 41,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/volandas.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/volandas.png',
      slots: [
        'Talent',
        'Sensor',
        'Missile',
        'Illicit',
        'Modification',
        'Configuration',
      ],
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 1088,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Droid_Tri-Fighter.png',
};

export default t;
