import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Fang Fighter',
  xws: 'fangfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2ER',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '2RR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
    '4KR',
    '5FW',
  ],
  dialCodes: ['Fng'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
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
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_FangFighter.png',
  pilots: [
    {
      name: 'Fenn Rau',
      caption: 'Skull Leader',
      initiative: 6,
      limited: 1,
      cost: 69,
      xws: 'fennrau',
      ability:
        'While you defend or perform an attack, if the attack range is 1, you may roll 1 additional die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/fennrau.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/fennrau.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      epic: true,
      ffg: 155,
    },
    {
      name: 'Joy Rekkoff',
      caption: 'Skull Squadron Ace',
      initiative: 4,
      limited: 1,
      cost: 45,
      xws: 'joyrekkoff',
      ability:
        'While you perform an attack, you may spend 1 [Charge] from an equipped [Torpedo] upgrade. If you do, the defender rolls 1 fewer defense die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/joyrekkoff.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/joyrekkoff.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      epic: true,
      ffg: 157,
    },
    {
      name: 'Kad Solus',
      caption: 'Skilled Commando',
      initiative: 4,
      limited: 1,
      cost: 46,
      xws: 'kadsolus',
      ability: 'After you fully execute a red maneuver, gain 2 focus tokens.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kadsolus.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kadsolus.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      epic: true,
      ffg: 158,
    },
    {
      name: 'Old Teroch',
      caption: 'Mandalorian Mentor',
      initiative: 5,
      limited: 1,
      cost: 57,
      xws: 'oldteroch',
      ability:
        'At the start of the Engagement Phase, you may choose 1 enemy ship at range 1. If you do and you are in its [Front Arc], it removes all of its green tokens.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/oldteroch.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/oldteroch.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      epic: true,
      ffg: 156,
    },
    {
      name: 'Skull Squadron Pilot',
      initiative: 4,
      limited: 0,
      cost: 44,
      xws: 'skullsquadronpilot',
      text: "The aces of Skull Squadron favor an aggressive approach, using their craft's pivot wing technology to achieve unmatched agility in the pursuit of their quarry.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/skullsquadronpilot.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/skullsquadronpilot.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      epic: true,
      ffg: 159,
    },
    {
      name: 'Zealous Recruit',
      initiative: 1,
      limited: 0,
      cost: 41,
      xws: 'zealousrecruit',
      text: "Mandalorian Fang fighter pilots must master the Concordia Faceoff maneuver, leveraging their ships' narrow attack profile to execute deadly head-on charges.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zealousrecruit.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zealousrecruit.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      epic: true,
      ffg: 160,
    },
    {
      name: 'Mandalorian Royal Guard',
      initiative: 4,
      limited: 2,
      cost: 45,
      xws: 'mandalorianroyalguard',
      ability:
        'While a friendly non-small ship defends, if you are in the attack arc, you may gain 1 deplete and 1 strain token. If you do, the defender may change 1 result to an [Evade] result.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/mandalorianroyalguard.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/mandalorianroyalguard.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      caption: 'Selfless Protector',
      epic: true,
      ffg: 1056,
    },
    {
      name: 'Tor Phun',
      caption: 'Direct Pressure',
      initiative: 3,
      limited: 1,
      cost: 47,
      xws: 'torphun',
      ability:
        'After you perform an attack, if the defender was destroyed, you may perform an action, even while stressed. Then you may gain 2 strain tokens to perform a bonus attack.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/torphun.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/torphun.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian'],
      epic: true,
      ffg: 1057,
    },
  ],
};

export default t;
