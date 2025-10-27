import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Heightened Perception',
    limited: 0,
    xws: 'heightenedperception',
    sides: [
      {
        title: 'Heightened Perception',
        type: 'Force Power',
        ability:
          'At the start of the Engagement Phase, you may spend 1 [Force]. If you do, engage at initiative 7 instead of your standard initiative value this phase.',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/heightenedperception.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/heightenedperception.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Instinctive Aim',
    limited: 0,
    xws: 'instinctiveaim',
    sides: [
      {
        title: 'Instinctive Aim',
        type: 'Force Power',
        ability:
          'While you perform a special attack, you may spend 1 [Force] to ignore the [Focus] or [Lock] requirement.',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/instinctiveaim.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/instinctiveaim.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Sense',
    limited: 0,
    xws: 'sense',
    sides: [
      {
        title: 'Sense',
        type: 'Force Power',
        ability:
          'During the System Phase, you may choose 1 ship at range 0-1 and look at its dial. If you spend 1 [Force], you may choose a ship at range 0-3 instead.',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sense.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sense.png',
      },
    ],
    cost: { value: 7 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Supernatural Reflexes',
    limited: 0,
    xws: 'supernaturalreflexes',
    sides: [
      {
        title: 'Supernatural Reflexes',
        type: 'Force Power',
        ability:
          'Before you activate, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, suffer 1 [Hit] damage.',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/supernaturalreflexes.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/supernaturalreflexes.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 4, '3': 8, '4': 16, '5': 24, '6': 32 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Brilliant Evasion',
    limited: 0,
    xws: 'brilliantevasion',
    sides: [
      {
        title: 'Brilliant Evasion',
        type: 'Force Power',
        ability:
          "While you defend, if you are not in the attacker's [Bullseye Arc], you may spend 1 [Force] to change 2 of your [Focus] results to [Evade] results.",
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/brilliantevasion.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/brilliantevasion.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hate',
    limited: 0,
    xws: 'hate',
    sides: [
      {
        title: 'Hate',
        type: 'Force Power',
        ability:
          'After you suffer 1 or more damage, recover that many [Force].',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hate.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hate.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ sides: ['dark'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Predictive Shot',
    limited: 0,
    xws: 'predictiveshot',
    sides: [
      {
        title: 'Predictive Shot',
        type: 'Force Power',
        ability:
          'After you declare an attack, if the defender is in your [Bullseye Arc], you may spend 1 [Force]. If you do, during the Roll Defense Dice step, the defender cannot roll more defense dice than the number of your [Hit]/[Critical Hit] results.',
        slots: ['Force Power'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/predictiveshot.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/predictiveshot.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Battle Meditation',
    xws: 'battlemeditation',
    limited: 0,
    sides: [
      {
        title: 'Battle Meditation',
        type: 'Force Power',
        ability:
          'You cannot coordinate limited ships. While you perform a purple [Coordinate] action, you may coordinate 1 additional friendly non-limited ship of the same type. Both ships must perform the same action.',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/battlemeditation.png',
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/battlemeditation.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 2, '2': 2, '3': 2, '4': 3, '5': 4, '6': 6 },
    },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Foresight',
    limited: 0,
    xws: 'foresight',
    sides: [
      {
        title: 'Foresight',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/foresight.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/foresight.png',
        ability:
          'After an enemy ship executes a maneuver, you may spend 1 [Force] to perform this attack against it as a bonus attack. Attack: You may change 1 [Focus] result to a [Hit] result; your dice cannot be modified otherwise.',
        slots: ['Force Power'],
        type: 'Force Power',
        attack: {
          arc: 'Bullseye Arc',
          value: 2,
          minrange: 1,
          maxrange: 3,
          ordnance: true,
        },
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Precognitive Reflexes',
    limited: 0,
    xws: 'precognitivereflexes',
    sides: [
      {
        title: 'Precognitive Reflexes',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/precognitivereflexes.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/precognitivereflexes.png',
        ability:
          'After you reveal your dial, you may spend 1 [Force] to perform a [Barrel Roll] or [Boost] action. Then, if you performed an action you do not have on your action bar, gain 1 strain token. If you do, you cannot perform another action during your activation.',
        slots: ['Force Power'],
        type: 'Force Power',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 4, '4': 7, '5': 10, '6': 13 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Extreme Maneuvers',
    limited: 0,
    xws: 'extrememaneuvers',
    sides: [
      {
        ability:
          'While you perform a [Boost] action, you may spend 1 [Force] to use the turn ([Turn Left] or [Turn Right]) template instead.',
        title: 'Extreme Maneuvers',
        type: 'Force Power',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/extrememaneuvers.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/extrememaneuvers.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Compassion',
    limited: 0,
    xws: 'compassion',
    sides: [
      {
        ability:
          'Before another friendly ship at range 0-2 would be dealt a faceup Pilot or Crew damage card, you may spend 1 [Force]. If you do, that damage card is discarded instead, and you are dealt 1 facedown damage card. Then, if you have 2 or more damage cards, recover 2 [Force].',
        title: 'Compassion',
        type: 'Force Power',
        slots: ['Force Power'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/compassion.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/compassion.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ sides: ['light'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Malice',
    limited: 0,
    xws: 'malice',
    sides: [
      {
        ability:
          'While you perform an attack, you may spend 1 [Force] to change 1 [Focus] or [Hit] result to a [Critical Hit] result. If you do, after you perform that attack, if the defender was dealt 1 or more faceup Pilot or Crew damage cards, recover 2 [Force].',
        title: 'Malice',
        type: 'Force Power',
        slots: ['Force Power'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/malice.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/malice.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ sides: ['dark'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Shattering Shot',
    limited: 0,
    xws: 'shatteringshot',
    sides: [
      {
        ability:
          'While you perform an attack, if the attack is obstructed by an obstacle or the defender is at range 0 of an obstacle, you may spend 1 [Force] to add 1 [Focus] result.',
        title: 'Shattering Shot',
        type: 'Force Power',
        slots: ['Force Power'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/shatteringshot.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/shatteringshot.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Patience',
    limited: 0,
    xws: 'patience',
    sides: [
      {
        ability:
          'At the start of the Engagement Phase, if there is an enemy ship in your [Front Arc], you may gain 1 deplete token to recover 1 [Force].',
        title: 'Patience',
        type: 'Force Power',
        slots: ['Force Power'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/patience.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/patience.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ sides: ['light'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Roiling Anger',
    limited: 0,
    xws: 'roilinganger-siegeofcoruscant',
    sides: [
      {
        title: 'Roiling Anger',
        type: 'Force Power',
        ability:
          "At the start of the Engagement Phase, if you are in an enemy ship's [Front Arc], you may gain 1 strain to recover 1 [Force].",
        slots: ['Force Power'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'roilinganger-rsl',
    sides: [
      {
        title: 'Roiling Anger',
        type: 'Force Power',
        ability:
          'At the start of the Engagement Phase, if you are in the [Front Arc] of an enemy ship, you may gain 1 strain token to recover 1 [Force].',
        slots: ['Force Power'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/roilinganger-rsl.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/roilinganger-rsl.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ sides: ['dark'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
