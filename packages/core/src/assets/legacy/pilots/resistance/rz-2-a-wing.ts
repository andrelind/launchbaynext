import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'RZ-2 A-wing',
  xws: 'rz2awing',
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
  dialCodes: ['RZ2'],
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
  icon: 'https://infinitearenas.com/xw2/images/shipicons/resistance/I_RZ-2_A-wing.png',
  pilots: [
    {
      name: 'L’ulo L’ampar',
      caption: 'Luminous Mentor',
      initiative: 5,
      limited: 1,
      cost: 41,
      xws: 'lulolampar',
      ability:
        'While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lulolampar.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lulolampar.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 435,
    },
    {
      name: 'Tallissan Lintra',
      caption: 'Deadly Approach',
      initiative: 5,
      limited: 1,
      cost: 38,
      xws: 'tallissanlintra',
      ability:
        'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tallissanlintra.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tallissanlintra.png',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 436,
    },
    {
      name: 'Zari Bangel',
      caption: 'Aerial Exhibitionist',
      initiative: 3,
      limited: 1,
      cost: 34,
      xws: 'zaribangel',
      ability:
        'You do not skip your Perform Action step after you partially execute a maneuver.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zaribangel.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zaribangel.png',
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 438,
    },
    {
      name: 'Greer Sonnel',
      caption: 'Kothan Si',
      initiative: 4,
      limited: 1,
      cost: 36,
      xws: 'greersonnel',
      ability:
        'After you fully execute a maneuver, you may rotate your [Single Turret Arc].',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/greersonnel.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/greersonnel.png',
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 437,
    },
    {
      name: 'Green Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 33,
      xws: 'greensquadronexpert',
      text: "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/greensquadronexpert.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/greensquadronexpert.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 439,
    },
    {
      name: 'Blue Squadron Recruit',
      initiative: 1,
      limited: 0,
      cost: 32,
      xws: 'bluesquadronrecruit',
      text: 'Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Missile', 'Tech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/bluesquadronrecruit.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/bluesquadronrecruit.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 440,
    },
    {
      name: 'Zizi Tlo',
      caption: 'Committed to the Cause',
      initiative: 5,
      limited: 1,
      cost: 44,
      xws: 'zizitlo',
      ability:
        'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
      charges: { value: 1, recovers: 1 },
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Tech', 'Missile'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zizitlo.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zizitlo.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 638,
    },
    {
      name: 'Ronith Blario',
      caption: 'Reckless Rookie',
      initiative: 2,
      limited: 1,
      cost: 33,
      xws: 'ronithblario',
      ability:
        "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Tech', 'Missile'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ronithblario.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ronithblario.png',
      standard: true,
      wildspace: true,
      keywords: ['A-wing'],
      epic: true,
      ffg: 639,
    },
    {
      name: 'Merl Cobben',
      caption: 'Distracting Daredevil',
      initiative: 1,
      limited: 1,
      cost: 34,
      xws: 'merlcobben',
      ability:
        "While a friendly ship at range 0-2 performs a primary attack, if you are in the defender's [Bullseye Arc], the defender rolls 1 fewer defense die.",
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Missile', 'Tech'],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/merlcobben.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/merlcobben.png',
      keywords: ['A-wing'],
      epic: true,
      ffg: 704,
    },
    {
      name: 'Suralinda Javos',
      caption: 'Inquisitive Journalist',
      initiative: 3,
      limited: 1,
      cost: 34,
      xws: 'suralindajavos',
      ability:
        'After you partially execute a maneuver, you may gain 1 strain token to rotate 90° or 180°.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/suralindajavos.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/suralindajavos.png',
      keywords: ['A-wing'],
      epic: true,
      ffg: 703,
    },
    {
      name: 'Wrobie Tyce',
      caption: 'Dynamic Aerialist',
      initiative: 4,
      limited: 1,
      cost: 35,
      xws: 'wrobietyce',
      ability:
        'After you defend at attack range 1, if the attacker modified its dice, the attacker gains 1 deplete token.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wrobietyce.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wrobietyce.png',
      keywords: ['A-wing'],
      epic: true,
      ffg: 702,
    },
    {
      name: 'Seftin Vanik',
      caption: 'Skillful Wingmate',
      initiative: 5,
      limited: 1,
      cost: 37,
      xws: 'seftinvanik',
      ability:
        'After you perform a [Boost] action, you may transfer 1 evade token to a friendly ship at range 1.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      standard: true,
      wildspace: true,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/seftinvanik.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/seftinvanik.png',
      keywords: ['A-wing'],
      epic: true,
      ffg: 701,
    },
  ],
};

export default t;
