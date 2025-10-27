import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'YT-2400 Light Freighter (2023)',
  xws: 'yt2400lightfreighter2023',
  size: 'Large',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  dialCodes: ['YT24'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_YT-2400.png',
  pilots: [
    {
      name: 'Dash Rendar',
      caption: 'Freighter for Hire',
      initiative: 5,
      limited: 1,
      cost: 77,
      xws: 'dashrendar-swz103-rebelalliance',
      ability:
        'During the Engagement Phase, you ignore the effects of obstacles that you are overlapping.',
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, you roll 1 fewer attack die. While you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dashrendar-swz103-rebelalliance.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dashrendar-swz103-rebelalliance.png',
      standard: true,
      wildspace: true,
      keywords: ['Freighter'],
      epic: true,
      ffg: 1048,
    },
    {
      name: 'Dash Rendar',
      caption: 'In it for Himself',
      initiative: 5,
      limited: 1,
      cost: 74,
      xws: 'dashrendar-swz103-lsl-rebelalliance',
      ability:
        'After you gain a red token as a result of moving through or overlapping an obstacle, you may transfer that red token to a friendly ship at range 0-1.',
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, you roll 1 fewer die. While you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dashrendar-swz103-lsl-rebelalliance.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dashrendar-swz103-lsl-rebelalliance.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid', 'Freighter'],
      epic: true,
      ffg: null,
    },
    {
      name: 'Dash Rendar',
      caption: 'In it for Himself',
      initiative: 5,
      limited: 1,
      cost: 90,
      xws: 'dashrendar-swz103-sl-rebelalliance',
      ability:
        'After you gain a red token as a result of moving through or overlapping an obstacle, you may transfer that red token to a friendly ship at range 0-1.',
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, you roll 1 fewer die. While you defend at range 1, you roll 1 fewer defense die.',
      },
      standardLoadout: [
        'mercenary-swz103',
        'seekermissiles-swz103',
        'leebo-swz103',
        'outrider',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dashrendar-swz103-sl-rebelalliance.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dashrendar-swz103-sl-rebelalliance.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid', 'Freighter'],
      epic: true,
      ffg: 1050,
    },
    {
      name: '“Leebo”',
      caption: 'Wisdom of Ages',
      initiative: 3,
      limited: 1,
      cost: 71,
      xws: 'leebo-swz103-rebelalliance',
      ability:
        'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Rotate Arc' },
          type: 'Lock',
        },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, you roll 1 less attack die. While you defend at range 1, you roll 1 less defense die.',
      },
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/leebo-swz103-rebelalliance.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/leebo-swz103-rebelalliance.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid', 'Freighter'],
      epic: true,
      ffg: 1047,
    },
    {
      name: '“Leebo”',
      caption: "He Thinks He's Funny",
      initiative: 3,
      limited: 1,
      cost: 69,
      xws: 'leebo-swz103-lsl-rebelalliance',
      ability:
        'At the end of the Engagement Phase, you may spend a calculate token to acquire a lock on an enemy ship at range 2-3.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Rotate Arc' },
          type: 'Lock',
        },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, you roll 1 fewer die. While you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: ['Talent', 'Crew', 'Missile', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/leebo-swz103-lsl-rebelalliance.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/leebo-swz103-lsl-rebelalliance.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid', 'Freighter'],
      epic: true,
      ffg: null,
    },
    {
      name: '“Leebo”',
      caption: "He Thinks He's Funny",
      initiative: 3,
      limited: 1,
      cost: 83,
      xws: 'leebo-swz103-sl-rebelalliance',
      ability:
        'At the end of the Engagement Phase, you may spend a calculate token to acquire a lock on an enemy ship at range 2-3.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Rotate Arc' },
          type: 'Lock',
        },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, you roll 1 fewer die. While you defend at range 1, you roll 1 fewer defense die.',
      },
      standardLoadout: [
        'efficientprocessing-swz103',
        'seekermissiles-swz103',
        'outrider',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/leebo-swz103-sl-rebelalliance.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/leebo-swz103-sl-rebelalliance.png',
      standard: false,
      wildspace: true,
      keywords: ['Droid', 'Freighter'],
      epic: true,
      ffg: 1049,
    },
  ],
};

export default t;
