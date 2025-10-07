import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'ARC-170 Starfighter',
  xws: 'arc170starfighter',
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  dialCodes: ['AR'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_Arc-170.png',
  pilots: [
    {
      name: 'Garven Dreis',
      caption: 'Red Leader',
      initiative: 4,
      limited: 1,
      cost: 50,
      xws: 'garvendreis',
      ability:
        'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/garvendreis.png',
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/garvendreis.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 66,
    },
    {
      name: 'Ibtisam',
      caption: 'Survivor of Endor',
      initiative: 3,
      limited: 1,
      cost: 43,
      xws: 'ibtisam',
      ability:
        'After you fully execute a maneuver, if you are stressed, you may roll 1 attack die. On a [Hit] or [Critical Hit] result, remove 1 stress token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ibtisam.png',
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ibtisam.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 68,
    },
    {
      name: 'Norra Wexley',
      caption: 'Gold Nine',
      initiative: 5,
      limited: 1,
      cost: 53,
      xws: 'norrawexley',
      ability:
        'While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/norrawexley.png',
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/norrawexley.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 65,
    },
    {
      name: 'Shara Bey',
      caption: 'Green Four',
      initiative: 4,
      limited: 1,
      cost: 49,
      xws: 'sharabey',
      ability:
        'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sharabey.png',
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sharabey.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 67,
    },
  ],
};

export default t;
