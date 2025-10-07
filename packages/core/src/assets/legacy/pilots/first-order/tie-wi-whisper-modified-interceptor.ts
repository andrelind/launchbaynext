import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/wi Whisper Modified Interceptor',
  xws: 'tiewiwhispermodifiedinterceptor',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FB',
    '5KR',
  ],
  dialCodes: ['Twi'],
  faction: 'First Order',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Boost',
    },
  ],
  pilots: [
    {
      name: 'Kylo Ren',
      xws: 'kyloren-tiewiwhispermodifiedinterceptor',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      cost: 61,
      slots: [
        'Force Power',
        'Talent',
        'Missile',
        'Tech',
        'Tech',
        'Configuration',
      ],
      ability:
        'Before an enemy ship in your [Bullseye Arc] is dealt a facedown damage card, you may spend 1 [Force]. If you do, that damage card is dealt faceup instead.',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kyloren-tiewiwhispermodifiedinterceptor.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kyloren-tiewiwhispermodifiedinterceptor.png',
      caption: 'Supreme Leader of the First Order',
      keywords: ['Dark Side', 'Light Side', 'TIE'],
      force: { value: 3, recovers: 1, side: ['dark', 'light'] },
      epic: true,
      ffg: 919,
    },
    {
      name: '“Wrath”',
      xws: 'wrath',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      cost: 48,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ability:
        'After you perform a [Bullseye Arc] attack, if you have 1 or more non-lock red or orange tokens, you may perform a bonus attack against a different target.',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wrath.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wrath.png',
      caption: 'Herald of Destruction',
      keywords: ['TIE'],
      epic: true,
      ffg: 920,
    },
    {
      name: '“Nightfall”',
      xws: 'nightfall',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      cost: 45,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ability:
        'After you fully execute a maneuver or perform a [Boost] action, each ship you moved through gains 2 jam tokens.',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/nightfall.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/nightfall.png',
      caption: '709th Legion Veteran',
      keywords: ['TIE'],
      epic: true,
      ffg: 921,
    },
    {
      name: '“Whirlwind”',
      xws: 'whirlwind',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      standard: true,
      wildspace: true,
      cost: 45,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ability:
        'Before you engage, you may remove any number of jam tokens, then you may gain 1 focus token for each enemy ship that has you in its [Front Arc].',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/whirlwind.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/whirlwind.png',
      caption: 'Reap What You Sow',
      keywords: ['TIE'],
      epic: true,
      ffg: 922,
    },
    {
      name: '709th Legion Ace',
      xws: '709thlegionace',
      initiative: 4,
      limited: 0,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      text: "Commanded by Supreme Leader Kylo Ren, the 709th Legion fights without mercy or remorse to crush the Resistance and bring the galaxy under the First Order's dominion.",
      standard: true,
      wildspace: true,
      cost: 44,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/709thlegionace.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/709thlegionace.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 923,
    },
    {
      name: 'Red Fury Zealot',
      xws: 'redfuryzealot',
      initiative: 2,
      limited: 0,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      text: 'Also called Red Fury, the 709th Legion is charged by Supreme Leader Kylo Ren with rooting out dissenters at Black Spire Outpost.',
      standard: true,
      wildspace: true,
      cost: 41,
      slots: ['Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/redfuryzealot.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/redfuryzealot.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 924,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_TIEWhisper.png',
};

export default t;
