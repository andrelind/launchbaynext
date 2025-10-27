import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: '“Chopper”',
    limited: 1,
    xws: 'chopper',
    sides: [
      {
        title: '“Chopper”',
        type: 'Astromech',
        ability:
          'Action: Spend 1 non-recurring [Charge] from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring [Charge] on an equipped upgrade.',
        slots: ['Astromech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chopper.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chopper.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: '“Genius”',
    limited: 1,
    xws: 'genius',
    sides: [
      {
        title: '“Genius”',
        type: 'Astromech',
        ability:
          'After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/genius.png',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/genius.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2 Astromech',
    limited: 0,
    xws: 'r2astromech',
    sides: [
      {
        title: 'R2 Astromech',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2astromech.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2astromech.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 2, '1': 2, '2': 4, '3': 8 } },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-D2',
    limited: 1,
    xws: 'r2d2',
    sides: [
      {
        title: 'R2-D2',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2d2.png',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2d2.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 7, '3': 11 } },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R3 Astromech',
    limited: 0,
    xws: 'r3astromech',
    sides: [
      {
        title: 'R3 Astromech',
        type: 'Astromech',
        ability:
          'You can maintain up to 2 locks. Each lock must be on a different object. After you perform a [Lock] action, you may acquire a lock.',
        slots: ['Astromech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r3astromech.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r3astromech.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R4 Astromech',
    limited: 0,
    xws: 'r4astromech',
    sides: [
      {
        title: 'R4 Astromech',
        type: 'Astromech',
        ability:
          'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
        slots: ['Astromech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r4astromech.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r4astromech.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R5 Astromech',
    limited: 0,
    xws: 'r5astromech',
    sides: [
      {
        title: 'R5 Astromech',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r5astromech.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r5astromech.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 1, '1': 2, '2': 3, '3': 4 } },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R5-D8',
    limited: 1,
    xws: 'r5d8',
    sides: [
      {
        title: 'R5-D8',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r5d8.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r5d8.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 4, '3': 6 } },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R5-P8',
    limited: 1,
    xws: 'r5p8',
    sides: [
      {
        title: 'R5-P8',
        type: 'Astromech',
        ability:
          'While you perform an attack against a defender in your [Front Arc], you may spend 1 [Charge] to reroll 1 attack die. If the rerolled result is a [Critical Hit] result, suffer 1 [Critical Hit] damage.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r5p8.png',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r5p8.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R5-TK',
    limited: 1,
    xws: 'r5tk',
    sides: [
      {
        title: 'R5-TK',
        type: 'Astromech',
        ability: 'You can perform attacks against friendly ships.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r5tk.png',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r5tk.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R5-X3',
    limited: 1,
    xws: 'r5x3',
    sides: [
      {
        title: 'R5-X3',
        type: 'Astromech',
        charges: { value: 2, recovers: 0 },
        ability:
          'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r5x3.png',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r5x3.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-HA',
    limited: 1,
    xws: 'r2ha',
    sides: [
      {
        title: 'R2-HA',
        type: 'Astromech',
        ability:
          'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2ha.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2ha.png',
        slots: ['Astromech'],
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'BB-8',
    limited: 1,
    xws: 'bb8',
    sides: [
      {
        title: 'BB-8',
        type: 'Astromech',
        ability:
          'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] or [Boost] action.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bb8.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bb8.png',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 2,
        '1': 2,
        '2': 3,
        '3': 4,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 6,
        '8': 6,
      },
    },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'BB Astromech',
    limited: 0,
    xws: 'bbastromech',
    sides: [
      {
        title: 'BB Astromech',
        type: 'Astromech',
        ability:
          'Before you execute a blue maneuver, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bbastromech.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bbastromech.png',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 1,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 3,
        '5': 4,
        '6': 5,
        '7': 5,
        '8': 5,
      },
    },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'M9-G8',
    limited: 1,
    xws: 'm9g8',
    sides: [
      {
        title: 'M9-G8',
        type: 'Astromech',
        ability:
          'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/m9g8.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/m9g8.png',
        slots: ['Astromech'],
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-C4',
    limited: 1,
    xws: 'r2c4',
    sides: [
      {
        title: 'R2-C4',
        type: 'Astromech',
        ability:
          'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2c4.png',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2c4.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R4-P Astromech',
    xws: 'r4pastromech',
    limited: 0,
    sides: [
      {
        title: 'R4-P Astromech',
        type: 'Astromech',
        ability:
          'Before you execute a basic maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r4pastromech.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r4pastromech.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R4-P17',
    xws: 'r4p17',
    limited: 1,
    sides: [
      {
        title: 'R4-P17',
        type: 'Astromech',
        ability:
          'After you fully execute a red maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r4p17.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r4p17.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R4-P44',
    xws: 'r4p44',
    limited: 1,
    sides: [
      {
        title: 'R4-P44',
        type: 'Astromech',
        ability:
          'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
        slots: ['Astromech'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r4p44.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r4p44.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-A6',
    limited: 1,
    xws: 'r2a6',
    sides: [
      {
        ability:
          'After you reveal your dial, you may set your dial to a maneuver of the same bearing of a speed 1 higher or lower.',
        title: 'R2-A6',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2a6.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2a6.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'C1-10P',
    limited: 1,
    xws: 'c110p',
    sides: [
      {
        title: 'C1-10P',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/c110p.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/c110p.png',
        ability:
          'Setup: Equip this side faceup. After you execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        type: 'Astromech',
      },
      {
        title: 'C1-10P (Erratic)',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/c110p-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/c110p-sideb.png',
        ability:
          'After you execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
        slots: ['Astromech'],
        type: 'Astromech',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R1-J5',
    limited: 1,
    xws: 'r1j5',
    sides: [
      {
        ability:
          'While you have 2 or fewer stress tokens, you can perform actions on damage cards even while stressed. After you repair a damage card with the Ship trait, you may spend 1 [Charge] to repair that card again.',
        title: 'R1-J5',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r1j5.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r1j5.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Q7 Astromech',
    limited: 0,
    xws: 'q7astromech',
    sides: [
      {
        ability:
          'While you barrel roll or boost, you can move through and overlap obstacles.',
        title: 'Q7 Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/q7astromech.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/q7astromech.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 2, '2': 2, '3': 2, '4': 3, '5': 3, '6': 3 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-D2',
    limited: 1,
    xws: 'r2d2-republic',
    sides: [
      {
        ability:
          'After you activate, you may spend 1 [Charge] and gain 1 deplete token to repair 1 damage card, recover 1 shield, or remove 1 device at range 0-1.',
        title: 'R2-D2',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2d2-republic.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2d2-republic.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 2, '1': 4, '2': 6, '3': 8 } },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-D2',
    limited: 1,
    xws: 'r2d2-resistance',
    sides: [
      {
        ability:
          'During the End Phase, you may spend 1 [Charge] and 1 shield to remove 1 red token. During the End Phase, if you have no active shields, you may spend 2 [Charge] to recover 1 shield and gain 1 deplete token.',
        title: 'R2-D2',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 4, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2d2-resistance.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2d2-resistance.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R6-D8',
    limited: 1,
    xws: 'r6d8',
    sides: [
      {
        ability:
          'While you perform an attack, you may reroll a number of attack dice up to the number of friendly ships at range 0-3 that have the defender in their [Bullseye Arc].',
        title: 'R6-D8',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r6d8.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r6d8.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R7-A7',
    limited: 1,
    xws: 'r7a7',
    sides: [
      {
        ability:
          'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result.',
        title: 'R7-A7',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r7a7.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r7a7.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 3, '2': 3, '3': 5 } },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R4-B11',
    limited: 1,
    xws: 'r4b11',
    sides: [
      {
        ability:
          'While you perform an attack, you may remove 1 orange or red token from the defender to reroll any number of defense dice.',
        title: 'R4-B11',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r4b11.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r4b11.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Watchful Astromech',
    limited: 0,
    xws: 'watchfulastromech',
    sides: [
      {
        ability:
          "After you perform a [Reload] or [Rotate Arc] action, if you are in an enemy ship's firing arc, you may perform a red [Calculate] action.",
        title: 'Watchful Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/watchfulastromech.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/watchfulastromech.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'L4E-R5',
    limited: 1,
    xws: 'l4er5',
    sides: [
      {
        ability:
          'At the start of the Engagement Phase, you may transfer 1 calculate token to a friendly ship in your firing arc.',
        title: 'L4E-R5',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/l4er5.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/l4er5.png',
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { action: { type: 'Rotate Arc' }, factions: ['resistance'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-A3',
    limited: 1,
    xws: 'r2a3-battleofyavin',
    sides: [
      {
        title: 'R2-A3',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R2-D2',
    limited: 1,
    xws: 'r2d2-battleofyavin',
    sides: [
      {
        title: 'R2-D2',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R2-F2',
    limited: 1,
    xws: 'r2f2-battleofyavin',
    sides: [
      {
        title: 'R2-F2',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R5-D8',
    limited: 0,
    xws: 'r5d8-battleofyavin',
    sides: [
      {
        title: 'R5-D8',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R5-K6',
    limited: 0,
    xws: 'r5k6-battleofyavin',
    sides: [
      {
        title: 'R5-K6',
        type: 'Astromech',
        ability:
          'Action: Spend 1 [Charge] to repair 1 facedown damage card. Action: Repair 1 faceup Ship damage card.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Precise Astromech',
    limited: 0,
    xws: 'preciseastromech-battleofyavin',
    sides: [
      {
        ability:
          'After you perform an action, you may spend 1 [Charge] to perform a red [Lock] action.',
        title: 'Precise Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Targeting Astromech',
    limited: 0,
    xws: 'targetingastromech-battleofyavin',
    sides: [
      {
        ability:
          'After you perform a [Lock] action, you may perform a red [Rotate Arc] action.',
        title: 'Targeting Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R4-P17',
    limited: 1,
    xws: 'r4p17-siegeofcoruscant',
    sides: [
      {
        ability:
          'When you would be dealt a damage card, if you are not defending, you may spend 1 [Charge] and gain 1 strain to discard it instead.',
        title: 'Targeting Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
];

export default t;
