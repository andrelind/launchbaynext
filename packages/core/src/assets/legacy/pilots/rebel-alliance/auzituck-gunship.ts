import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Auzituck Gunship',
  xws: 'auzituckgunship',
  size: 'Small',
  dial: [
    '0OR',
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '4FW',
  ],
  dialCodes: ['Auz'],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Full Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Reinforce' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/rebel-alliance/I_Auzituck.png',
  pilots: [
    {
      name: 'Kashyyyk Defender',
      initiative: 1,
      limited: 0,
      cost: 44,
      xws: 'kashyyykdefender',
      text: 'Equipped with three wide-range Sureggi twin laser cannons, the Auzituck gunship acts as a powerful deterrent to slaver operations in the Kashyyyk system.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/kashyyykdefender.png',
      slots: ['Crew', 'Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/kashyyykdefender.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 33,
      keywords: ['Wookiee'],
    },
    {
      name: 'Lowhhrick',
      caption: 'Escaped Gladiator',
      initiative: 3,
      limited: 1,
      cost: 49,
      xws: 'lowhhrick',
      ability:
        'After a friendly ship at range 0-1 becomes the defender, you may spend 1 reinforce token. If you do, that ship gains 1 evade token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/lowhhrick.png',
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/lowhhrick.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 32,
      keywords: ['Wookiee'],
    },
    {
      name: 'Wullffwarro',
      caption: 'Wookiee Chief',
      initiative: 4,
      limited: 1,
      cost: 54,
      xws: 'wullffwarro',
      ability:
        'While you perform a primary attack, if you are damaged, you may roll 1 additional attack die.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/wullffwarro.png',
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/wullffwarro.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 31,
      keywords: ['Wookiee'],
    },
    {
      name: 'Tarfful',
      caption: 'Leader of Kachirho',
      initiative: 5,
      limited: 1,
      cost: 59,
      xws: 'tarfful-wat1',
      ability:
        'Setup: After placing forces, assign the Liberated condition to another friendly Wookiee or non-limited ship. After a friendly ship with the Liberated condition defends, you may acquire a lock on the attacker, ignoring range restrictions.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/tarfful-wat1.png',
      conditions: ['liberated-wat1'],
      slots: ['Talent', 'Crew', 'Crew', 'Modification'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/tarfful-wat1.png',
      standard: true,
      wildspace: true,
      keywords: ['Wookiee'],
      epic: true,
      extended: true,
      ffg: 1163,
    },
  ],
};

export default t;
