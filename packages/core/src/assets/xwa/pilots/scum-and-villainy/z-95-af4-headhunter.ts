import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Z-95-AF4 Headhunter',
  xws: 'z95af4headhunter',
  ffg: 38,
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
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Z-95.png',
  pilots: [
    {
      name: 'Binayre Pirate',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'binayrepirate',
      text: "Operating from the Double Worlds, Talus and Tralus, Kath Scarlet's gang of smugglers and pirates would never be described as reputable or dependable—even by other criminals.",
      slots: ['Illicit', 'Modification'],
      ffg: 173,
      standard: true,
      epic: true,
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/binayrepirate.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/binayrepirate.png',
      caption: '',
    },
    {
      name: 'Black Sun Soldier',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'blacksunsoldier',
      text: "The vast and influential Black Sun crime syndicate can always find a use for talented pilots, provided they aren't particular about how they earn their credits.",
      slots: ['Talent', 'Illicit', 'Modification'],
      ffg: 172,
      standard: true,
      epic: true,
      loadout: 9,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/blacksunsoldier.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/blacksunsoldier.png',
      caption: '',
    },
    {
      name: 'Kaa’to Leeachos',
      caption: 'Imposing Marauder',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'kaatoleeachos',
      ability:
        'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      ffg: 170,
      standard: true,
      epic: true,
      loadout: 15,
      extended: true,
      keywords: ['Bounty Hunter'],
      image: 'https://infinitearenas.com/xw2/images/pilots/kaatoleeachos.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/kaatoleeachos.png',
    },
    {
      name: 'N’dru Suhlak',
      caption: 'Hunt Saboteur',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'ndrusuhlak',
      ability:
        'While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die.',
      slots: ['Talent', 'Missile', 'Missile', 'Illicit'],
      ffg: 169,
      standard: true,
      epic: true,
      loadout: 11,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/ndrusuhlak.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/ndrusuhlak.png',
    },
    {
      name: 'Nashtah Pup',
      caption: 'Contingency Plan',
      initiative: 0,
      limited: 1,
      cost: 0,
      xws: 'nashtahpup',
      ability:
        "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship [Charge] of the friendly, destroyed Hound's Tooth.",
      slots: [],
      ffg: 171,
      standard: true,
      epic: true,
      loadout: 0,
      extended: true,
      image: 'https://infinitearenas.com/xw2/images/pilots/nashtahpup.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/nashtahpup.png',
    },
    {
      name: 'Bossk',
      caption: 'Fearsome Hunter',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'bossk-z95af4headhunter',
      ability:
        'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      slots: ['Talent', 'Talent', 'Missile', 'Illicit', 'Modification'],
      standard: true,
      epic: true,
      ffg: 635,
      loadout: 8,
      extended: true,
      keywords: ['Bounty Hunter'],
      image:
        'https://infinitearenas.com/xw2/images/pilots/bossk-z95af4headhunter.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/bossk-z95af4headhunter.png',
    },
  ],
};

export default t;
