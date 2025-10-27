import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Advanced Optics',
    limited: 0,
    xws: 'advancedoptics',
    sides: [
      {
        title: 'Advanced Optics',
        type: 'Tech',
        ability:
          'While you perform an attack, you may spend 1 focus token to change 1 of your blank results to a [Hit] result.',
        slots: ['Tech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/advancedoptics.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/advancedoptics.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ferrosphere Paint',
    limited: 0,
    xws: 'ferrospherepaint',
    sides: [
      {
        title: 'Ferrosphere Paint',
        type: 'Tech',
        ability:
          "After an enemy ship locks you, if you are not in that ship's [Bullseye Arc], that ship gains 1 stress token.",
        slots: ['Tech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ferrospherepaint.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ferrospherepaint.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hyperspace Tracking Data',
    limited: 0,
    xws: 'hyperspacetrackingdata',
    sides: [
      {
        title: 'Hyperspace Tracking Data',
        type: 'Tech',
        ability:
          'Setup: Before placing forces, you may choose a number between 0 and 6. Treat your initiative as the chosen value during Setup. After Setup, assign 1 focus or evade token to each friendly ship at range 0-2.',
        slots: ['Tech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hyperspacetrackingdata.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hyperspacetrackingdata.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['firstorder'] }, { baseSizes: ['Large'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Primed Thrusters',
    limited: 0,
    xws: 'primedthrusters',
    sides: [
      {
        title: 'Primed Thrusters',
        type: 'Tech',
        ability:
          'While you have 2 or fewer stress tokens, you can perform [Barrel Roll] and [Boost] actions even while stressed.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/primedthrusters.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/primedthrusters.png',
        slots: ['Tech'],
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 5, '2': 6, '3': 7, '4': 8, '5': 9, '6': 10 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Targeting Synchronizer',
    limited: 0,
    xws: 'targetingsynchronizer',
    sides: [
      {
        title: 'Targeting Synchronizer',
        type: 'Tech',
        ability:
          'While a friendly ship at range 1-2 performs an attack against a target you have locked, that ship ignores the [Lock] attack requirement.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/targetingsynchronizer.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/targetingsynchronizer.png',
        slots: ['Tech'],
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Pattern Analyzer',
    limited: 0,
    xws: 'patternanalyzer',
    sides: [
      {
        title: 'Pattern Analyzer',
        type: 'Tech',
        ability:
          'While you fully execute a red maneuver, before the Check Difficulty step, you may perform 1 action.',
        slots: ['Tech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/patternanalyzer.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/patternanalyzer.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Biohexacrypt Codes',
    limited: 0,
    xws: 'biohexacryptcodes',
    sides: [
      {
        title: 'Biohexacrypt Codes',
        type: 'Tech',
        ability:
          'While you coordinate or jam, if you have a lock on a ship, you may spend that lock to choose that ship, ignoring range restrictions.',
        slots: ['Tech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/biohexacryptcodes.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/biohexacryptcodes.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['firstorder'] }, { action: { type: 'Lock' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Deuterium Power Cells',
    limited: 0,
    xws: 'deuteriumpowercells',
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield. Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 [Charge] to gain 1 stress token instead.',
        charges: { value: 2, recovers: 0 },
        title: 'Deuterium Power Cells',
        type: 'Tech',
        slots: ['Tech', 'Modification'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/deuteriumpowercells.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/deuteriumpowercells.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 4, '1': 5, '2': 6, '3': 7 } },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Automated Target Priority',
    limited: 0,
    xws: 'automatedtargetpriority',
    sides: [
      {
        title: 'Automated Target Priority',
        type: 'Tech',
        slots: ['Tech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/automatedtargetpriority.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/automatedtargetpriority.png',
        ability:
          'While you perform an attack, you must choose a defender at the closest valid attack range. After you perform an attack that missed, place 1 calculate token on this card. Before you engage, you may remove 1 calculate token from this card to gain a matching token.',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Sensor Buoy Suite',
    limited: 1,
    xws: 'sensorbuoysuite',
    sides: [
      {
        title: 'Sensor Buoy Suite',
        type: 'Tech',
        slots: ['Tech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sensorbuoysuite.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sensorbuoysuite.png',
        ability:
          'Setup: Before placing forces, place 2 sensor buoy remotes beyond range 2 of any edge. Before you engage, you may acquire a lock on a ship at range 0-1 of a friendly sensor buoy, ignoring range restrictions.',
        device: {
          name: 'Sensor Buoy',
          type: 'Remote',
          initiative: 0,
          stats: [
            { type: 'agility', value: 3 },
            { type: 'hull', value: 2 },
          ],
          image: 'https://infinitearenas.com/xw2/images/remotes/sensorbuoy.png',
          effect:
            'First Order sensor buoys are often placed to warn of enemies approaching their hidden fortresses.',
        },
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['firstorder'] },
      { baseSizes: ['Medium', 'Large'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Sensor Scramblers',
    limited: 0,
    xws: 'sensorscramblers',
    sides: [
      {
        title: 'Sensor Scramblers',
        type: 'Tech',
        ability:
          'Setup: Gain 1 cloak token. While you are cloaked, other ships cannot acquire locks on you. During the End Phase, if you are cloaked and there is an enemy ship at range 0-3, you must decloak. If you do and that decloak fails, lose 1 cloak token.',
        slots: ['Tech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sensorscramblers.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sensorscramblers.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { chassis: ['tiewiwhispermodifiedinterceptor', 'tievnsilencer'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
