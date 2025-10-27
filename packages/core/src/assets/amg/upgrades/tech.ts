import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
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
          'https://infinitearenas.com/xw2/images/upgrades/advancedoptics.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/advancedoptics.png',
        ffg: 460,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'ferrospherepaint',
    sides: [
      {
        title: 'Ferrosphere Paint',
        type: 'Tech',
        ability:
          "After an enemy ship locks you, if you are not in that ship's [Bullseye Arc], that ship gains 1 stress token unless it chooses to break its lock.",
        slots: ['Tech'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ferrospherepaint.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ferrospherepaint.png',
        ffg: 488,
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
          'https://infinitearenas.com/xw2/images/upgrades/hyperspacetrackingdata.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hyperspacetrackingdata.png',
        ffg: 461,
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['firstorder'] }, { baseSizes: ['Large'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'primedthrusters',
    sides: [
      {
        title: 'Primed Thrusters',
        type: 'Tech',
        ability:
          'While you have 2 or fewer stress tokens, you can perform [Barrel Roll] and [Boost] actions even while stressed.',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/primedthrusters.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/primedthrusters.png',
        slots: ['Tech'],
        ffg: 463,
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'targetingsynchronizer',
    sides: [
      {
        title: 'Targeting Synchronizer',
        type: 'Tech',
        ability:
          'While a friendly ship at range 1-2 performs an attack against a target you have locked, that ship ignores the [Lock] attack requirement.',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/targetingsynchronizer.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/targetingsynchronizer.png',
        slots: ['Tech'],
        ffg: 464,
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
          'https://infinitearenas.com/xw2/images/upgrades/patternanalyzer.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/patternanalyzer.png',
        ffg: 462,
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
          'https://infinitearenas.com/xw2/images/upgrades/biohexacryptcodes.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/biohexacryptcodes.png',
        ffg: 491,
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['firstorder'] }, { action: { type: 'Lock' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
        ffg: 654,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/deuteriumpowercells.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/deuteriumpowercells.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    epic: true,
    restrictions: [{ factions: ['firstorder'] }],
    extended: true,
  },
  {
    xws: 'automatedtargetpriority',
    limited: 0,
    cost: { value: 1 },
    sides: [
      {
        ffg: 671,
        title: 'Automated Target Priority',
        type: 'Tech',
        slots: ['Tech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/automatedtargetpriority.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/automatedtargetpriority.png',
        ability:
          'While you perform an attack, you must choose a defender at the closest valid attack range. After you perform an attack that missed, place 1 calculate token on this card. Before you engage, you may remove 1 calculate token from this card to gain a matching token.',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ initiative: { max: 3 } }],
    extended: true,
  },
  {
    xws: 'sensorbuoysuite',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ffg: 672,
        title: 'Sensor Buoy Suite',
        type: 'Tech',
        slots: ['Tech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sensorbuoysuite.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/sensorbuoysuite.png',
        ability:
          'Setup: Before placing forces, place 2 sensor buoy remotes beyond range 2 of any edge. Before you engage, you may acquire a lock on a ship at range 0-1 of a friendly sensor buoy, ignoring range restrictions.',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { baseSizes: ['Medium', 'Large'] },
      { factions: ['firstorder'] },
    ],
    extended: true,
  },
  {
    limited: 0,
    xws: 'sensorscramblers',
    sides: [
      {
        title: 'Sensor Scramblers',
        type: 'Tech',
        ability:
          'Setup: Gain 1 cloak token. While you are cloaked, other ships cannot acquire locks on you. During the End Phase, if you are cloaked and there is an enemy ship at range 0-3, you must decloak. If you do and that decloak fails, lose 1 cloak token.',
        slots: ['Tech'],
        image:
          'https://infinitearenas.com/xw2/images/upgrades/sensorscramblers.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sensorscramblers.png',
        ffg: 939,
      },
    ],
    cost: { value: 1 },
    restrictions: [
      { chassis: ['tiewiwhispermodifiedinterceptor', 'tievnsilencer'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
];

export default t;
