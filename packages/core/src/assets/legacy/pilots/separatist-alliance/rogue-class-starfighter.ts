import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Rogue-class Starfighter',
  xws: 'rogueclassstarfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2ER',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RR',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '4FB',
    '5FW',
    '5KR',
  ],
  dialCodes: ['RCS'],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Boost' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Barrel Roll' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Barrel Roll' },
      type: 'Evade',
    },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Rogue.png',
  pilots: [
    {
      name: 'Durge',
      caption: 'On His Own Time',
      initiative: 5,
      limited: 1,
      cost: 45,
      charges: { value: 1, recovers: 0 },
      xws: 'durge-separatistalliance',
      slots: ['Talent', 'Cannon', 'Cannon', 'Illicit', 'Modification', 'Title'],
      ability:
        'When you would be destroyed, you may spend 1 [Charge] to reveal all of your facedown damage cards. If you do, discard each Direct Hit! and each of your damage cards with the Pilot trait, then repair all of your faceup damage cards.',
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/durge-separatistalliance.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/durge-separatistalliance.png',
      keywords: ['Bounty Hunter'],
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'Cad Bane',
      caption: 'Needs No Introduction',
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'cadbane-separatistalliance',
      slots: ['Talent', 'Cannon', 'Cannon', 'Illicit', 'Modification', 'Title'],
      ability:
        'During the Engagement Phase, after another ship at range 0-3 is destroyed, you may spend 1 [Charge] to perform an action, even while stressed.',
      charges: { value: 1, recovers: 1 },
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/cadbane-separatistalliance.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/cadbane-separatistalliance.png',
      keywords: ['Bounty Hunter'],
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'IG-101',
      caption: 'Tenacious Bodyguard',
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'ig101',
      slots: ['Talent', 'Cannon', 'Cannon', 'Modification', 'Title'],
      ability:
        'At the start of the System Phase, you may repair 1 faceup damage card.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Boost' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Evade',
        },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ig101.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ig101.png',
      keywords: ['Droid'],
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'MagnaGuard Executioner',
      initiative: 3,
      limited: 0,
      cost: 37,
      xws: 'magnaguardexecutioner',
      slots: ['Talent', 'Cannon', 'Cannon', 'Modification', 'Title'],
      text: 'In addition to guarding Separatist leaders, MagneGuard droids are sometimes dispatched in swift Rogue-class Starfighters to eliminate their enemies.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Boost' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Evade',
        },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/magnaguardexecutioner.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/magnaguardexecutioner.png',
      keywords: ['Droid'],
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'MagnaGuard Protector',
      caption: 'Implacable Escort',
      initiative: 4,
      limited: 2,
      cost: 40,
      xws: 'magnaguardprotector',
      slots: ['Talent', 'Cannon', 'Cannon', 'Modification', 'Title'],
      ability:
        'After placing forces, assign the Guarded condition to 1 friendly ship other than MagnaGuard Protector.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Boost' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Evade',
        },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/magnaguardprotector.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/magnaguardprotector.png',
      keywords: ['Droid'],
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'IG-102',
      caption: 'Dueling Droid',
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'ig102',
      slots: ['Talent', 'Cannon', 'Cannon', 'Modification', 'Title'],
      ability:
        "While you defend, if the attacker's initiative is equal to or greater than yours, you may change 1 blank result to a [Focus] result.",
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Boost' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Evade',
        },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ig102.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ig102.png',
      keywords: ['Droid'],
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'IG-111',
      caption: 'One Eye',
      initiative: 1,
      limited: 1,
      cost: 38,
      xws: 'ig111',
      slots: ['Talent', 'Cannon', 'Cannon', 'Modification', 'Title'],
      ability:
        'After you perform an attack that missed, you may choose 1 enemy ship in your [Bullseye Arc] and gain 1 deplete token. If you do, that ship suffers 1 [Hit] damage.',
      shipAbility: {
        name: 'Networked Calculations',
        text: 'While you defend or perform an attack, you may spend 1 calculate token from a friendly ship at range 0-1 to change 1 [Focus] result to an [Evade] or [Hit] result.',
      },
      shipActions: [
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Boost' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Calculate',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Barrel Roll' },
          type: 'Evade',
        },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ig111.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ig111.png',
      keywords: ['Droid'],
      standard: true,
      wildspace: true,
      epic: true,
    },
  ],
};

export default t;
