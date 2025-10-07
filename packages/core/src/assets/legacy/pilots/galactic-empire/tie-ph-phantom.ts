import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ph Phantom',
  xws: 'tiephphantom',
  size: 'Small',
  dial: [
    '1TW',
    '1BW',
    '1NW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
  ],
  dialCodes: ['TPh'],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Cloak' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEPhantom.png',
  pilots: [
    {
      name: '“Echo”',
      caption: 'Slippery Trickster',
      initiative: 4,
      limited: 1,
      cost: 51,
      xws: 'echo',
      ability:
        'While you decloak, you must use the [2 [Bank Left]) or [2 [Bank Right]) template instead of the [2 [Straight]) template.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/echo.png',
      shipAbility: {
        name: 'Stygium Array',
        text: 'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/echo.png',
      ffg: 132,
    },
    {
      name: '“Whisper”',
      caption: 'Soft-Spoken Slayer',
      initiative: 5,
      limited: 1,
      cost: 60,
      xws: 'whisper',
      ability: 'After you perform an attack that hits, gain 1 evade token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/whisper.png',
      shipAbility: {
        name: 'Stygium Array',
        text: 'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/whisper.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 131,
    },
    {
      name: 'Imdaar Test Pilot',
      initiative: 3,
      limited: 0,
      cost: 43,
      xws: 'imdaartestpilot',
      text: 'The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom achieves what many thought was impossible: a small starfighter equipped with an advanced cloaking device.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/imdaartestpilot.png',
      shipAbility: {
        name: 'Stygium Array',
        text: 'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/imdaartestpilot.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 134,
    },
    {
      name: 'Sigma Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 48,
      xws: 'sigmasquadronace',
      text: 'Featuring a hyperdrive and shields, the TIE phantom is also equipped with five laser cannons, giving it substantial firepower for an Imperial fighter.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sigmasquadronace.png',
      shipAbility: {
        name: 'Stygium Array',
        text: 'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sigmasquadronace.png',
      standard: true,
      wildspace: true,
      keywords: ['TIE'],
      epic: true,
      ffg: 133,
    },
  ],
};

export default t;
