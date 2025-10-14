import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Fireball',
  xws: 'fireball',
  size: 'Small',
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
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  dialCodes: ['FB'],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 0 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'SLAM' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_Fireball.png',
  pilots: [
    {
      name: 'Colossus Station Mechanic',
      initiative: 2,
      limited: 0,
      xws: 'colossusstationmechanic',
      shipAbility: {
        name: 'Explosion with Wings',
        text: 'Setup: You are dealt 1 facedown damage card. After you perform a [SLAM] action, you may expose 1 damage card to remove 1 disarm token.',
      },
      slots: [
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      standard: true,
      wildspace: true,
      cost: 26,
      text: 'Some ambitious and talented pilots begin their racing careers as ground crew, working around the clock to keep cobbled-together ships in the sky on far-flung worlds like Castilon.',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/colossusstationmechanic.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/colossusstationmechanic.png',
      epic: true,
      ffg: 623,
    },
    {
      name: 'Jarek Yeager',
      xws: 'jarekyeager',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Explosion with Wings',
        text: 'Setup: You are dealt 1 facedown damage card. After you perform a [SLAM] action, you may expose 1 damage card to remove 1 disarm token.',
      },
      standard: true,
      wildspace: true,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      cost: 28,
      ability:
        'While you have 2 or fewer stress tokens, if you are damaged, you can execute red basic maneuvers even while stressed; if you are critically damaged, you can execute red advanced maneuvers even while stressed.',
      caption: 'Too Old for This',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jarekyeager.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jarekyeager.png',
      epic: true,
      ffg: 620,
    },
    {
      name: 'Kazuda Xiono',
      xws: 'kazudaxiono',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Explosion with Wings',
        text: 'Setup: You are dealt 1 facedown damage card. After you perform a [SLAM] action, you may expose 1 damage card to remove 1 disarm token.',
      },
      caption: 'Best Pilot in the Galaxy',
      standard: true,
      wildspace: true,
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      ability:
        "While you defend or perform a primary attack, if the enemy ship's initiative is higher than the number of damage cards you have, you may roll 1 additional die.",
      cost: 37,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kazudaxiono.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kazudaxiono.png',
      epic: true,
      ffg: 621,
    },
    {
      name: 'R1-J5',
      xws: 'r1j5',
      initiative: 1,
      limited: 1,
      shipAbility: {
        name: 'Explosion with Wings',
        text: 'Setup: You are dealt 1 facedown damage card. After you perform a [SLAM] action, you may expose 1 damage card to remove 1 disarm token.',
      },
      caption: 'Bucket',
      standard: true,
      wildspace: true,
      slots: [
        'Missile',
        'Crew',
        'Illicit',
        'Modification',
        'Modification',
        'Title',
      ],
      ability:
        'Before you expose 1 of your damage cards, you may look at your facedown damage cards, choose 1, and expose that card instead.',
      cost: 24,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/r1j5.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/r1j5.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'SLAM' },
      ],
      keywords: ['Droid'],
      epic: true,
      ffg: 622,
    },
  ],
};

export default t;
