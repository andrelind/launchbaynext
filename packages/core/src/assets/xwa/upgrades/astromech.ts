import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 1,
    xws: 'chopper',
    sides: [
      {
        title: '“Chopper”',
        type: 'Astromech',
        ability:
          'Action: Spend 1 non-recurring [Charge] from another equipped upgrade to recover 1 shield. Action: Spend 2 shields to recover 1 non-recurring [Charge] on an equipped upgrade.',
        slots: ['Astromech'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/chopper.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/chopper.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'genius',
    sides: [
      {
        title: '“Genius”',
        type: 'Astromech',
        ability:
          'After you fully execute a maneuver, if you have not dropped or launched a device this round, you may drop 1 bomb.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/genius.png',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/genius.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
        image: 'https://infinitearenas.com/xw2/images/upgrades/r2astromech.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2astromech.png',
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2d2',
    sides: [
      {
        title: 'R2-D2',
        type: 'Astromech',
        ability:
          'After you reveal your dial, you may spend 1 [Charge] and gain 1 disarm token to recover 1 shield.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r2d2.png',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2d2.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'r3astromech',
    sides: [
      {
        title: 'R3 Astromech',
        type: 'Astromech',
        ability:
          'You can maintain up to 2 locks. Each lock must be on a different object. After you perform a [Lock] action, you may acquire a lock.',
        slots: ['Astromech'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/r3astromech.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r3astromech.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'r4astromech',
    sides: [
      {
        title: 'R4 Astromech',
        type: 'Astromech',
        ability:
          'Decrease the difficulty of your speed 1-2 basic maneuvers ([Turn Left], [Bank Left], [Straight], [Bank Right], [Turn Right]).',
        slots: ['Astromech'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/r4astromech.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r4astromech.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
        image: 'https://infinitearenas.com/xw2/images/upgrades/r5astromech.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r5astromech.png',
      },
    ],
    cost: { value: 7 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
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
        image: 'https://infinitearenas.com/xw2/images/upgrades/r5d8.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r5d8.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r5p8',
    sides: [
      {
        title: 'R5-P8',
        type: 'Astromech',
        ability:
          'While you perform an attack against a defender in your [Front Arc], you may spend 1 [Charge] to reroll 1 attack die. If the rerolled result is a [Critical Hit] result, suffer 1 [Critical Hit] damage.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r5p8.png',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r5p8.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r5tk',
    sides: [
      {
        title: 'R5-TK',
        type: 'Astromech',
        ability: 'You can perform attacks against friendly ships.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r5tk.png',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r5tk.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r5x3',
    sides: [
      {
        title: 'R5-X3',
        type: 'Astromech',
        charges: { value: 2, recovers: 0 },
        ability:
          'Before you activate or engage, you may spend 1 [Charge] to ignore obstacles until the end of this phase.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r5x3.png',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r5x3.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2ha',
    sides: [
      {
        title: 'R2-HA',
        type: 'Astromech',
        ability:
          'While you defend, you may spend your lock on the attacker to reroll any number of your defense dice.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r2ha.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2ha.png',
        slots: ['Astromech'],
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'bb8',
    sides: [
      {
        title: 'BB-8',
        type: 'Astromech',
        ability:
          'During the System Phase, you may spend 1 [Charge] to perform a [Barrel Roll] or [Boost] action.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bb8.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bb8.png',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'bbastromech',
    sides: [
      {
        title: 'BB Astromech',
        type: 'Astromech',
        ability:
          'During the System Phase, you may spend 1 [Charge] to perform a [Barrel Roll] action.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bbastromech.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bbastromech.png',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'm9g8',
    sides: [
      {
        title: 'M9-G8',
        type: 'Astromech',
        ability:
          'While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/m9g8.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/m9g8.png',
        slots: ['Astromech'],
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
          'https://infinitearenas.com/xw2/images/upgrades/r4pastromech.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r4pastromech.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 3 },
    extended: true,
  },
  {
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
        image: 'https://infinitearenas.com/xw2/images/upgrades/r4p17.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r4p17.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 4 },
    extended: true,
  },
  {
    xws: 'r4p44',
    limited: 1,
    sides: [
      {
        title: 'R4-P44',
        type: 'Astromech',
        ability:
          'After you fully execute a red maneuver, if there is an enemy ship in your [Bullseye Arc], gain 1 calculate token.',
        slots: ['Astromech'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/r4p44.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r4p44.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 2 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'r2c4',
    sides: [
      {
        title: 'R2-C4',
        type: 'Astromech',
        ability:
          'While you perform an attack, you may spend 1 evade token to change 1 [Focus] result to a [Hit] result.',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r2c4.png',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2c4.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 3 },
    extended: true,
  },
  {
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
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2a6.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r2a6.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: false,
    epic: true,
    cost: { value: 6 },
    extended: true,
  },
  {
    limited: 1,
    xws: 'c110p',
    sides: [
      {
        title: 'C1-10P',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/c110p.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/c110p.png',
        ability:
          'Setup: Equip this side faceup. After you fully execute a maneuver, you may spend 1 [Charge] to perform a red [Evade] action, even while stressed. During the End Phase, if this card has 0 active [Charge], flip it.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        type: 'Astromech',
      },
      {
        title: 'C1-10P (Erratic)',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/c110p-sideb.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/c110p-sideb.png',
        ability:
          'After you fully execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token.',
        slots: ['Astromech'],
        type: 'Astromech',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    epic: true,
    cost: { value: 10 },
    extended: true,
  },
  {
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
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r1j5.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r1j5.png',
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    cost: { value: 5 },
    extended: true,
  },
  {
    xws: 'r2d2-republic',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        ability:
          'After you activate, you may spend 1 [Charge] and gain 1 deplete token to repair 1 damage card, recover 1 shield, or remove 1 device at range 0-1.',
        title: 'R2-D2',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2d2-republic.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/r2d2-republic.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    xws: 'r2d2-resistance',
    limited: 1,
    cost: { value: 8 },
    sides: [
      {
        ability:
          'During the End Phase, you may spend 1 [Charge] and 1 [Shield] to remove 1 red token. During the End Phase, if you have no active [Shield], you may spend 2 [Charge] to recover 1 [Shield] and gain 1 deplete token.',
        title: 'R2-D2',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 4, recovers: 0 },
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r2d2-resistance.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/r2d2-resistance.png',
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    xws: 'r6d8',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'While you perform an attack, you may reroll a number of attack dice up to the number of friendly ships at range 0-3 that have the defender in their [Bullseye Arc].',
        title: 'R6-D8',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r6d8.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r6d8.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Resistance'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'q7astromech',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'While you barrel roll or boost, you can move through and overlap obstacles.',
        title: 'Q7 Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/q7astromech.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/q7astromech.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'r7a7',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result.',
        title: 'R7-A7',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r7a7.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r7a7.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'r4b11',
    limited: 1,
    cost: { value: 3 },
    sides: [
      {
        ability:
          'While you perform an attack, you may remove 1 orange or red token from the defender to reroll any number of defense dice.',
        title: 'R4-B11',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/r4b11.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/r4b11.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Scum and Villainy'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'watchfulastromech',
    standard: true,
    sides: [
      {
        ability:
          "After you perform a [Reload] or [Rotate Arc] action, if you are in an enemy ship's firing arc, you may perform a red [Calculate] action.",
        title: 'Watchful Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/watchfulastromech.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/watchfulastromech.png',
      },
    ],
    cost: { value: 2 },
    epic: true,
    extended: true,
  },
  {
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
          'https://infinitearenas.com/xw2/images/artwork/upgrades/l4er5.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/l4er5.png',
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
    cost: { value: 3 },
    restrictions: [
      { factions: ['Resistance'] },
      { action: { type: 'Rotate Arc' } },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'r2a3-battleoverendor',
    sides: [
      {
        ability:
          'After you perform an action, you may spend 1 [Charge] to acquire a lock.',
        title: 'R2-A3',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 1, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'stabilizingastromech-battleoverendor',
    sides: [
      {
        ability:
          'After you fully execute a maneuver, you may spend 1 [Charge] to perform a white action, even while stressed.',
        title: 'Stabilizing Astromech',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 1, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    limited: 0,
    xws: 'modifiedr4punit-battleoverendor',
    sides: [
      {
        ability:
          'efore you execute a red maneuver, you may spend 1 [Charge]. If you do, while you execute that maneuver, reduce its difficulty.',
        title: 'Modified R4-P Unit',
        type: 'Astromech',
        slots: ['Astromech'],
        charges: { value: 1, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    name: 'BB-8',
    limited: 1,
    xws: 'bb8-evacuationofdqar',
    sides: [
      {
        title: 'BB-8',
        type: 'Astromech',
        ability:
          'During the System Phase, you may spend 1[charge] to perform a [barrel roll] or [boost] action.\n\nBefore you engage, you may spend 1[charge] and gain a strain token. If you do, you may remove 1 disarm token.',
        slots: ['Astromech'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R0 Astromech',
    limited: 0,
    xws: 'r0astromech-evacuationofdqar',
    sides: [
      {
        title: 'R0 Astromech',
        type: 'Astromech',
        ability:
          'After you reveal a basic maneuver, you may reduce its difficulty. If you do, after the Check Difficulty step, gain 1 strain token.',
        slots: ['Astromech'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R5-X3',
    limited: 0,
    xws: 'r5x3-evacuationofdqar',
    sides: [
      {
        title: 'R5-X3',
        type: 'Astromech',
        ability:
          'Before you activate or engage, you may spend 1[charge] to ignore obstacles until the end of this phase.',
        charges: { value: 2, recovers: 0 },
        slots: ['Astromech'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Black Squadron R4',
    limited: 0,
    xws: 'blacksquadronr4-evacuationofdqar',
    sides: [
      {
        title: 'Black Squadron R4',
        type: 'Astromech',
        ability:
          'After you fully execute a blue maneuver, you may spend 1[charge] to remove all of your stress tokens.',
        charges: { value: 2, recovers: 0 },
        slots: ['Astromech'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
];

export default t;
