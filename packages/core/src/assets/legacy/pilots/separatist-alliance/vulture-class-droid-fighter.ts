import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Vulture-class Droid Fighter',
  xws: 'vultureclassdroidfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '1KR',
    '2ER',
    '2TB',
    '2BW',
    '2FB',
    '2NW',
    '2YB',
    '2RR',
    '3TW',
    '3BR',
    '3FB',
    '3NR',
    '3YW',
    '4FB',
    '5FW',
  ],
  dialCodes: ['VDF'],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Calculate' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      type: 'Barrel Roll',
      linked: { difficulty: 'Red', type: 'Calculate' },
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_VultureDroid.png',
  pilots: [
    {
      name: 'Trade Federation Drone',
      initiative: 1,
      limited: 0,
      xws: 'tradefederationdrone',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      text: 'The Trade Federation deployed countless Vulture Droids at the Battle of Naboo, and continues to use these inexpensive starfighters in the Clone Wars.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tradefederationdrone.png',
      standard: true,
      wildspace: true,
      cost: 21,
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tradefederationdrone.png',
      keywords: ['Droid'],
      epic: true,
      ffg: 498,
    },
    {
      name: 'Precise Hunter',
      caption: 'Pinpoint Protocols',
      limited: 3,
      initiative: 3,
      xws: 'precisehunter',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      ability:
        'While you perform an attack, if the defender is in your [Bullseye Arc], you may reroll 1 blank result.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/precisehunter.png',
      standard: true,
      wildspace: true,
      cost: 23,
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/precisehunter.png',
      keywords: ['Droid'],
      epic: true,
      ffg: 500,
    },
    {
      name: 'Haor Chall Prototype',
      caption: 'Xi Char Offering',
      limited: 2,
      initiative: 1,
      xws: 'haorchallprototype',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      ability:
        'After an enemy ship in your [Bullseye Arc] at range 0-2 declares another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/haorchallprototype.png',
      standard: true,
      wildspace: true,
      cost: 22,
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/haorchallprototype.png',
      keywords: ['Droid'],
      epic: true,
      ffg: 502,
    },
    {
      name: 'DFS-081',
      xws: 'dfs081',
      initiative: 3,
      limited: 1,
      caption: 'Preservation Programming',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      ability:
        'While a friendly ship at range 0-1 defends, it may spend 1 calculate token to change all [Critical Hit] results to [Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dfs081.png',
      standard: true,
      wildspace: true,
      cost: 22,
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dfs081.png',
      keywords: ['Droid'],
      epic: true,
      ffg: 499,
    },
    {
      name: 'Separatist Drone',
      initiative: 3,
      limited: 0,
      xws: 'separatistdrone',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      text: 'As the Clone Wars escalate, the Separatist Alliance continues to develop the technology of droid starfighters, as well as the tactical droids that command them.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/separatistdrone.png',
      standard: true,
      wildspace: true,
      cost: 22,
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/separatistdrone.png',
      keywords: ['Droid'],
      epic: true,
      ffg: 497,
    },
    {
      name: 'DFS-311',
      xws: 'dfs311',
      initiative: 1,
      limited: 1,
      caption: 'Scouting Drone',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      ability:
        'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dfs311.png',
      standard: true,
      wildspace: true,
      cost: 23,
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dfs311.png',
      keywords: ['Droid'],
      epic: true,
      ffg: 501,
    },
    {
      name: 'DFS-081',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      cost: 28,
      charges: { value: 2, recovers: 0 },
      xws: 'dfs081-siegeofcoruscant',
      ability:
        'While defending, you may spend 1 [Charge] and 1 calculate token to cancel 1 [Critical Hit] result.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dfs081-siegeofcoruscant.png',
      standardLoadout: [
        'discordmissiles',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dfs081-siegeofcoruscant.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1080,
    },
    {
      name: 'DFS-081',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      cost: 23,
      charges: { value: 2, recovers: 0 },
      xws: 'dfs081-siegeofcoruscant-lsl',
      ability:
        'While defending, you may spend 1 [Charge] and 1 calculate token to cancel 1 [Critical Hit] result.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dfs081-siegeofcoruscant-lsl.png',
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dfs081-siegeofcoruscant-lsl.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1200,
    },
    {
      name: 'DFS-311',
      caption: 'Siege of Coruscant',
      initiative: 1,
      limited: 1,
      cost: 28,
      xws: 'dfs311-siegeofcoruscant',
      ability:
        'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dfs311-siegeofcoruscant.png',
      standardLoadout: [
        'discordmissiles',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dfs311-siegeofcoruscant.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1081,
    },
    {
      name: 'DFS-311',
      caption: 'Siege of Coruscant',
      initiative: 1,
      limited: 1,
      cost: 23,
      xws: 'dfs311-siegeofcoruscant-lsl',
      ability:
        'At the start of the Engagement Phase, you may transfer 1 of your calculate tokens to another friendly ship at range 0-3.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dfs311-siegeofcoruscant-lsl.png',
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dfs311-siegeofcoruscant-lsl.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1201,
    },
    {
      name: 'Haor Chall Prototype',
      caption: 'Siege of Coruscant',
      initiative: 1,
      limited: 2,
      cost: 25,
      xws: 'haorchallprototype-siegeofcoruscant',
      ability:
        'After an enemy ship in your [Bullseye Arc] at range 0-2 declares a scenario feature or another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/haorchallprototype-siegeofcoruscant.png',
      standardLoadout: [
        'ionmissiles',
        'contingencyprotocol-siegeofcoruscant',
        'strutlockoverride-siegeofcoruscant',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/haorchallprototype-siegeofcoruscant.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1082,
    },
    {
      name: 'Haor Chall Prototype',
      caption: 'Siege of Coruscant',
      initiative: 1,
      limited: 2,
      cost: 22,
      xws: 'haorchallprototype-siegeofcoruscant-lsl',
      ability:
        'After an enemy ship in your [Bullseye Arc] at range 0-2 declares a scenario feature or another friendly ship as the defender, you may perform a [Calculate] or [Lock] action.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/haorchallprototype-siegeofcoruscant-lsl.png',
      slots: ['Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/haorchallprototype-siegeofcoruscant-lsl.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 1202,
    },
    {
      name: 'The Iron Assembler',
      xws: 'theironassembler',
      initiative: 1,
      limited: 1,
      caption: 'Scintilla Scavenger',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      ability:
        'After a friendly ship at range 0-1 skips its execute maneuver step, you may spend 1 [Charge]. If you do, if there is an asteroid or debris cloud at range 0 of it, that ship may repair 1 damage.',
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/theironassembler.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/theironassembler.png',
      cost: 22,
      charges: { value: 3, recovers: 0 },
      slots: ['Missile', 'Modification', 'Configuration'],
      keywords: ['Droid'],
      epic: true,
      ffg: 1083,
    },
    {
      name: 'Kelrodo-Ai Holdout',
      xws: 'kelrodoaiholdout',
      initiative: 1,
      limited: 3,
      caption: 'Separatist Stalwart',
      shipAbility: {
        name: 'Modified for Organics',
        text: 'This ship is not affected by the Standardized restriction. Reduce the difficulty of your speed 2 and 3 bank [[Bank Left] or [Bank Right]] maneuvers. Increase the difficulty of your speed 3 turn [[Turn Left] or [Turn Right]] maneuvers.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
      ],
      ability:
        'After you are destroyed, you may transfer each of your locks and green tokens to another friendly Kelrodo-Ai Holdout at range 0-3.',
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kelrodoaiholdout.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kelrodoaiholdout.png',
      cost: 22,
      slots: ['Missile', 'Modification', 'Configuration'],
      epic: true,
      ffg: 1084,
    },
  ],
};

export default t;
