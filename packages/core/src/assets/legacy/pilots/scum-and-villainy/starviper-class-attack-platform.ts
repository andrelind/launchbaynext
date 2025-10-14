import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'StarViper-class Attack Platform',
  xws: 'starviperclassattackplatform',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3BW',
    '3FB',
    '3NW',
    '3PR',
    '4FW',
  ],
  dialCodes: ['SV'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_StarViper.png',
  pilots: [
    {
      name: 'Black Sun Assassin',
      initiative: 3,
      limited: 0,
      cost: 45,
      xws: 'blacksunassassin',
      text: 'Although assassinations can be handled with a shot in the dark or a dire substance added to a drink, a flaming shuttle tumbling from the sky sends a special kind of message.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/blacksunassassin.png',
      shipAbility: {
        name: 'Microthrusters',
        text: 'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/blacksunassassin.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 181,
    },
    {
      name: 'Black Sun Enforcer',
      initiative: 2,
      limited: 0,
      cost: 42,
      xws: 'blacksunenforcer',
      text: 'Prince Xizor himself collaborated with MandalMotors to design the StarViper-class attack platform, one of the most formidable starfighters in the galaxy.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/blacksunenforcer.png',
      shipAbility: {
        name: 'Microthrusters',
        text: 'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Tech', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/blacksunenforcer.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 182,
    },
    {
      name: 'Dalan Oberos',
      caption: 'Elite Bounty Hunter',
      initiative: 4,
      limited: 1,
      cost: 46,
      xws: 'dalanoberos-starviperclassattackplatform',
      ability:
        'After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90°.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dalanoberos-starviperclassattackplatform.png',
      shipAbility: {
        name: 'Microthrusters',
        text: 'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dalanoberos-starviperclassattackplatform.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 179,
    },
    {
      name: 'Guri',
      caption: 'Prince Xizor’s Bodyguard',
      initiative: 5,
      limited: 1,
      cost: 59,
      xws: 'guri',
      ability:
        'At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/guri.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      shipAbility: {
        name: 'Microthrusters',
        text: 'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/guri.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid'],
      epic: true,
      ffg: 178,
    },
    {
      name: 'Prince Xizor',
      caption: 'Black Sun Kingpin',
      initiative: 4,
      limited: 1,
      cost: 46,
      xws: 'princexizor',
      ability:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 [Hit] or [Critical Hit] damage. If it does, cancel 1 matching result.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/princexizor.png',
      shipAbility: {
        name: 'Microthrusters',
        text: 'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
      },
      slots: ['Talent', 'Tech', 'Torpedo', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/princexizor.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 180,
    },
  ],
};

export default t;
