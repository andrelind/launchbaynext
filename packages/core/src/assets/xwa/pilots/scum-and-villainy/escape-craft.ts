import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Escape Craft',
  xws: 'escapecraft',
  ffg: 85,
  size: 'Small',
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
    '3BW',
    '3FW',
    '3NW',
    '3KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Coordinate' },
  ],
  ability: {
    name: 'Copilot',
    text: 'While you are docked, your carrier ship has your pilot ability in addition to its own.',
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_EscapeShuttle.png',
  pilots: [
    {
      name: 'Autopilot Drone',
      caption: 'Set to Blow',
      initiative: 1,
      limited: 1,
      cost: 1,
      xws: 'autopilotdrone',
      text: "Sometimes, manufacturer's warnings are made to be broken.",
      charges: { value: 3, recovers: 0 },
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      shipAbility: {
        name: 'Rigged Energy Cells',
        text: 'During the System Phase, if you are not docked, lose 1 [Charge]. At the end of the Activation Phase, if you have 0 [Charge], you are destroyed. Before you are removed, each ship at range 0-1 suffers 1 [Critical Hit] damage.',
      },
      slots: [],
      ffg: 229,
      standard: true,
      epic: true,
      loadout: 0,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/autopilotdrone.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/autopilotdrone.png',
      keywords: ['Droid'],
    },
    {
      name: 'L3-37',
      caption: 'Droid Revolutionary',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'l337-escapecraft',
      ability:
        'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      slots: ['Talent', 'Crew', 'Modification'],
      ffg: 228,
      standard: true,
      epic: true,
      keywords: ['Droid'],
      loadout: 13,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/l337-escapecraft.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/l337-escapecraft.png',
    },
    {
      name: 'Lando Calrissian',
      caption: 'Smooth-talking Gambler',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'landocalrissian-escapecraft',
      ability:
        'After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results.',
      slots: ['Talent', 'Crew', 'Modification'],
      ffg: 226,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/landocalrissian-escapecraft.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/landocalrissian-escapecraft.png',
    },
    {
      name: 'Outer Rim Pioneer',
      caption: 'Skillful Outlaw',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'outerrimpioneer',
      ability:
        'Friendly ships at range 0-1 can perform attacks at range 0 of obstacles.',
      slots: ['Talent', 'Crew', 'Modification'],
      ffg: 227,
      standard: true,
      epic: true,
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/outerrimpioneer.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/outerrimpioneer.png',
    },
  ],
};

export default t;
