import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'RZ-1 A-wing',
  xws: 'rz1awing',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  dialCodes: ['AW'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_A-wing.png',
  pilots: [
    {
      name: 'Arvel Crynyd',
      caption: 'Green Leader',
      initiative: 3,
      limited: 1,
      cost: 32,
      xws: 'arvelcrynyd',
      ability:
        'You can perform primary attacks at range 0. If you would fail a [Boost] action by overlapping another ship, resolve it as though you were partially executing a maneuver instead.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/arvelcrynyd.png',
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/arvelcrynyd.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 20,
    },
    {
      name: 'Green Squadron Pilot',
      initiative: 3,
      limited: 0,
      cost: 30,
      xws: 'greensquadronpilot',
      text: 'Due to its sensitive controls and high maneuverability, only the most talented pilots belong in an A-wing cockpit.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/greensquadronpilot.png',
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/greensquadronpilot.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 21,
    },
    {
      name: 'Jake Farrell',
      caption: 'Sage Instructor',
      initiative: 4,
      limited: 1,
      cost: 36,
      xws: 'jakefarrell',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may choose a friendly ship at range 0-1. That ship may perform a [Focus] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jakefarrell.png',
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jakefarrell.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 19,
    },
    {
      name: 'Phoenix Squadron Pilot',
      initiative: 1,
      limited: 0,
      cost: 28,
      xws: 'phoenixsquadronpilot',
      text: 'Led by Commander Jun Sato, the brave but inexperienced pilots of Phoenix Squadron face staggering odds in their battle against the Galactic Empire.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/phoenixsquadronpilot.png',
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      slots: ['Talent', 'Missile', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/phoenixsquadronpilot.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 22,
    },
    {
      name: 'Wedge Antilles',
      caption: 'Promising Pilot',
      initiative: 4,
      limited: 1,
      cost: 38,
      xws: 'wedgeantilles-rz1awing',
      ability:
        'While you perform a primary attack, if the defender is in your [Front Arc], the defender rolls 1 fewer defense die.',
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      keywords: ['A-wing'],
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      standard: true,
      wildspace: true,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wedgeantilles-rz1awing.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wedgeantilles-rz1awing.png',
      epic: true,
      ffg: 883,
    },
    {
      name: 'Sabine Wren',
      xws: 'sabinewren-rz1awing',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      standard: true,
      wildspace: true,
      keywords: ['A-wing', 'Mandalorian'],
      cost: 35,
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      ability:
        "While you defend or perform an attack, if the attack range is 1 and you are in the enemy ship's [Front Arc], you may change 1 of your results to an [Evade] or [Hit] result.",
      caption: 'Daughter of Mandalore',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sabinewren-rz1awing.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sabinewren-rz1awing.png',
      epic: true,
      ffg: 885,
    },
    {
      name: 'Hera Syndulla',
      xws: 'herasyndulla-rz1awing',
      initiative: 6,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      caption: 'Phoenix Leader',
      standard: true,
      wildspace: true,
      cost: 48,
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      ability:
        'While another friendly ship at range 1-2 defends or performs an attack, during a Modify Dice step, you may transfer 1 of your focus tokens, evade tokens, or locks to that ship.',
      keywords: ['A-wing', 'Spectre'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/herasyndulla-rz1awing.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/herasyndulla-rz1awing.png',
      epic: true,
      ffg: 880,
    },
    {
      name: 'Ahsoka Tano',
      xws: 'ahsokatano-rz1awing',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      caption: 'Fulcrum',
      standard: true,
      wildspace: true,
      force: { value: 3, recovers: 1, side: ['light'] },
      cost: 50,
      slots: ['Force Power', 'Force Power', 'Missile', 'Configuration'],
      ability:
        'After you fully execute a maneuver, you may choose a friendly ship at range 1-2 and spend 2 [Force]. That ship may perform an action, even while stressed.',
      keywords: ['A-wing', 'Light Side'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ahsokatano-rz1awing.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ahsokatano-rz1awing.png',
      epic: true,
      ffg: 881,
    },
    {
      name: 'Shara Bey',
      xws: 'sharabey-rz1awing',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      caption: 'Green Four',
      standard: true,
      wildspace: true,
      cost: 32,
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      ability:
        'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sharabey-rz1awing.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sharabey-rz1awing.png',
      epic: true,
      ffg: 882,
    },
    {
      name: 'Derek Klivian',
      xws: 'derekklivian',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      caption: 'Hobbie',
      standard: true,
      wildspace: true,
      cost: 30,
      slots: ['Talent', 'Missile', 'Configuration'],
      ability:
        'After you acquire or spend a lock, you may remove 1 red token from yourself.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/derekklivian.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/derekklivian.png',
      epic: true,
      ffg: 884,
    },
    {
      name: 'Keo Venzee',
      xws: 'keovenzee',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      caption: 'Auspicious Ace',
      standard: true,
      wildspace: true,
      cost: 35,
      force: { value: 1, recovers: 0, side: ['light'] },
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      ability:
        'If you have no active [Force], after you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you may increase the difficulty of the maneuver. If you do, perform that maneuver as a sideslip and recover 1 [Force].',
      keywords: ['A-wing'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/keovenzee.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/keovenzee.png',
      epic: true,
      ffg: 1027,
    },
    {
      name: 'Tycho Celchu',
      xws: 'tychocelchu',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      caption: 'Son of Alderaan',
      standard: true,
      wildspace: true,
      cost: 38,
      slots: ['Talent', 'Talent', 'Missile', 'Configuration'],
      ability:
        'While you have 2 or fewer stress tokens, you may perform actions, even while stressed.',
      keywords: ['A-wing'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tychocelchu.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tychocelchu.png',
      epic: true,
      ffg: 1028,
    },
    {
      name: 'Arvel Crynyd',
      caption: 'Green Leader',
      initiative: 3,
      limited: 1,
      cost: 37,
      xws: 'arvelcrynyd-swz106',
      ability:
        'If you would fail a [Boost] action by overlapping another ship, you may resolve it as though you were partially executing a maneuver instead. While you perform an attack at attack range 0, treat it as an attack at attack range 1.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/arvelcrynyd-swz106.png',
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      standardLoadout: ['predator', 'afterburners'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/arvelcrynyd-swz106.png',
      standard: false,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 1029,
    },
    {
      name: 'Jake Farrell',
      caption: 'Sage Instructor',
      initiative: 4,
      limited: 1,
      cost: 43,
      xws: 'jakefarrell-swz106',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may choose a friendly ship at range 0-1. That ship may perform a [Focus] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jakefarrell-swz106.png',
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      standardLoadout: ['elusive', 'outmaneuver', 'ionmissiles'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jakefarrell-swz106.png',
      standard: false,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 1030,
    },
    {
      name: 'Shara Bey',
      xws: 'sharabey-swz106',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Vectored Thrusters',
        text: 'After you perform an action, you may perform a red [Boost] action.',
      },
      caption: 'Green Four',
      standard: false,
      wildspace: true,
      cost: 36,
      standardLoadout: ['hopeful', 'concussionmissiles'],
      ability:
        'While you defend or perform a primary attack, you may spend 1 lock you have on the enemy ship to add 1 [Focus] result to your dice results.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sharabey-swz106.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sharabey-swz106.png',
      epic: true,
      ffg: 1031,
    },
    {
      name: 'Arvel Crynyd',
      caption: 'Battle Over Endor',
      xws: 'arvelcrynyd-battleoverendor',
      initiative: 3,
      limited: 1,
      cost: 51,
      shipAbility: {
        name: 'Vectored Cannons',
        text: 'During the System Phase, you may perform a red [Boost] or [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
      },
      stats: [
        { arc: 'Single Turret Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 3 },
      ],
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
        { difficulty: 'White', type: 'Boost' },
        { difficulty: 'White', type: 'SLAM' },
      ],
      standardLoadout: [
        'heroicsacrifice-battleoverendor',
        'itsatrap-battleoverendor',
        'protonrockets',
      ],
      ability:
        'While defending, you may gain a strain token to change 1 [Focus] result to an [Evade] result.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/arvelcrynyd-battleoverendor.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/arvelcrynyd-battleoverendor.png',
      standard: false,
      wildspace: true,
      epic: true,
      ffg: 1033,
    },
    {
      name: 'Arvel Crynyd',
      caption: 'Battle Over Endor',
      xws: 'arvelcrynyd-battleoverendor-lsl',
      initiative: 3,
      limited: 1,
      cost: 38,
      shipAbility: {
        name: 'Vectored Cannons',
        text: 'During the System Phase, you may perform a red [Boost] or [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
      },
      stats: [
        { arc: 'Single Turret Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 3 },
      ],
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
        { difficulty: 'White', type: 'Boost' },
        { difficulty: 'White', type: 'SLAM' },
      ],
      slots: ['Talent', 'Talent', 'Missile'],
      ability:
        'While defending, you may gain a strain token to change 1 [Focus] result to an [Evade] result.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/arvelcrynyd-battleoverendor-lsl.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/arvelcrynyd-battleoverendor-lsl.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1161,
    },
    {
      name: 'Tycho Celchu',
      caption: 'Battle Over Endor',
      xws: 'tychocelchu-battleoverendor',
      initiative: 5,
      limited: 1,
      cost: 57,
      shipAbility: {
        name: 'Vectored Cannons',
        text: 'During the System Phase, you may perform a red [Boost] or [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
      },
      stats: [
        { arc: 'Single Turret Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 3 },
      ],
      shipActions: [
        {
          difficulty: 'White',
          type: 'Focus',
          linked: { difficulty: 'Red', type: 'Reload' },
        },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
        {
          difficulty: 'White',
          type: 'Boost',
          linked: { difficulty: 'Red', type: 'Evade' },
        },
      ],
      standardLoadout: [
        'itsatrap-battleoverendor',
        'juke',
        'protonrockets',
        'chaffparticles-battleoverendor',
      ],
      ability:
        'While you are disarmed, you can still perform [Missile] attacks. When you perform a [Missile] attack while disarmed, roll a maximum of 4 dice.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tychocelchu-battleoverendor.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tychocelchu-battleoverendor.png',
      standard: false,
      wildspace: true,
      epic: true,
      ffg: 1034,
    },
    {
      name: 'Tycho Celchu',
      caption: 'Battle Over Endor',
      xws: 'tychocelchu-battleoverendor-lsl',
      initiative: 5,
      limited: 1,
      cost: 41,
      shipAbility: {
        name: 'Vectored Cannons',
        text: 'During the System Phase, you may perform a red [Boost] or [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
      },
      stats: [
        { arc: 'Single Turret Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 3 },
      ],
      shipActions: [
        {
          difficulty: 'White',
          type: 'Focus',
          linked: { difficulty: 'Red', type: 'Reload' },
        },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'White', type: 'Barrel Roll' },
        {
          difficulty: 'White',
          type: 'Boost',
          linked: { difficulty: 'Red', type: 'Evade' },
        },
      ],
      slots: ['Talent', 'Talent', 'Missile'],
      ability:
        'While you are disarmed, you can still perform [Missile] attacks. When you perform a [Missile] attack while disarmed, roll a maximum of 4 dice.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tychocelchu-battleoverendor-lsl.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tychocelchu-battleoverendor-lsl.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1162,
    },
    {
      name: 'Gemmer Sojan',
      caption: 'Battle Over Endor',
      xws: 'gemmersojan-battleoverendor',
      initiative: 2,
      limited: 1,
      cost: 46,
      shipAbility: {
        name: 'Vectored Cannons',
        text: 'During the System Phase, you may perform a red [Boost] or [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
      },
      stats: [
        { arc: 'Single Turret Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 2 },
      ],
      standardLoadout: [
        'itsatrap-battleoverendor',
        'precisiontunedcannons-battleoverendor',
        'chaffparticles-battleoverendor',
        'targetassistalgorithm-battleoverendor',
      ],
      ability:
        'While defending, you may gain 1 strain token to change up to 2 of your blank results to [Focus] results.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/gemmersojan-battleoverendor.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/gemmersojan-battleoverendor.png',
      standard: false,
      wildspace: true,
      epic: true,
      ffg: 1032,
    },
    {
      name: 'Gemmer Sojan',
      caption: 'Battle Over Endor',
      xws: 'gemmersojan-battleoverendor-lsl',
      initiative: 2,
      limited: 1,
      cost: 33,
      shipAbility: {
        name: 'Vectored Cannons',
        text: 'During the System Phase, you may perform a red [Boost] or [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
      },
      stats: [
        { arc: 'Single Turret Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 2 },
      ],
      slots: ['Talent', 'Missile'],
      ability:
        'While defending, you may gain 1 strain token to change up to 2 of your blank results to [Focus] results.',
      keywords: ['A-wing'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/gemmersojan-battleoverendor-lsl.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/gemmersojan-battleoverendor-lsl.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1163,
    },
  ],
};

export default t;
