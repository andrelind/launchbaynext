import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Modified TIE/ln Fighter',
  xws: 'modifiedtielnfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '5FR',
  ],
  dialCodes: ['Tmg'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_MiningGuild_TIE.png',
  pilots: [
    {
      name: 'Ahhav',
      caption: 'Vengeful Survivor',
      initiative: 3,
      limited: 1,
      cost: 27,
      xws: 'ahhav',
      ability:
        'While you defend or perform an attack, if the enemy ship is a larger size than you, roll 1 additional die.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ahhav.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ahhav.png',
      slots: ['Talent', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 442,
    },
    {
      name: 'Captain Seevor',
      caption: 'Noisy Nuisance',
      initiative: 3,
      limited: 1,
      cost: 28,
      xws: 'captainseevor',
      ability:
        "While you defend or perform an attack, before attack dice are rolled, if you are not in the enemy ship's [Bullseye Arc], you may spend 1 [Charge]. If you do, the enemy ship gains 1 jam token.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captainseevor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captainseevor.png',
      charges: { value: 1, recovers: 1 },
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      slots: ['Talent', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 443,
    },
    {
      name: 'Foreman Proach',
      caption: 'Slave Driver',
      initiative: 4,
      limited: 1,
      cost: 27,
      xws: 'foremanproach',
      ability:
        'Before you engage, you may choose 1 enemy ship in your [Bullseye Arc] at range 1-2 and gain 1 disarm token. If you do, that ship gains 1 tractor token.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/foremanproach.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/foremanproach.png',
      slots: ['Talent', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 441,
    },
    {
      name: 'Mining Guild Surveyor',
      initiative: 2,
      limited: 0,
      cost: 23,
      xws: 'miningguildsurveyor',
      text: 'With Imperial construction projects consuming raw materials at an unprecedented rate, the Mining Guild ruthlessly exploits newly discovered deposits of doonium ore on worlds such as Batonn, Lothal, and Umbara.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/miningguildsurveyor.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/miningguildsurveyor.png',
      slots: ['Talent', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 445,
    },
    {
      name: 'Overseer Yushyn',
      caption: 'Overbearing Boss',
      initiative: 2,
      limited: 1,
      cost: 22,
      xws: 'overseeryushyn',
      ability:
        'Before a friendly ship at range 1 would gain a disarm token, if that ship is not stressed, you may spend 1 [Charge]. If you do, that ship gains 1 stress token instead.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      charges: { value: 1, recovers: 1 },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/overseeryushyn.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/overseeryushyn.png',
      slots: ['Modification'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 444,
    },
    {
      name: 'Mining Guild Sentry',
      initiative: 1,
      limited: 0,
      cost: 22,
      xws: 'miningguildsentry',
      text: 'As part of its arrangement with the Empire, the Mining Guild receives modified TIE/ln Fighters to protect its operations. These craft have solar panels removed from their stabilizers for improved visibility, and feature more extensive life support systems for the benefit of their corporate pilots.',
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/miningguildsentry.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/miningguildsentry.png',
      slots: ['Modification'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 446,
    },
    {
      name: 'Lapin',
      caption: 'Stickler for Details',
      initiative: 3,
      limited: 1,
      cost: 24,
      xws: 'lapin',
      ability:
        "While you defend or perform an attack, if the enemy ship is stressed, that ship's dice cannot be modified.",
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lapin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lapin.png',
      slots: ['Modification'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 1062,
    },
  ],
};

export default t;
