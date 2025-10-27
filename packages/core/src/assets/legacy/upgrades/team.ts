import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Bombardment Specialists',
    limited: 0,
    xws: 'bombardmentspecialists',
    sides: [
      {
        ability:
          'While you perform an attack, you may spend 1 calculate token to increase or decrease the range requirement by 1, to a limit of 0-5.',
        title: 'Bombardment Specialists',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bombardmentspecialists.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bombardmentspecialists.png',
      },
    ],
    cost: { value: 8 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Comms Team',
    limited: 0,
    xws: 'commsteam',
    sides: [
      {
        ability:
          'After you perform a [Coordinate] action, you may spend up to 2 [Energy] to coordinate that many additional ships at range 0-1 of the ship you coordinated.',
        title: 'Comms Team',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Coordinate',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Jam',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/commsteam.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/commsteam.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Damage Control Team',
    limited: 0,
    xws: 'damagecontrolteam',
    sides: [
      {
        ability:
          'Before you engage, you may spend 1 or more [Energy] to flip that many of your Offline upgrade cards. Action: Spend 1 or more [Energy] to repair that many of your faceup Ship damage cards.',
        title: 'Damage Control Team',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Reinforce',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/damagecontrolteam.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/damagecontrolteam.png',
      },
    ],
    cost: { value: 3 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Gunnery Specialists',
    limited: 0,
    xws: 'gunneryspecialists',
    sides: [
      {
        ability:
          'While you perform a primary or [Hardpoint] attack, you may spend 1 or more [Energy] to reroll that many attack dice.',
        title: 'Gunnery Specialists',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/gunneryspecialists.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/gunneryspecialists.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'IG-RM Droids',
    limited: 0,
    xws: 'igrmdroids',
    sides: [
      {
        ability:
          'While you perform an attack, if you are calculating, you may change 1 [Hit] result to a [Critical Hit] result.',
        title: 'IG-RM Droids',
        type: 'Team',
        slots: ['Team'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/igrmdroids.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/igrmdroids.png',
      },
    ],
    cost: { value: 2 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Ordnance Team',
    limited: 0,
    xws: 'ordnanceteam',
    sides: [
      {
        ability:
          'While you perform a [Reload] action, you may spend up to 3 [Energy] to reload that many additional [Charge] on your equipped [Missile]/[Torpedo] upgrades. After you perform a [Reload] action, you may spend 1 [Energy] to remove 1 disarm token.',
        title: 'Ordnance Team',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Reload',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ordnanceteam.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ordnanceteam.png',
      },
    ],
    cost: { value: 2 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Sensor Experts',
    limited: 0,
    xws: 'sensorexperts',
    sides: [
      {
        ability:
          'You can maintain up to 3 locks on different objects. After you perform a [Lock] action, you may spend up to 2 [Energy] to acquire a lock on that many other objects at range 0-1 of the object you locked, ignoring range restrictions.',
        title: 'Sensor Experts',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sensorexperts.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sensorexperts.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Tractor Technicians',
    limited: 0,
    xws: 'tractortechnicians',
    sides: [
      {
        ability:
          'During the End Phase, each other ship at range 0-1 cannot remove its tractor tokens. Before a tractored enemy ship at range 0-1 reveals its dial, you may spend 1 [Energy]. if you do, while that ship executes its maneuver this activation, it reduces the speed of that maneuver by 1, to a minimum of 1.',
        title: 'Tractor Technicians',
        type: 'Team',
        slots: ['Team'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tractortechnicians.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tractortechnicians.png',
      },
    ],
    cost: { value: 1 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Corsair Crew',
    limited: 0,
    xws: 'corsaircrew',
    sides: [
      {
        title: 'Corsair Crew',
        type: 'Team',
        text: 'While you perform an attack against a standard ship, you may spend 1 [Hit] result. If you do, the defender gains 1 deplete token.',
        slots: ['Team', 'Gunner'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/corsaircrew.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/corsaircrew.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Droid Crew',
    limited: 0,
    xws: 'droidcrew',
    sides: [
      {
        ability:
          'While you perform a white [Focus] action, treat it as red instead. At the start of the End Phase, repair all of your faceup Crew damage cards.',
        title: 'Droid Crew',
        type: 'Team',
        slots: ['Team'],
        grants: [
          {
            action: {
              type: 'Calculate',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/droidcrew.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/droidcrew.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['separatistalliance'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
];

export default t;
