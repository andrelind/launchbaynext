import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Barrage Rockets',
    limited: 0,
    xws: 'barragerockets',
    sides: [
      {
        title: 'Barrage Rockets',
        type: 'Missile',
        ability:
          'Attack ([Focus]): Spend 1 [Charge]. If the defender is in your [Bullseye Arc], you may spend 1 or more [Charge] to reroll that many attack dice.',
        slots: ['Missile', 'Missile'],
        charges: { value: 5, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/barragerockets.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/barragerockets.png',
      },
    ],
    cost: { value: 8 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Cluster Missiles',
    limited: 0,
    xws: 'clustermissiles',
    sides: [
      {
        title: 'Cluster Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After this attack, you may perform this attack as a bonus attack against a different target at range 0-1 of the defender, ignoring the [Lock] requirement.',
        slots: ['Missile'],
        charges: { value: 4, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/clustermissiles.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/clustermissiles.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 4, '4': 4, '5': 4, '6': 4 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Concussion Missiles',
    limited: 0,
    xws: 'concussionmissiles',
    sides: [
      {
        title: 'Concussion Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After this attack hits, each ship at range 0-1 of the defender exposes 1 of its damage cards.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/concussionmissiles.png',
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/concussionmissiles.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Homing Missiles',
    limited: 0,
    xws: 'homingmissiles',
    sides: [
      {
        title: 'Homing Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After you declare the defender, the defender may choose to suffer 1 [Hit] damage. If it does, skip the Attack and Defense Dice steps and the attack is treated as hitting.',
        slots: ['Missile'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/homingmissiles.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/homingmissiles.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ion Missiles',
    limited: 0,
    xws: 'ionmissiles',
    sides: [
      {
        title: 'Ion Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Missile'],
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ionmissiles.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ionmissiles.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Proton Rockets',
    limited: 0,
    xws: 'protonrockets',
    sides: [
      {
        title: 'Proton Rockets',
        type: 'Missile',
        ability: 'Attack ([Focus]): Spend 1 [Charge].',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/protonrockets.png',
        slots: ['Missile'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Bullseye Arc',
          value: 5,
          minrange: 1,
          maxrange: 2,
          ordnance: true,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/protonrockets.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Energy-Shell Charges',
    limited: 0,
    xws: 'energyshellcharges',
    sides: [
      {
        title: 'Energy-Shell Charges',
        type: 'Missile',
        ability:
          'Attack ([Calculate]): Spend 1 [Charge]. While you perform this attack, you may spend 1 calculate token to change 1 [Focus] result to a [Critical Hit] result. Action: Reload this card.',
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/energyshellcharges.png',
        slots: ['Missile'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/energyshellcharges.png',
      },
    ],
    restrictions: [
      { action: { type: 'Calculate', difficulty: 'White' } },
      { factions: ['Separatist Alliance'] },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Discord Missiles',
    limited: 3,
    xws: 'discordmissiles',
    sides: [
      {
        title: 'Discord Missiles',
        type: 'Missile',
        ability:
          "At the start of the Engagement Phase, you may spend 1 calculate token and 1 [Charge] to launch 1 buzz droid swarm using the [3 [Bank Left]], [3 [Straight]], or [3 [Bank Right]] template. This card's [Charge] cannot be recovered.",
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/discordmissiles.png',
        slots: ['Missile'],
        device: {
          name: 'Buzz Droid Swarm',
          type: 'Remote',
          effect:
            'After an enemy ship moves through or overlaps you, relocate to its front or rear guides (you are at range 0 of this ship). You cannot overlap an object this way. If you cannot be placed at either set of guides, you and that ship each suffer 1 [Hit] damage. Engagement Phase: At your initiative, each enemy ship at range 0 suffers 1 [Critical Hit] damage.',
          initiative: 0,
          stats: [
            { type: 'agility', value: 3 },
            { type: 'hull', value: 1 },
          ],
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/discordmissiles.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Diamond-Boron Missiles',
    limited: 1,
    xws: 'diamondboronmissiles',
    sides: [
      {
        title: 'Diamond-Boron Missiles',
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        ability:
          "Attack ([Lock]): Spend 1 [Charge]. After this attack hits, you may spend 1 [Charge]. If you do, each ship at range 0-1 of the defender with agility equal to or less than the defender's rolls 1 attack die and suffers 1 [Hit]/[Critical Hit] damage for each matching result.",
        charges: { value: 3, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/diamondboronmissiles.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/diamondboronmissiles.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Mag-Pulse Warheads',
    limited: 0,
    xws: 'magpulsewarheads',
    sides: [
      {
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, the defender suffers 1 [Critical Hit] damage and gains 1 deplete and 1 jam token. Then cancel all [Hit]/[Critical Hit] results.',
        attack: {
          arc: 'Front Arc',
          maxrange: 3,
          minrange: 1,
          ordnance: true,
          value: 3,
        },
        charges: { value: 2, recovers: 0 },
        title: 'Mag-Pulse Warheads',
        type: 'Missile',
        slots: ['Missile'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/magpulsewarheads.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/magpulsewarheads.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 4, '3': 5, '4': 5, '5': 5, '6': 5 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Electro-Chaff Missiles',
    limited: 2,
    xws: 'electrochaffmissiles',
    sides: [
      {
        ability:
          "During the System Phase, you may spend 1 [Charge] from this card to launch 1 electro-chaff cloud using the [3 [Bank Left]], [3 [Bank Right]], or [4 [Straight]] template. Then place 1 fuse marker on it. This card's [Charge] cannot be recovered.",
        charges: { value: 1, recovers: 0 },
        title: 'Electro-Chaff Missiles',
        type: 'Missile',
        slots: ['Missile', 'Device'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/electrochaffmissiles.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/electrochaffmissiles.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Multi-Missile Pods',
    limited: 0,
    xws: 'multimissilepods',
    sides: [
      {
        ability:
          'Attack ([Calculate] or [Lock]): Spend 1 [Charge]. If the defender is in your [Front Arc], you may spend 1 [Charge] to roll 1 additional attack die. If the defender is in your [Bullseye Arc], you may spend up to 2 [Charge] to roll that many additional attack dice instead.',
        attack: {
          arc: 'Full Front Arc',
          maxrange: 2,
          minrange: 1,
          ordnance: true,
          value: 2,
        },
        charges: { value: 5, recovers: 0 },
        title: 'Multi-Missile Pods',
        type: 'Missile',
        slots: ['Missile', 'Missile'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/multimissilepods.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/multimissilepods.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'XX-23 S-Thread Tracers',
    limited: 2,
    xws: 'xx23sthreadtracers',
    sides: [
      {
        ability:
          'Attack ([Focus], [Calculate], or [Lock]): Spend 1 [Charge]. If this attack hits, each friendly ship at range 1-3 of the defender may acquire a lock on the defender. Then cancel all dice results.',
        attack: {
          arc: 'Front Arc',
          maxrange: 3,
          minrange: 1,
          ordnance: true,
          value: 3,
        },
        charges: { value: 2, recovers: 0 },
        title: 'XX-23 S-Thread Tracers',
        type: 'Missile',
        slots: ['Missile'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/xx23sthreadtracers.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/xx23sthreadtracers.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Seeker Missiles',
    limited: 0,
    xws: 'seekermissiles-swz103',
    sides: [
      {
        ability:
          'Attack ([Lock]): During the Modify Attack Dice step, you may spend up to 2 additional [Charge]. Change one [Focus] result to a [Hit] result for each [Charge] spent in this way.',
        attack: {
          arc: 'Front Arc',
          maxrange: 3,
          minrange: 2,
          ordnance: true,
          value: 3,
        },
        charges: { value: 4, recovers: 0 },
        title: 'Seeker Missiles',
        type: 'Missile',
        slots: ['Missile'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 2,
    xws: 'seekermissiles-rsl',
    sides: [
      {
        title: 'Seeker Missiles',
        type: 'Missile',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. After this attack misses, if 1 or more [Hit]/[Critical Hit] results were neutralized, the defender gains 1 strain token.',
        slots: ['Missile'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/seekermissiles-rsl.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/seekermissiles-rsl.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
