import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'V-19 Torrent Starfighter',
  xws: 'v19torrentstarfighter',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3BR',
    '3FB',
    '3NR',
    '3KR',
    '4FW',
  ],
  dialCodes: ['V19*'],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    {
      type: 'Barrel Roll',
      difficulty: 'White',
      linked: { type: 'Evade', difficulty: 'Red' },
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_V-19Torrent.png',
  pilots: [
    {
      name: '“Kickback”',
      caption: 'Blue Four',
      xws: 'kickback',
      initiative: 4,
      limited: 1,
      ability:
        'After you perform a [Barrel Roll] action, you may perform a red [Lock] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kickback.png',
      standard: true,
      wildspace: true,
      cost: 27,
      slots: ['Talent', 'Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kickback.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 517,
    },
    {
      name: '“Odd Ball”',
      caption: 'CC-2237',
      xws: 'oddball',
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/oddball.png',
      standard: true,
      wildspace: true,
      cost: 29,
      slots: ['Talent', 'Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/oddball.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 516,
    },
    {
      name: '“Swoop”',
      caption: 'Blue Six',
      xws: 'swoop',
      initiative: 3,
      limited: 1,
      ability:
        'After a friendly small or medium ship fully executes a speed 3-4 maneuver, if it is at range 0-1, it may perform a red [Boost] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/swoop.png',
      standard: true,
      wildspace: true,
      cost: 26,
      slots: ['Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/swoop.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 519,
    },
    {
      name: '“Axe”',
      caption: 'Blue Two',
      xws: 'axe',
      initiative: 3,
      limited: 1,
      ability:
        'After you defend or perform an attack, you may choose a friendly ship at range 1-2 in your [Left Arc] or [Right Arc]. If you do, transfer 1 green token to that ship.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/axe.png',
      standard: true,
      wildspace: true,
      cost: 26,
      slots: ['Talent', 'Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/axe.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 518,
    },
    {
      name: '“Tucker”',
      caption: 'Blue Five',
      xws: 'tucker',
      initiative: 2,
      limited: 1,
      ability:
        'After a friendly ship at range 1-2 performs an attack against an enemy ship in your [Front Arc], you may perform a [Focus] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tucker.png',
      standard: true,
      wildspace: true,
      cost: 25,
      slots: ['Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tucker.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 520,
    },
    {
      name: 'Blue Squadron Protector',
      xws: 'bluesquadronprotector',
      initiative: 3,
      limited: 0,
      text: "Blue Squadron's elite clone pilots are trained to fly their V-19s in conjunction with Jedi and often support famous commanders such as Anakin Skywalker and Ahsoka Tano.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/bluesquadronprotector.png',
      standard: true,
      wildspace: true,
      cost: 26,
      slots: ['Talent', 'Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/bluesquadronprotector.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 521,
    },
    {
      name: 'Gold Squadron Trooper',
      xws: 'goldsquadrontrooper',
      initiative: 2,
      limited: 0,
      text: 'The V-19 Torrent starfighter was designed to be a light escort to nimble Delta-7 interceptors flown by Jedi Knights, and has a unique flight profile to reflect this role.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/goldsquadrontrooper.png',
      standard: true,
      wildspace: true,
      cost: 25,
      slots: ['Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/goldsquadrontrooper.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 522,
    },
    {
      name: '“Kickback”',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 41,
      xws: 'kickback-siegeofcoruscant',
      ability:
        'After you perform a [Barrel Roll] action, you may perform a red [Lock] action. If you do, before you perfrom the [Lock] action, you may gain 1 strain to treat it as white.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kickback-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kickback-siegeofcoruscant.png',
      standardLoadout: ['diamondboronmissiles', 'munitionsfailsafe'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
      ],
      standard: false,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
      ffg: 988,
    },
    {
      name: '“Kickback”',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 32,
      xws: 'kickback-siegeofcoruscant-lsl',
      ability:
        'After you perform a [Barrel Roll] action, you may perform a red [Lock] action. If you do, before you perfrom the [Lock] action, you may gain 1 strain to treat it as white.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kickback-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kickback-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Missile'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
      ],
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
      ffg: 1213,
    },
    {
      name: '“Axe”',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 40,
      xws: 'axe-siegeofcoruscant',
      ability:
        'After you perform an attack, you may choose another friendly ship with the Born for This ability at range 0-2 in your [Left Arc] or [Right Arc]. The chosen ship gains a lock on the defender.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/axe-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/axe-siegeofcoruscant.png',
      standardLoadout: ['deadeyeshot', 'barragerockets'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
      ],
      standard: false,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
      ffg: 989,
    },
    {
      name: '“Axe”',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 30,
      xws: 'axe-siegeofcoruscant-lsl',
      ability:
        'After you perform an attack, you may choose another friendly ship with the Born for This ability at range 0-2 in your [Left Arc] or [Right Arc]. The chosen ship gains a lock on the defender.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/axe-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/axe-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Missile'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 2 },
        { type: 'hull', value: 6 },
      ],
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
      ffg: 1214,
    },
    {
      name: '“Slammer”',
      caption: 'Blue Three',
      xws: 'slammer',
      initiative: 1,
      limited: 1,
      ability:
        'After you fully execute a maneuver, you may spend 2 [Charge] to peform a [SLAM] action, even while stressed.',
      charges: { value: 2, recovers: 1 },
      standard: true,
      wildspace: true,
      cost: 34,
      slots: ['Missile', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/slammer.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/slammer.png',
      keywords: ['Clone'],
      epic: true,
      ffg: 990,
    },
  ],
};

export default t;
