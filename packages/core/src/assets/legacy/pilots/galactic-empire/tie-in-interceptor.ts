import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/in Interceptor',
  xws: 'tieininterceptor',
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
    '4KR',
    '5FW',
  ],
  dialCodes: ['TI'],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEInterceptor.png',
  pilots: [
    {
      name: 'Alpha Squadron Pilot',
      initiative: 1,
      limited: 0,
      cost: 32,
      xws: 'alphasquadronpilot',
      text: 'Sienar Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, a dramatic increase in firepower over its predecessors.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/alphasquadronpilot.png',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Modification', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/alphasquadronpilot.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 106,
    },
    {
      name: 'Saber Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 37,
      xws: 'sabersquadronace',
      text: "Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire's best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sabersquadronace.png',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sabersquadronace.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 105,
    },
    {
      name: 'Soontir Fel',
      caption: 'Ace of Legend',
      initiative: 6,
      limited: 1,
      cost: 56,
      xws: 'soontirfel',
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain 1 focus token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/soontirfel.png',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/soontirfel.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 103,
    },
    {
      name: 'Turr Phennir',
      caption: 'Ambitious Ace',
      initiative: 4,
      limited: 1,
      cost: 39,
      xws: 'turrphennir',
      ability:
        'After you perform an attack, you may perform a [Barrel Roll] or [Boost] action, even if you are stressed.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/turrphennir.png',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/turrphennir.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 104,
    },
    {
      name: 'Ciena Ree',
      xws: 'cienaree',
      initiative: 6,
      limited: 1,
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      cost: 47,
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      ability:
        'After you perform an attack, if the defender was destroyed, gain 1 stress token. After a friendly ship at range 0-3 is destroyed, remove 1 stress token.',
      caption: 'Look Through My Eyes',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/cienaree.png',
      epic: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/cienaree.png',
      ffg: 889,
    },
    {
      name: 'Gideon Hask',
      xws: 'gideonhask-tieininterceptor',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Inferno Two',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      cost: 46,
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      ability:
        'While you perform an attack against a damaged defender, roll 1 additional attack die.',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/gideonhask-tieininterceptor.png',
      epic: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/gideonhask-tieininterceptor.png',
      ffg: 892,
    },
    {
      name: 'Vult Skerris',
      xws: 'vultskerris-tieininterceptor',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Arrogant Ace',
      standard: true,
      wildspace: true,
      cost: 43,
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      ability:
        'Action: Gain 1 strain token to recover 1 [Charge]. Before you engage, you may spend 1 [Charge] to perform an action.',
      charges: { value: 1, recovers: -1 },
      keywords: ['TIE'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/vultskerris-tieininterceptor.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/vultskerris-tieininterceptor.png',
      epic: true,
      ffg: 890,
    },
    {
      name: 'Commandant Goran',
      xws: 'commandantgoran',
      initiative: 4,
      limited: 1,
      ability:
        'After a friendly ship at range 0-3 with a lower initiative than yours partially executes a revealed maneuver, it may perform a red [Focus] action.',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Skystrike Superintendent',
      standard: true,
      wildspace: true,
      cost: 43,
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      keywords: ['TIE'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/commandantgoran.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/commandantgoran.png',
      epic: true,
      ffg: 891,
    },
    {
      name: 'Lieutenant Lorrir',
      xws: 'lieutenantlorrir',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Requiem for Brentaal',
      standard: true,
      wildspace: true,
      cost: 37,
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      ability:
        'While you barrel roll, you must use the ([Bank Left] or [Bank Right]) template instead of the ([Straight]) template.',
      keywords: ['TIE'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantlorrir.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantlorrir.png',
      epic: true,
      ffg: 893,
    },
    {
      name: 'Nash Windrider',
      xws: 'nashwindrider',
      initiative: 2,
      limited: 1,
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Alderaanian Zealot',
      standard: true,
      wildspace: true,
      cost: 41,
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      ability:
        'During the Engagement Phase, after a friendly small ship at range 0-3 is destroyed, if that ship has not engaged this phase, you may spend 1 [Charge]. If you do, that ship engages at the current initiative.',
      keywords: ['TIE'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/nashwindrider.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/nashwindrider.png',
      epic: true,
      ffg: 894,
    },
    {
      name: 'Iden Versio',
      caption: 'Battle of Yavin',
      xws: 'idenversio-battleofyavin',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: false,
      wildspace: true,
      cost: 67,
      charges: { value: 2, recovers: 1 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 3 },
        { type: 'shields', value: 1 },
      ],
      standardLoadout: ['predator', 'fanatic-battleofyavin'],
      ability:
        'Before a friendly TIE at range 0-1 would suffer damage, you may spend 2 [Charge]. If you do, prevent 1 damage.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/idenversio-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/idenversio-battleofyavin.png',
      epic: true,
      ffg: 939,
    },
    {
      name: 'Iden Versio',
      caption: 'Battle of Yavin',
      xws: 'idenversio-battleofyavin-lsl',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: true,
      wildspace: true,
      cost: 64,
      charges: { value: 2, recovers: 1 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 3 },
        { type: 'shields', value: 1 },
      ],
      slots: ['Talent', 'Modification'],
      ability:
        'Before a friendly TIE at range 0-1 would suffer damage, you may spend 2 [Charge]. If you do, prevent 1 damage.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/idenversio-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/idenversio-battleofyavin-lsl.png',
      epic: true,
      ffg: 1177,
    },
    {
      name: 'Sigma 4',
      caption: 'Battle of Yavin',
      xws: 'sigma4-battleofyavin',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: false,
      wildspace: true,
      cost: 52,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      standardLoadout: ['disciplined', 'primedthrusters'],
      ability:
        'After you perform a [Barrel Roll] action, you may spend 1 [Charge] to perform a [Boost] action.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma4-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma4-battleofyavin.png',
      epic: true,
      ffg: 940,
    },
    {
      name: 'Sigma 4',
      caption: 'Battle of Yavin',
      xws: 'sigma4-battleofyavin-lsl',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: true,
      wildspace: true,
      cost: 40,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      slots: ['Talent', 'Modification'],
      ability:
        'After you perform a [Barrel Roll] action, you may spend 1 [Charge] to perform a [Boost] action.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma4-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma4-battleofyavin-lsl.png',
      epic: true,
      ffg: 1178,
    },
    {
      name: 'Sigma 5',
      caption: 'Battle of Yavin',
      xws: 'sigma5-battleofyavin',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: false,
      wildspace: true,
      cost: 50,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      standardLoadout: ['sensorjammer-battleofyavin', 'elusive'],
      ability:
        'After you perform an attack that hits, you may spend 1 [Charge] to perform an [Evade] action.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma5-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma5-battleofyavin.png',
      epic: true,
      ffg: 941,
    },
    {
      name: 'Sigma 5',
      caption: 'Battle of Yavin',
      xws: 'sigma5-battleofyavin-lsl',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: true,
      wildspace: true,
      cost: 41,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      slots: ['Talent', 'Modification'],
      ability:
        'After you perform an attack that hits, you may spend 1 [Charge] to perform an [Evade] action.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma5-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma5-battleofyavin-lsl.png',
      epic: true,
      ffg: 1179,
    },
    {
      name: 'Sigma 6',
      caption: 'Battle of Yavin',
      xws: 'sigma6-battleofyavin',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: false,
      wildspace: true,
      cost: 48,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      standardLoadout: ['daredevil', 'afterburners'],
      ability:
        'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [SLAM] action.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma6-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma6-battleofyavin.png',
      epic: true,
      ffg: 942,
    },
    {
      name: 'Sigma 6',
      caption: 'Battle of Yavin',
      xws: 'sigma6-battleofyavin-lsl',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: true,
      wildspace: true,
      cost: 41,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      slots: ['Talent', 'Modification'],
      ability:
        'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [SLAM] action.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma6-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma6-battleofyavin-lsl.png',
      epic: true,
      ffg: 1180,
    },
    {
      name: 'Sigma 7',
      caption: 'Battle of Yavin',
      xws: 'sigma7-battleofyavin',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: false,
      wildspace: true,
      cost: 48,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Boost' },
        { difficulty: 'White', type: 'Lock' },
      ],
      standardLoadout: ['marksmanship', 'firecontrolsystem'],
      ability:
        'During the System Phase, you may spend 1 [Charge] to acquire a lock on an enemy ship at range 0-1.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma7-battleofyavin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma7-battleofyavin.png',
      epic: true,
      ffg: 943,
    },
    {
      name: 'Sigma 7',
      caption: 'Battle of Yavin',
      xws: 'sigma7-battleofyavin-lsl',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      standard: true,
      wildspace: true,
      cost: 43,
      charges: { value: 2, recovers: 0 },
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 4 },
      ],
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'White', type: 'Boost' },
        { difficulty: 'White', type: 'Lock' },
      ],
      slots: ['Talent'],
      ability:
        'During the System Phase, you may spend 1 [Charge] to acquire a lock on an enemy ship at range 0-1.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigma7-battleofyavin-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigma7-battleofyavin-lsl.png',
      epic: true,
      ffg: 1181,
    },
    {
      name: 'Second Sister',
      xws: 'secondsister',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Manipulative Monster',
      standard: true,
      wildspace: true,
      cost: 47,
      slots: ['Force Power', 'Modification', 'Modification', 'Configuration'],
      ability:
        'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force]. If you do, change all of your [Hit] results to [Critical Hit] results.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      keywords: ['Dark Side', 'TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/secondsister.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/secondsister.png',
      epic: true,
      ffg: 944,
    },
    {
      name: 'Sapphire 2',
      caption: 'Battle Over Endor',
      xws: 'sapphire2-battleoverendor',
      initiative: 1,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      cost: 53,
      standardLoadout: [
        'noescape-battleoverendor',
        'reckless-battleoverendor',
        'primedthrusters',
        'targetingmatrix-battleoverendor',
      ],
      ability:
        'While you defend, if you are focused, roll 1 additional defense die.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sapphire2-battleoverendor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sapphire2-battleoverendor.png',
      standard: false,
      wildspace: true,
      epic: true,
      ffg: 946,
    },
    {
      name: 'Sapphire 2',
      caption: 'Battle Over Endor',
      xws: 'sapphire2-battleoverendor-lsl',
      initiative: 1,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      cost: 38,
      slots: ['Modification', 'Modification'],
      ability:
        'While you defend, if you are focused, roll 1 additional defense die.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sapphire2-battleoverendor-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sapphire2-battleoverendor-lsl.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1182,
    },
    {
      name: 'Soontir Fel',
      caption: 'Battle Over Endor',
      xws: 'soontirfel-battleoverendor',
      initiative: 6,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      charges: { value: 2, recovers: 0 },
      cost: 68,
      standardLoadout: [
        'apexpredator-battleoverendor',
        'noescape-battleoverendor',
        'blanksignature-battleoverendor',
        'feedbackemitter-battleoverendor',
      ],
      ability:
        'After you perform an attack, you may spend 1 [Charge] and gain 1 deplete token to boost or barrel roll.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/soontirfel-battleoverendor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/soontirfel-battleoverendor.png',
      standard: false,
      wildspace: true,
      epic: true,
      ffg: 947,
    },
    {
      name: 'Soontir Fel',
      caption: 'Battle Over Endor',
      xws: 'soontirfel-battleoverendor-lsl',
      initiative: 6,
      limited: 1,
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      charges: { value: 2, recovers: 0 },
      cost: 49,
      slots: ['Talent', 'Modification', 'Modification'],
      ability:
        'After you perform an attack, you may spend 1 [Charge] and gain 1 deplete token to boost or barrel roll.',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/soontirfel-battleoverendor-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/soontirfel-battleoverendor-lsl.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1183,
    },
    {
      name: 'Maus Monare',
      caption: 'Battle Over Endor',
      xws: 'mausmonare-battleoverendor',
      initiative: 3,
      limited: 1,
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 3 },
        { type: 'shields', value: 1 },
      ],
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      cost: 56,
      standardLoadout: [
        'noescape-battleoverendor',
        'outmaneuver',
        'fuelinjectionoverride-battleoverendor',
      ],
      ability: 'After you perform an [Evade] action, gain a calculate token',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/mausmonare-battleoverendor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/mausmonare-battleoverendor.png',
      standard: false,
      wildspace: true,
      epic: true,
      ffg: 945,
    },
    {
      name: 'Maus Monare',
      caption: 'Battle Over Endor',
      xws: 'mausmonare-battleoverendor-lsl',
      initiative: 3,
      limited: 1,
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 3 },
        { type: 'shields', value: 1 },
      ],
      shipAbility: {
        name: 'Sensitive Controls',
        text: 'During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      cost: 42,
      slots: ['Talent', 'Modification', 'Modification'],
      ability: 'After you perform an [Evade] action, gain a calculate token',
      keywords: ['TIE'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/mausmonare-battleoverendor-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/mausmonare-battleoverendor-lsl.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 1184,
    },
  ],
};

export default t;
