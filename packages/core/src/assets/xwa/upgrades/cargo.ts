import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'adaptiveshields',
    sides: [
      {
        ability:
          'While another friendly ship at range 0-1 defends, if it is a smaller size than you, you may spend 1 shield or 2 [Energy] to cancel 1 [Hit] or [Critical Hit] result.',
        title: 'Adaptive Shields',
        type: 'Cargo',
        slots: ['Cargo'],
        image:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/adaptiveshields.png',
        artwork:
          'https://infinitearenas.com/xw2/images/upgrades/adaptiveshields.png',
      },
    ],
    cost: { value: 5 },
    standard: false,
    epic: true,
    extended: false,
  },
  {
    limited: 0,
    xws: 'boostedscanners',
    sides: [
      {
        ability:
          'While you lock, coordinate, or jam, you may spend up to 3 [Energy] to increase the range at which you can choose an object by 1 per [Energy] spent this way, to a maximum of range 5.',
        title: 'Boosted Scanners',
        type: 'Cargo',
        slots: ['Cargo'],
        image:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/boostedscanners.png',
        artwork:
          'https://infinitearenas.com/xw2/images/upgrades/boostedscanners.png',
      },
    ],
    cost: { value: 7 },
    standard: false,
    epic: true,
    extended: false,
  },
  {
    limited: 0,
    xws: 'optimizedpowercore',
    sides: [
      {
        ability: 'After you execute a blue maneuver, recover 1 [Energy].',
        title: 'Optimized Power Core',
        type: 'Cargo',
        slots: ['Cargo'],
        image:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/optimizedpowercore.png',
        artwork:
          'https://infinitearenas.com/xw2/images/upgrades/optimizedpowercore.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
    extended: false,
  },
  {
    limited: 0,
    xws: 'tibannareserves',
    sides: [
      {
        ability: 'Action: Spend 1 [Charge] to recover 2 [Energy].',
        title: 'Tibanna Reserves',
        type: 'Cargo',
        slots: ['Cargo'],
        charges: { value: 3, recovers: 0 },
        image:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tibannareserves.png',
        artwork:
          'https://infinitearenas.com/xw2/images/upgrades/tibannareserves.png',
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
    extended: false,
  },
];

export default t;
