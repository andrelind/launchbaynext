import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Eta-2 Actis',
  xws: 'eta2actis',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2EP',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RP',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '4FB',
    '4KR',
    '5FW',
  ],
  dialCodes: ['E2A'],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Bullseye Arc', value: 3 },
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'Purple' },
    { type: 'Barrel Roll', difficulty: 'White' },
    { type: 'Boost', difficulty: 'White' },
  ],
  pilots: [
    {
      name: 'Anakin Skywalker',
      caption: 'Hero of Coruscant',
      initiative: 6,
      limited: 1,
      xws: 'anakinskywalker-eta2actis',
      ability:
        'After you or a friendly Obi-Wan Kenobi ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship removes 1 red token of your choice.',
      force: { value: 3, recovers: 1, side: ['light'] },
      standard: true,
      wildspace: true,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      cost: 51,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/anakinskywalker-eta2actis.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/anakinskywalker-eta2actis.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      keywords: ['Dark Side', 'Jedi', 'Light Side'],
      epic: true,
      ffg: 781,
    },
    {
      name: 'Obi-Wan Kenobi',
      xws: 'obiwankenobi-eta2actis',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      caption: 'Guardian of Democracy',
      standard: true,
      wildspace: true,
      force: { value: 3, recovers: 1, side: ['light'] },
      ability:
        'After you or a friendly Anakin Skywalker ship at range 0-3 executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
      cost: 48,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/obiwankenobi-eta2actis.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/obiwankenobi-eta2actis.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 782,
    },
    {
      name: 'Aayla Secura',
      xws: 'aaylasecura',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      caption: 'Confident Warrior',
      standard: true,
      wildspace: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability:
        'While an enemy ship in your [Front Arc] at range 0-1 performs an attack, the defender may change 1 blank result to a [Focus] result.',
      cost: 47,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/aaylasecura.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/aaylasecura.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 783,
    },
    {
      name: 'Shaak Ti',
      xws: 'shaakti',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      caption: 'Compassionate Mentor',
      standard: true,
      wildspace: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability:
        'At the start of the End Phase, you may spend any number of [Force] to choose that many friendly ships at range 0-2. Each chosen ship does not remove 1 focus or evade token during this End Phase.',
      cost: 45,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/shaakti.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/shaakti.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 784,
    },
    {
      name: 'Jedi General',
      xws: 'jedigeneral',
      initiative: 4,
      limited: 0,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      text: 'As the Clone Wars take their toll on the ranks of the Jedi Order, those that remain must assume even greater responsibilities in the Grand Army of the Republic.',
      standard: true,
      wildspace: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      cost: 41,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jedigeneral.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jedigeneral.png',
      slots: ['Force Power', 'Cannon', 'Astromech', 'Modification'],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 786,
    },
    {
      name: 'Yoda',
      xws: 'yoda',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      caption: 'Grand Master',
      standard: true,
      wildspace: true,
      force: { value: 3, recovers: 1, side: ['light'] },
      ability:
        'After another friendly ship at range 0-3 spends 1 or more [Force], you may spend 1 [Force]. If you do, that ship recovers 1 [Force].',
      cost: 43,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/yoda.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/yoda.png',
      slots: ['Force Power', 'Force Power', 'Astromech', 'Modification'],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 785,
    },
    {
      name: 'Anakin Skywalker',
      caption: 'Siege of Coruscant',
      initiative: 6,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      cost: 66,
      xws: 'anakinskywalker-siegeofcoruscant',
      ability:
        'After you or a friendly Obi-Wan Kenobi ship at range 0-3 fully executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship may perform a [Barrel Roll] action.',
      force: { value: 3, recovers: 1, side: ['light'] },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/anakinskywalker-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/anakinskywalker-siegeofcoruscant.png',
      standardLoadout: [
        'malice',
        'ancillaryionweapons-siegeofcoruscant',
        'r2d2-republic',
      ],
      standard: false,
      wildspace: true,
      keywords: ['Dark Side', 'Jedi', 'Light Side'],
      epic: true,
      ffg: 991,
    },
    {
      name: 'Anakin Skywalker',
      caption: 'Siege of Coruscant',
      initiative: 6,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      cost: 51,
      xws: 'anakinskywalker-siegeofcoruscant-lsl',
      ability:
        'After you or a friendly Obi-Wan Kenobi ship at range 0-3 fully executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship may perform a [Barrel Roll] action.',
      force: { value: 3, recovers: 1, side: ['light'] },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/anakinskywalker-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/anakinskywalker-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['Dark Side', 'Jedi', 'Light Side'],
      epic: true,
      ffg: 1215,
    },
    {
      name: 'Obi-Wan Kenobi',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      cost: 52,
      xws: 'obiwankenobi-siegeofcoruscant',
      ability:
        'After you or a friendly Anakin Skywalker at range 0-3 fully executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship may perform a [Boost] action.',
      force: { value: 3, recovers: 1, side: ['light'] },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/obiwankenobi-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/obiwankenobi-siegeofcoruscant.png',
      standardLoadout: [
        'patience',
        'ancillaryionweapons-siegeofcoruscant',
        'r4p17-siegeofcoruscant',
      ],
      standard: false,
      wildspace: true,
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 992,
    },
    {
      name: 'Obi-Wan Kenobi',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      cost: 47,
      xws: 'obiwankenobi-siegeofcoruscant-lsl',
      ability:
        'After you or a friendly Anakin Skywalker at range 0-3 fully executes a maneuver, if there are more enemy ships than other friendly ships at range 0-1 of that ship, you may spend 1 [Force]. If you do, that ship may perform a [Boost] action.',
      force: { value: 3, recovers: 1, side: ['light'] },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/obiwankenobi-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/obiwankenobi-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 1216,
    },
    {
      name: 'Shaak Ti',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      cost: 49,
      xws: 'shaakti-siegeofcoruscant',
      ability:
        'At the start of the End Phase, you may perfrom a purple [Coordinate] action, even while stressed. After you perform a [Coordinate] action, if the chosen ship has the Born for This ship ability, you may coordinate 1 additional ship.',
      force: { value: 2, recovers: 1, side: ['light'] },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/shaakti-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/shaakti-siegeofcoruscant.png',
      standardLoadout: [
        'marksmanship',
        'brilliantevasion',
        'ancillaryionweapons-siegeofcoruscant',
        'r4pastromech',
      ],
      standard: false,
      wildspace: true,
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 993,
    },
    {
      name: 'Shaak Ti',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      cost: 42,
      xws: 'shaakti-siegeofcoruscant-lsl',
      ability:
        'At the start of the End Phase, you may perfrom a purple [Coordinate] action, even while stressed. After you perform a [Coordinate] action, if the chosen ship has the Born for This ship ability, you may coordinate 1 additional ship.',
      force: { value: 2, recovers: 1, side: ['light'] },
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/shaakti-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/shaakti-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 1217,
    },
    {
      name: 'Kit Fisto',
      xws: 'kitfisto',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Intuitive Controls',
        text: 'During the System Phase, you may perform a purple [Barrel Roll] or purple [Boost] action.',
      },
      caption: 'Enthusiastic Exemplar',
      standard: true,
      wildspace: true,
      force: { value: 2, recovers: 1, side: ['light'] },
      ability:
        "While another friendly ship defends, if the attacker is in its [Bullseye Arc], you may spend 1 [Force] to change 1 of the defender's blank results to a [Focus] result.",
      cost: 41,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kitfisto.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kitfisto.png',
      slots: ['Talent', 'Force Power', 'Astromech', 'Modification'],
      keywords: ['Jedi', 'Light Side'],
      epic: true,
      ffg: 994,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Eta-2_Actis.png',
};

export default t;
