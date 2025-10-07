import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Gauntlet Fighter',
  xws: 'gauntletfighter',
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
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
    '4FW',
  ],
  dialCodes: ['GtF'],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  pilots: [
    {
      name: 'Bo-Katan Kryze',
      caption: 'Nite Owl Commander',
      initiative: 4,
      limited: 1,
      cost: 56,
      xws: 'bokatankryze',
      ability:
        'After you fully execute a maneuver, you may gain 1 deplete token to choose an object in your [Front Arc] at range 1-2. If you do, another friendly ship may perform a [Lock] action to lock that object.',
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Device',
        'Illicit',
        'Modification',
        'Configuration',
        'Title',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/bokatankryze.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/bokatankryze.png',
      keywords: ['Mandalorian'],
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 985,
    },
    {
      name: 'Nite Owl Liberator',
      caption: 'Resolute Warrior',
      initiative: 2,
      limited: 1,
      cost: 54,
      xws: 'niteowlliberator',
      text: "Following Bo-Katan Kryze, some former members of Death Watch have rejected Maul's claims to rule Mandalore and made a reluctant alliance with the Republic. The Gauntlet Fighters that the Nite Owls retain are central to mounting an invasion to free their world.",
      slots: [
        'Talent',
        'Crew',
        'Gunner',
        'Device',
        'Illicit',
        'Modification',
        'Configuration',
        'Title',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/niteowlliberator.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/niteowlliberator.png',
      keywords: ['Mandalorian'],
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 986,
    },
  ],
};

export default t;
