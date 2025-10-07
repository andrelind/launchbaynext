import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'BTL-S8 K-wing',
  xws: 'btls8kwing',
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
    '3BW',
    '3FW',
    '3NW',
  ],
  dialCodes: ['KW'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_K-wing.png',
  pilots: [
    {
      name: 'Esege Tuketu',
      caption: 'Selfless Hero',
      initiative: 3,
      limited: 1,
      cost: 42,
      xws: 'esegetuketu',
      ability:
        'While a friendly ship at range 0-2 defends or performs an attack, it may spend your focus tokens as if that ship has them.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/esegetuketu.png',
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/esegetuketu.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 63,
    },
    {
      name: 'Miranda Doni',
      caption: 'Heavy Hitter',
      initiative: 4,
      limited: 1,
      cost: 40,
      xws: 'mirandadoni',
      ability:
        'While you perform a primary attack, you may either spend 1 shield to roll 1 additional attack die or, if you are not shielded, you may roll 1 fewer attack die to recover 1 shield.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/mirandadoni.png',
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/mirandadoni.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 62,
    },
    {
      name: 'Warden Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 38,
      xws: 'wardensquadronpilot',
      text: "Koensayr Manufacturing's K-wing boasts an advanced SubLight Acceleration Motor and an unprecedented 18 hard points, granting it unrivaled speed and firepower.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wardensquadronpilot.png',
      slots: [
        'Torpedo',
        'Missile',
        'Missile',
        'Crew',
        'Device',
        'Device',
        'Modification',
        'Gunner',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wardensquadronpilot.png',
      standard: false,
      wildspace: true,
      epic: true,
      ffg: 64,
    },
  ],
};

export default t;
