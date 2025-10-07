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
  faction: 'Rebel Alliance',
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
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_FangFighter.png',
  pilots: [
    {
      name: 'Fenn Rau',
      caption: 'Mandalorian Protector',
      initiative: 6,
      limited: 1,
      cost: 55,
      xws: 'fennrau-fangfighter',
      ability:
        'Before a friendly ship at range 1-2 engages, if there is an enemy ship in its [Front Arc] at range 1, that friendly ship may remove 1 non-lock red token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/fennrau-fangfighter.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/fennrau-fangfighter.png',
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Mandalorian'],
      ffg: 1018,
    },
    {
      name: 'Bodica Venj',
      caption: 'Wrathful Warrior',
      initiative: 4,
      limited: 1,
      cost: 56,
      xws: 'bodicavenj',
      ability:
        'After another friendly ship defends, if you are not depleted, you may perform a bonus primary attack against the attacker. If you do, after performing that attack, gain 1 deplete token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/bodicavenj.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/bodicavenj.png',
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Mandalorian'],
      ffg: 1019,
    },
    {
      name: 'Dirk Ullodin',
      caption: 'Aspiring Commando',
      initiative: 3,
      limited: 1,
      cost: 46,
      xws: 'dirkullodin',
      ability:
        'After you fully execute a red maneuver or perform a red action, you may acquire a lock on an enemy ship in your [Front Arc] at range 1.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dirkullodin.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dirkullodin.png',
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Mandalorian'],
      ffg: 1020,
    },
    {
      name: 'Clan Wren Volunteer',
      caption: 'Unlikely Ally',
      initiative: 3,
      limited: 2,
      cost: 44,
      xws: 'clanwrenvolunteer',
      ability:
        'While you perform an attack at range 1, if the speed of your revealed maneuver matches that of a friendly ship at range 1, you may reroll 1 attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/clanwrenvolunteer.png',
      shipAbility: {
        name: 'Concordia Faceoff',
        text: "While you defend, if the attack range is 1 and you are in the attacker's [Front Arc], change 1 result to an [Evade] result.",
      },
      slots: ['Talent', 'Torpedo', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/clanwrenvolunteer.png',
      standard: true,
      wildspace: true,
      epic: true,
      keywords: ['Mandalorian'],
      ffg: 1021,
    },
  ],
};

export default t;
