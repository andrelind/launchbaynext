import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Cloaking Device',
    limited: 1,
    xws: 'cloakingdevice',
    sides: [
      {
        title: 'Cloaking Device',
        type: 'Illicit',
        ability:
          'Action: Spend 1 [Charge] to perform a [Cloak] action. At the start of the Planning Phase, roll 1 attack die. On a [Focus] result, decloak or discard your cloak token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/cloakingdevice.png',
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/cloakingdevice.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Contraband Cybernetics',
    limited: 0,
    xws: 'contrabandcybernetics',
    sides: [
      {
        title: 'Contraband Cybernetics',
        type: 'Illicit',
        ability:
          'Before you activate, you may spend 1 [Charge]. If you do, until the end of the round, you can perform actions and execute red maneuvers, even while stressed.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/contrabandcybernetics.png',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/contrabandcybernetics.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: "Deadman's Switch",
    limited: 0,
    xws: 'deadmansswitch',
    sides: [
      {
        title: "Deadman's Switch",
        type: 'Illicit',
        ability:
          'After you are destroyed, each other ship at range 0-1 suffers 1 [Hit] damage.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/deadmansswitch.png',
        slots: ['Illicit'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/deadmansswitch.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Feedback Array',
    limited: 0,
    xws: 'feedbackarray',
    sides: [
      {
        title: 'Feedback Array',
        type: 'Illicit',
        ability:
          'Before you engage, you may gain 1 ion token and 1 disarm token. If you do, each ship at range 0 suffers 1 [Hit] damage.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/feedbackarray.png',
        slots: ['Illicit'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/feedbackarray.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Inertial Dampeners',
    limited: 0,
    xws: 'inertialdampeners',
    sides: [
      {
        title: 'Inertial Dampeners',
        type: 'Illicit',
        ability:
          'Before you would execute a maneuver, you may spend 1 shield. If you do, execute a white [0 [Stationary]] instead of the maneuver you revealed, then gain 1 stress token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/inertialdampeners.png',
        slots: ['Illicit'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/inertialdampeners.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
      },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Rigged Cargo Chute',
    limited: 0,
    xws: 'riggedcargochute',
    sides: [
      {
        title: 'Rigged Cargo Chute',
        type: 'Illicit',
        ability:
          'Action: Spend 1 [Charge]. Drop 1 loose cargo using the [1 [Straight]] template.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/riggedcargochute.png',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        device: {
          name: 'Loose Cargo',
          type: 'Obstacle',
          effect: 'Loose cargo is a debris cloud.',
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/riggedcargochute.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Coaxium Hyperfuel',
    limited: 0,
    xws: 'coaxiumhyperfuel',
    sides: [
      {
        ability:
          'You can perform the [SLAM] action even while stressed. If you do, you suffer 1 [Critical Hit] damage unless you expose 1 of your damage cards. After you partially execute a maneuver, you may expose 1 of your damage cards or suffer 1 [Critical Hit] damage to perform a [SLAM] action.',
        title: 'Coaxium Hyperfuel',
        type: 'Illicit',
        slots: ['Illicit'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/coaxiumhyperfuel.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/coaxiumhyperfuel.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Quick-Release Locks',
    limited: 1,
    xws: 'quickreleaselocks',
    sides: [
      {
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop 1 cargo crate drift in your [Rear Arc] at range 0. It cannot overlap a ship this way.. This card's [Charge] cannot be recovered.",
        title: 'Quick-Release Locks',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/quickreleaselocks.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/quickreleaselocks.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: "Saboteur's Map",
    limited: 1,
    xws: 'saboteursmap',
    sides: [
      {
        ability:
          'At the end of Setup, you may spend up to 1 [Charge] from each of your equipped Mine upgrades to place the corresponding device in the play area beyond range 2 of any enemy ship, strategic marker, or other device.',
        title: "Saboteur's Map",
        type: 'Illicit',
        slots: ['Illicit'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/saboteursmap.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/saboteursmap.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Scanner Baffler',
    limited: 1,
    xws: 'scannerbaffler',
    sides: [
      {
        ability:
          'At the end of Setup, you may choose any number of other friendly, non-huge ships in your deployment area at range 0-1. If you do, place those ships anywhere in the same deployment area.',
        title: 'Scanner Baffler',
        type: 'Illicit',
        slots: ['Illicit'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/scannerbaffler.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/scannerbaffler.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'False Transponder Codes',
    limited: 0,
    xws: 'falsetranspondercodes',
    sides: [
      {
        ability:
          'After you acquire a lock on an object or an object acquires a lock on you, if you have 1 active [Charge], lose 1 [Charge] and jam that object, ignoring range restrictions.',
        title: 'False Transponder Codes',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/falsetranspondercodes.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/falsetranspondercodes.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Babu Frik',
    limited: 1,
    xws: 'babufrik',
    sides: [
      {
        ability:
          'Before you would gain a non-lock red or orange token, you may spend 1 [Charge] to place it on this card instead. During the System Phase, if there are 1 or more tokens on this card, you must spend 1 [Charge]. If you cannot, remove those tokens and gain matching tokens.',
        title: 'Babu Frik',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/babufrik.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/babufrik.png',
      },
    ],
    restrictions: [{ factions: ['Scum and Villainy', 'Resistance'] }],
    cost: { value: 7 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Overtuned Modulators',
    limited: 0,
    xws: 'overtunedmodulators',
    sides: [
      {
        ability:
          'During the System Phase, if you are not stressed, you may spend 1 [Charge] to gain 3 calculate tokens. During the End Phase, if your [Charge] is inactive, for each green token you remove, gain 1 strain token.',
        title: 'Overtuned Modulators',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/overtunedmodulators.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/overtunedmodulators.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tracking Fob',
    limited: 3,
    xws: 'trackingfob',
    sides: [
      {
        ability:
          'Setup: After placing forces, choose an opponent: they assign the Marked for Elimination condition to 1 of their ships. They must assign it to a limited ship, if able. You ignore range restrictions while acquiring locks on the ship with the Marked for Elimination condition.',
        title: 'Tracking Fob',
        type: 'Illicit',
        slots: ['Illicit'],
        conditions: ['markedforelimination'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/trackingfob.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/trackingfob.png',
      },
    ],
    restrictions: [{ keywords: ['Bounty Hunter'] }],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hotshot Tail Blaster',
    limited: 0,
    xws: 'hotshottailblaster',
    sides: [
      {
        ability:
          'This attack can be performed at range 0. Attack: Spend 1 [Charge].',
        title: 'Hotshot Tail Blaster',
        type: 'Illicit',
        slots: ['Illicit'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Rear Arc',
          value: 2,
          minrange: 0,
          maxrange: 1,
          ordnance: true,
        },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hotshottailblaster.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hotshottailblaster.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'chaffparticles-rsl',
    sides: [
      {
        title: 'Chaff Particles',
        type: 'Illicit',
        ability:
          'While you defend, at the end of the Neutralize Results step, you may spend 1 [Charge] and 1 [Focus] or [Evade] result to remove 1 red or orange token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chaffparticles-rsl.png',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chaffparticles-rsl.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'fuelinjectionoverride-rsl',
    sides: [
      {
        title: 'Fuel Injection Override',
        type: 'Illicit',
        ability:
          'Before you activate, you may spend 1 [Charge] and gain 1 strain token. If you do, until the end of the round, while you move, you must use a template of 1 speed higher if able.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/fuelinjectionoverride-rsl.png',
        slots: ['Illicit'],
        charges: { value: 1, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/fuelinjectionoverride-rsl.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
