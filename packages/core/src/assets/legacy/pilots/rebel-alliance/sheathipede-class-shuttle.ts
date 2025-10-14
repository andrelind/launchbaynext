import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Sheathipede-class Shuttle',
  xws: 'sheathipedeclassshuttle',
  size: 'Small',
  dial: [
    '1SR',
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3KR',
    '4FR',
  ],
  dialCodes: ['ShS'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Coordinate' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_Sheathipede.png',
  pilots: [
    {
      name: '“Zeb” Orrelios',
      caption: 'Spectre-4',
      initiative: 2,
      limited: 1,
      cost: 30,
      xws: 'zeborrelios-sheathipedeclassshuttle',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/zeborrelios-sheathipedeclassshuttle.png',
      shipAbility: {
        name: 'Comms Shuttle',
        text: 'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/zeborrelios-sheathipedeclassshuttle.png',
      standard: true,
      wildspace: true,
      keywords: ['Spectre'],
      epic: true,
      ffg: 40,
    },
    {
      name: 'AP-5',
      caption: 'Escaped Analyst Droid',
      initiative: 1,
      limited: 1,
      cost: 31,
      xws: 'ap5',
      ability:
        'While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ap5.png',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Coordinate' },
      ],
      shipAbility: {
        name: 'Comms Shuttle',
        text: 'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ap5.png',
      standard: true,
      wildspace: true,
      keywords: ['Droid', 'Spectre'],
      epic: true,
      ffg: 41,
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 37,
      xws: 'ezrabridger-sheathipedeclassshuttle',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade]/[Hit] results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ezrabridger-sheathipedeclassshuttle.png',
      force: { value: 1, recovers: 1, side: ['light'] },
      shipAbility: {
        name: 'Comms Shuttle',
        text: 'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Force Power', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ezrabridger-sheathipedeclassshuttle.png',
      standard: true,
      wildspace: true,
      keywords: ['Light Side', 'Spectre'],
      epic: true,
      ffg: 39,
    },
    {
      name: 'Fenn Rau',
      caption: 'Reluctant Rebel',
      initiative: 6,
      limited: 1,
      cost: 45,
      xws: 'fennrau-sheathipedeclassshuttle',
      ability:
        'Before an enemy ship in your firing arc engages, if you are not stressed, you may gain 1 stress token. If you do, that ship cannot spend tokens to modify dice while it performs an attack during this phase.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/fennrau-sheathipedeclassshuttle.png',
      shipAbility: {
        name: 'Comms Shuttle',
        text: 'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
      },
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/fennrau-sheathipedeclassshuttle.png',
      standard: true,
      wildspace: true,
      keywords: ['Mandalorian', 'Spectre'],
      epic: true,
      ffg: 38,
    },
  ],
};

export default t;
