import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'YT-2400 Light Freighter',
  xws: 'yt2400lightfreighter',
  ffg: 5,
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
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 4 },
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
  ability: {
    name: 'Sensor Blindspot',
    text: 'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_YT-2400.png',
  pilots: [
    {
      name: '“Leebo”',
      caption: 'Dry-Witted Droid',
      initiative: 3,
      limited: 1,
      cost: 7,
      xws: 'leebo',
      ability:
        'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      slots: ['Talent', 'Missile', 'Illicit', 'Illicit', 'Modification'],
      ffg: 78,
      standard: false,
      epic: true,
      loadout: 22,
      extended: true,
      keywords: ['Droid', 'Freighter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/leebo.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/leebo.png',
    },
    {
      name: 'Dash Rendar',
      caption: 'Hotshot Mercenary',
      initiative: 5,
      limited: 1,
      cost: 8,
      xws: 'dashrendar',
      ability: 'While you move, you ignore obstacles.',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Illicit',
        'Illicit',
        'Modification',
      ],
      ffg: 77,
      standard: false,
      epic: true,
      keywords: ['Freighter'],
      loadout: 20,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/dashrendar.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dashrendar.png',
    },
    {
      name: 'Wild Space Fringer',
      initiative: 1,
      limited: 0,
      cost: 7,
      xws: 'wildspacefringer',
      text: 'Although stock YT-2400 light freighters have plenty of room for cargo, that space is often annexed to support modified weapon systems and oversized engines.',
      slots: ['Missile', 'Gunner', 'Illicit', 'Modification'],
      ffg: 79,
      standard: false,
      epic: true,
      keywords: ['Freighter'],
      loadout: 19,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/wildspacefringer.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wildspacefringer.png',
      caption: '',
    },
    {
      name: '“Leebo”',
      caption: 'Wisdom of Ages',
      initiative: 3,
      limited: 1,
      cost: 6,
      loadout: 7,
      xws: 'leebo-swz103-rebelalliance',
      ability:
        'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
      shipAbility: {
        name: 'Sensor Blackout',
        text: 'While you perform a primary attack at range 0-1, you roll 1 fewer attack die.\n\nWhile you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Illicit', 'Crew', 'Title'],
      standard: true,
      extended: true,
      epic: true,
      stats: [
        { arc: 'Double Turret Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
      image:
        'https://infinitearenas.com/xw2/images/pilots/leebo-wisdomofages.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/upgrades/outrider.jpg',
      keywords: ['Droid', 'Freighter'],
    },
    {
      name: 'Dash Rendar',
      caption: 'Freighter for Hire',
      initiative: 5,
      limited: 1,
      cost: 7,
      loadout: 12,
      xws: 'dashrendar-swz103-rebelalliance',
      ability:
        'During the Engagement Phase, you ignore the effects of obstacles that you are overlapping.',
      shipAbility: {
        name: 'Sensor Blackout',
        text: 'While you perform a primary attack at range 0-1, you roll 1 fewer attack die.\n\nWhile you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      standard: true,
      extended: true,
      epic: true,
      stats: [
        { arc: 'Double Turret Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
      image:
        'https://infinitearenas.com/xw2/images/pilots/dashrendar-freighterforhire.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/upgrades/outrider.jpg',
      keywords: ['Freighter'],
    },
    {
      name: '“Leebo”',
      caption: "He Thinks He's Funny",
      initiative: 3,
      limited: 1,
      cost: 7,
      xws: 'leebo-swz103-sl-rebelalliance',
      ability:
        'At the end of the Engagement Phase, you may spend a calculate token to acquire a lock on an enemy ship at range 2-3.',
      shipAbility: {
        name: 'Sensor Blackout',
        text: 'While you perform a primary attack at range 0-1, you roll 1 fewer attack die.\n\nWhile you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: [],
      standard: true,
      extended: true,
      epic: true,
      standardLoadout: ['efficientprocessing', 'seekermissiles', 'outrider'],
      stats: [
        { arc: 'Double Turret Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/leebo-hethinkshesfunny-rebelalliance.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/leebo.png',
      loadout: 0,
      keywords: ['Droid', 'Freighter'],
    },
    {
      name: 'Dash Rendar',
      caption: 'In it for Himself',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'dashrendar-swz103-sl-rebelalliance',
      ability:
        'After you gain a red token as a result of moving through or overlapping an obstacle, you may transfer that red token to a friendly ship at range 0-1.',
      shipAbility: {
        name: 'Sensor Blackout',
        text: 'While you perform a primary attack at range 0-1, you roll 1 fewer attack die.\n\nWhile you defend at range 1, you roll 1 fewer defense die.',
      },
      slots: [],
      standard: true,
      extended: true,
      epic: true,
      standardLoadout: ['mercenary', 'seekermissiles', 'leebo', 'outrider'],
      stats: [
        { arc: 'Double Turret Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/dashrendar-initforhimself-rebelalliance.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/dashrendar.png',
      loadout: 0,
      keywords: ['Droid', 'Freighter'],
    },
  ],
};

export default t;
