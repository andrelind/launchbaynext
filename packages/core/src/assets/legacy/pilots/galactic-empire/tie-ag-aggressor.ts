import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ag Aggressor',
  xws: 'tieagaggressor',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
  ],
  dialCodes: ['TAg'],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEAggressor.png',
  pilots: [
    {
      name: '“Double Edge”',
      caption: 'Contingency Planner',
      initiative: 2,
      limited: 1,
      cost: 27,
      xws: 'doubleedge',
      ability:
        'After you perform a [Turret] or [Missile] attack that misses, you may perform a bonus attack using a different weapon.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/doubleedge.png',
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/doubleedge.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Lieutenant Kestal',
      caption: 'Innate Deadeye',
      initiative: 4,
      limited: 1,
      cost: 28,
      xws: 'lieutenantkestal',
      ability:
        "While you perform an attack, after the defender rolls defense dice, you may spend 1 focus token to cancel all of the defender's blank/[Focus] results.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantkestal.png',
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantkestal.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Onyx Squadron Scout',
      initiative: 3,
      limited: 0,
      cost: 27,
      xws: 'onyxsquadronscout',
      text: 'Designed for extended engagements, the TIE/ag is flown primarily by elite pilots trained to leverage both its unique weapons loadout and its maneuverability to full effect.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/onyxsquadronscout.png',
      slots: [
        'Talent',
        'Sensor',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/onyxsquadronscout.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Sienar Specialist',
      initiative: 2,
      limited: 0,
      cost: 26,
      xws: 'sienarspecialist',
      text: 'During the development of the TIE aggressor, Sienar Fleet Systems valued performance and versatility over raw cost efficiency.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sienarspecialist.png',
      slots: [
        'Sensor',
        'Turret',
        'Missile',
        'Missile',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sienarspecialist.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
  ],
};

export default t;
