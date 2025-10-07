import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE Reaper',
  xws: 'tiereaper',
  size: 'Medium',
  dial: [
    '0OR',
    '1LR',
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '1PR',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3BW',
    '3FB',
    '3NW',
  ],
  dialCodes: ['TR'],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEReaper.png',
  pilots: [
    {
      name: '“Vizier”',
      caption: 'Ruthless Tactician',
      initiative: 2,
      limited: 1,
      cost: 41,
      xws: 'vizier',
      ability:
        'After you fully execute a speed 1 maneuver using your Adaptive Ailerons ship ability, you may perform a [Coordinate] action. If you do, skip your Perform Action step.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/vizier.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/vizier.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 115,
    },
    {
      name: 'Captain Feroph',
      caption: 'Imperial Courier',
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'captainferoph',
      ability:
        'While you defend, if the attacker does not have any green tokens, you may change 1 of your blank or [Focus] results to an [Evade] result.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captainferoph.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captainferoph.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 114,
    },
    {
      name: 'Major Vermeil',
      caption: 'Veteran of Scarif',
      initiative: 4,
      limited: 1,
      cost: 48,
      xws: 'majorvermeil',
      ability:
        'While you perform an attack, if the defender does not have any green tokens, you may change 1 of your blank or [Focus] results to a [Hit] result.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/majorvermeil.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/majorvermeil.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 113,
    },
    {
      name: 'Scarif Base Pilot',
      initiative: 1,
      limited: 0,
      cost: 38,
      xws: 'scarifbasepilot',
      text: "The TIE reaper was designed to ferry elite troops to flashpoints on the battlefield, notably carrying Director Krennic's dreaded death troopers at the Battle of Scarif.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/scarifbasepilot.png',
      shipAbility: {
        name: 'Adaptive Ailerons',
        text: 'Before you reveal your dial, if you are not stressed, you must execute a white [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] maneuver.',
      },
      slots: ['Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/scarifbasepilot.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 116,
    },
  ],
};

export default t;
