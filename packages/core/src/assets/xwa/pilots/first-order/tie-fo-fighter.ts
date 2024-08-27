import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/fo Fighter',
  xws: 'tiefofighter',
  ffg: 49,
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
      cost: 4,
      xws: 'midnight',
      ability:
        "While you defend or perform an attack, if you have a lock on the enemy ship, that ship's dice cannot be modified.",
      slots: [
        'Talent',
        'Talent',
        'Missile',
        'Modification',
        'Modification',
        'Tech',
      ],
      ffg: 397,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 17,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/midnight.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/midnight.png',
    },
    {
      name: 'Commander Malarus',
      caption: 'First Order Enforcer',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'commandermalarus',
      ability:
        'At the start of the Engagement Phase, you may spend 1 [Charge] and gain 1 stress token. If you do, until the end of the round, while you defend or perform an attack, you may change all of your [Focus] results to [Evade] or [Hit] results.',
      slots: ['Talent', 'Talent', 'Missile', 'Modification', 'Tech'],
      charges: { value: 2, recovers: 0 },
      ffg: 452,
      standard: true,
      epic: true,
      loadout: 19,
      extended: true,
      keywords: ['TIE'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/commandermalarus.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/commandermalarus.png',
    },
    {
      name: '“Scorch”',
      caption: 'Zeta Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'scorch',
      ability:
        'While you perform a primary attack, if you are not stressed, you may gain 1 stress token to roll 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Modification', 'Tech'],
      ffg: 398,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 14,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/scorch.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/scorch.png',
    },
    {
      name: '“Static”',
      caption: 'Omega Ace',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'static',
      ability:
        'While you perform a primary attack, you may spend your lock on the defender and a focus token to change all of your results to [Critical Hit] results.',
      slots: ['Talent', 'Talent', 'Cannon', 'Modification', 'Tech'],
      ffg: 399,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/static.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/static.png',
    },
    {
      name: '“Longshot”',
      caption: 'Zeta Ace',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'longshot',
      ability:
        'While you perform a primary attack at attack range 3, roll 1 additional attack die.',
      slots: ['Talent', 'Modification', 'Tech', 'Tech'],
      ffg: 400,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/longshot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/longshot.png',
    },
    {
      name: 'Omega Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'omegasquadronace',
      text: 'Only pilots who have demonstrated both exceptional skill and unwavering dedication are rewarded with coveted positions in the First Order squadrons operating secretly against the New Republic during the Cold War.',
      slots: ['Talent', 'Modification', 'Modification', 'Tech'],
      ffg: 403,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/omegasquadronace.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/omegasquadronace.png',
      caption: '',
    },
    {
      name: '“Muse”',
      caption: 'Epsilon Leader',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'muse',
      ability:
        'At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.',
      slots: ['Modification', 'Tech'],
      ffg: 401,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/muse.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/muse.png',
    },
    {
      name: 'TN-3465',
      caption: 'Loose End',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'tn3465',
      ability:
        "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 [Critical Hit] damage to change 1 of the attacker's results to a [Critical Hit] result.",
      slots: ['Modification', 'Tech'],
      ffg: 453,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/tn3465.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/tn3465.png',
    },
    {
      name: 'Zeta Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 3,
      xws: 'zetasquadronpilot',
      text: "Unhampered by a cumbersome galactic bureaucracy, technologies originally researched by the Empire's TIE Advanced program are now mass-produced on First Order starfighters. As a result, TIE/fo pilots enjoy higher survival rates than their predecessors in the Galactic Empire.",
      slots: ['Modification', 'Tech'],
      ffg: 404,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/zetasquadronpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zetasquadronpilot.png',
      caption: '',
    },
    {
      name: 'Epsilon Squadron Cadet',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'epsilonsquadroncadet',
      text: "Trained from childhood aboard Resurgent-class Star Destroyers in deep space, many First Order TIE pilots have never even set foot on a planet's surface.",
      slots: ['Tech', 'Modification'],
      ffg: 405,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 13,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/epsilonsquadroncadet.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/epsilonsquadroncadet.png',
      caption: '',
    },
    {
      name: 'Lieutenant Rivas',
      caption: 'Inconvenient Witness',
      initiative: 1,
      limited: 1,
      cost: 3,
      xws: 'lieutenantrivas',
      ability:
        'After a ship at range 1-2 gains a red or orange token, if you do not have that ship locked, you may acquire a lock on that ship.',
      slots: ['Talent', 'Tech', 'Modification'],
      ffg: 454,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/lieutenantrivas.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantrivas.png',
    },
    {
      name: '“Null”',
      caption: 'Epsilon Ace',
      initiative: 0,
      limited: 1,
      cost: 3,
      xws: 'null',
      ability: 'While you are not damaged, treat your initiative value as 7.',
      slots: ['Talent', 'Talent', 'Tech', 'Tech'],
      ffg: 402,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/null.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/null.png',
    },
    {
      name: 'Lieutenant Galek',
      caption: 'Harsh Instructor',
      initiative: 5,
      limited: 1,
      cost: 4,
      loadout: 15,
      xws: 'lieutenantgalek',
      ability:
        'After another friendly ship at range 0-2 is destroyed, you may perform a [Coordinate] action, even while stressed. While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
      image: 'https://infinitearenas.com/xw2/images/pilots/lieutenantgalek.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenantgalek.png',
      slots: ['Talent', 'Tech', 'Tech', 'Cannon', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'DT-798',
      caption: 'Jace Rucklin',
      initiative: 4,
      limited: 1,
      cost: 3,
      loadout: 4,
      xws: 'dt798',
      ability:
        'While you perform a primary attack, if you are not strained, you may gain 1 strain token to roll 1 additional die.',
      image: 'https://infinitearenas.com/xw2/images/pilots/dt798.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/dt798.png',
      slots: ['Talent', 'Tech', 'Modification', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
    },
    {
      name: 'Lin Gaava',
      caption: 'Impetuous Mechanic',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 9,
      xws: 'lingaava',
      ability:
        'Setup: After placing forces, assign the Primed for Speed condition to yourself and up to 2 other friendly TIE/fo or TIE/sf Fighters that have no equipped [Modification] upgrades.',
      conditions: ['primedforspeed'],
      image: 'https://infinitearenas.com/xw2/images/pilots/lingaava.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lingaava.png',
      slots: ['Talent', 'Talent', 'Tech', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
    },
  ],
};

export default t;
