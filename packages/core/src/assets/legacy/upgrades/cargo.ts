import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Adaptive Shields',
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
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/adaptiveshields.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/adaptiveshields.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Boosted Scanners',
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
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/boostedscanners.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/boostedscanners.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Optimized Power Core',
    limited: 0,
    xws: 'optimizedpowercore',
    sides: [
      {
        ability: 'After you execute a blue maneuver, recover 1 [Energy].',
        title: 'Optimized Power Core',
        type: 'Cargo',
        slots: ['Cargo'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/optimizedpowercore.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/optimizedpowercore.png',
      },
    ],
    cost: { value: 7 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Tibanna Reserves',
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
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tibannareserves.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tibannareserves.png',
      },
    ],
    cost: { value: 3 },
    standard: false,
    wildspace: false,
    epic: true,
  },
];

export default t;
