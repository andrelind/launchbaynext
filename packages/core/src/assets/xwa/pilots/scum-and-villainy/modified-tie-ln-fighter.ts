import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Modified TIE/ln Fighter',
  xws: 'modifiedtielnfighter',
  ffg: 56,
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
  ability: {
    name: 'Notched Stabilizers',
    text: 'While you move, you ignore asteroids.',
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_MiningGuild_TIE.png',
  pilots: [
    {
      name: 'Ahhav',
      caption: 'Vengeful Survivor',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'ahhav',
      ability:
        'While you defend or perform an attack, if the enemy ship is a larger size than you, roll 1 additional die.',
      slots: ['Talent', 'Illicit', 'Illicit', 'Modification'],
      ffg: 442,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/ahhav.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/ahhav.png',
    },
    {
      name: 'Captain Seevor',
      caption: 'Noisy Nuisance',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'captainseevor',
      ability:
        "While you defend or perform an attack, before attack dice are rolled, if you are not in the enemy ship's [Bullseye Arc], you may spend 1 [Charge]. If you do, the enemy ship gains 1 jam token.",
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 443,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/captainseevor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/captainseevor.png',
    },
    {
      name: 'Foreman Proach',
      caption: 'Slave Driver',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'foremanproach',
      ability:
        'Before you engage, you may choose 1 enemy ship in your [Bullseye Arc] at range 1-2 and gain 1 disarm token. If you do, that ship gains 1 tractor token.',
      slots: ['Talent', 'Talent', 'Modification'],
      ffg: 441,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/foremanproach.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/foremanproach.png',
    },
    {
      name: 'Mining Guild Surveyor',
      initiative: 2,
      limited: 0,
      cost: 2,
      xws: 'miningguildsurveyor',
      text: 'With Imperial construction projects consuming raw materials at an unprecedented rate, the Mining Guild ruthlessly exploits newly discovered deposits of doonium ore on worlds such as Batonn, Lothal, and Umbara.',
      slots: ['Talent'],
      ffg: 445,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 0,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/miningguildsurveyor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/miningguildsurveyor.png',
      caption: '',
    },
    {
      name: 'Overseer Yushyn',
      caption: 'Overbearing Boss',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'overseeryushyn',
      ability:
        'Before a friendly ship at range 1 would gain a disarm token, if that ship is not stressed, you may spend 1 [Charge]. If you do, that ship gains 1 stress token instead.',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Illicit', 'Modification'],
      ffg: 444,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/overseeryushyn.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/overseeryushyn.png',
    },
    {
      name: 'Mining Guild Sentry',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'miningguildsentry',
      text: 'As part of its arrangement with the Empire, the Mining Guild receives modified TIE/ln Fighters to protect its operations. These craft have solar panels removed from their stabilizers for improved visibility, and feature more extensive life support systems for the benefit of their corporate pilots.',
      slots: ['Illicit'],
      ffg: 446,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/miningguildsentry.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/miningguildsentry.png',
      caption: '',
    },
    {
      name: 'Lapin',
      caption: 'Stickler for Details',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 7,
      xws: 'lapin',
      ability:
        "While you defend or perform an attack, if the enemy ship is stressed, that ship's dice cannot be modified.",
      shipAbility: {
        name: 'Notched Stabilizers',
        text: 'While you move, you ignore asteroids.',
      },
      image: 'https://infinitearenas.com/xw2/images/pilots/lapin.png',
      slots: ['Talent', 'Cannon', 'Modification', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/lapin.png',
      ffg: 1062,
    },
  ],
};

export default t;
