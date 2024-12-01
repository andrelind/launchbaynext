import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'TIE/ph Phantom',
  xws: 'tiephphantom',
  ffg: 27,
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
  ability: {
    name: 'Stygium Array',
    text: 'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
  },
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-empire/I_TIEPhantom.png',
  pilots: [
    {
      name: '“Echo”',
      caption: 'Slippery Trickster',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'echo',
      ability:
        'While you decloak, you must use the (2 [Bank Left]) or (2 [Bank Right]) template instead of the (2 [Straight]) template.',
      slots: ['Talent', 'Talent', 'Sensor', 'Modification', 'Gunner'],
      ffg: 132,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/echo.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/echo.png',
    },
    {
      name: '“Whisper”',
      caption: 'Soft-Spoken Slayer',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'whisper',
      ability: 'After you perform an attack that hits, gain 1 evade token.',
      slots: ['Talent', 'Sensor', 'Modification', 'Modification', 'Gunner'],
      ffg: 131,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 13,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/whisper.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/whisper.png',
    },
    {
      name: 'Imdaar Test Pilot',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'imdaartestpilot',
      text: 'The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom achieves what many thought was impossible: a small starfighter equipped with an advanced cloaking device.',
      slots: ['Sensor', 'Modification', 'Gunner'],
      ffg: 134,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/imdaartestpilot.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/imdaartestpilot.png',
      caption: '',
    },
    {
      name: 'Sigma Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 4,
      xws: 'sigmasquadronace',
      text: 'Featuring a hyperdrive and shields, the TIE phantom is also equipped with five laser cannons, giving it substantial firepower for an Imperial fighter.',
      slots: ['Talent', 'Sensor', 'Modification', 'Gunner'],
      ffg: 133,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/sigmasquadronace.png',
      artwork: 'https://infinitearenas.com/xw2/images/artwork/pilots/sigmasquadronace.png',
      caption: '',
    },
    {
      name: '“Whisper”',
      caption: 'Unseen Assailant',
      initiative: 5,
      limited: 1,
      cost: 6,
      charges: { value: 2, recovers: 0 },
      xws: 'whisper-ssl',
      ability: 'After you perform an attack, you may spend 1 [Charge] to perform a [Cloak] action.',
      shipAbility: {
        name: 'Stygium Array',
        text: 'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      standardLoadout: ['withoutatrace-tiephphantom', 'relaysystem-tiephphantom', 'stygiumreserve-tiephphantom'],
      image: 'https://infinitearenas.com/xw2/images/quickbuilds/whisper-tiephphantom.png',
      artwork: '',
      standard: true,
      extended: true,
      epic: true,
    },
    {
      name: '“Echo”',
      caption: 'Copycat',
      initiative: 4,
      limited: 1,
      cost: 6,
      charges: { value: 1, recovers: 1 },
      xws: 'echo-ssl',
      ability:
        'After an enemy ship at range 0-1 performs an action on its action bar, you may spend 1 [Charge] to perform the same action, treating it as white.',
      shipAbility: {
        name: 'Stygium Array',
        text: 'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
      },
      standardLoadout: ['silenthunter-tiephphantom', 'stealthgambit-tiephphantom', 'manualailerons-tiephphantom'],
      image: 'https://infinitearenas.com/xw2/images/quickbuilds/whisper-tiephphantom.png',
      artwork: 'https://infinitearenas.com/xw2/images/quickbuilds/echo-tiephphantom.png',
      standard: true,
      extended: true,
      epic: true,
    },
  ],
};

export default t;
