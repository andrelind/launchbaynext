import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Alpha-class Star Wing',
  xws: 'alphaclassstarwing',
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FR',
  ],
  dialCodes: ['SW'],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_AlphaStarwing.png',
  pilots: [
    {
      name: 'Lieutenant Karsabi',
      caption: 'Brash Noble',
      initiative: 3,
      limited: 1,
      cost: 33,
      xws: 'lieutenantkarsabi',
      ability:
        'After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token.',
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lieutenantkarsabi.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lieutenantkarsabi.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 136,
    },
    {
      name: 'Major Vynder',
      caption: 'Pragmatic Survivor',
      initiative: 4,
      limited: 1,
      cost: 38,
      xws: 'majorvynder',
      ability:
        'While you defend, if you are disarmed, roll 1 additional defense die.',
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/majorvynder.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/majorvynder.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 135,
    },
    {
      name: 'Nu Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 32,
      xws: 'nusquadronpilot',
      text: 'With a design inspired by other Cygnus Spaceworks vessels, the Alpha-class star wing is a versatile craft assigned to Imperial Navy specialist units that need a starfighter they can outfit for multiple roles.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/nusquadronpilot.png',
      slots: ['Sensor', 'Torpedo', 'Missile', 'Modification', 'Configuration'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/nusquadronpilot.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 138,
    },
    {
      name: 'Rho Squadron Pilot',
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'rhosquadronpilot',
      text: 'The elite pilots of Rho Squadron instill terror in the Rebellion, using both the Xg-1 assault configuration and Os-1 arsenal loadout of the Alpha-class star wing to devastating effect.',
      slots: [
        'Talent',
        'Sensor',
        'Torpedo',
        'Missile',
        'Modification',
        'Configuration',
      ],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/rhosquadronpilot.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/rhosquadronpilot.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 137,
    },
  ],
};

export default t;
