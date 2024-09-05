import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Delta-7 Aethersprite',
  xws: 'delta7aethersprite',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
    '5FW',
    '5KR',
  ],
  dialCodes: ['D7A'],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Purple', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Delta-7.png',
  pilots: [
    {
      name: 'Jedi Knight',
      initiative: 3,
      limited: 0,
      xws: 'jediknight',
      text: 'When the Clone Wars began, the Jedi Knights rallied to the cause of preserving the Republic, assuming command of legions of clone troopers and leading them in battle.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jediknight.png',
      force: { value: 1, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      cost: 35,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jediknight.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Obi-Wan Kenobi',
      caption: 'Guardian of the Republic',
      initiative: 5,
      limited: 1,
      xws: 'obiwankenobi',
      ability:
        'After a friendly ship at range 0-2 spends a focus token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/obiwankenobi.png',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      cost: 48,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/obiwankenobi.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Plo Koon',
      caption: 'Serene Mentor',
      initiative: 5,
      limited: 1,
      xws: 'plokoon',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Force] and choose another friendly ship at range 0-2. If you do, you may transfer 1 green token to it or transfer one orange token from it to yourself.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/plokoon.png',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      cost: 45,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/plokoon.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Saesee Tiin',
      caption: 'Prophetic Pilot',
      initiative: 4,
      limited: 1,
      xws: 'saeseetiin',
      ability:
        'After a friendly ship at range 0-2 reveals its dial, you may spend 1 [Force]. If you do, set its dial to another maneuver of the same speed and difficulty.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/saeseetiin.png',
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: false,
      wildspace: true,
      cost: 39,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/saeseetiin.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Mace Windu',
      caption: 'Harsh Traditionalist',
      initiative: 4,
      limited: 1,
      xws: 'macewindu',
      ability: 'After you fully execute a red maneuver, recover 1 [Force].',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/macewindu.png',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      cost: 42,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/macewindu.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Anakin Skywalker',
      caption: 'Hero of the Republic',
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker',
      ability:
        'After you fully execute a maneuver, if there is an enemy ship in your [Front Arc] at range 0-1 or in your [Bullseye Arc], you may spend 1 [Force] to remove 1 stress token.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/anakinskywalker.png',
      cost: 55,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/anakinskywalker.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Ahsoka Tano',
      caption: '“Snips”',
      initiative: 3,
      limited: 1,
      xws: 'ahsokatano',
      ability:
        'After you fully execute a maneuver, you may choose a friendly ship at range 0-1 and spend 1 [Force]. That ship may perform an action, even if it is stressed.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ahsokatano.png',
      cost: 38,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ahsokatano.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Barriss Offee',
      caption: 'Conflicted Padawan',
      initiative: 4,
      limited: 1,
      xws: 'barrissoffee',
      ability:
        'While a friendly ship at range 0-2 performs an attack, if the defender is in its [Bullseye Arc], you may spend 1 [Force] to change 1 [Focus] result to a [Hit] result or 1 [Hit] result to a [Critical Hit] result.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 1, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/barrissoffee.png',
      cost: 35,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/barrissoffee.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Luminara Unduli',
      caption: 'Wise Protector',
      initiative: 4,
      limited: 1,
      xws: 'luminaraunduli',
      ability:
        "While a friendly ship at range 0-2 defends, if it is not in the attacker's [Bullseye Arc], you may spend 1 [Force]. If you do, change 1 [Critical Hit] result to a [Hit] result or 1 [Hit] result to a [Focus] result.",
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/luminaraunduli.png',
      cost: 39,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/luminaraunduli.png',
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
    {
      name: 'Adi Gallia',
      caption: 'Shooting Star',
      initiative: 5,
      limited: 1,
      xws: 'adigallia',
      ability:
        'While you defend at attack range 1, you may spend 1 [Force]. If you do, the attacker cannot apply the range bonus. While you perform an attack against a defender at attack range 3, you may spend 1 [Force]. If you do, the defender cannot apply the range bonus.',
      shipAbility: {
        name: 'Fine-tuned Controls',
        text: 'After you fully execute a maneuver, you may spend 1 [Force] to perform a [Boost] or [Barrel Roll] action.',
      },
      force: { value: 2, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/adigallia.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/adigallia.png',
      cost: 46,
      slots: ['Astromech', 'Modification', 'Force Power', 'Configuration'],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
    },
  ],
};

export default t;
