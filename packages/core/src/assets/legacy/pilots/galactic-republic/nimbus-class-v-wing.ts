import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Nimbus-class V-wing',
  xws: 'nimbusclassvwing',
  size: 'Small',
  dial: [
    '1TW',
    '1BR',
    '1NR',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2KR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  dialCodes: ['A3N'],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    { type: 'Barrel Roll', difficulty: 'Red' },
    {
      type: 'Boost',
      linked: { difficulty: 'Red', type: 'Lock' },
      difficulty: 'White',
    },
  ],
  pilots: [
    {
      name: 'Wilhuff Tarkin',
      caption: 'Aspiring Admiral',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Twin Ion Engines',
        text: 'Ignore the “TIE” ship restriction on upgrade cards.',
      },
      xws: 'wilhufftarkin',
      ability:
        'During the System Phase, you may choose an object that you have locked at range 1-3. Another friendly ship at range 1-3 may acquire a lock on that object.',
      standard: true,
      wildspace: true,
      cost: 29,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wilhufftarkin.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wilhufftarkin.png',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      keywords: ['TIE'],
      epic: true,
      ffg: 791,
    },
    {
      name: '“Odd Ball”',
      xws: 'oddball-nimbusclassvwing',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Twin Ion Engines',
        text: 'Ignore the “TIE” ship restriction on upgrade cards.',
      },
      caption: 'CC-2237',
      standard: true,
      wildspace: true,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      cost: 30,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/oddball-nimbusclassvwing.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/oddball-nimbusclassvwing.png',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 788,
    },
    {
      name: '“Contrail”',
      xws: 'contrail',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Twin Ion Engines',
        text: 'Ignore the “TIE” ship restriction on upgrade cards.',
      },
      caption: 'CT-4981',
      standard: true,
      wildspace: true,
      ability:
        "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      cost: 31,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/contrail.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/contrail.png',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 789,
    },
    {
      name: '“Klick”',
      xws: 'klick',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Twin Ion Engines',
        text: 'Ignore the “TIE” ship restriction on upgrade cards.',
      },
      caption: 'GC-1000',
      standard: true,
      wildspace: true,
      charges: { value: 1, recovers: 1 },
      ability:
        'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
      cost: 30,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/klick.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/klick.png',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 790,
    },
    {
      name: 'Shadow Squadron Escort',
      xws: 'shadowsquadronescort',
      initiative: 3,
      limited: 0,
      shipAbility: {
        name: 'Twin Ion Engines',
        text: 'Ignore the “TIE” ship restriction on upgrade cards.',
      },
      text: "In the waning months of the Clone Wars, elite clone formations carry out missions critical to the future of the Republic; such as the protection of Supreme Chancellor Palpatine's personal shuttle.",
      standard: true,
      wildspace: true,
      cost: 28,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/shadowsquadronescort.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/shadowsquadronescort.png',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 792,
    },
    {
      name: 'Loyalist Volunteer',
      xws: 'loyalistvolunteer',
      initiative: 2,
      limited: 0,
      shipAbility: {
        name: 'Twin Ion Engines',
        text: 'Ignore the “TIE” ship restriction on upgrade cards.',
      },
      text: 'The Kuat Systems Engineering Alpha-3 Nimbus-class V-wing is the vessel of choice for clone and non-clone starfighter pilots alike. The techniques pioneered to mass-produce its precision ion engines will later be crucial in the development of the TIE series by Sienar Fleet Systems.',
      standard: true,
      wildspace: true,
      cost: 26,
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/loyalistvolunteer.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/loyalistvolunteer.png',
      slots: ['Astromech', 'Modification', 'Configuration'],
      keywords: ['TIE'],
      epic: true,
      ffg: 793,
    },
    {
      name: '“Klick”',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 41,
      xws: 'klick-siegeofcoruscant',
      ability:
        'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/klick-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/klick-siegeofcoruscant.png',
      charges: { value: 1, recovers: 1 },
      standardLoadout: ['r3astromech', 'precisionionengines', 'alpha3eesk'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 3 },
      ],
      standard: false,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
      ffg: 996,
    },
    {
      name: '“Klick”',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 36,
      xws: 'klick-siegeofcoruscant-lsl',
      ability:
        'While a ship that you have locked at range 1-3 defends or performs an attack, you may spend 1 [Charge] to prevent range bonuses from being applied.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/klick-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/klick-siegeofcoruscant-lsl.png',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 3 },
        { type: 'hull', value: 2 },
        { type: 'shields', value: 3 },
      ],
      standard: true,
      wildspace: true,
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 1218,
    },
    {
      name: '“Contrail”',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 46,
      xws: 'contrail-siegeofcoruscant',
      ability:
        "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/contrail-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/contrail-siegeofcoruscant.png',
      standardLoadout: [
        'ionlimiteroverride',
        'preciseastromech-battleofyavin',
        'ionbombs',
        'alpha3bbesh',
      ],
      standard: false,
      wildspace: true,
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 997,
    },
    {
      name: '“Contrail”',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 32,
      xws: 'contrail-siegeofcoruscant-lsl',
      ability:
        "While you defend or perform an attack, if the bearing of your revealed maneuver is the same as the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/contrail-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/contrail-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Astromech', 'Modification', 'Configuration'],
      standard: true,
      wildspace: true,
      keywords: ['Clone', 'TIE'],
      epic: true,
      ffg: 1219,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Nimbus-class_V-wing.png',
};

export default t;
