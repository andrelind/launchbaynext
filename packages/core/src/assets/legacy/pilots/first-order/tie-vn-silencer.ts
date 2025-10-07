import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/vn Silencer',
  xws: 'tievnsilencer',
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
  dialCodes: ['Tvn'],
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
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_TIESilencer.png',
  pilots: [
    {
      name: '“Blackout”',
      xws: 'blackout',
      caption: 'Ill-Fated Test Pilot',
      initiative: 5,
      limited: 1,
      cost: 60,
      ability:
        'While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/blackout.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/blackout.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 415,
    },
    {
      name: 'Kylo Ren',
      xws: 'kyloren',
      caption: 'Tormented Apprentice',
      initiative: 5,
      limited: 1,
      cost: 79,
      ability:
        "After you defend, you may spend 1 [Force] to assign the I'll Show You the Dark Side condition to the attacker.",
      force: { value: 2, recovers: 1, side: ['dark'] },
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      conditions: ['illshowyouthedarkside'],
      slots: ['Force Power', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kyloren.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kyloren.png',
      standard: true,
      wildspace: true,
      keywords: ['Dark Side', 'TIE'],
      epic: true,
      ffg: 414,
    },
    {
      name: 'First Order Test Pilot',
      xws: 'firstordertestpilot',
      initiative: 4,
      limited: 0,
      cost: 55,
      text: 'Engineered for incredible speed and precise handling, the TIE Silencer is devastating in the hands of those who can unlock its full potential. Any lesser pilot could easily be overwhelmed and lose control of the nimble craft.',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/firstordertestpilot.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/firstordertestpilot.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 416,
    },
    {
      name: '“Recoil”',
      xws: 'recoil',
      caption: 'Quantity Over Quality',
      initiative: 4,
      limited: 1,
      cost: 55,
      ability:
        'While you are stressed, you may treat enemy ships in your [Front Arc] at range 0-1 as being in your [Bullseye Arc].',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/recoil.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/recoil.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 455,
    },
    {
      name: '“Avenger”',
      xws: 'avenger',
      caption: 'Wrathful Wingmate',
      initiative: 3,
      limited: 1,
      cost: 55,
      ability:
        'After another friendly ship is destroyed, you may perform an action, even while stressed.',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Talent', 'Torpedo', 'Missile', 'Tech', 'Configuration'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/avenger.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/avenger.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 456,
    },
    {
      name: 'Sienar-Jaemus Engineer',
      xws: 'sienarjaemusengineer',
      initiative: 1,
      limited: 0,
      cost: 49,
      text: 'Developed by Sienar-Jaemus Fleet Systems as a successor to the vaunted TIE Defender, the TIE/vn Silencer incorporates bleeding-edge technologies developed at research facilities hidden in the Unknown Regions.',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      slots: ['Torpedo', 'Missile', 'Tech', 'Configuration'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sienarjaemusengineer.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sienarjaemusengineer.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 417,
    },
    {
      name: '“Rush”',
      xws: 'rush',
      initiative: 2,
      limited: 1,
      cost: 57,
      ability: 'While you are damaged, treat your initiative as 6.',
      shipAbility: {
        name: 'Autothrusters',
        text: 'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
      },
      caption: 'Adrenaline Junkie',
      standard: true,
      wildspace: true,
      slots: ['Torpedo', 'Missile', 'Tech', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/rush.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/rush.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 643,
    },
  ],
};

export default t;
