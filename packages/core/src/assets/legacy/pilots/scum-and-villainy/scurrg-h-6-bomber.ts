import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Scurrg H-6 bomber',
  xws: 'scurrgh6bomber',
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  dialCodes: ['SRG'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Scurrg.png',
  pilots: [
    {
      name: 'Captain Nym',
      caption: 'Captain of the Lok Revenants',
      initiative: 5,
      limited: 1,
      cost: 46,
      xws: 'captainnym',
      ability:
        'Before a friendly bomb or mine would detonate, you may spend 1 [Charge] to prevent it from detonating. While you defend against an attack obstructed by a bomb or mine, roll 1 additional defense die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captainnym.png',
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captainnym.png',
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'Lok Revenant',
      initiative: 2,
      limited: 0,
      cost: 42,
      xws: 'lokrevenant',
      text: 'The Nubian Design Collective crafted the Scurrg H-6 Bomber with combat versatility in mind, arming it with powerful shields and a bristling array of destructive weaponry.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lokrevenant.png',
      slots: [
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lokrevenant.png',
      standard: true,
      wildspace: true,
      epic: true,
    },
    {
      name: 'Sol Sixxa',
      caption: 'Cunning Commander',
      initiative: 3,
      limited: 1,
      cost: 44,
      xws: 'solsixxa',
      ability:
        'If you would drop a device using a [1 [Straight]] template, you may drop it using any other speed 1 template instead.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/solsixxa.png',
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Title',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/solsixxa.png',
      standard: true,
      wildspace: true,
      epic: true,
    },
  ],
};

export default t;
