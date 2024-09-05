import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/fo Fighter',
  xws: 'tiefofighter',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2LR',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2PR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  dialCodes: ['Tfo'],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_TIEfo.png',
  pilots: [
    {
      name: '“Midnight”',
      caption: 'Omega Leader',
      initiative: 6,
      limited: 1,
      cost: 35,
      xws: 'midnight',
      ability:
        "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/midnight.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/midnight.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Commander Malarus',
      caption: 'First Order Enforcer',
      initiative: 5,
      limited: 1,
      cost: 34,
      xws: 'commandermalarus',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/commandermalarus.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/commandermalarus.png',
      slots: ['Talent', 'Modification', 'Tech'],
      charges: { value: 2, recovers: 0 },
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Scorch”',
      caption: 'Zeta Leader',
      initiative: 4,
      limited: 1,
      cost: 33,
      xws: 'scorch',
      ability:
        'While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/scorch.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/scorch.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Static”',
      caption: 'Omega Ace',
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'static',
      ability:
        'While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/static.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/static.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Longshot”',
      caption: 'Zeta Ace',
      initiative: 3,
      limited: 1,
      cost: 30,
      xws: 'longshot',
      ability:
        'While you perform a primary attack at attack range 3, roll 1 additional attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/longshot.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/longshot.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Omega Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 28,
      xws: 'omegasquadronace',
      text: 'Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/omegasquadronace.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/omegasquadronace.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Muse”',
      caption: 'Epsilon Leader',
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'muse',
      ability:
        'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/muse.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/muse.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'TN-3465',
      caption: 'Loose End',
      initiative: 2,
      limited: 1,
      cost: 28,
      xws: 'tn3465',
      ability:
        "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tn3465.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tn3465.png',
      slots: ['Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Zeta Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 27,
      xws: 'zetasquadronpilot',
      text: "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zetasquadronpilot.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zetasquadronpilot.png',
      slots: ['Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Epsilon Squadron Cadet',
      initiative: 1,
      limited: 0,
      cost: 26,
      xws: 'epsilonsquadroncadet',
      text: "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/epsilonsquadroncadet.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/epsilonsquadroncadet.png',
      slots: ['Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Lieutenant Rivas',
      caption: 'Inconvenient Witness',
      initiative: 1,
      limited: 1,
      cost: 28,
      xws: 'lieutenantrivas',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantrivas.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantrivas.png',
      ability:
        'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
      slots: ['Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: '“Null”',
      caption: 'Epsilon Ace',
      initiative: 0,
      limited: 1,
      cost: 29,
      xws: 'null',
      ability: 'While you are not damaged, treat your initiative value as 7.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/null.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/null.png',
      slots: ['Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Lieutenant Galek',
      caption: 'Harsh Instructor',
      initiative: 5,
      limited: 1,
      cost: 32,
      xws: 'lieutenantgalek',
      ability:
        'After another friendly ship at range 0-2 is destroyed, you may perform a [Coordinate] action, even while stressed. While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantgalek.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantgalek.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'DT-798',
      caption: 'Jace Rucklin',
      initiative: 4,
      limited: 1,
      cost: 34,
      xws: 'dt798',
      ability:
        'While you perform a primary attack, if you are not strained, you may gain 1 strain token to roll 1 additional die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dt798.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dt798.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Lin Gaava',
      caption: 'Impetuous Mechanic',
      initiative: 3,
      limited: 1,
      cost: 33,
      xws: 'lingaava',
      ability:
        'Setup: After placing forces, assign the Primed for Speed condition to yourself and up to 2 other friendly TIE/fo or TIE/sf Fighters that have no equipped [Modification] upgrades.',
      conditions: ['primedforspeed'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lingaava.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lingaava.png',
      slots: ['Talent', 'Modification', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
    },
  ],
};

export default t;
