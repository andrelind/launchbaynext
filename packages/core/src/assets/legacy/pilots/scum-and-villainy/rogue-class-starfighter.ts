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
  faction: 'Scum and Villainy',
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
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Rogue.png',
  pilots: [
    {
      name: 'Durge',
      caption: 'Hard to Kill',
      initiative: 5,
      limited: 1,
      cost: 43,
      xws: 'durge',
      slots: ['Talent', 'Cannon', 'Cannon', 'Illicit', 'Modification', 'Title'],
      ability:
        'While you defend, after the Neutralize Results step, if there are more [Hit]/[Critical Hit] results than your active [Shield], you may change 1 [Hit] result to a [Critical Hit] and cancel 1 [Hit] result.',
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/durge.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/durge.png',
      keywords: ['Bounty Hunter'],
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1073,
    },
    {
      name: 'Cad Bane',
      caption: 'Infamous Bounty Hunter',
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'cadbane',
      slots: ['Talent', 'Cannon', 'Cannon', 'Illicit', 'Modification', 'Title'],
      ability:
        'After you perform an attack that hits, you may spend 2 [Charge] to transfer 1 of your non-lock red or orange tokens to the defender.',
      charges: { value: 2, recovers: 1 },
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/cadbane.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/cadbane.png',
      keywords: ['Bounty Hunter'],
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1069,
    },
    {
      name: 'Viktor Hel',
      caption: 'Storied Bounty Hunter',
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'viktorhel-rogueclassstarfighter',
      slots: ['Talent', 'Cannon', 'Cannon', 'Illicit', 'Modification', 'Title'],
      ability:
        'After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.',
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/viktorhel-rogueclassstarfighter.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/viktorhel-rogueclassstarfighter.png',
      keywords: ['Bounty Hunter'],
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1070,
    },
    {
      name: 'Nom Lumb',
      caption: 'Laughing Bandit',
      initiative: 1,
      limited: 1,
      cost: 35,
      xws: 'nomlumb-rogueclassstarfighter',
      slots: ['Cannon', 'Cannon', 'Illicit', 'Modification', 'Title'],
      ability:
        "At the start of the Engagement Phase, you may choose 1 enemy ship in your [Front Arc]. If you do, treat your initiative as equal to that ship's until the end of the round.",
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/nomlumb-rogueclassstarfighter.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/nomlumb-rogueclassstarfighter.png',
      keywords: ['Bounty Hunter'],
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1071,
    },
    {
      name: 'Outer Rim Hunter',
      initiative: 3,
      limited: 0,
      cost: 35,
      xws: 'outerrimhunter',
      slots: ['Talent', 'Cannon', 'Cannon', 'Illicit', 'Modification', 'Title'],
      text: 'Due to its association with Cad Bane, the Rogue-class Starfighterhas found its way into the hands of other bounty hunters, especially those who operate in the lawless Outer Rim.',
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/outerrimhunter.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/outerrimhunter.png',
      keywords: ['Bounty Hunter'],
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1072,
    },
  ],
};

export default t;
