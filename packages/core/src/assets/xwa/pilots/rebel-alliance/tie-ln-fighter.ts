import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ln Fighter',
  xws: 'tielnfighter',
  ffg: 11,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_TIEFighter.png',
  pilots: [
    {
      name: '“Zeb” Orrelios',
      caption: 'Spectre-4',
      initiative: 2,
      limited: 1,
      cost: 6,
      xws: 'zeborrelios-tielnfighter',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      slots: ['Modification', 'Modification'],
      ffg: 49,
      standard: true,
      epic: true,
      keywords: ['TIE', 'Spectre'],
      loadout: 5,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/zeborrelios-tielnfighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zeborrelios-tielnfighter.png',
    },
    {
      name: 'Captain Rex',
      caption: 'Clone Wars Veteran',
      initiative: 2,
      limited: 1,
      cost: 7,
      xws: 'captainrex',
      ability:
        'After you perform an attack, assign the Suppressive Fire condition to the defender.',
      conditions: ['suppressivefire'],
      slots: ['Talent', 'Modification', 'Modification'],
      ffg: 48,
      standard: true,
      epic: true,
      keywords: ['Clone', 'TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/captainrex.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainrex.png',
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 9,
      xws: 'ezrabridger-tielnfighter',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Modification', 'Modification', 'Force Power'],
      ffg: 46,
      standard: true,
      epic: true,
      loadout: 15,
      extended: true,
      keywords: ['Light Side', 'Spectre', 'TIE'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/ezrabridger-tielnfighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/ezrabridger-tielnfighter.png',
    },
    {
      name: 'Sabine Wren',
      caption: 'Spectre-5',
      initiative: 3,
      limited: 1,
      cost: 8,
      xws: 'sabinewren-tielnfighter',
      ability:
        'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
      slots: ['Talent', 'Modification', 'Modification'],
      ffg: 47,
      standard: true,
      epic: true,
      loadout: 13,
      extended: true,
      keywords: ['Mandalorian', 'TIE', 'Spectre'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/sabinewren-tielnfighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sabinewren-tielnfighter.png',
    },
  ],
};

export default t;
