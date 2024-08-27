import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Firespray-class Patrol Craft',
  xws: 'firesprayclasspatrolcraft',
  size: 'Medium',
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
    '3BW',
    '3FB',
    '3NW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/separatist-alliance/I_FIrespray.png',
  pilots: [
    {
      name: 'Jango Fett',
      caption: 'Simple Man',
      initiative: 6,
      limited: 1,
      xws: 'jangofett',
      ability:
        "While you defend or perform a primary attack, if the difficulty of your revealed maneuver is less than that of the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      cost: 8,
      ffg: 800,
      loadout: 21,
      extended: true,
      keywords: ['Bounty Hunter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/jangofett.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jangofett.png',
    },
    {
      xws: 'zamwesell',
      name: 'Zam Wesell',
      caption: 'Clawdite Changeling',
      cost: 8,
      initiative: 5,
      limited: 1,
      ability:
        'Setup: Lose 2 [Charge]. During the System Phase, you may assign 1 of your secret conditions to yourself facedown: "You Should Thank Me" or "You\'d Better Mean Business"',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      conditions: ['youdbettermeanbusiness', 'youshouldthankme'],
      standard: true,
      epic: true,
      ffg: 801,
      loadout: 17,
      extended: true,
      keywords: ['Bounty Hunter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/zamwesell.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zamwesell.png',
    },
    {
      name: 'Boba Fett',
      xws: 'bobafett-firesprayclasspatrolcraft',
      initiative: 3,
      limited: 1,
      ability:
        'While you defend, if there are no other friendly ships at range 0-2, you may change 1 of your blank results to a [Focus] result.',
      standard: true,
      extended: true,
      cost: 6,
      loadout: 5,
      image:
        'https://infinitearenas.com/xw2/images/pilots/bobafett-separatistalliance.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bobafett-separatistalliance.png',
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      keywords: ['Bounty Hunter'],
      epic: true,
      caption: 'Survivor',
    },
    {
      name: 'Separatist Racketeer',
      xws: 'separatistracketeer',
      initiative: 2,
      limited: 0,
      text: 'Emboldened by the bitter stalemate of the Outer Rim Sieges, mercenary groups across the galaxy take the opportunity to profit from the ongoing war.',
      standard: true,
      slots: ['Cannon', 'Missile', 'Device'],
      cost: 6,
      epic: true,
      ffg: 803,
      loadout: 9,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/separatistracketeer.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/separatistracketeer.png',
      caption: '',
      keywords: [],
    },
    {
      name: 'Aurra Sing',
      xws: 'aurrasing',
      initiative: 4,
      limited: 1,
      caption: 'Bane of the Jedi',
      standard: true,
      extended: true,
      ability:
        'Before you engage, you may spend 1 [Force] to choose 2 enemy ships at range 0-1. Transfer any number of orange and red tokens between those two ships.',
      force: { value: 1, recovers: 1, side: ['dark'] },
      cost: 7,
      loadout: 15,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/aurrasing.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/aurrasing.png',
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      keywords: ['Dark Side', 'Bounty Hunter'],
      epic: true,
    },
  ],
  ffg: 10,
};

export default t;
