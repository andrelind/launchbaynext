import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Lancer-class Pursuit Craft',
  xws: 'lancerclasspursuitcraft',
  size: 'Large',
  dial: [
    '1BW',
    '1FW',
    '1NW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TB',
    '3BB',
    '3FB',
    '3NB',
    '3YB',
    '4FB',
    '5FW',
    '5KR',
  ],
  dialCodes: ['LPC'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_ShadowCaster.png',
  pilots: [
    {
      name: 'Asajj Ventress',
      caption: 'Force of Her Own',
      initiative: 4,
      limited: 1,
      cost: 66,
      xws: 'asajjventress',
      ability:
        'At the start of the Engagement Phase, you may choose 1 enemy ship in your [Single Turret Arc] at range 0-2 and spend 1 [Force]. If you do, that ship gains 1 stress token unless it removes 1 green token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/asajjventress.png',
      force: { value: 2, recovers: 1, side: ['dark'] },
      slots: [
        'Crew',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
        'Force Power',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/asajjventress.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter', 'Dark Side'],
      epic: true,
    },
    {
      name: 'Ketsu Onyo',
      caption: 'Black Sun Contractor',
      initiative: 5,
      limited: 1,
      cost: 66,
      xws: 'ketsuonyo',
      ability:
        'At the start of the Engagement Phase, you may choose 1 ship in both your [Front Arc] and [Single Turret Arc] at range 0-1. If you do, that ship gains 1 tractor token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/ketsuonyo.png',
      slots: ['Talent', 'Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/ketsuonyo.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter', 'Mandalorian'],
      epic: true,
    },
    {
      name: 'Sabine Wren',
      caption: 'Artistic Saboteur',
      initiative: 3,
      limited: 1,
      cost: 56,
      xws: 'sabinewren-lancerclasspursuitcraft',
      ability:
        'While you defend, if the attacker is in your [Single Turret Arc] at range 0-2, you may add 1 [Focus] result to your dice results.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/sabinewren-lancerclasspursuitcraft.png',
      slots: ['Talent', 'Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/sabinewren-lancerclasspursuitcraft.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter', 'Mandalorian'],
      epic: true,
    },
    {
      name: 'Shadowport Hunter',
      initiative: 2,
      limited: 0,
      cost: 52,
      xws: 'shadowporthunter',
      text: 'Crime syndicates augment the lethal skills of their loyal contractors with the best technology available, like the fast and formidable Lancer-class pursuit craft.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/shadowporthunter.png',
      slots: ['Crew', 'Illicit', 'Illicit', 'Modification', 'Title'],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/shadowporthunter.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
    },
  ],
};

export default t;
