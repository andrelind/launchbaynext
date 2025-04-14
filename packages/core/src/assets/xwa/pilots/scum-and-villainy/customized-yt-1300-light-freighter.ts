import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Customized YT-1300 Light Freighter',
  xws: 'customizedyt1300lightfreighter',
  ffg: 47,
  size: 'Large',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Boost' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_CustomizedYT-1300.png',
  pilots: [
    {
      name: 'Freighter Captain',
      initiative: 1,
      limited: 0,
      cost: 6,
      xws: 'freightercaptain',
      text: 'Many spacers make a living traveling the Outer Rim, where the difference between smuggler and legitimate merchant is often murky. On the outskirts of civilization, buyers are rarely so discerning to ask where merchandise came from, at least as long as the price is low enough.',
      slots: ['Missile', 'Illicit', 'Gunner', 'Crew', 'Crew'],
      ffg: 225,
      standard: true,
      epic: true,
      loadout: 24,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/freightercaptain.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/freightercaptain.png',
      caption: '',
    },
    {
      name: 'Han Solo',
      caption: 'The Corellian Kid',
      initiative: 6,
      limited: 1,
      cost: 6,
      xws: 'hansolo',
      ability:
        'While you defend or perform a primary attack, if the attack is obstructed by an obstacle, you may roll 1 additional die.',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Crew',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      ffg: 222,
      standard: true,
      epic: true,
      loadout: 20,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      image: 'https://infinitearenas.com/xw2/images/pilots/hansolo.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/hansolo.png',
    },
    {
      name: 'L3-37',
      caption: 'Droid Revolutionary',
      initiative: 2,
      limited: 1,
      cost: 5,
      xws: 'l337',
      ability:
        'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
        { difficulty: 'White', type: 'Rotate Arc' },
      ],
      slots: [
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Illicit',
        'Modification',
        'Title',
      ],
      ffg: 224,
      standard: true,
      epic: true,
      loadout: 21,
      extended: true,
      keywords: ['Droid', 'Freighter', 'YT-1300'],
      image: 'https://infinitearenas.com/xw2/images/pilots/l337.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/l337.png',
    },
    {
      name: 'Lando Calrissian',
      caption: 'Smooth-talking Gambler',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'landocalrissian',
      ability:
        'After you roll dice, if you are not stressed, you may gain 1 stress token to reroll all of your blank results.',
      slots: [
        'Talent',
        'Missile',
        'Crew',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
        'Gunner',
      ],
      ffg: 223,
      standard: true,
      epic: true,
      loadout: 18,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      image: 'https://infinitearenas.com/xw2/images/pilots/landocalrissian.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/landocalrissian.png',
    },
    {
      name: 'Han Solo',
      initiative: 6,
      limited: 1,
      cost: 6,
      loadout: 0,
      xws: 'hansolo-armedanddangerous',
      ability:
        'While you defend or perform a primary attack, if the attack is obstructed by an obstacle, you may roll 1 additional die.',
      shipAbility: {
        name: 'Coaxium Injectors',
        text: 'After you fully execute a speed 3 or 4 maneuver, you may spend 1 [charge] to perform a red [slam]  action, even while stressed. After you perform a [slam] action, you suffer 1 [crit] unless you expose 1 of your damage cards.',
      },
      image:
        'https://infinitearenas.com/xw2xwa/images/quickbuilds/hansolo-armedanddangerous.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/hansolo-armedanddangerous.png',
      standard: true,
      extended: true,
      keywords: ['Freighter', 'YT-1300'],
      standardLoadout: [
        'chewbacca-armedanddangerous',
        'l337-armedanddangerous',
        'tobiasbeckett-armedanddangerous',
        'landosmillenniumfalcon-armedanddangerous',
      ],
      shipActions: [
        { difficulty: 'White', type: 'Focus' },
        { difficulty: 'White', type: 'Lock' },
        { difficulty: 'Red', type: 'Boost' },
        {
          difficulty: 'White',
          type: 'Rotate Arc',
          linked: { difficulty: 'Red', type: 'Focus' },
        },
      ],
      epic: true,
      caption: 'Armed and Dangerous',
    },
  ],
};

export default t;
