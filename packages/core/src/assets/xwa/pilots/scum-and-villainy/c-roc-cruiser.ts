import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'C-ROC Cruiser',
  xws: 'croccruiser',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BW',
    '1NW',
    '1FB',
    '2BW',
    '2NW',
    '2FB',
    '3NR',
    '3FW',
    '3BR',
    '4FR',
    '5FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 0 },
    { type: 'hull', value: 12 },
    { type: 'shields', value: 4, recovers: 1 },
    { type: 'energy', value: 4, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'Red', type: 'Coordinate' },
    { difficulty: 'White', type: 'Jam' },
  ],
  ability: {
    name: 'Overdrive Burners',
    text: 'While you defend, if your revealed maneuver is speed 3-5, roll 1 additional defense die.',
  },
  pilots: [
    {
      name: 'Syndicate Smugglers',
      text: 'Vessels like the C-ROC Cruiser allow criminal operations across the Outer Rim to move massive amounts of illicit materials, or project power that can bully small colonies into compliance.',
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 10,
      xws: 'syndicatesmugglers',
      slots: [
        'Command',
        'Hardpoint',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Device',
        'Illicit',
        'Title',
        'Configuration',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 713,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/syndicatesmugglers.png',
      image:
        'https://infinitearenas.com/xw2/images/pilots/syndicatesmugglers.png',
    },
    {
      name: 'Cikatro Vizago',
      initiative: 7,
      cost: 8,
      loadout: 0,
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/cikatrovizago-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/cikatrovizago-epicsl.png',
      standard: true,
      extended: true,
      epic: true,
      engagement: 0,
      xws: 'cikatrovizago-epicsl',
      caption: 'Broken Horn',
    },
  ],
  ffg: 82,
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_C-ROC.png',
};

export default t;
