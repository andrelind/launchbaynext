import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'M12-L Kimogila Fighter',
  xws: 'm12lkimogilafighter',
  size: 'Medium',
  dial: [
    '1TR',
    '1BW',
    '1FB',
    '1NW',
    '1YR',
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
    '4KR',
  ],
  dialCodes: ['M12'],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 7 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/scum-and-villainy/I_Kimogila.png',
  pilots: [
    {
      name: 'Cartel Executioner',
      initiative: 3,
      limited: 0,
      cost: 41,
      xws: 'cartelexecutioner',
      text: 'Many veteran pilots in the service of the Hutt kajidics and other criminal operations choose the M12-L Kimogila for its firepower and dreaded reputation alike.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/cartelexecutioner.png',
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      slots: [
        'Talent',
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/cartelexecutioner.png',
      standard: true,
      wildspace: true,
      epic: true,
      ffg: 209,
    },
    {
      name: 'Dalan Oberos',
      caption: 'Returned from the Grave',
      initiative: 3,
      limited: 1,
      cost: 42,
      xws: 'dalanoberos',
      ability:
        'At the start of the Engagement Phase, you may choose 1 shielded ship in your [Bullseye Arc] and spend 1 [Charge]. If you do, that ship loses 1 shield and you recover 1 shield.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/dalanoberos.png',
      charges: { value: 2, recovers: 0 },
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      slots: [
        'Talent',
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/dalanoberos.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 208,
    },
    {
      name: 'Torani Kulda',
      caption: 'Rodian Freelancer',
      initiative: 4,
      limited: 1,
      cost: 47,
      xws: 'toranikulda',
      ability:
        'After you perform an attack, each enemy ship in your [Bullseye Arc] suffers 1 [Hit] damage unless it removes 1 green token.',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/toranikulda.png',
      shipAbility: {
        name: 'Dead to Rights',
        text: 'While you perform an attack, if the defender is in your [Bullseye Arc], defense dice cannot be modified using green tokens.',
      },
      slots: [
        'Talent',
        'Talent',
        'Torpedo',
        'Missile',
        'Astromech',
        'Illicit',
        'Modification',
      ],
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/toranikulda.png',
      standard: true,
      wildspace: true,
      keywords: ['Bounty Hunter'],
      epic: true,
      ffg: 207,
    },
  ],
};

export default t;
