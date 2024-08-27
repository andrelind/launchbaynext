import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'RZ-2 A-wing',
  xws: 'rz2awing',
  ffg: 54,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Refined Gyrostabilizers',
    text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_RZ-2_A-wing.png',
  pilots: [
    {
      name: 'L’ulo L’ampar',
      caption: 'Luminous Mentor',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'lulolampar',
      ability:
        'While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Modification', 'Tech'],
      ffg: 435,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 7,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/lulolampar.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lulolampar.png',
    },
    {
      name: 'Tallissan Lintra',
      caption: 'Deadly Approach',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'tallissanlintra',
      ability:
        'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Talent', 'Torpedo', 'Modification', 'Tech'],
      ffg: 436,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 15,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/tallissanlintra.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/tallissanlintra.png',
    },
    {
      name: 'Zari Bangel',
      caption: 'Aerial Exhibitionist',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'zaribangel',
      ability:
        'You do not skip your Perform Action step after you partially execute a maneuver.',
      slots: [
        'Talent',
        'Talent',
        'Missile',
        'Tech',
        'Tech',
        'Modification',
        'Modification',
      ],
      ffg: 438,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 17,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/zaribangel.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zaribangel.png',
    },
    {
      name: 'Greer Sonnel',
      caption: 'Kothan Si',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'greersonnel',
      ability:
        'After you fully execute a maneuver, you may rotate your [Single Turret Arc].',
      slots: ['Talent', 'Modification', 'Missile', 'Tech'],
      ffg: 437,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 3,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/greersonnel.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/greersonnel.png',
    },
    {
      name: 'Green Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'greensquadronexpert',
      text: "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
      slots: ['Talent', 'Talent', 'Tech'],
      ffg: 439,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 5,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/greensquadronexpert.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/greensquadronexpert.png',
      caption: '',
    },
    {
      name: 'Blue Squadron Recruit',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'bluesquadronrecruit',
      text: 'Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.',
      slots: ['Talent', 'Tech', 'Missile'],
      ffg: 440,
      standard: true,
      epic: true,
      keywords: ['A-wing'],
      loadout: 12,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/bluesquadronrecruit.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bluesquadronrecruit.png',
      caption: '',
    },
    {
      name: 'Zizi Tlo',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'zizitlo',
      ability:
        'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 638,
      caption: 'Committed to the Cause',
      keywords: ['A-wing'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/zizitlo.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/zizitlo.png',
    },
    {
      name: 'Ronith Blario',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'ronithblario',
      ability:
        "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
      slots: ['Talent', 'Tech', 'Missile', 'Modification'],
      standard: true,
      epic: true,
      ffg: 639,
      caption: 'Reckless Rookie',
      keywords: ['A-wing'],
      loadout: 5,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/ronithblario.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/ronithblario.png',
    },
    {
      xws: 'merlcobben',
      name: 'Merl Cobben',
      caption: 'Distracting Daredevil',
      cost: 3,
      initiative: 1,
      limited: 1,
      ability:
        "While a friendly ship at range 0-2 performs a primary attack, if you are in the defender's [Bullseye Arc], the defender rolls 1 fewer defense die.",
      slots: ['Talent', 'Missile', 'Tech', 'Modification'],
      standard: true,
      epic: true,
      ffg: 704,
      keywords: ['A-wing'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/merlcobben.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/merlcobben.png',
    },
    {
      xws: 'suralindajavos',
      name: 'Suralinda Javos',
      caption: 'Inquisitive Journalist',
      cost: 3,
      initiative: 3,
      limited: 1,
      ability:
        'After you partially execute a maneuver, you may gain 1 strain token to rotate 90° or 180°.',
      slots: ['Talent', 'Talent', 'Modification', 'Cannon', 'Tech'],
      standard: true,
      epic: true,
      ffg: 703,
      keywords: ['A-wing'],
      loadout: 4,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/suralindajavos.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/suralindajavos.png',
    },
    {
      xws: 'wrobietyce',
      name: 'Wrobie Tyce',
      caption: 'Dynamic Aerialist',
      cost: 3,
      initiative: 4,
      limited: 1,
      ability:
        'After you defend at attack range 1, if the attacker modified its dice, the attacker gains 1 deplete token.',
      slots: ['Talent', 'Modification', 'Missile', 'Tech'],
      standard: true,
      epic: true,
      ffg: 702,
      keywords: ['A-wing'],
      loadout: 4,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/wrobietyce.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wrobietyce.png',
    },
    {
      name: 'Seftin Vanik',
      caption: 'Skillful Wingmate',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'seftinvanik',
      ability:
        'After you perform a [Boost] action, you may transfer 1 evade token to a friendly ship at range 1.',
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Modification'],
      standard: true,
      epic: true,
      ffg: 701,
      keywords: ['A-wing'],
      loadout: 2,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/seftinvanik.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/seftinvanik.png',
    },
  ],
};

export default t;
