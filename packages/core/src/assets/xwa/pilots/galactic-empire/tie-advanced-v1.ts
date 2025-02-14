import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE Advanced v1',
  xws: 'tieadvancedv1',
  ffg: 25,
  size: 'Small',
  dial: [
    '1TB',
    '1BB',
    '1NB',
    '1YB',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
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
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEAdvancedPrototype.png',
  pilots: [
    {
      name: 'Baron of the Empire',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'baronoftheempire',
      text: "Sienar Fleet System's TIE Advanced v1 is a groundbreaking starfighter design, featuring upgraded engines, a missile launcher, and folding s-foils.",
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      ffg: 101,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 5,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/baronoftheempire.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/baronoftheempire.png',
      caption: '',
    },
    {
      name: 'Grand Inquisitor',
      caption: 'Master of the Inquisitorious',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'grandinquisitor',
      ability:
        'While you defend at attack range 1, you may spend 1 [Force] to prevent the range 1 bonus. While you perform an attack against a defender at attack range 2-3, you may spend 1 [Force] to apply the range 1 bonus.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power', 'Force Power', 'Modification'],
      ffg: 99,
      standard: true,
      epic: true,
      keywords: ['Dark Side', 'TIE'],
      loadout: 13,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/grandinquisitor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/grandinquisitor.png',
    },
    {
      name: 'Inquisitor',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'inquisitor',
      text: "The fearsome Inquisitors are given a great deal of autonomy and access to the Empire's latest technology, like the prototype TIE Advanced v1.",
      force: { value: 1, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Force Power', 'Modification'],
      ffg: 102,
      standard: true,
      epic: true,
      keywords: ['Dark Side', 'TIE'],
      loadout: 13,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/inquisitor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/inquisitor.png',
      caption: '',
    },
    {
      name: 'Seventh Sister',
      caption: 'Sadistic Interrogator',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'seventhsister',
      ability:
        'While you perform a primary attack, before the Neutralize Results step, you may spend 2 [Force] to cancel 1 [Evade] result.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Sensor', 'Missile', 'Force Power', 'Force Power', 'Modification'],
      ffg: 100,
      standard: true,
      epic: true,
      keywords: ['Dark Side', 'TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/seventhsister.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/seventhsister.png',
    },
    {
      name: 'Fifth Brother',
      caption: 'Ruthless Brute',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'fifthbrother',
      ability:
        'While you perform an attack, after the Neutralize Results step, if the attack hit, you may spend 2 [Force] to add 1 [Critical Hit] result.',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: ['Force Power', 'Force Power', 'Sensor', 'Modification', 'Missile'],
      standard: true,
      epic: true,
      ffg: 632,
      keywords: ['Dark Side', 'TIE'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/fifthbrother.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/fifthbrother.png',
    },
  ],
};

export default t;
