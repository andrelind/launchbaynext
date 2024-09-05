import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'BTL-A4 Y-wing',
  xws: 'btla4ywing',
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  dialCodes: ['YW'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_Y-wing.png',
  pilots: [
    {
      name: '“Dutch” Vander',
      caption: 'Gold Leader',
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'dutchvander',
      ability:
        'After you perform the [Lock] action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dutchvander.png',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dutchvander.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Evaan Verlaine',
      caption: 'Gold Three',
      initiative: 3,
      limited: 1,
      cost: 32,
      xws: 'evaanverlaine',
      ability:
        'At the start of the Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, that ship rolls 1 additional defense die while defending until the end of the round.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/evaanverlaine.png',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/evaanverlaine.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Gold Squadron Veteran',
      initiative: 3,
      limited: 0,
      cost: 31,
      xws: 'goldsquadronveteran',
      text: 'Commanded by Jon “Dutch” Vander, Gold Squadron played an instrumental role in the Battles of Scarif and Yavin.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/goldsquadronveteran.png',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/goldsquadronveteran.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Gray Squadron Bomber',
      initiative: 2,
      limited: 0,
      cost: 29,
      xws: 'graysquadronbomber',
      text: 'Long after the Y-wing was phased out by the Galactic Empire, its durability, dependability, and heavy armament help it remain a staple in the Rebel fleet.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/graysquadronbomber.png',
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/graysquadronbomber.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Horton Salm',
      caption: 'Gray Leader',
      initiative: 4,
      limited: 1,
      cost: 36,
      xws: 'hortonsalm',
      ability:
        'While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/hortonsalm.png',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/hortonsalm.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Norra Wexley',
      caption: 'Gold Nine',
      initiative: 5,
      limited: 1,
      cost: 39,
      xws: 'norrawexley-btla4ywing',
      ability:
        'While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/norrawexley-btla4ywing.png',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/norrawexley-btla4ywing.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Dex Tiree',
      caption: 'Battle of Yavin',
      initiative: 2,
      limited: 1,
      cost: 38,
      xws: 'dextiree-battleofyavin',
      ability:
        'While you defend, if there is at least 1 other friendly ship at range 0-1, you may roll 1 additional defense die.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: ['dorsalturret', 'advprotontorpedoes', 'r4astromech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dextiree-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dextiree-battleofyavin.png',
      standard: false,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Dex Tiree',
      caption: 'Battle of Yavin',
      initiative: 2,
      limited: 1,
      cost: 31,
      xws: 'dextiree-battleofyavin-lsl',
      ability:
        'While you defend, if there is at least 1 other friendly ship at range 0-1, you may roll 1 additional defense die.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dextiree-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dextiree-battleofyavin-lsl.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: '“Dutch” Vander',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 61,
      xws: 'dutchvander-battleofyavin',
      ability:
        'After you spend a lock during an attack, choose a friendly ship at range 1-3. The chosen ship may acquire a lock on the defender.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: [
        'ioncannonturret',
        'advprotontorpedoes',
        'targetingastromech-battleofyavin',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dutchvander-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dutchvander-battleofyavin.png',
      standard: false,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: '“Dutch” Vander',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'dutchvander-battleofyavin-lsl',
      ability:
        'After you spend a lock during an attack, choose a friendly ship at range 1-3. The chosen ship may acquire a lock on the defender.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dutchvander-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dutchvander-battleofyavin-lsl.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Hol Okand',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 49,
      xws: 'holokand-battleofyavin',
      ability:
        'During the System Phasse, if there are no enemy ships at range 1-2, you may recover 1 [Charge] on any upgrade.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: [
        'dorsalturret',
        'advprotontorpedoes',
        'preciseastromech-battleofyavin',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/holokand-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/holokand-battleofyavin.png',
      standard: false,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Hol Okand',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 34,
      xws: 'holokand-battleofyavin-lsl',
      ability:
        'During the System Phasse, if there are no enemy ships at range 1-2, you may recover 1 [Charge] on any upgrade.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/holokand-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/holokand-battleofyavin-lsl.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: '“Pops” Krail',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'popskrail-battleofyavin',
      ability:
        'While you perform a [Single Turret Arc] attack, you may reroll up to 2 attack dice.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: ['ioncannonturret', 'advprotontorpedoes', 'r4astromech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/popskrail-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/popskrail-battleofyavin.png',
      standard: false,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: '“Pops” Krail',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 35,
      xws: 'popskrail-battleofyavin-lsl',
      ability:
        'While you perform a [Single Turret Arc] attack, you may reroll up to 2 attack dice.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/popskrail-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/popskrail-battleofyavin-lsl.png',
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: '“Pops” Krail',
      caption: 'Gold Five',
      initiative: 3,
      limited: 1,
      cost: 36,
      xws: 'popskrail',
      ability:
        'After you fully execute a white maneuver, you may choose a friendly ship at range 0-1. If you do, it may perform a [Focus] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/popskrail.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/popskrail.png',
      slots: [
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
        'Missile',
      ],
      standard: true,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: '“Dutch” Vander',
      caption: 'Gold Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'dutchvander-swz106',
      ability:
        'After you perform the [Lock] action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions.',
      standardLoadout: ['ioncannonturret', 'protonbombs'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dutchvander-swz106.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dutchvander-swz106.png',
      standard: false,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
    {
      name: 'Horton Salm',
      caption: 'Gray Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'hortonsalm-swz106',
      ability:
        'While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender.',
      standardLoadout: ['ioncannonturret', 'proximitymines'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/hortonsalm-swz106.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/hortonsalm-swz106.png',
      standard: false,
      wildspace: true,
      keywords: ['Y-wing'],
      epic: true,
    },
  ],
};

export default t;
