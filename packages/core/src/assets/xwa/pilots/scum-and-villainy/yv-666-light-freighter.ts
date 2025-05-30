import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'YV-666 Light Freighter',
  xws: 'yv666lightfreighter',
  ffg: 24,
  size: 'Large',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TR',
    '2BW',
    '2FB',
    '2NW',
    '2YR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 9 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_YV-666.png',
  pilots: [
    {
      name: 'Bossk',
      caption: 'Fearsome Hunter',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'bossk',
      ability:
        'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      ffg: 210,
      standard: true,
      epic: true,
      loadout: 16,
      extended: true,
      keywords: ['Bounty Hunter', 'Freighter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/bossk.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/bossk.png',
    },
    {
      name: 'Latts Razzi',
      caption: 'Martial Artist',
      initiative: 3,
      limited: 1,
      cost: 6,
      xws: 'lattsrazzi',
      ability:
        'At the start of the Engagement Phase, you may choose a ship at range 1 and spend a lock you have on that ship. If you do, that ship gains 1 tractor token.',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      ffg: 212,
      standard: true,
      epic: true,
      loadout: 18,
      extended: true,
      keywords: ['Bounty Hunter', 'Freighter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/lattsrazzi.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lattsrazzi.png',
    },
    {
      name: 'Moralo Eval',
      caption: 'Criminal Mastermind',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'moraloeval',
      ability:
        'If you would flee, you may spend 1 [Charge]. If you do, place yourself in reserves instead. At the start of the next Planning Phase, place yourself within range 1 of the edge of the play area that you fled from.',
      charges: { value: 2, recovers: 0 },
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Gunner',
      ],
      ffg: 211,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/moraloeval.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/moraloeval.png',
    },
    {
      name: 'Trandoshan Slaver',
      initiative: 2,
      limited: 0,
      cost: 7,
      xws: 'trandoshanslaver',
      text: 'The spacious triple-decker design of the YV-666 makes it popular among bounty hunters and slavers, who often retrofit an entire deck for prisoner transport.',
      slots: ['Cannon', 'Missile', 'Crew', 'Crew', 'Gunner', 'Modification'],
      ffg: 213,
      standard: true,
      epic: true,
      keywords: ['Freighter'],
      loadout: 27,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/trandoshanslaver.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/trandoshanslaver.png',
      caption: '',
    },
    {
      name: 'Doctor Aphra',
      caption: 'Professional Disaster Zone',
      initiative: 3,
      limited: 1,
      cost: 6,
      loadout: 22,
      xws: 'doctoraphra',
      ability:
        'Before you engage, you may spend 1 green token and 1 [Charge]. If you do, you may choose another ship at range 0-1 that is not stressed. The chosen ship gains 1 stress token.',
      image: 'https://infinitearenas.com/xw2/images/pilots/doctoraphra.png',
      charges: { value: 3, recovers: 0 },
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      standard: true,
      extended: true,
      keywords: ['Freighter'],
      epic: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/doctoraphra.png',
      ffg: 1067,
    },
    {
      name: 'Bossk',
      caption: 'Armed and Dangerous',
      initiative: 4,
      limited: 1,
      cost: 6,
      loadout: 0,
      xws: 'bossk-armedanddangerous',
      ability:
        'While you perform an attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      shipAbility: {
        name: 'Imposing Behemoth',
        text: 'While an enemy ship at range 0 defends, if you are reinforced and the defender is in the [full front arc] or [full rear arc] matching your reinforce token, that enemy ship rolls 1 fewer defense die.',
      },
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/bossk-armedanddangerous.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bossk-armedanddangerous.png',
      standard: true,
      extended: true,
      keywords: ['Bounty Hunter', 'Freighter'],
      standardLoadout: [
        'embo-armedanddangerous',
        'contrabandcybernetics',
        'houndstooth-armedanddangerous',
      ],
      epic: true,
      ffg: 1118,
    },
  ],
};

export default t;
