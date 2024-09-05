import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Ion Cannon Battery',
    limited: 0,
    xws: 'ioncannonbattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. If this attack hits, the defender suffers 1 [Critical Hit] damage, and all [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        title: 'Ion Cannon Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        attack: {
          arc: 'Single Turret Arc',
          value: 4,
          minrange: 2,
          maxrange: 4,
          ordnance: false,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ioncannonbattery.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ioncannonbattery.png',
      },
      {
        ability:
          'Offline: After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Ion Cannon Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ioncannonbattery-siedb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ioncannonbattery-sideb.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Ordnance Tubes',
    limited: 0,
    xws: 'ordnancetubes',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You can perform [Torpedo] and [Missile] attacks only as bonus attacks. You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Full Front Arc]. Bonus Attack: Perform a [Torpedo] attack. Bonus Attack: Perform a [Missile] attack.',
        title: 'Ordnance Tubes',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ordnancetubes.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ordnancetubes.png',
      },
      {
        ability:
          'Offline: You must treat the [Front Arc] requirement of your equipped [Torpedo] and [Missile] upgrades as [Bullseye Arc]. Action: Spend 2 [Energy] to flip this card.',
        title: 'Ordnance Tubes (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ordnancetubes-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ordnancetubes-sideb.png',
      },
    ],
    cost: { value: 1 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Point-Defense Battery',
    limited: 0,
    xws: 'pointdefensebattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy].',
        title: 'Point-Defense Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        attack: {
          arc: 'Double Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: false,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/pointdefensebattery.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/pointdefensebattery.png',
      },
      {
        ability:
          'Offline: After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Point-Defense Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/pointdefensebattery-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/pointdefensebattery-sideb.png',
      },
    ],
    cost: { value: 8 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Targeting Battery',
    limited: 0,
    xws: 'targetingbattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Spend 1 [Energy]. After you perform this attack, you may acquire a lock on the defender.',
        title: 'Targeting Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 2,
          maxrange: 5,
          ordnance: false,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/targetingbattery.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/targetingbattery.png',
      },
      {
        ability:
          'Offline: After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Targeting Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/targetingbattery-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/targetingbattery-sideb.png',
      },
    ],
    cost: { value: 5 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Turbolaser Battery',
    limited: 0,
    xws: 'turbolaserbattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack ([Lock]): Spend 3 [Energy]. If this attack hits, add 3 [Hit] results.',
        title: 'Turbolaser Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        grants: [
          { action: { type: 'Rotate Arc', difficulty: 'White' }, value: 1 },
        ],
        attack: {
          arc: 'Single Turret Arc',
          value: 3,
          minrange: 3,
          maxrange: 5,
          ordnance: false,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/turbolaserbattery.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/turbolaserbattery.png',
      },
      {
        ability:
          'Offline: After you engage, you may spend 2 [Energy] to flip this card.',
        title: 'Turbolaser Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/turbolaserbattery-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/turbolaserbattery-sideb.png',
      },
    ],
    cost: { value: 10 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Tractor Tentacles',
    limited: 0,
    xws: 'tractortentacles',
    restrictions: [
      { baseSizes: ['Huge'] },
      { chassis: ['tridentclassassaultship'] },
    ],
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy]. Bonus Attack: Spend 1 [Energy].',
        title: 'Tractor Tentacles',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        attack: {
          arc: 'Rear Arc',
          value: 2,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tractortentacles.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tractortentacles.png',
      },
      {
        ability: 'Action: Spend 1 [Energy] to repair this card.',
        title: 'Tractor Tentacles (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tractortentacles-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tractortentacles-sideb.png',
      },
    ],
    cost: { value: 0 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Proton Cannon Battery',
    limited: 0,
    xws: 'protoncannonbattery',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Bonus Attack: Change 1 [Hit] result to a [Critical Hit] result. Bonus Attack: Spend 1 [Energy]. Change 1 [Hit] result to a [Critical Hit] result.',
        title: 'Proton Cannon Battery',
        type: 'Hardpoint',
        slots: ['Hardpoint', 'Cargo'],
        attack: {
          arc: 'Bullseye Arc',
          value: 4,
          minrange: 2,
          maxrange: 5,
          ordnance: false,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/protoncannonbattery.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/protoncannonbattery.png',
      },
      {
        ability: 'Action: Spend 1 [Energy] to repair this card.',
        title: 'Proton Cannon Battery (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint', 'Cargo'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/protoncannonbattery-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/protoncannonbattery-sideb.png',
      },
    ],
    cost: { value: 10 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Enhanced Propulsion',
    limited: 0,
    xws: 'enhancedpropulsion',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. At the start of the End Phase, you may spend 2 [Energy] to execute a white [2 [Straight]], [1 [Bank Left]], or [1 [Bank Right]] maneuver.',
        title: 'Enhanced Propulsion',
        type: 'Hardpoint',
        slots: ['Hardpoint', 'Cargo'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/enhancedpropulsion.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/enhancedpropulsion.png',
      },
      {
        ability: 'Action: Spend 1 [Energy] to repair this card.',
        title: 'Enhanced Propulsion (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint', 'Cargo'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/enhancedpropulsion-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/enhancedpropulsion-sideb.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { baseSizes: ['Huge'] },
      { chassis: ['tridentclassassaultship'] },
    ],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Drill Beak',
    limited: 0,
    xws: 'drillbeak',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You can perform this attack at range 0. Bonus Attack: Spend 1 [Energy]. If the attack range is 0, change all [Hit] results to [Critical Hit] results.',
        title: 'Drill Beak',
        type: 'Hardpoint',
        slots: ['Hardpoint', 'Cargo'],
        attack: {
          arc: 'Rear Arc',
          value: 3,
          minrange: 0,
          maxrange: 1,
          ordnance: true,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/drillbeak.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/drillbeak.png',
      },
      {
        ability: 'Action: Spend 1 [Energy] to repair this card.',
        title: 'Drill Beak (Offline)',
        type: 'Hardpoint',
        slots: ['Hardpoint', 'Cargo'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/drillbeak-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/drillbeak-sideb.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { baseSizes: ['Huge'] },
      { chassis: ['tridentclassassaultship'] },
    ],
    standard: false,
    wildspace: false,
    epic: true,
  },
];

export default t;
