import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ln Fighter',
  xws: 'tielnfighter',
  ffg: 11,
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
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
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
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEFighter.png',
  pilots: [
    {
      name: '“Howlrunner”',
      caption: 'Obsidian Leader',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'howlrunner',
      ability:
        'While a friendly ship at range 0-1 performs a primary attack, that ship may reroll 1 attack die.',
      slots: ['Talent', 'Talent', 'Modification'],
      ffg: 81,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 18,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/howlrunner.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/howlrunner.png',
    },
    {
      name: '“Mauler” Mithel',
      caption: 'Black Two',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'maulermithel',
      ability:
        'While you perform an attack at attack range 1, roll 1 additional attack die.',
      slots: ['Talent', 'Cannon'],
      ffg: 80,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/maulermithel.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/maulermithel.png',
    },
    {
      name: '“Night Beast”',
      caption: 'Obsidian Two',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'nightbeast',
      ability:
        'After you fully execute a blue maneuver, you may perform a [Focus] action.',
      slots: ['Talent', 'Talent'],
      ffg: 88,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/nightbeast.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/nightbeast.png',
    },
    {
      name: '“Scourge” Skutu',
      caption: 'Seasoned Veteran',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'scourgeskutu',
      ability:
        'While you perform an attack against a defender in your [Bullseye Arc], roll 1 additional attack die.',
      slots: ['Talent', 'Modification'],
      ffg: 82,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/scourgeskutu.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/scourgeskutu.png',
    },
    {
      name: '“Wampa”',
      caption: 'Black Eleven',
      initiative: 1,
      limited: 1,
      cost: 3,
      xws: 'wampa',
      ability:
        'While you perform an attack, you may spend 1 [Charge] to roll 1 additional attack die. After defending, lose 1 [Charge].',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Modification'],
      ffg: 89,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/wampa.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/wampa.png',
    },
    {
      name: 'Academy Pilot',
      initiative: 1,
      limited: 0,
      cost: 2,
      xws: 'academypilot',
      text: 'The Galactic Empire uses the fast and agile TIE/ln, developed by Sienar Fleet Systems and produced in staggering quantity, as its primary starfighter.',
      slots: ['Modification'],
      ffg: 92,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/academypilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/academypilot.png',
      caption: '',
    },
    {
      name: 'Black Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'blacksquadronace',
      text: 'The elite TIE/ln pilots of Black Squadron accompanied Darth Vader on a devastating strike against the Rebel forces at the Battle of Yavin.',
      slots: ['Talent', 'Modification'],
      ffg: 90,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 14,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/blacksquadronace.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/blacksquadronace.png',
      caption: '',
    },
    {
      name: 'Del Meeko',
      caption: 'Inferno Three',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'delmeeko',
      ability:
        'While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die.',
      slots: ['Cannon', 'Talent', 'Modification'],
      ffg: 85,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/delmeeko.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/delmeeko.png',
    },
    {
      name: 'Gideon Hask',
      caption: 'Inferno Two',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'gideonhask',
      ability:
        'While you perform an attack against a damaged defender, roll 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Missile', 'Modification'],
      ffg: 84,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/gideonhask.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/gideonhask.png',
    },
    {
      name: 'Iden Versio',
      caption: 'Inferno Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'idenversio',
      ability:
        'Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 [Charge]. If you do, prevent that damage.',
      charges: { value: 1, recovers: 0 },
      slots: ['Talent', 'Talent', 'Cannon', 'Missile', 'Modification'],
      ffg: 83,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 16,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/idenversio.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/idenversio.png',
    },
    {
      name: 'Obsidian Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 2,
      xws: 'obsidiansquadronpilot',
      text: "The TIE fighter's Twin Ion Engine system was designed for speed, making the TIE/ln one of the most maneuverable starships ever mass-produced.",
      slots: ['Talent'],
      ffg: 91,
      standard: true,
      epic: true,
      loadout: 0,
      extended: true,
      image:
        'https://infinitearenas.com/xw2/images/pilots/obsidiansquadronpilot.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/obsidiansquadronpilot.png',
      caption: '',
      keywords: ['TIE'],
    },
    {
      name: 'Seyn Marana',
      caption: 'Inferno Four',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'seynmarana',
      ability:
        'While you perform an attack, you may spend 1 [Critical Hit] result. If you do, deal 1 facedown damage card to the defender, then cancel your remaining results.',
      slots: ['Talent', 'Cannon', 'Modification'],
      ffg: 86,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 12,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/seynmarana.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/seynmarana.png',
    },
    {
      name: 'Valen Rudor',
      caption: 'Braggadocious Baron',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'valenrudor',
      ability:
        'After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.',
      slots: ['Talent', 'Talent'],
      ffg: 87,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 5,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/valenrudor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/valenrudor.png',
    },
    {
      name: 'ISB Jingoist',
      caption: 'Heartless Enforcer',
      initiative: 4,
      limited: 2,
      xws: 'isbjingoist',
      ability:
        'Before you engage, you may choose 1 enemy ship in your [Front Arc] at range 0-1. If you do, that ship gains 1 deplete or strain token of your choice unless it chooses to remove 1 green token.',
      slots: ['Talent', 'Illicit', 'Modification'],
      keywords: ['TIE'],
      cost: 4,
      standard: true,
      epic: true,
      loadout: 18,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/isbjingoist.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/isbjingoist.png',
    },
    {
      name: 'Moff Gideon',
      caption: 'Ruthless Remnant Leader',
      initiative: 4,
      limited: 1,
      xws: 'moffgideon',
      charges: { value: 2, recovers: 1 },
      ability:
        'While an enemy ship at range 1-3 defends, before attack dice are rolled, you may spend 1 [Charge] and choose a friendly ship at range 0-1 of the defender. If you do, defense dice cannot be modified during this attack and the chosen friendly ship gains 1 strain token.',
      slots: ['Talent', 'Missile', 'Modification', 'Modification'],
      keywords: ['TIE'],
      cost: 4,
      standard: true,
      epic: true,
      loadout: 15,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/moffgideon.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/moffgideon.png',
    },
    {
      name: '“Backstabber”',
      caption: 'Battle of Yavin',
      initiative: 5,
      limited: 1,
      xws: 'backstabber-battleofyavin',
      ability:
        'While you perform a primary attack, if a friendly Darth Vader or “Mauler” Mithel is in your [Left Arc] or [Right Arc] at range 0-1, roll 1 additional attack die.',
      charges: { value: 1, recovers: 1 },
      keywords: ['TIE'],
      cost: 4,
      standard: true,
      epic: true,
      extended: true,
      standardLoadout: ['crackshot', 'disciplined', 'afterburners'],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/backstabber-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/backstabber.png',
      loadout: 0,
    },
    {
      name: '“Dark Curse”',
      caption: 'Battle of Yavin',
      initiative: 6,
      limited: 1,
      xws: 'darkcurse-battleofyavin',
      ability: "While you defend, the attacker's dice cannot be modified.",
      keywords: ['TIE'],
      cost: 4,
      standard: true,
      epic: true,
      extended: true,
      standardLoadout: ['ruthless', 'precisionionengines'],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/darkcurse-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/darkcurse.png',
      loadout: 0,
    },
    {
      name: '“Mauler” Mithel',
      caption: 'Battle of Yavin',
      initiative: 5,
      limited: 1,
      xws: 'maulermithel-battleofyavin',
      ability:
        'While you perform a primary attack, if a friendly Darth Vader or “Backstabber” is in your [Left Arc] or [Right Arc] at range 0-1, roll 1 additional attack die.',
      keywords: ['TIE'],
      cost: 4,
      standard: true,
      epic: true,
      extended: true,
      standardLoadout: ['predator', 'afterburners'],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/maulermithel-battleofyavin.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/maulermithel.png',
      loadout: 0,
    },
    {
      name: '“Wampa”',
      caption: 'Battle of Yavin',
      initiative: 1,
      limited: 1,
      xws: 'wampa-battleofyavin',
      ability:
        'While you perform an attack, you may spend 1 [Charge] to roll 1 additional attack die. After defending, lose 1 [Charge].',
      charges: { value: 1, recovers: 1 },
      keywords: ['TIE'],
      cost: 3,
      standard: true,
      epic: true,
      extended: true,
      standardLoadout: ['elusive', 'vengeful-battleofyavin'],
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/wampa-battleofyavin.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/wampa.png',
      loadout: 0,
    },
    {
      name: 'Magna Tolvan',
      caption: 'Cold Tyrant',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 10,
      xws: 'magnatolvan',
      ability:
        'While you have 2 or fewer stress tokens, you can perform white actions, even while stressed. After you gain a stress token, you may perform a white action, if able.',
      image: 'https://infinitearenas.com/xw2/images/pilots/magnatolvan.png',
      slots: ['Talent', 'Cannon', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/magnatolvan.png',
    },
    {
      name: 'Yrica Quell',
      caption: 'Consumed by Duty',
      initiative: 3,
      limited: 1,
      cost: 3,
      loadout: 9,
      xws: 'yricaquell',
      ability:
        'After you fully execute a maneuver, you may acquire a lock on an enemy ship in your [Bullseye Arc].',
      image: 'https://infinitearenas.com/xw2/images/pilots/yricaquell.png',
      slots: ['Talent', 'Missile', 'Modification'],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/yricaquell.png',
    },
    {
      name: 'Iden Versio',
      initiative: 4,
      limited: 1,
      cost: 4,
      standardLoadout: ['disciplined', 'elusive'],
      xws: 'idenversio-swz105',
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/idenversio-swz105.png',
      charges: { value: 1, recovers: 0 },
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/idenversio.png',
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      caption: 'Inferno Leader',
      loadout: 0,
      ability:
        'Before a friendly TIE/ln fighter at range 0-1 would suffer 1 or more damage, you may spend 1 [Charge]. If you do, prevent that damage.',
    },
    {
      name: '“Night Beast”',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'nightbeast-swz105',
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/nightbeast-swz105.png',
      standardLoadout: ['disciplined', 'predator'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/nightbeast.png',
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      caption: 'Obsidian Two',
      loadout: 0,
      ability:
        'After you fully execute a blue maneuver, you may perform a [Focus] action.',
    },
    {
      name: 'Valen Rudor',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'valenrudor-swz105',
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/valenrudor-swz105.png',
      standardLoadout: ['disciplined', 'precisionionengines'],
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/valenrudor.png',
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      caption: 'Braggadocious Baron',
      loadout: 0,
      ability:
        'After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.',
    },
    {
      name: 'Lieutenant Hebsly',
      caption: 'Battle Over Endor',
      xws: 'lieutenanthebsly-battleoverendor',
      initiative: 3,
      limited: 1,
      cost: 3,
      ability:
        'After you defend, you may perform a red [Boost] action, even while stressed.',
      standardLoadout: [
        'collected-battleoverendor',
        'elusive',
        'noescape-battleoverendor',
      ],
      shipAbility: {
        name: 'Formed Up',
        text: 'At the end of the End Phase, if there is another friendly <strong>TIE/ln Fighter</strong> ship at range 0-1, you may remove 1 stress token.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Evade' },
        },
        { difficulty: 'Red', type: 'Boost' },
      ],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      loadout: 0,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/lieutenanthebsly-battleoverendor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/lieutenanthebsly-battleoverendor.png',
    },
    {
      name: 'Scythe 6',
      caption: 'Battle Over Endor',
      xws: 'scythe6-battleoverendor',
      initiative: 2,
      limited: 1,
      cost: 4,
      ability:
        'While you perform an attack at attack range 1-2, roll 1 additional attack die.',
      standardLoadout: [
        'noescape-battleoverendor',
        'predator',
        'ionmaneuveringjet-battleoverendor',
        'targetingmatrix-battleoverendor',
      ],
      shipAbility: {
        name: 'Formed Up',
        text: 'At the end of the End Phase, if there is another friendly <strong>TIE/ln Fighter</strong> ship at range 0-1, you may remove 1 stress token.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Evade' },
        },
      ],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      loadout: 0,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/scythe6-battleoverendor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/scythe6-battleoverendor.png',
    },
    {
      name: 'Major Mianda',
      caption: 'Battle Over Endor',
      xws: 'majormianda-battleoverendor',
      initiative: 5,
      limited: 1,
      cost: 4,
      ability:
        'During the End Phase, you may choose up to 2 friendly small ships at range 0-2. You and the chosen ships may perform a red [Barrel Roll] or red [Boost] action.',
      standardLoadout: ['ruthless', 'swarmtactics', 'noescape-battleoverendor'],
      shipAbility: {
        name: 'Formed Up',
        text: 'At the end of the End Phase, if there is another friendly <strong>TIE/ln Fighter</strong> ship at range 0-1, you may remove 1 stress token.',
      },
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Evade' },
        {
          difficulty: 'White',
          type: 'Barrel Roll',
          linked: { difficulty: 'Red', type: 'Evade' },
        },
        { difficulty: 'Red', type: 'Coordinate' },
      ],
      standard: true,
      extended: true,
      keywords: ['TIE'],
      epic: true,
      loadout: 0,
      image:
        'https://infinitearenas.com/xw2/images/quickbuilds/majormianda-battleoverendor.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/majormianda-battleoverendor.png',
    },
  ],
};

export default t;
