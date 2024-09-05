import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'T-70 X-wing',
  xws: 't70xwing',
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
  ],
  dialCodes: ['T70'],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_X-wing-T70.png',
  pilots: [
    {
      name: 'Poe Dameron',
      caption: 'Trigger-Happy Flyboy',
      initiative: 6,
      limited: 1,
      xws: 'poedameron',
      cost: 64,
      ability:
        'After you perform an action, you may spend 1 [Charge] to perform a white action, treating it as red.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/poedameron.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/poedameron.png',
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Poe Dameron',
      caption: 'Resistance Commander',
      initiative: 6,
      limited: 1,
      xws: 'poedameron-swz68',
      cost: 57,
      ability:
        'After a friendly ship at range 0-2 performs an action during its activation, you may spend 2 [Charge]. If you do, that ship may perform a white action, treating it as red.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      charges: { value: 2, recovers: 1 },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/poedameron-swz68.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/poedameron-swz68.png',
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Blue Squadron Rookie',
      initiative: 1,
      limited: 0,
      xws: 'bluesquadronrookie',
      cost: 42,
      text: "The Incom-FreiTek T-70 X-Wing was designed to improve upon the tactical flexibility of the venerable T-65. The starfighter's advanced droid socket is compatible with a wide array of astromechs, and its modular weapons pods allow ground crews to tailor its payload for specific missions.",
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/bluesquadronrookie.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/bluesquadronrookie.png',
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Red Squadron Expert',
      initiative: 3,
      limited: 0,
      xws: 'redsquadronexpert',
      cost: 44,
      text: 'Although the bulk of the Resistance Starfighter Corps is made up of young volunteers from the New Republic, their ranks are bolstered by veterans of the Galactic Civil War determined to finish what they started decades ago.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/redsquadronexpert.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/redsquadronexpert.png',
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Black Squadron Ace',
      initiative: 4,
      limited: 0,
      xws: 'blacksquadronace-t70xwing',
      cost: 46,
      text: "During the Cold War, Poe Dameron's Black Squadron conducted daring covert operations against the First Order in defiance of treaties ratified by the New Republic Senate.",
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/blacksquadronace-t70xwing.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/blacksquadronace-t70xwing.png',
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Ello Asty',
      caption: 'Born to Ill',
      initiative: 5,
      limited: 1,
      xws: 'elloasty',
      cost: 53,
      ability:
        'After you reveal a red Tallon Roll [[Tallon Roll Left] or [Tallon Roll Right]] maneuver, if you have 2 or fewer stress tokens, treat that maneuver as white.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/elloasty.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/elloasty.png',
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Joph Seastriker',
      caption: 'Reckless Bodyguard',
      initiative: 3,
      limited: 1,
      xws: 'jophseastriker',
      cost: 45,
      ability: 'After you lose 1 shield, gain 1 evade token.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jophseastriker.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jophseastriker.png',
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Kare Kun',
      caption: 'Woman of Action',
      initiative: 4,
      limited: 1,
      xws: 'karekun',
      cost: 47,
      ability:
        'While you boost, you may use the [1 [Turn Left]] or [1 [Turn Right]] template instead.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/karekun.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/karekun.png',
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Lieutenant Bastian',
      caption: 'Optimistic Analyst',
      initiative: 2,
      limited: 1,
      xws: 'lieutenantbastian',
      cost: 48,
      ability:
        'After a ship at range 1-2 is dealt a damage card, you may acquire a lock on that ship.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantbastian.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantbastian.png',
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Nien Nunb',
      caption: 'Sarcastic Survivor',
      initiative: 5,
      limited: 1,
      xws: 'niennunb',
      cost: 56,
      ability:
        'After you gain a stress token, if there is an enemy ship in your [Front Arc] at range 0-1, you may remove that stress token.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/niennunb.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/niennunb.png',
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Jaycris Tubbs',
      caption: 'Loving Father',
      initiative: 1,
      limited: 1,
      xws: 'jaycristubbs',
      cost: 45,
      ability:
        'After you fully execute a blue maneuver, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jaycristubbs.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jaycristubbs.png',
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Jessika Pava',
      caption: 'The Great Destroyer',
      initiative: 3,
      limited: 1,
      xws: 'jessikapava',
      cost: 51,
      ability:
        'While you defend or perform an attack, you may spend 1 [Charge] or 1 non-recurring [Charge] from your equipped [Astromech] upgrade to reroll up to 1 of your dice for each other friendly ship at range 0-1.',
      charges: { value: 1, recovers: 1 },
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jessikapava.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jessikapava.png',
      slots: ['Astromech', 'Modification', 'Title', 'Configuration', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Temmin Wexley',
      caption: 'Snap',
      initiative: 4,
      limited: 1,
      xws: 'temminwexley',
      cost: 46,
      ability:
        'After you fully execute a speed 2-4 maneuver, you may perform a [Boost] action.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/temminwexley.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/temminwexley.png',
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Temmin Wexley',
      caption: 'Black Two',
      initiative: 4,
      limited: 1,
      xws: 'temminwexley-swz68',
      cost: 53,
      ability:
        'At the start of the Engagement Phase, each friendly T-70 X-wing at range 0-3 may gain 1 strain token to flip its equipped [Configuration] upgrade. If it does, that ship gains 1 calculate token.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/temminwexley-swz68.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/temminwexley-swz68.png',
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'C’ai Threnalli',
      caption: 'Tenacious Survivor',
      initiative: 4,
      limited: 1,
      xws: 'caithrenalli',
      cost: 47,
      ability:
        'After you fully execute a maneuver, if you moved through a friendly ship, you may perform an [Evade] action.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/caithrenalli.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/caithrenalli.png',
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Nimi Chireen',
      caption: 'Hopeful Hero',
      initiative: 2,
      limited: 1,
      xws: 'nimichireen',
      cost: 48,
      ability:
        "While you perform an attack, if the defender's initiative is higher than yours, you may change 1 blank result to a [Focus] result.",
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: ['Tech', 'Astromech', 'Modification', 'Configuration', 'Title'],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/nimichireen.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/nimichireen.png',
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Venisa Doza',
      caption: 'Jade Leader',
      initiative: 4,
      limited: 1,
      xws: 'venisadoza',
      cost: 46,
      ability:
        'While you perform a [Torpedo] or [Missile] attack, you may treat the [Front Arc] requirement as [Rear Arc] for that attack. If you do, treat the range requirement as 1-2.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/venisadoza.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/venisadoza.png',
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Zay Versio',
      caption: "Her Father's Daughter",
      initiative: 3,
      limited: 1,
      xws: 'zayversio',
      cost: 46,
      ability:
        'While you defend, if the attacker is damaged, you may reroll 1 defense die.',
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Title',
        'Configuration',
        'Tech',
      ],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zayversio.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zayversio.png',
      keywords: ['X-wing'],
      epic: true,
    },
  ],
};

export default t;
