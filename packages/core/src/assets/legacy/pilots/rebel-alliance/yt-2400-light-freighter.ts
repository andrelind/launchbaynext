import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'YT-2400 Light Freighter',
  xws: 'yt2400lightfreighter',
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
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_YT-2400.png',
  pilots: [
    {
      name: '“Leebo”',
      caption: 'Dry-Witted Droid',
      initiative: 3,
      limited: 1,
      cost: 75,
      xws: 'leebo',
      ability:
        'After you defend or perform an attack, if you spent a calculate token, gain 1 calculate token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/leebo.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
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
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/leebo.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid', 'Freighter'],
      epic: true,
    },
    {
      name: 'Dash Rendar',
      caption: 'Hotshot Mercenary',
      initiative: 5,
      limited: 1,
      cost: 83,
      xws: 'dashrendar',
      ability: 'While you move, you ignore obstacles.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dashrendar.png',
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
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
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dashrendar.png',
      standard: true,
      wildspace: true,
      keywords: ['Freighter'],
      epic: true,
    },
    {
      name: 'Wild Space Fringer',
      initiative: 1,
      limited: 0,
      cost: 69,
      xws: 'wildspacefringer',
      text: 'Although stock YT-2400 light freighters have plenty of room for cargo, that space is often annexed to support modified weapon systems and oversized engines.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wildspacefringer.png',
      shipAbility: {
        name: 'Sensor Blindspot',
        text: 'While you perform a primary attack at attack range 0-1, do not apply the range 0-1 bonus and roll 1 fewer attack die.',
      },
      slots: ['Missile', 'Crew', 'Crew', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wildspacefringer.png',
      standard: true,
      wildspace: true,
      keywords: ['Freighter'],
      epic: true,
    },
  ],
};

export default t;
