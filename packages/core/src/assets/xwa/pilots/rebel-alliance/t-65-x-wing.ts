import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'T-65 X-wing',
  xws: 't65xwing',
  ffg: 33,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_X-wing-T65.png',
  pilots: [
    {
      name: 'Biggs Darklighter',
      caption: 'Red Three',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'biggsdarklighter',
      ability:
        'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Hit] or [Critical Hit] damage to cancel 1 matching result.',
      slots: ['Torpedo', 'Astromech', 'Modification', 'Configuration'],
      ffg: 7,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 5,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/biggsdarklighter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/biggsdarklighter.png',
    },
    {
      name: 'Blue Squadron Escort',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'bluesquadronescort',
      text: 'Designed by Incom Corporation, the T-65 X-wing quickly proved to be one of the most effective and versatile military vehicles in the galaxy and a boon to the Rebellion.',
      slots: ['Astromech', 'Torpedo', 'Configuration', 'Modification'],
      ffg: 11,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 18,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/bluesquadronescort.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bluesquadronescort.png',
      caption: '',
    },
    {
      name: 'Cavern Angels Zealot',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'cavernangelszealot',
      text: "Unlike most Rebel cells, Saw Gerrera's partisans are willing to use extreme methods to undermine the Galactic Empire's objectives in brutal battles that raged from Geonosis to Jedha.",
      slots: ['Astromech', 'Illicit', 'Configuration', 'Modification'],
      ffg: 12,
      standard: true,
      epic: true,
      loadout: 12,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/cavernangelszealot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/cavernangelszealot.png',
      caption: '',
    },
    {
      name: 'Edrio Two Tubes',
      caption: 'Cavern Angels Veteran',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'edriotwotubes',
      ability:
        'Before you activate, if you are focused, you may perform an action.',
      slots: ['Missile', 'Illicit', 'Configuration'],
      ffg: 9,
      standard: true,
      epic: true,
      loadout: 10,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/edriotwotubes.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/edriotwotubes.png',
    },
    {
      name: 'Garven Dreis',
      caption: 'Red Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'garvendreis-t65xwing',
      ability:
        'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 4,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 6,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/garvendreis-t65xwing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/garvendreis-t65xwing.png',
    },
    {
      name: 'Jek Porkins',
      caption: 'Red Six',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'jekporkins',
      ability:
        'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
      slots: ['Torpedo', 'Astromech', 'Talent', 'Configuration'],
      ffg: 5,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 8,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/jekporkins.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jekporkins.png',
    },
    {
      name: 'Kullbee Sperado',
      caption: 'Enigmatic Gunslinger',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'kullbeesperado',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may flip your equipped [Configuration] upgrade card.',
      slots: ['Talent', 'Missile', 'Astromech', 'Illicit', 'Configuration'],
      ffg: 6,
      standard: true,
      epic: true,
      loadout: 9,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/kullbeesperado.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/kullbeesperado.png',
    },
    {
      name: 'Leevan Tenza',
      caption: 'Rebel Alliance Defector',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'leevantenza',
      ability:
        'After you perform a [Barrel Roll] or [Boost] action, you may perform a red [Evade] action.',
      slots: ['Talent', 'Missile', 'Astromech', 'Illicit', 'Configuration'],
      ffg: 8,
      standard: true,
      epic: true,
      loadout: 11,
      extended: true,
      keywords: ['Partisan', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/leevantenza.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/leevantenza.png',
    },
    {
      name: 'Luke Skywalker',
      caption: 'Red Five',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'lukeskywalker',
      ability:
        'After you become the defender (before dice are rolled), you may recover 1 [Force].',
      force: { value: 2, recovers: 1, side: ['light'] },
      slots: [
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Force Power',
        'Configuration',
      ],
      ffg: 2,
      standard: true,
      epic: true,
      loadout: 5,
      extended: true,
      keywords: ['Light Side', 'X-wing'],
      image: 'https://infinitearenas.com/xw2/images/pilots/lukeskywalker.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lukeskywalker.png',
    },
    {
      name: 'Red Squadron Veteran',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'redsquadronveteran',
      text: 'Created as an elite starfighter squad, Red Squadron includes some of the best pilots in the Rebel Alliance.',
      slots: ['Talent', 'Astromech', 'Configuration'],
      ffg: 10,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 8,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/redsquadronveteran.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/redsquadronveteran.png',
      caption: '',
    },
    {
      name: 'Thane Kyrell',
      caption: 'Corona Four',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'thanekyrell',
      ability:
        "While you perform an attack, you may spend 1 [Focus], [Hit], or [Critical Hit] result to look at the defender's facedown damage cards, choose 1, and expose it.",
      slots: ['Talent', 'Missile', 'Astromech', 'Configuration'],
      ffg: 3,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/thanekyrell.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/thanekyrell.png',
    },
    {
      name: 'Wedge Antilles',
      caption: 'Red Two',
      initiative: 6,
      limited: 1,
      cost: 5,
      loadout: 11,
      xws: 'wedgeantilles',
      ability:
        'While you perform an attack, the defender rolls 1 fewer defense die.',
      slots: [
        'Talent',
        'Talent',
        'Torpedo',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      ffg: 1,
      standard: true,
      epic: true,
      keywords: ['X-wing'],
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/wedgeantilles.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wedgeantilles.png',
    },
    {
      name: 'Biggs Darklighter',
      caption: 'Battle of Yavin',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'biggsdarklighter-battleofyavin',
      ability:
        "During the System Phase, you may choose 1 friendly ship at range 1. If you do, treat your initiative as equal to the chosen ship's initiative until the end of the Activation Phase.",
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: [
        'attackspeed-battleofyavin',
        'selfless',
        'protontorpedoes',
        'r2f2-battleofyavin',
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/biggsdarklighter-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/biggsdarklighter.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Garven Dreis',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'garvendreis-battleofyavin',
      ability:
        'After you spend a focus token, you may choose 1 friendly ship at range 1-3. That ship gains 1 focus token.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: ['advprotontorpedoes', 'r5k6-battleofyavin'],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/garvendreis-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/garvendreis-t65xwing.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Jek Porkins',
      caption: 'Battle of Yavin',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'jekporkins-battleofyavin',
      ability:
        'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: [
        'advprotontorpedoes',
        'r5d8-battleofyavin',
        'unstablesublightengines-battleofyavin',
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/jekporkins-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/jekporkins.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Luke Skywalker',
      caption: 'Battle of Yavin',
      initiative: 5,
      limited: 1,
      cost: 6,
      xws: 'lukeskywalker-battleofyavin',
      force: { value: 2, recovers: 1, side: ['light'] },
      ability:
        'After you are declared as the defender during an attack, you may recover 1 [Force].',
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: [
        'attackspeed-battleofyavin',
        'instictiveaim',
        'protontorpedoes',
        'r2d2-battleofyavin',
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/lukeskywalker-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lukeskywalker.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Wedge Antilles',
      caption: 'Battle of Yavin',
      initiative: 5,
      limited: 1,
      cost: 6,
      xws: 'wedgeantilles-battleofyavin',
      ability:
        "While you perform a primary attack, if there is another friendly ship in the defender's firing arc, the defender rolls 1 less defense dice.",
      shipAbility: {
        name: 'Hope',
        text: 'After another friendly ship at range 0-3 is destroyed, you may perform a [Focus] or [Boost] action.',
      },
      standardLoadout: [
        'attackspeed-battleofyavin',
        'marksmanship',
        'protontorpedoes',
        'r2a3-battleofyavin',
      ],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/wedgeantilles-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wedgeantilles.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Corran Horn',
      caption: 'Rogue Nine',
      initiative: 5,
      limited: 1,
      cost: 4,
      loadout: 9,
      xws: 'corranhorn-t65xwing',
      ability:
        'After you declare the defender of an attack, if you have a lock on the defender, a friendly ship may transfer their lock token from you to the defender.',
      slots: ['Talent', 'Missile', 'Astromech', 'Configuration'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/corranhorn-t65xwing.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/corranhorn-t65xwing.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Wes Janson',
      caption: 'Wisecracking Wingman',
      initiative: 5,
      limited: 1,
      cost: 5,
      loadout: 17,
      xws: 'wesjanson',
      ability:
        'After you perform an attack, you may spend 1 [Charge] to assign the defender 1 jam token. After you defend, you may spend 1 [Charge] to assign the attacker 1 jam token.',
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Missile',
        'Astromech',
        'Modification',
        'Configuration',
      ],
      image: 'https://infinitearenas.com/xw2/images/pilots/wesjanson.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wesjanson.png',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
    },
    {
      name: 'Luke Skywalker',
      caption: 'Red Five',
      initiative: 5,
      limited: 1,
      cost: 6,
      xws: 'lukeskywalker-swz106',
      ability:
        'After you become the defender (before dice are rolled), you may recover 1 [Force].',
      force: { value: 2, recovers: 1, side: ['light'] },
      standardLoadout: ['instinctiveaim', 'protontorpedoes', 'r2d2'],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/lukeskywalker-swz106.png',
      artwork: '',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Jek Porkins',
      caption: 'Red Six',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'jekporkins-swz106',
      ability:
        'After you receive a stress token, you may roll 1 attack die to remove it. On a [Hit] result, suffer 1 [Hit] damage.',
      standardLoadout: ['predator', 'protontorpedoes', 'r5d8-battleofyavin'],
      slots: [],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/jekporkins-swz106.png',
      artwork: '',
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Kendy Idele',
      caption: 'Battle Over Endor',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'kendyidele-battleoverendor',
      standardLoadout: [
        'itsatrap-battleoverendor',
        'modifiedr4punit-battleoverendor',
        'ionmissiles',
        'chaffparticles-battleoverendor',
      ],
      slots: [],
      ability:
        'After you spend a green token, you may choose a friendly ship at range 1–3 and gain a strain token. If you do, that ship may perform a red [Focus] or red [Evade] action.',
      shipAbility: {
        name: 'Locked S-Foils',
        text: 'After you perform a [Boost] action, gain a deplete token.',
      },
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
    {
      name: 'Wedge Antilles',
      caption: 'Battle Over Endor',
      ability: 'After you perform an attack that hits, gain 1 focus token.',
      initiative: 6,
      limited: 1,
      cost: 6,
      xws: 'wedgeantilles-battleoverendor',
      standardLoadout: [
        'itsatrap-battleoverendor',
        'predator',
        'advprotontorpedoes',
        'r2a3-battleoverendor',
      ],
      slots: [],
      shipAbility: {
        name: 'Locked S-Foils',
        text: 'After you perform a [Boost] action, gain a deplete token.',
      },
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/wedgeantilles-battleoverendor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/wedgeantilles-battleoverendor.png',
      loadout: 0,
    },
    {
      name: 'Yendor',
      caption: 'Battle Over Endor',
      ability:
        'While you perform a primary attack, you may gain a strain token to reroll one of your blank results.',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'yendor-battleoverendor',
      standardLoadout: [
        'itsatrap-battleoverendor',
        'plasmatorpedoes',
        'stabilizingastromech-battleoverendor',
      ],
      slots: [],
      shipAbility: {
        name: 'Locked S-Foils',
        text: 'After you perform a [Boost] action, gain a deplete token.',
      },
      standard: true,
      extended: true,
      keywords: ['X-wing'],
      epic: true,
      loadout: 0,
    },
  ],
};

export default t;
