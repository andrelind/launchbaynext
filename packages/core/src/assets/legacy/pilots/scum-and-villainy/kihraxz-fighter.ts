import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Kihraxz Fighter',
  xws: 'kihraxzfighter',
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2ER',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
  ],
  dialCodes: ['KXZ'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Kihraxz.png',
  pilots: [
    {
      name: 'Black Sun Ace',
      initiative: 3,
      limited: 0,
      cost: 38,
      xws: 'blacksunace',
      text: 'The Kihraxz assault fighter was developed specifically for the Black Sun crime syndicate, whose highly paid ace pilots demanded a nimble, powerful ship to match their skills.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/blacksunace.png',
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/blacksunace.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 195,
    },
    {
      name: 'Captain Jostero',
      caption: 'Aggressive Opportunist',
      initiative: 3,
      limited: 1,
      cost: 41,
      xws: 'captainjostero',
      ability:
        'After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against that ship.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/captainjostero.png',
      slots: ['Missile', 'Illicit', 'Illicit', 'Modification', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/captainjostero.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 194,
    },
    {
      name: 'Cartel Marauder',
      initiative: 2,
      limited: 0,
      cost: 37,
      xws: 'cartelmarauder',
      text: "The versatile Kihraxz was modeled after Incom's popular X-wing starfighter, but an array of after-market modification kits ensure a wide variety of designs.",
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/cartelmarauder.png',
      slots: ['Missile', 'Illicit', 'Illicit', 'Modification', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/cartelmarauder.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 196,
    },
    {
      name: 'Graz',
      caption: 'The Hunter',
      initiative: 4,
      limited: 1,
      cost: 44,
      xws: 'graz',
      ability:
        'While you defend, if you are behind the attacker, roll 1 additional defense die. While you perform an attack, if you are behind the defender, roll 1 additional attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/graz.png',
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/graz.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 192,
    },
    {
      name: 'Talonbane Cobra',
      caption: 'Scourge of Tansarii Point',
      initiative: 5,
      limited: 1,
      cost: 48,
      xws: 'talonbanecobra',
      ability:
        'While you defend at attack range 3 or perform an attack at attack range 1, roll 1 additional die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/talonbanecobra.png',
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/talonbanecobra.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 191,
    },
    {
      name: 'Viktor Hel',
      caption: 'Storied Bounty Hunter',
      initiative: 4,
      limited: 1,
      cost: 42,
      xws: 'viktorhel',
      ability:
        'After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/viktorhel.png',
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/viktorhel.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 193,
    },
  ],
};

export default t;
