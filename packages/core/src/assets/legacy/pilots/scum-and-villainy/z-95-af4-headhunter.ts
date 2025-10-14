import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Z-95-AF4 Headhunter',
  xws: 'z95af4headhunter',
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
  dialCodes: ['Z95'],
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
      cost: 22,
      xws: 'binayrepirate',
      text: "Operating from the Double Worlds, Talus and Tralus, Kath Scarlet's gang of smugglers and pirates would never be described as reputable or dependable—even by other criminals.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/binayrepirate.png',
      slots: ['Missile', 'Illicit', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/binayrepirate.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 173,
    },
    {
      name: 'Black Sun Soldier',
      initiative: 3,
      limited: 0,
      cost: 23,
      xws: 'blacksunsoldier',
      text: "The vast and influential Black Sun crime syndicate can always find a use for talented pilots, provided they aren't particular about how they earn their credits.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/blacksunsoldier.png',
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/blacksunsoldier.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 172,
    },
    {
      name: "Kaa'to Leeachos",
      caption: 'Imposing Marauder',
      initiative: 3,
      limited: 1,
      cost: 22,
      xws: 'kaatoleeachos',
      ability:
        'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kaatoleeachos.png',
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kaatoleeachos.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 170,
    },
    {
      name: 'N’dru Suhlak',
      caption: 'Hunt Saboteur',
      initiative: 4,
      limited: 1,
      cost: 27,
      xws: 'ndrusuhlak',
      ability:
        'While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die.',
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ndrusuhlak.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ndrusuhlak.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 169,
    },
    {
      name: 'Nashtah Pup',
      caption: 'Contingency Plan',
      initiative: 0,
      limited: 1,
      cost: 4,
      xws: 'nashtahpup',
      ability:
        "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship [Charge] of the friendly, destroyed Hound's Tooth.",
      shipAbility: {
        name: 'Escape Craft',
        text: "Setup: Requires the Hound's Tooth. You must begin the game docked with the Hound's Tooth.",
      },
      slots: ['Missile', 'Illicit', 'Modification'],
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/nashtahpup.png',
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/nashtahpup.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 171,
    },
    {
      name: 'Bossk',
      caption: 'Fearsome Hunter',
      initiative: 4,
      limited: 1,
      xws: 'bossk-z95af4headhunter',
      ability:
        'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      shipAbility: {
        name: 'Pursuit Craft',
        text: "After you deploy, you may acquire a lock on a ship the friendly Hound's Tooth has locked.",
      },
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      standard: true,
      wildspace: true,
      cost: 25,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/bossk-z95af4headhunter.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/bossk-z95af4headhunter.png',
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 635,
    },
  ],
};

export default t;
