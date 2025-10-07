import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Belbullab-22 Starfighter',
  xws: 'belbullab22starfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BW',
    '1NW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3PR',
    '4FW',
    '5FW',
  ],
  dialCodes: ['B22'],
  faction: 'Separatist Alliance',
  stats: [
    { type: 'attack', value: 3, arc: 'Front Arc' },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_Belbullab-22.png',
  pilots: [
    {
      name: 'General Grievous',
      caption: 'Ambitious Cyborg',
      initiative: 4,
      limited: 1,
      xws: 'generalgrievous',
      ability:
        "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/generalgrievous.png',
      standard: true,
      wildspace: true,
      cost: 44,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/generalgrievous.png',
      epic: true,
      ffg: 492,
    },
    {
      name: 'Wat Tambor',
      caption: 'Techno Union Foreman',
      initiative: 3,
      limited: 1,
      xws: 'wattambor',
      ability:
        'While you perform a primary attack, you may reroll 1 attack die for each calculating friendly ship at range 1 of the defender.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wattambor.png',
      standard: true,
      wildspace: true,
      cost: 39,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wattambor.png',
      epic: true,
      ffg: 493,
    },
    {
      name: 'Feethan Ottraw Autopilot',
      limited: 0,
      initiative: 1,
      xws: 'feethanottrawautopilot',
      text: 'Unlike the more disposable fighters it also built for the Separatists, Feethan Ottraw Scalable Assemblies designed the Belbullab-22 with a solid mix of firepower, durability, and speed.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/feethanottrawautopilot.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      standard: true,
      wildspace: true,
      cost: 34,
      slots: ['Modification', 'Title', 'Tactical Relay'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/feethanottrawautopilot.png',
      keywords: ['Droid'],
      epic: true,
      ffg: 496,
    },
    {
      name: 'Captain Sear',
      caption: 'Kage Infiltrator',
      limited: 1,
      initiative: 2,
      xws: 'captainsear',
      ability:
        'While a friendly ship at range 0-3 performs a primary attack, if the defender is in its [Bullseye Arc], before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 [Evade] result.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captainsear.png',
      standard: true,
      wildspace: true,
      cost: 44,
      slots: ['Modification', 'Title', 'Tactical Relay'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captainsear.png',
      epic: true,
      ffg: 494,
    },
    {
      name: 'Skakoan Ace',
      xws: 'skakoanace',
      cost: 37,
      slots: ['Talent', 'Modification', 'Title', 'Tactical Relay'],
      initiative: 3,
      limited: 0,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/skakoanace.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/skakoanace.png',
      text: 'With its powerful engines, devastating triple laser cannons, and high customizability, the Belbullab-22 is the chosen craft of several elite Separatist Alliance pilots, including the infamous General Grievous.',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 495,
    },
  ],
};

export default t;
