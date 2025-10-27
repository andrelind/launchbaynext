import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Kraken',
    limited: 1,
    xws: 'kraken',
    sides: [
      {
        title: 'Kraken',
        type: 'Tactical Relay',
        ability:
          'During the End Phase, you may choose up to 3 friendly ships at range 0-3. If you do, each of these ships does not remove 1 calculate token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/kraken.png',
        slots: ['Tactical Relay'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/kraken.png',
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
      },
    ],
    restrictions: [{ factions: ['separatistalliance'] }, {}],
    cost: { value: 10 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'TV-94',
    xws: 'tv94',
    limited: 1,
    sides: [
      {
        title: 'TV-94',
        type: 'Tactical Relay',
        ability:
          'While a friendly ship at range 0-3 performs a primary attack against a defender in its [Bullseye Arc], if there are 2 or fewer attack dice, it may spend 1 calculate token to add 1 [Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tv94.png',
        slots: ['Tactical Relay'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tv94.png',
      },
    ],
    restrictions: [{ factions: ['separatistalliance'] }, {}],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'K2-B4',
    xws: 'k2b4',
    limited: 1,
    sides: [
      {
        title: 'K2-B4',
        type: 'Tactical Relay',
        ability:
          'While a friendly ship at range 0-3 defends, it may spend 1 calculate token. If it does, add 1 [Evade] result unless the attacker chooses to gain 1 strain token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/k2b4.png',
        slots: ['Tactical Relay'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/k2b4.png',
      },
    ],
    restrictions: [{ factions: ['separatistalliance'] }, {}],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'TA-175',
    xws: 'ta175',
    limited: 1,
    sides: [
      {
        title: 'TA-175',
        type: 'Tactical Relay',
        ability:
          'After a friendly ship at range 0-3 with [Calculate] on its action bar is destroyed, each friendly ship at range 0-3 with [Calculate] in its action bar gains 1 calculate token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ta175.png',
        slots: ['Tactical Relay'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ta175.png',
      },
    ],
    restrictions: [{ factions: ['separatistalliance'] }, {}],
    cost: { value: 11 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Kalani',
    limited: 1,
    xws: 'kalani',
    sides: [
      {
        title: 'Kalani',
        type: 'Tactical Relay',
        slots: ['Tactical Relay'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/kalani.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/kalani.png',
        ability:
          'After an enemy ship executes a maneuver, if it is in the [Bullseye Arc] of a friendly ship at range 0-3, you may spend 1 [Charge]. If you do, that friendly ship acquires a lock on that enemy ship, then gains 1 stress token.',
        charges: { value: 3, recovers: 3 },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
