import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Quadrijet Transfer Spacetug',
  xws: 'quadrijettransferspacetug',
  size: 'Small',
  dial: [
    '1AR',
    '1DR',
    '1TW',
    '1BW',
    '1FW',
    '1NW',
    '1YW',
    '2SR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
  ],
  dialCodes: ['QUA'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Quadjumper.png',
  pilots: [
    {
      name: 'Constable Zuvio',
      caption: 'Missing Sheriff of Niima Outpost',
      initiative: 4,
      limited: 1,
      cost: 30,
      xws: 'constablezuvio',
      ability:
        'If you would drop a device, you may launch it using a [1 [Straight]) template instead.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/constablezuvio.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text: 'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Talent', 'Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/constablezuvio.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 161,
    },
    {
      name: 'Jakku Gunrunner',
      initiative: 1,
      limited: 0,
      cost: 28,
      xws: 'jakkugunrunner',
      text: 'The Quadrijet transfer spacetug, commonly called a “Quadjumper,” is nimble in space and atmosphere alike, making it popular among both smugglers and explorers.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/jakkugunrunner.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text: 'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/jakkugunrunner.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 164,
    },
    {
      name: 'Sarco Plank',
      caption: 'The Scavenger',
      initiative: 2,
      limited: 1,
      cost: 29,
      xws: 'sarcoplank',
      ability:
        'While you defend, you may treat your agility value as equal to the speed of the maneuver you executed this round.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sarcoplank.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text: 'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Talent', 'Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sarcoplank.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 162,
    },
    {
      name: 'Unkar Plutt',
      caption: 'Miserly Portion Master',
      initiative: 2,
      limited: 1,
      cost: 29,
      xws: 'unkarplutt',
      ability:
        'At the start of the Engagement Phase, if there are one or more other ships at range 0, you and each other ship at range 0 gain 1 tractor token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/unkarplutt.png',
      shipAbility: {
        name: 'Spacetug Tractor Array',
        text: 'Action: Choose a ship in your [Front Arc] at range 1. That ship gains 1 tractor token, or 2 tractor tokens if it is in your [Bullseye Arc] at range 1.',
      },
      slots: ['Crew', 'Device', 'Illicit', 'Modification', 'Tech'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/unkarplutt.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 163,
    },
  ],
};

export default t;
