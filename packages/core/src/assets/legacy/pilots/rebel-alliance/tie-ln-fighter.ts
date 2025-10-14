import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ln Fighter',
  xws: 'tielnfighter',
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
  dialCodes: ['TF'],
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
      cost: 21,
      xws: 'zeborrelios-tielnfighter',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zeborrelios-tielnfighter.png',
      slots: ['Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zeborrelios-tielnfighter.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE', 'Spectre'],
      epic: true,
      ffg: 49,
    },
    {
      name: 'Captain Rex',
      caption: 'Clone Wars Veteran',
      initiative: 2,
      limited: 1,
      cost: 25,
      xws: 'captainrex',
      ability:
        'After you perform an attack, assign the Suppressive Fire condition to the defender.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captainrex.png',
      conditions: ['suppressivefire'],
      slots: ['Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captainrex.png',
      standard: true,
      wildspace: true,
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 48,
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 25,
      xws: 'ezrabridger-tielnfighter',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ezrabridger-tielnfighter.png',
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Force Power', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ezrabridger-tielnfighter.png',
      standard: true,
      wildspace: true,
      keywords: ['Light Side', 'Spectre', 'TIE'],
      epic: true,
      ffg: 46,
    },
    {
      name: 'Sabine Wren',
      caption: 'Spectre-5',
      initiative: 3,
      limited: 1,
      cost: 25,
      xws: 'sabinewren-tielnfighter',
      ability:
        'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sabinewren-tielnfighter.png',
      slots: ['Talent', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sabinewren-tielnfighter.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian', 'TIE', 'Spectre'],
      epic: true,
      ffg: 47,
    },
  ],
};

export default t;
