import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Advanced Sensors',
    limited: 0,
    xws: 'advancedsensors',
    sides: [
      {
        title: 'Advanced Sensors',
        type: 'Sensor',
        ability:
          'After you reveal your dial, you may perform 1 action. If you do, you cannot perform another action during your activation.',
        slots: ['Sensor'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/advancedsensors.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/advancedsensors.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 13, Medium: 11, Large: 9, Huge: 0 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Collision Detector',
    limited: 0,
    xws: 'collisiondetector',
    sides: [
      {
        title: 'Collision Detector',
        type: 'Sensor',
        ability:
          'While you boost or barrel roll, you can move through and overlap obstacles. After you move through or overlap an obstacle, you may spend 1 [Charge] to ignore its effects until the end of the round.',
        slots: ['Sensor'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/collisiondetector.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/collisiondetector.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Fire-Control System',
    limited: 0,
    xws: 'firecontrolsystem',
    sides: [
      {
        title: 'Fire-Control System',
        type: 'Sensor',
        ability:
          'While you perform an attack, if you have a lock on the defender, you may reroll 1 attack die. If you do, you cannot spend your lock during this attack.',
        slots: ['Sensor'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/firecontrolsystem.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/firecontrolsystem.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Trajectory Simulator',
    limited: 0,
    xws: 'trajectorysimulator',
    sides: [
      {
        title: 'Trajectory Simulator',
        type: 'Sensor',
        ability:
          'During the System Phase, if you would drop or launch a bomb, you may launch it using the [5 [Straight]] template instead.',
        slots: ['Sensor'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/trajectorysimulator.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/trajectorysimulator.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 5, Medium: 4, Large: 3, Huge: 3 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Passive Sensors',
    limited: 0,
    xws: 'passivesensors',
    sides: [
      {
        ability:
          'Action: Spend 1 [Charge]. You can only perform this action in your Perform Action step. While your [Charge] is inactive, you cannot be coordinated. Before you engage, if your [Charge] is inactive, you may perform a [Calculate] or [Lock] action.',
        title: 'Passive Sensors',
        type: 'Sensor',
        slots: ['Sensor'],
        charges: { value: 1, recovers: 1 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/passivesensors.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/passivesensors.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 4,
        '1': 4,
        '2': 4,
        '3': 4,
        '4': 5,
        '5': 6,
        '6': 7,
        '7': 4,
        '8': 4,
      },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
