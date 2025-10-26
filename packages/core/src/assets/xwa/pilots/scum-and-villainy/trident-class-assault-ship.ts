import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Trident-class Assault Ship',
  xws: 'tridentclassassaultship',
  size: 'Huge',
  dial: [],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'hull', value: 10 },
    { type: 'shields', value: 4, recovers: 1 },
    { type: 'energy', value: 3, recovers: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'Red' },
    { type: 'Reinforce', difficulty: 'Red' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Coordinate', difficulty: 'Red' },
  ],
  pilots: [
    {
      xws: 'lawlesspirates',
      name: 'Lawless Pirates',
      cost: 26,
      limited: 0,
      initiative: 8,
      slots: [
        'Command',
        'Torpedo',
        'Hardpoint',
        'Hardpoint',
        'Crew',
        'Crew',
        'Gunner',
        'Team',
        'Cargo',
        'Title',
      ],
      standard: false,
      extended: false,
      epic: true,
      text: 'The Separatist Alliance has close ties with certain mercenaries and criminal groups and, as the war rages on, its technology sometimes finds its way into unsavory hands.',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lawlesspirates.png',
      image: 'https://infinitearenas.com/xw2/images/pilots/lawlesspirates.png',
      ffg: 1068,
      loadout: 45,
    },
    {
      name: 'Sorc Tormo',
      initiative: 8,
      cost: 19,
      limited: 1,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/sorctormo-epicsl.png',
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/sorctormo-epicsl.png',
      standard: true,
      extended: true,
      epic: true,
      engagement: 0,
      xws: 'sorctormo-epicsl',
      caption: "Nautolan's Revenge",
      ffg: 1117,
      loadout: 0,
      slots: [],
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Trident.png',
};

export default t;
