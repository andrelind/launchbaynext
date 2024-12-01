import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/vn Silencer',
  xws: 'tievnsilencer',
  ffg: 52,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3ER',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3RR',
    '4FB',
    '4KR',
    '5FB',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Autothrusters',
    text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_TIESilencer.png',
  pilots: [
    {
      name: '“Blackout”',
      xws: 'blackout',
      caption: 'Ill-Fated Test Pilot',
      initiative: 5,
      limited: 1,
      cost: 5,
      ability:
        'While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.',
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 415,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/blackout.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/blackout.png',
    },
    {
      name: 'Kylo Ren',
      xws: 'kyloren',
      caption: 'Tormented Apprentice',
      initiative: 5,
      limited: 1,
      cost: 6,
      ability:
        "After you defend, you may spend 1 [Force] to assign the I'll Show You the Dark Side condition to the attacker.",
      force: { value: 2, recovers: 1, side: ['dark'] },
      conditions: ['illshowyouthedarkside'],
      slots: ['Torpedo', 'Missile', 'Force Power', 'Talent', 'Tech', 'Configuration'],
      ffg: 414,
      standard: true,
      epic: true,
      keywords: ['Dark Side', 'TIE'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/kyloren.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/kyloren.png',
    },
    {
      name: 'First Order Test Pilot',
      xws: 'firstordertestpilot',
      initiative: 4,
      limited: 0,
      cost: 5,
      text: 'Engineered for incredible speed and precise handling, the TIE Silencer is devastating in the hands of those who can unlock its full potential. Any lesser pilot could easily be overwhelmed and lose control of the nimble craft.',
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      ffg: 416,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/firstordertestpilot.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/firstordertestpilot.png',
      caption: '',
    },
    {
      name: '“Recoil”',
      xws: 'recoil',
      caption: 'Quantity Over Quality',
      initiative: 4,
      limited: 1,
      cost: 5,
      ability:
        'While you are stressed, you may treat enemy ships in your [Front Arc] at range 0-1 as being in your [Bullseye Arc].',
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      ffg: 455,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/recoil.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/recoil.png',
    },
    {
      name: '“Avenger”',
      xws: 'avenger',
      caption: 'Wrathful Wingmate',
      initiative: 3,
      limited: 1,
      cost: 5,
      ability: 'After another friendly ship is destroyed, you may perform an action, even while stressed.',
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      ffg: 456,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/avenger.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/avenger.png',
    },
    {
      name: 'Sienar-Jaemus Engineer',
      xws: 'sienarjaemusengineer',
      initiative: 1,
      limited: 0,
      cost: 5,
      text: 'Developed by Sienar-Jaemus Fleet Systems as a successor to the vaunted TIE Defender, the TIE/vn Silencer incorporates bleeding-edge technologies developed at research facilities hidden in the Unknown Regions.',
      slots: ['Tech', 'Torpedo', 'Missile', 'Modification', 'Configuration'],
      ffg: 417,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 15,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/sienarjaemusengineer.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/sienarjaemusengineer.png',
      caption: '',
    },
    {
      name: '“Rush”',
      xws: 'rush',
      caption: 'Adrenaline Junkie',
      initiative: 2,
      limited: 1,
      cost: 5,
      ability: 'While you are damaged, treat your initiative as 6.',
      slots: ['Tech', 'Talent', 'Talent', 'Missile', 'Configuration'],
      ffg: 643,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/rush.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/rush.png',
    },
  ],
};

export default t;
