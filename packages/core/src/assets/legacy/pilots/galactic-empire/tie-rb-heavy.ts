import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/rb Heavy',
  xws: 'tierbheavy',
  size: 'Medium',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FW',
  ],
  dialCodes: ['Trb'],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Calculate' },
      type: 'Rotate Arc',
    },
  ],
  pilots: [
    {
      name: 'Carida Academy Cadet',
      cost: 32,
      initiative: 1,
      slots: [
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      xws: 'caridaacademycadet',
      shipAbility: {
        name: 'Rotating Cannons',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      text: 'At Carida Academy, Imperial Navy cadets are taught to be ruthless and loyal, prioritizing victory over the lives of their comrades.',
      limited: 0,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/caridaacademycadet.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/caridaacademycadet.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 696,
    },
    {
      name: 'Onyx Squadron Sentry',
      cost: 35,
      initiative: 3,
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      xws: 'onyxsquadronsentry',
      shipAbility: {
        name: 'Rotating Cannons',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      text: 'The TIE/rb heavy, sometimes called the “brute”, is designed for operational flexibility. Its heavy armor and capacity to house an integrated MGK-300 droid co-pilot make it an excellent patrol craft.',
      limited: 0,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/onyxsquadronsentry.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/onyxsquadronsentry.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 695,
    },
    {
      name: '“Rampage”',
      caption: 'Implacable Pursuer',
      cost: 36,
      initiative: 4,
      limited: 1,
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      xws: 'rampage',
      ability:
        'After you execute a speed 3-4 maneuver, you may choose a ship in your [Single Turret Arc] at range 0-1. That ship gains 1 strain token, or 2 strain tokens if you are damaged.',
      shipAbility: {
        name: 'Rotating Cannons',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/rampage.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/rampage.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 693,
    },
    {
      name: 'Lyttan Dree',
      caption: 'Onyx 2',
      cost: 36,
      initiative: 3,
      limited: 1,
      slots: [
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      xws: 'lyttandree',
      ability:
        "While a friendly ship at range 0-2 performs an attack, if you are in the defender's [Left Arc] or [Right Arc], the attacker may reroll 1 attack die.",
      shipAbility: {
        name: 'Rotating Cannons',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lyttandree.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lyttandree.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 694,
    },
    {
      name: 'Flight Leader Ubbel',
      caption: 'Onyx Leader',
      cost: 43,
      initiative: 5,
      limited: 1,
      slots: [
        'Talent',
        'Cannon',
        'Cannon',
        'Modification',
        'Modification',
        'Configuration',
      ],
      xws: 'flightleaderubbel',
      ability:
        'After a friendly ship at range 0-2 defends, if it was dealt a damage card, you may perform a bonus attack against the attacker.',
      shipAbility: {
        name: 'Rotating Cannons',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Cannon] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/flightleaderubbel.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/flightleaderubbel.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 970,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIE_Brute.png',
};

export default t;
