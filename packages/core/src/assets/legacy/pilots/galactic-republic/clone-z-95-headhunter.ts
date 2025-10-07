import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Clone Z-95 Headhunter',
  xws: 'clonez95headhunter',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
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
  ],
  dialCodes: ['Z95'],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_CloneZ95Headhunter.png',
  pilots: [
    {
      name: '“Killer”',
      caption: 'Dependable Closer',
      initiative: 2,
      limited: 1,
      cost: 25,
      xws: 'killer',
      ability:
        'While you perform an attack, if the defender has 2 or fewer hull remaining, you may roll 1 additional attack die. If you do, gain 1 deplete token after rolling attack dice.',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/killer.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/killer.png',
      slots: ['Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 998,
    },
    {
      name: '“Drift”',
      caption: 'CT-1020',
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'drift',
      ability:
        'While a friendly ship at range 0-1 performs an attack, if you have exactly 1 non-lock red token or exactly 1 orange token, that ship may reroll 1 attack die.',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/drift.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/drift.png',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 999,
    },
    {
      name: '“Boost”',
      caption: 'CT-4860',
      initiative: 3,
      limited: 1,
      cost: 25,
      xws: 'boost',
      ability:
        'At the start of the Engagement Phase, if there is a friendly ship at range 0-1 whose revealed maneuver is blue, you may perform a [Boost] action.',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/boost.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/boost.png',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1000,
    },
    {
      name: '“Stub”',
      caption: 'Scrappy Flier',
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'stub',
      ability:
        'While you defend, if the speed of your revealed maneuver is even, roll 1 additional defende die. While you perform a primary attack, if the speed of your revealed maneuver is odd, roll 1 additional attack die.',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/stub.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/stub.png',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1001,
    },
    {
      name: '“Knack”',
      caption: 'Incautious Instructor',
      initiative: 5,
      limited: 1,
      cost: 26,
      xws: 'knack',
      ability:
        'After you are destroyed, you may choose a friendly non-limited ship and assign 1 of your equipped [Talent] upgrades to it. End of Game: Return all [Talent] upgrades to their original ships.',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/knack.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/knack.png',
      slots: ['Talent', 'Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1002,
    },
    {
      name: '“Hawk”',
      caption: 'Valkyrie 2929',
      initiative: 4,
      limited: 1,
      cost: 25,
      xws: 'hawk-clonez95headhunter',
      ability:
        'At the start of the end phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/hawk-clonez95headhunter.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/hawk-clonez95headhunter.png',
      slots: ['Talent', 'Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1003,
    },
    {
      name: '7th Sky Corps Pilot',
      initiative: 2,
      limited: 0,
      cost: 22,
      xws: '7thskycorpspilot',
      text: '',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/7thskycorpspilot.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/7thskycorpspilot.png',
      slots: ['Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1004,
    },
    {
      name: 'Reaper Squadron Scout',
      initiative: 3,
      limited: 0,
      cost: 24,
      xws: 'reapersquadronscout',
      text: "Despite the Clone Z-95's unglamorous reputation, Reaper Squadron has become legendary for their skill with this fighter in far-flung engagements, such as the skirmish over Castilon.",
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/reapersquadronscout.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/reapersquadronscout.png',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1005,
    },
    {
      name: '“Slider”',
      caption: 'Evasive Aviator',
      initiative: 4,
      limited: 1,
      cost: 26,
      xws: 'slider',
      ability:
        'When you reveal a [2 [Bank Left]) or [2 [Bank Right]) maneuver, you may spend 2 [Charge] to execute it as a sideslip.',
      charges: { value: 2, recovers: 1 },
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/slider.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/slider.png',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1006,
    },
    {
      name: '“Warthog”',
      caption: 'Veteran of Kadavo',
      initiative: 3,
      limited: 1,
      cost: 29,
      xws: 'warthog-clonez95headhunter',
      ability:
        'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
      shipAbility: {
        name: 'Versatile Frame',
        text: 'You can equip 1 [Torpedo] or [Missile] upgrade. While your revealed maneuver is blue, add white [Boost] to your action bar.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/warthog-clonez95headhunter.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/warthog-clonez95headhunter.png',
      slots: ['Talent', 'Sensor', 'Modification'],
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Clone'],
      ffg: 1007,
    },
  ],
};

export default t;
