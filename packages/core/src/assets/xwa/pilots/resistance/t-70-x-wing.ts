import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'T-70 X-wing',
  xws: 't70xwing',
  ffg: 53,
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
  ability: {
    name: 'Weapon Hardpoint',
    text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
    slotOptions: ['Cannon', 'Torpedo', 'Missile'],
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_X-wing-T70.png',
  pilots: [
    {
      name: 'Poe Dameron',
      caption: 'Trigger-Happy Flyboy',
      initiative: 6,
      limited: 1,
      xws: 'poedameron',
      ability:
        'After you perform an action, you may spend 1 [Charge] to perform a white action, treating it as red.',
      cost: 7,
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Modification',
        'Torpedo',
        'Title',
        'Configuration',
        'Tech',
      ],
      ffg: 418,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 26,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/poedameron.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/poedameron.png',
    },
    {
      xws: 'poedameron-swz68',
      name: 'Poe Dameron',
      caption: 'Resistance Commander',
      cost: 5,
      loadout: 7,
      initiative: 6,
      limited: 1,
      charges: { value: 2, recovers: 1 },
      ability:
        'After a friendly ship at range 0-2 performs an action during its activation, you may spend 2 [Charge]. If you do, that ship may perform a white action, treating it as red.',
      slots: [
        'Talent',
        'Talent',
        'Astromech',
        'Modification',
        'Configuration',
        'Tech',
        'Tech',
      ],
      standard: true,
      epic: true,
      ffg: 697,
      keywords: ['X-wing'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/poedameron-swz68.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/poedameron-swz68.png',
    },
    {
      name: 'Blue Squadron Rookie',
      initiative: 1,
      limited: 0,
      xws: 'bluesquadronrookie',
      text: "The Incom-FreiTek T-70 X-Wing was designed to improve upon the tactical flexibility of the venerable T-65. The starfighter's advanced droid socket is compatible with a wide array of astromechs, and its modular weapons pods allow ground crews to tailor its payload for specific missions.",
      cost: 5,
      slots: ['Astromech', 'Modification', 'Configuration', 'Tech'],
      ffg: 426,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 13,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/bluesquadronrookie.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bluesquadronrookie.png',
      caption: '',
    },
    {
      name: 'Red Squadron Expert',
      initiative: 3,
      limited: 0,
      xws: 'redsquadronexpert',
      text: 'Although the bulk of the Resistance Starfighter Corps is made up of young volunteers from the New Republic, their ranks are bolstered by veterans of the Galactic Civil War determined to finish what they started decades ago.',
      cost: 4,
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration', 'Tech'],
      ffg: 425,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 5,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/redsquadronexpert.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/redsquadronexpert.png',
      caption: '',
    },
    {
      name: 'Black Squadron Ace',
      initiative: 4,
      limited: 0,
      xws: 'blacksquadronace-t70xwing',
      text: "During the Cold War, Poe Dameron's Black Squadron conducted daring covert operations against the First Order in defiance of treaties ratified by the New Republic Senate.",
      cost: 4,
      loadout: 2,
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration', 'Tech'],
      ffg: 451,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/blacksquadronace-t70xwing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/blacksquadronace-t70xwing.png',
      caption: '',
    },
    {
      name: 'Ello Asty',
      caption: 'Born to Ill',
      initiative: 5,
      limited: 1,
      xws: 'elloasty',
      ability:
        'After you reveal a red Tallon Roll ([Tallon Roll Left] or [Tallon Roll Right]) maneuver, if you have 2 or fewer stress tokens, treat that maneuver as white.',
      cost: 5,
      slots: [
        'Talent',
        'Talent',
        'Astromech',
        'Modification',
        'Configuration',
        'Tech',
      ],
      ffg: 419,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/elloasty.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/elloasty.png',
    },
    {
      name: 'Joph Seastriker',
      caption: 'Reckless Bodyguard',
      initiative: 3,
      limited: 1,
      xws: 'jophseastriker',
      ability: 'After you lose 1 shield, gain 1 evade token.',
      cost: 4,
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration', 'Tech'],
      ffg: 424,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jophseastriker.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jophseastriker.png',
    },
    {
      name: 'Karé Kun',
      caption: 'Woman of Action',
      initiative: 4,
      limited: 1,
      xws: 'karekun',
      ability:
        'While you boost, you may use the (1 [Turn Left]) or (1 [Turn Right]) template instead.',
      cost: 4,
      loadout: 5,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Configuration',
        'Cannon',
        'Tech',
      ],
      ffg: 421,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/karekun.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/karekun.png',
    },
    {
      name: 'Lieutenant Bastian',
      caption: 'Optimistic Analyst',
      initiative: 2,
      limited: 1,
      xws: 'lieutenantbastian',
      ability:
        'After a ship at range 1-2 is dealt a damage card, you may acquire a lock on that ship.',
      cost: 4,
      slots: ['Astromech', 'Modification', 'Configuration', 'Tech'],
      ffg: 449,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 5,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/lieutenantbastian.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantbastian.png',
    },
    {
      name: 'Nien Nunb',
      caption: 'Sarcastic Survivor',
      initiative: 5,
      limited: 1,
      xws: 'niennunb',
      ability:
        'After you gain a stress token, if there is an enemy ship in your [Front Arc] at range 0-1, you may remove that stress token.',
      cost: 5,
      slots: [
        'Talent',
        'Astromech',
        'Missile',
        'Modification',
        'Configuration',
        'Tech',
      ],
      ffg: 420,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/niennunb.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/niennunb.png',
    },
    {
      name: 'Jaycris Tubbs',
      caption: 'Loving Father',
      initiative: 1,
      limited: 1,
      xws: 'jaycristubbs',
      ability:
        'After you fully execute a blue maneuver, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      cost: 4,
      slots: ['Astromech', 'Modification', 'Configuration', 'Tech'],
      ffg: 450,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jaycristubbs.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jaycristubbs.png',
    },
    {
      name: 'Jessika Pava',
      caption: 'The Great Destroyer',
      initiative: 3,
      limited: 1,
      xws: 'jessikapava',
      ability:
        'While you defend or perform an attack, you may spend 1 [Charge] or 1 non-recurring [Charge] from your equipped [Astromech] upgrade to reroll up to 1 of your dice for each other friendly ship at range 0-1.',
      cost: 5,
      charges: { value: 1, recovers: 1 },
      slots: ['Astromech', 'Modification', 'Configuration', 'Tech'],
      ffg: 423,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jessikapava.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jessikapava.png',
    },
    {
      name: 'Temmin Wexley',
      caption: 'Snap',
      initiative: 4,
      limited: 1,
      xws: 'temminwexley',
      ability:
        'After you fully execute a speed 2-4 maneuver, you may perform a [Boost] action.',
      cost: 5,
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Modification',
        'Configuration',
        'Tech',
      ],
      ffg: 422,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 16,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/temminwexley.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/temminwexley.png',
    },
    {
      xws: 'temminwexley-swz68',
      name: 'Temmin Wexley',
      caption: 'Black Two',
      cost: 5,
      loadout: 12,
      initiative: 4,
      limited: 1,
      ability:
        'At the start of the Engagement Phase, each friendly T-70 X-wing at range 0-3 may gain 1 strain token to flip its equipped [Configuration] upgrade. If it does, that ship gains 1 calculate token.',
      slots: [
        'Talent',
        'Astromech',
        'Modification',
        'Configuration',
        'Tech',
        'Tech',
      ],
      standard: true,
      epic: true,
      ffg: 698,
      keywords: ['X-wing'],
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/temminwexley-swz68.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/temminwexley-swz68.png',
    },
    {
      xws: 'caithrenalli',
      name: 'C’ai Threnalli',
      caption: 'Tenacious Survivor',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'After you fully execute a maneuver, if you moved through a friendly ship, you may perform an [Evade] action.',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration', 'Tech'],
      standard: true,
      epic: true,
      ffg: 699,
      keywords: ['X-wing'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/caithrenalli.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/caithrenalli.png',
    },
    {
      name: 'Nimi Chireen',
      xws: 'nimichireen',
      initiative: 2,
      limited: 1,
      caption: 'Hopeful Hero',
      standard: true,
      cost: 4,
      loadout: 5,
      slots: ['Tech', 'Astromech', 'Modification', 'Configuration'],
      ability:
        "While you perform an attack, if the defender's initiative is higher than yours, you may change 1 blank result to a [Focus] result.",
      epic: true,
      ffg: 700,
      keywords: ['X-wing'],
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/nimichireen.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/nimichireen.png',
    },
    {
      name: 'Venisa Doza',
      xws: 'venisadoza',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      caption: 'Jade Leader',
      standard: true,
      extended: true,
      cost: 5,
      loadout: 13,
      slots: [
        'Talent',
        'Tech',
        'Missile',
        'Missile',
        'Astromech',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ability:
        'While you perform a [Torpedo] or [Missile] attack, you may treat the [Front Arc] requirement as [Rear Arc] for that attack. If you do, treat the range requirement as 1-2.',
      image: 'https://infinitearenas.com/xw2/images/pilots/venisadoza.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/venisadoza.png',
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Zay Versio',
      xws: 'zayversio',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Weapon Hardpoint',
        text: 'You can equip 1 [Cannon], [Torpedo], or [Missile] upgrade.',
      },
      caption: "Her Father's Daughter",
      standard: true,
      extended: true,
      cost: 4,
      loadout: 6,
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ability:
        'While you defend, if the attacker is damaged, you may reroll 1 defense die.',
      image: 'https://infinitearenas.com/xw2/images/pilots/zayversio.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zayversio.png',
      keywords: ['X-wing'],
      epic: true,
    },
  ],
};

export default t;
