import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'ARC-170 Starfighter',
  xws: 'arc170starfighter',
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FR',
    '4KR',
  ],
  dialCodes: ['AR'],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Arc-170.png',
  pilots: [
    {
      name: '“Sinker”',
      caption: 'Wolfpack Veteran',
      initiative: 3,
      limited: 1,
      xws: 'sinker',
      ability:
        'While a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] performs a primary attack, it may reroll 1 attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sinker.png',
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      standard: true,
      wildspace: true,
      cost: 51,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sinker.png',
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Jag”',
      xws: 'jag',
      cost: 47,
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      caption: 'CT-55/11-9009',
      initiative: 3,
      limited: 1,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jag.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jag.png',
      ability:
        'After a friendly ship at range 1-2 in your [Left Arc] or [Right Arc] defends, you may acquire a lock on the attacker.',
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Odd Ball”',
      xws: 'oddball-arc170starfighter',
      cost: 48,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      caption: 'CC-2237',
      initiative: 5,
      limited: 1,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/oddball-arc170starfighter.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/oddball-arc170starfighter.png',
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Wolffe”',
      xws: 'wolffe',
      cost: 49,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      caption: 'CC-3636',
      initiative: 4,
      limited: 1,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wolffe.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wolffe.png',
      charges: { value: 1, recovers: 0 },
      ability:
        'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '104th Battalion Pilot',
      xws: '104thbattalionpilot',
      cost: 42,
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      initiative: 2,
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/104thbattalionpilot.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/104thbattalionpilot.png',
      text: "The ARC-170 was designed as a dominating heavy escort fighter with powerful front and rear lasers, ordnance, and an astromech for navigation. Squadrons of these mighty ships bolster the Republic Navy's presence at any battle where they are deployed.",
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: 'Squad Seven Veteran',
      xws: 'squadsevenveteran',
      cost: 44,
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      initiative: 3,
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/squadsevenveteran.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/squadsevenveteran.png',
      text: 'Clone Flight Seven serves as part of the Open Circle Fleet under legendary Jedi Generals such as Plo Koon and Obi-Wan Kenobi, and won glory at the battles of Coruscant and Cato Neimoidia.',
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Odd Ball”',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 56,
      xws: 'oddball-siegeofcoruscant',
      ability:
        'After you fully execute a red maneuver or perform a red action, you camy choose a friendly ship at range 0-3 and an enemy at range 0-1. The chosen frendly ship gains a lock on the enemy ship.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/oddball-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/oddball-siegeofcoruscant.png',
      standardLoadout: ['selfless', 'veterantailgunner', 'r4pastromech'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { arc: 'Rear Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 1 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
      standard: false,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Odd Ball”',
      caption: 'Siege of Coruscant',
      initiative: 5,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 51,
      xws: 'oddball-siegeofcoruscant-lsl',
      ability:
        'After you fully execute a red maneuver or perform a red action, you camy choose a friendly ship at range 0-3 and an enemy at range 0-1. The chosen frendly ship gains a lock on the enemy ship.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/oddball-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/oddball-siegeofcoruscant-lsl.png',
      slots: ['Talent', 'Torpedo', 'Crew', 'Astromech', 'Gunner'],
      stats: [
        { arc: 'Front Arc', type: 'attack', value: 3 },
        { arc: 'Rear Arc', type: 'attack', value: 2 },
        { type: 'agility', value: 1 },
        { type: 'hull', value: 6 },
        { type: 'shields', value: 4 },
      ],
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Wolffe”',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 56,
      xws: 'wolffe-siegeofcoruscant',
      ability:
        'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wolffe-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wolffe-siegeofcoruscant.png',
      charges: { value: 1, recovers: 0 },
      standardLoadout: [
        'wolfpack-siegeofcoruscant',
        'veterantailgunner',
        'q7astromech',
      ],
      standard: false,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Wolffe”',
      caption: 'Siege of Coruscant',
      initiative: 4,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 50,
      xws: 'wolffe-siegeofcoruscant-lsl',
      ability:
        'While you perform a primary [Front Arc] attack, you may spend 1 [Charge] to reroll 1 attack die. While you perform a primary [Rear Arc] attack, you may recover 1 [Charge] to roll 1 additional attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wolffe-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wolffe-siegeofcoruscant-lsl.png',
      charges: { value: 1, recovers: 0 },
      slots: [
        'Talent',
        'Torpedo',
        'Crew',
        'Astromech',
        'Modification',
        'Gunner',
      ],
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Jag”',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 51,
      xws: 'jag-siegeofcoruscant',
      ability:
        'After a friendly ship at range 0-2 in your [Left Arc] or [Right Arc] performs an attack, if you are not strained, you may acquire a lock on the defender.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jag-siegeofcoruscant.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jag-siegeofcoruscant.png',
      standardLoadout: [
        'veterantailgunner',
        'r4pastromech',
        'synchronizedconsole',
      ],
      standard: false,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
    {
      name: '“Jag”',
      caption: 'Siege of Coruscant',
      initiative: 3,
      limited: 1,
      shipAbility: {
        name: 'Born for This',
        text: 'While another friendly ship at range 0-2 defends, if you are not strained, it may spend your focus and evade tokens as if that ship has them. If it does, you gain 1 strain token.',
      },
      cost: 47,
      xws: 'jag-siegeofcoruscant-lsl',
      ability:
        'After a friendly ship at range 0-2 in your [Left Arc] or [Right Arc] performs an attack, if you are not strained, you may acquire a lock on the defender.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jag-siegeofcoruscant-lsl.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jag-siegeofcoruscant-lsl.png',
      slots: ['Torpedo', 'Crew', 'Astromech', 'Modification', 'Gunner'],
      standard: true,
      wildspace: true,
      keywords: ['Clone'],
      epic: true,
    },
  ],
};

export default t;
