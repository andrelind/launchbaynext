import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/sf Fighter',
  xws: 'tiesffighter',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '5FW',
  ],
  dialCodes: ['Tsf'],
  faction: 'First Order',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Evade',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Lock',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/first-order/I_TIEsf.png',
  pilots: [
    {
      name: '“Quickdraw”',
      caption: 'Defiant Duelist',
      initiative: 6,
      limited: 1,
      cost: 42,
      xws: 'quickdraw',
      ability:
        'After you lose a shield, you may spend 1 [Charge]. If you do, you may perform a bonus primary attack.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      charges: { value: 1, recovers: 1 },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/quickdraw.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/quickdraw.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 406,
    },
    {
      name: '“Backdraft”',
      caption: 'Fiery Fanatic',
      initiative: 4,
      limited: 1,
      cost: 36,
      xws: 'backdraft',
      ability:
        'While you perform a [Single Turret Arc] primary attack, if the defender is in your [Rear Arc], roll 1 additional die.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/backdraft.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/backdraft.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 407,
    },
    {
      name: 'Omega Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 33,
      xws: 'omegasquadronexpert',
      text: 'The TIE/sf is a versatile starfighter that carries specialized armament and experimental systems for long-range operations by First Order Special Forces.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/omegasquadronexpert.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/omegasquadronexpert.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 408,
    },
    {
      name: 'Zeta Squadron Survivor',
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'zetasquadronsurvivor',
      text: 'Humiliated by their failure, the remaining pilots from Starkiller Base are eager to prove their worth in pursuit of the Resistance.',
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      slots: ['Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zetasquadronsurvivor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zetasquadronsurvivor.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 409,
    },
    {
      name: 'Lieutenant LeHuse',
      xws: 'lieutenantlehuse',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      caption: 'Unflinching Executioner',
      standard: true,
      wildspace: true,
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      ability:
        "While you perform an attack, you may spend another friendly ship's lock on the defender to reroll any number of your results.",
      cost: 37,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantlehuse.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantlehuse.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 641,
    },
    {
      name: 'Captain Phasma',
      xws: 'captainphasma',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Heavy Weapon Turret',
        text: 'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You must treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc].',
      },
      caption: 'Scyre Survivor',
      standard: true,
      wildspace: true,
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      ability:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
      cost: 34,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captainphasma.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captainphasma.png',
      keywords: ['TIE'],
      epic: true,
      ffg: 642,
    },
    {
      name: '“Strife”',
      caption: 'Committed Combatant',
      initiative: 3,
      limited: 1,
      cost: 34,
      xws: 'strife-wat1',
      ability:
        'After an enemy ship in your [Single Turret Arc] defends, if you are not strained, you may gain 1 strain token to acquire a lock on that ship.',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Gunner', 'Tech'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/strife-wat1.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/strife-wat1.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      extended: true,
      ffg: 1179,
    },
  ],
};

export default t;
