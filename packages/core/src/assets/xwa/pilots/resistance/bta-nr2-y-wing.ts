import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'BTA-NR2 Y-Wing',
  xws: 'btanr2ywing',
  size: 'Small',
  ffg: 86,
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
    '3FB',
    '3NW',
    '3YR',
    '4FR',
    '5KR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Boost' },
  ],
  ability: {
    name: 'Intuitive Interface',
    text: 'After you perform an action added to your action bar by a [Talent], [Illicit], or [Modification] upgrade, you may perform a [Calculate] action.',
  },
  pilots: [
    {
      name: 'Zorii Bliss',
      xws: 'zoriibliss',
      initiative: 5,
      limited: 1,
      standard: true,
      cost: 4,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Illicit',
        'Configuration',
      ],
      ability:
        'After a ship at range 1 performs an action during its Perform Action step, if that action is on your action bar, you may spend 1 [Charge] to perform that action, treating it as red.',
      charges: { value: 1, recovers: 1 },
      caption: 'Corsair of Kijimi',
      loadout: 12,
      epic: true,
      keywords: ['Y-wing'],
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/zoriibliss.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zoriibliss.png',
      ffg: 903,
    },
    {
      name: 'Teza Nasz',
      xws: 'tezanasz',
      initiative: 4,
      limited: 1,
      standard: true,
      cost: 4,
      slots: [
        'Talent',
        'Tech',
        'Missile',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ability:
        'While a friendly ship at range 0-2 performs an attack, if the defender has a ship friendly to the attacker in each of its side arcs ([Left Arc] and [Right Arc]), the attacker may reroll 1 attack die.',
      ffg: 904,
      caption: 'Old Soldier',
      epic: true,
      keywords: ['Y-wing'],
      loadout: 13,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/tezanasz.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/tezanasz.png',
    },
    {
      name: 'Wilsa Teshlo',
      xws: 'wilsateshlo',
      initiative: 4,
      limited: 1,
      standard: true,
      cost: 3,
      slots: [
        'Tech',
        'Missile',
        'Turret',
        'Astromech',
        'Device',
        'Device',
        'Modification',
        'Modification',
      ],
      text: '???',
      ffg: 905,
      epic: true,
      caption: 'Veiled Sorority Privateer',
      ability:
        'After you perform an attack, if the defender was dealt a faceup damage card, the defender gains 1 strain token unless it chooses 1 non-recurring [Charge] from 1 of its equipped upgrades and loses that [Charge].',
      keywords: ['Y-wing'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/wilsateshlo.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wilsateshlo.png',
    },
    {
      name: 'Shasa Zaro',
      xws: 'shasazaro',
      initiative: 3,
      limited: 1,
      standard: true,
      cost: 3,
      slots: [
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
      ],
      ability:
        'After you defend, you may choose a friendly ship in your [Full Rear Arc] at range 0-2 and 1 of your green tokens. If you do, that ship gains a matching token.',
      ffg: 906,
      caption: 'Artistic Ace',
      epic: true,
      keywords: ['Y-wing'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/shasazaro.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/shasazaro.png',
    },
    {
      name: 'Lega Fossang',
      xws: 'legafossang',
      initiative: 3,
      limited: 1,
      standard: true,
      cost: 3,
      slots: [
        'Tech',
        'Turret',
        'Missile',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
      ],
      ability:
        'While you perform a primary or [Turret] attack, you may reroll 1 attack die for each friendly device or calculating friendly ship in the attack arc.',
      ffg: 907,
      caption: 'Hero of Humbarine',
      epic: true,
      keywords: ['Y-wing'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/legafossang.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/legafossang.png',
    },
    {
      name: 'Aftab Ackbar',
      xws: 'aftabackbar',
      initiative: 2,
      limited: 1,
      standard: true,
      cost: 4,
      slots: [
        'Talent',
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Configuration',
      ],
      text: '???',
      ffg: 908,
      epic: true,
      caption: '“Junior”',
      ability:
        'After you execute a red basic maneuver or perform a red action, if you have exactly 1 stress token, you may gain 1 strain token to remove that stress token.',
      keywords: ['Y-wing'],
      loadout: 13,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/aftabackbar.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/aftabackbar.png',
    },
    {
      name: 'Corus Kapellim',
      xws: 'coruskapellim',
      initiative: 1,
      limited: 1,
      standard: true,
      cost: 3,
      slots: [
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Illicit',
      ],
      text: '???',
      ffg: 909,
      epic: true,
      caption: '“Gentleman Flyer”',
      ability:
        'Before you engage, you may choose 1 ship in your firing arc at range 0-1. If you do, transfer 1 green token from that ship to yourself.',
      keywords: ['Y-wing'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/coruskapellim.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/coruskapellim.png',
    },
    {
      name: 'C’ai Threnalli',
      xws: 'caithrenalli-btanr2ywing',
      initiative: 2,
      limited: 1,
      standard: true,
      cost: 4,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ability:
        'After you fully execute a maneuver, if you moved through a friendly ship, you may perform an [Evade] action.',
      ffg: 910,
      caption: 'Tenacious Survivor',
      keywords: ['Y-wing'],
      epic: true,
      loadout: 12,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/caithrenalli-btanr2ywing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/caithrenalli-btanr2ywing.png',
    },
    {
      name: 'New Republic Patrol',
      xws: 'newrepublicpatrol',
      initiative: 3,
      limited: 0,
      standard: true,
      cost: 4,
      slots: [
        'Talent',
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Configuration',
      ],
      text: 'Designed for customization, the BTA-NR2 Y-wing is used by numerous military organizations across the galaxy in a variety of roles, from law enforcement craft to wartime bombers.',
      ffg: 911,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 12,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/newrepublicpatrol.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/newrepublicpatrol.png',
      caption: '',
    },
    {
      name: 'Kijimi Spice Runner',
      xws: 'kijimispicerunner',
      initiative: 2,
      limited: 0,
      standard: true,
      cost: 3,
      slots: [
        'Tech',
        'Turret',
        'Astromech',
        'Device',
        'Modification',
        'Illicit',
      ],
      text: 'Led by Zorii Bliss, the Kijimi Spice Runners set aside their usual mercenary ways to take the fight to the Final Order at the Battle of Exegol.',
      ffg: 912,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/kijimispicerunner.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/kijimispicerunner.png',
      caption: '',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_Y-wing-bta-nr2.png',
};

export default t;
