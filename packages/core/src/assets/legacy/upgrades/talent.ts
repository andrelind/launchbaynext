import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Composure',
    limited: 0,
    xws: 'composure',
    sides: [
      {
        title: 'Composure',
        type: 'Talent',
        ability:
          'After you fail an action, if you have no green tokens, you may perform a [Focus] action. If you do, you cannot perform additional actions this round.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/composure.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/composure.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'Focus' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Crack Shot',
    limited: 0,
    xws: 'crackshot',
    sides: [
      {
        title: 'Crack Shot',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], before the Neutralize Results step, you may spend 1 [Charge] to cancel 1 [Evade] result.',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/crackshot.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/crackshot.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Daredevil',
    limited: 0,
    xws: 'daredevil',
    sides: [
      {
        title: 'Daredevil',
        type: 'Talent',
        ability:
          'While you perform a white [Boost] action, you may treat it as red to use the [1 [Turn Left]] or [1 [Turn Right]] template instead.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/daredevil.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/daredevil.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small'] }, { action: { type: 'Boost', difficulty: 'White' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Debris Gambit',
    limited: 0,
    xws: 'debrisgambit',
    sides: [
      {
        title: 'Debris Gambit',
        type: 'Talent',
        ability:
          'While you perform a red [Evade] action, if there is an obstacle at range 0-1, treat the action as white instead.',
        slots: ['Talent'],
        actions: [{ type: 'Evade', difficulty: 'Red' }],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/debrisgambit.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/debrisgambit.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Elusive',
    limited: 0,
    xws: 'elusive',
    sides: [
      {
        title: 'Elusive',
        type: 'Talent',
        ability:
          'While you defend, you may spend 1 [Charge] to reroll 1 defense die. After you fully execute a red maneuver, recover 1 [Charge].',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/elusive.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/elusive.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Expert Handling',
    limited: 0,
    xws: 'experthandling',
    sides: [
      {
        title: 'Expert Handling',
        type: 'Talent',
        text: 'While heavy fighters can often be coaxed into a barrel roll, seasoned pilots know how to do it without putting undue stress on their craft or leaving themselves open to attack.',
        slots: ['Talent'],
        actions: [{ type: 'Barrel Roll', difficulty: 'White' }],
        grants: [{ action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 }],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/experthandling.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/experthandling.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 3, Large: 4, Huge: 4 },
    },
    restrictions: [{ action: { type: 'Barrel Roll', difficulty: 'Red' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Fanatical',
    limited: 0,
    xws: 'fanatical',
    sides: [
      {
        title: 'Fanatical',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if you are not shielded, you may change 1 [Focus] result to a [Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/fanatical.png',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/fanatical.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Fearless',
    limited: 0,
    xws: 'fearless',
    sides: [
      {
        title: 'Fearless',
        type: 'Talent',
        ability:
          "While you perform a [Front Arc] primary attack, if the attack range is 1 and you are in the defender's [Front Arc], you may change 1 of your results to a [Hit] result.",
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/fearless.png',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/fearless.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Heroic',
    limited: 0,
    xws: 'heroic',
    sides: [
      {
        title: 'Heroic',
        type: 'Talent',
        ability:
          'While you defend or perform an attack, if you have only blank results and have 2 or more results, you may reroll any number of your dice.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/heroic.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/heroic.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Intimidation',
    limited: 0,
    xws: 'intimidation',
    sides: [
      {
        title: 'Intimidation',
        type: 'Talent',
        ability: 'While an enemy ship at range 0 defends, it rolls 1 fewer defense die.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/intimidation.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/intimidation.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Juke',
    limited: 0,
    xws: 'juke',
    sides: [
      {
        title: 'Juke',
        type: 'Talent',
        ability:
          "While you perform an attack, if you are evading, you may change 1 of the defender's [Evade] results to a [Focus] result.",
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/juke.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/juke.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Lone Wolf',
    limited: 1,
    xws: 'lonewolf',
    sides: [
      {
        title: 'Lone Wolf',
        type: 'Talent',
        ability:
          'While you defend or perform an attack, if there are no other friendly chassis at range 0-2, you may spend 1 [Charge] to reroll 1 of your dice.',
        slots: ['Talent'],
        charges: { value: 1, recovers: 1 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/lonewolf.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/lonewolf.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Marksmanship',
    limited: 0,
    xws: 'marksmanship',
    sides: [
      {
        title: 'Marksmanship',
        type: 'Talent',
        ability:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you may change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/marksmanship.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/marksmanship.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Outmaneuver',
    limited: 0,
    xws: 'outmaneuver',
    sides: [
      {
        title: 'Outmaneuver',
        type: 'Talent',
        ability:
          "While you perform a [Front Arc] attack, if you are not in the defender's firing arc, the defender rolls 1 fewer defense die.",
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/outmaneuver.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/outmaneuver.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 5, '1': 5, '2': 5, '3': 5, '4': 6, '5': 6, '6': 6 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Predator',
    limited: 0,
    xws: 'predator',
    sides: [
      {
        title: 'Predator',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may reroll 1 attack die.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/predator.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/predator.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ruthless',
    limited: 0,
    xws: 'ruthless',
    sides: [
      {
        title: 'Ruthless',
        type: 'Talent',
        ability:
          'While you perform an attack, you may choose another friendly ship at range 0-1 of the defender. If you do, that ship suffers 1 [Hit] damage and you may change 1 of your die results to a [Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ruthless.png',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ruthless.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Saturation Salvo',
    limited: 0,
    xws: 'saturationsalvo',
    sides: [
      {
        title: 'Saturation Salvo',
        type: 'Talent',
        ability:
          'While you perform a [Torpedo] or [Missile] attack, you may spend 1 [Charge] from that upgrade. If you do, choose two defense dice. The defender must reroll those dice.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/saturationsalvo.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/saturationsalvo.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'Reload' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Selfless',
    limited: 0,
    xws: 'selfless',
    sides: [
      {
        title: 'Selfless',
        type: 'Talent',
        ability:
          'While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc, you may suffer 1 [Critical Hit] damage to cancel 1 [Critical Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/selfless.png',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/selfless.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Squad Leader',
    limited: 1,
    xws: 'squadleader',
    sides: [
      {
        title: 'Squad Leader',
        type: 'Talent',
        ability:
          'While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.',
        slots: ['Talent'],
        actions: [{ type: 'Coordinate', difficulty: 'Red' }],
        grants: [{ action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 }],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/squadleader.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/squadleader.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 4, '2': 5, '3': 7, '4': 9, '5': 10, '6': 12 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Swarm Tactics',
    limited: 0,
    xws: 'swarmtactics',
    sides: [
      {
        title: 'Swarm Tactics',
        type: 'Talent',
        ability:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 1. If you do, that ship treats its initiative as equal to yours until the end of the round.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/swarmtactics.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/swarmtactics.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 3, '1': 3, '2': 3, '3': 3, '4': 3, '5': 4, '6': 5 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Trick Shot',
    limited: 0,
    xws: 'trickshot',
    sides: [
      {
        title: 'Trick Shot',
        type: 'Talent',
        ability: 'While you perform an attack that is obstructed by an obstacle, roll 1 additional attack die.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/trickshot.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/trickshot.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Treacherous',
    xws: 'treacherous',
    limited: 0,
    sides: [
      {
        title: 'Treacherous',
        type: 'Talent',
        ability:
          'While you defend, you may choose a ship obstructing the attack and spend 1 [Charge]. If you do, cancel 1 [Hit] or [Critical Hit] result, and the ship you chose gains 1 strain token. After a ship at range 0-3 is destroyed, recover 1 [Charge].',
        slots: ['Talent'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/treacherous.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/treacherous.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Separatist Alliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Dedicated',
    xws: 'dedicated',
    limited: 0,
    sides: [
      {
        title: 'Dedicated',
        type: 'Talent',
        ability:
          'While another friendly ship in your [Left Arc] or [Right Arc] at range 0-2 defends, if it is limited or has the Dedicated upgrade and you are not strained, you may gain 1 strain token. If you do, the defender rerolls 1 of their blank results.',
        slots: ['Talent'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/dedicated.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/dedicated.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Republic'] }, { 'non-limited': true }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ensnare',
    xws: 'ensnare',
    limited: 0,
    sides: [
      {
        title: 'Ensnare',
        type: 'Talent',
        slots: ['Talent'],
        ability:
          'At the end of the Activation Phase, if you are tractored, you may choose 1 ship in your [Single Turret Arc] arc at range 0-1. Transfer 1 tractor token to it.',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ensnare.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ensnare.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 15, '1': 15, '2': 15, '3': 15, '4': 15, '5': 16, '6': 17 },
    },
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Snap Shot',
    limited: 0,
    xws: 'snapshot',
    sides: [
      {
        ability:
          'After an enemy ship executes a maneuver, you may perform this attack against it as a bonus attack. Attack: Your dice cannot be modified.',
        title: 'Snap Shot',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/snapshot.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/snapshot.png',
        attack: {
          arc: 'Front Arc',
          value: 2,
          minrange: 2,
          maxrange: 2,
          ordnance: true,
        },
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 6, Medium: 7, Large: 8, Huge: 9 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Gravitic Deflection',
    limited: 0,
    xws: 'graviticdeflection',
    sides: [
      {
        title: 'Gravitic Deflection',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/graviticdeflection.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/graviticdeflection.png',
        ability: 'While you defend, you may reroll 1 defense die for each tractored ship in the attack arc.',
        slots: ['Talent'],
        type: 'Talent',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ chassis: ['nantexclassstarfighter'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Proud Tradition',
    limited: 0,
    xws: 'proudtradition',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. While you have 2 or fewer stress tokens, you may perform [Focus] actions even while stressed. After you perform an attack, if you are stressed, the defender may spend 1 focus token or suffer 1 [Critical Hit] damage to flip this card.',
        title: 'Proud Tradition',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/proudtradition-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/proudtradition.png',
      },
      {
        ability: 'Treat your [Focus] actions as red.',
        title: 'False Tradition',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/proudtradition.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/proudtradition-sideb.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Deadeye Shot',
    limited: 0,
    xws: 'deadeyeshot',
    sides: [
      {
        title: 'Deadeye Shot',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/deadeyeshot.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/deadeyeshot.png',
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], you may spend 1 [Hit] result or change 1 [Critical Hit] result to a [Hit] result. If you do, the defender exposes 1 of its damage cards.',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Backwards Tailslide',
    limited: 0,
    xws: 'backwardstailslide',
    sides: [
      {
        ability:
          'While you boost or barrel roll, if your equipped [Configuration] upgrade has the “(Closed)” side faceup, you can move through and overlap obstacles. After you boost or barrel roll through an obstacle, if you are not at range 0 of it, gain 1 evade token.',
        title: 'Backwards Tailslide',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/backwardstailslide.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/backwardstailslide.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ keywords: ['X-wing'] }, { equipped: ['Configuration'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ion Limiter Override',
    limited: 0,
    xws: 'ionlimiteroverride',
    sides: [
      {
        ability:
          'After you fully execute a red maneuver, you may perform a [Barrel Roll] action, even while stressed. If you do, roll an attack die; on a [Hit] result gain 1 strain token, and on a [Critical Hit] result gain 1 ion token.',
        title: 'Ion Limiter Override',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ionlimiteroverride.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ionlimiteroverride.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ keywords: ['TIE'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Marg Sabl Closure',
    limited: 0,
    xws: 'margsablclosure',
    sides: [
      {
        ability:
          'After you fully execute a maneuver, if you moved through an obstacle, structure, or huge ship, or if you deployed, you may choose 1 enemy ship in your [Front Arc] at range 1-2. That ship gains 1 strain token.',
        title: 'Marg Sabl Closure',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/margsablclosure.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/margsablclosure.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Starbird Slash',
    limited: 0,
    xws: 'starbirdslash',
    sides: [
      {
        ability:
          "After you fully execute a maneuver, you may choose 1 enemy ship you moved through. That ship gains 1 strain token. Then, if you are in that ship's firing arc, you gain 1 strain token.",
        title: 'Starbird Slash',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/starbirdslash.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/starbirdslash.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ keywords: ['A-wing'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Cutthroat',
    limited: 0,
    xws: 'cutthroat',
    sides: [
      {
        ability:
          'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Cutthroat upgrade, you may remove 1 of your orange or red tokens, or recover 1 non-recurring [Charge] on your ship card or one of your equipped upgrade cards.',
        title: 'Cutthroat',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/cutthroat.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/cutthroat.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Disciplined',
    limited: 0,
    xws: 'disciplined',
    sides: [
      {
        ability:
          'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Disciplined upgrade, you may perform a [Lock] or [Barrel Roll] action.',
        title: 'Disciplined',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/disciplined.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/disciplined.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hopeful',
    limited: 0,
    xws: 'hopeful',
    sides: [
      {
        ability:
          'After another friendly ship at range 0-3 is destroyed, if that ship is limited or has the Hopeful upgrade, you may perform a [Focus] or [Boost] action.',
        title: 'Hopeful',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hopeful.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hopeful.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Interloper Turn',
    limited: 0,
    xws: 'interloperturn',
    sides: [
      {
        ability:
          'Before you execute a speed 1-2 turn ([Turn Left] or [Turn Right]) or speed 1-2 Koiogran Turn ([Koiogran Turn]) maneuver, if you are at range 0-1 of an asteroid, structure, or huge ship, you may gain 1 tractor token.',
        title: 'Interloper Turn',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/interloperturn.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/interloperturn.png',
      },
    ],
    restrictions: [{ chassis: ['tieddefender'] }],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tierfon Belly Run',
    limited: 0,
    xws: 'tierfonbellyrun',
    sides: [
      {
        ability:
          'You can perform special attacks even while at range 0 of asteroids. While you defend, if you are at range 0 of an obstacle, attack dice cannot be rerolled.',
        title: 'Tierfon Belly Run',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tierfonbellyrun.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tierfonbellyrun.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 1, '5': 1, '6': 1 },
    },
    restrictions: [{ keywords: ['Y-wing'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Feedback Ping',
    limited: 0,
    xws: 'feedbackping',
    sides: [
      {
        title: 'Feedback Ping',
        type: 'Talent',
        ability:
          'After a ship executes a maneuver, if it is at range 0-1 of a friendly device, you may acquire a lock on that ship, ignoring range restrictions.',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/feedbackping.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/feedbackping.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ action: { type: 'Reload' } }, { keywords: ['TIE'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Clan Training',
    limited: 0,
    xws: 'clantraining',
    sides: [
      {
        title: 'Clan Training',
        type: 'Talent',
        ability:
          'Before you engage, if you are not focused and there is an enemy ship in your [Front Arc] at range 1, you may spend 1 [Charge] to perform a red [Focus] action. After you perform an attack, if the defender is destroyed, recover 1 [Charge].',
        charges: { value: 1, recovers: 0 },
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/clantraining.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/clantraining.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ keywords: ['Mandalorian'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Notorious',
    limited: 1,
    xws: 'notorious',
    sides: [
      {
        title: 'Notorious',
        type: 'Talent',
        ability:
          'After you defend, if the attacker is in your firing arc, you may spend 1 [Charge]. If you do, the attacker gains 1 strain token. While you perform an attack, if the defender is strained, you may reroll 1 blank result.',
        charges: { value: 2, recovers: 1 },
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/notorious.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/notorious.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ equipped: ['Illicit'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Enduring',
    limited: 0,
    xws: 'enduring',
    sides: [
      {
        title: 'Enduring',
        type: 'Talent',
        ability:
          "While you defend, if you are not in the attacker's [Bullseye Arc], [Critical Hit] results are neutralized before [Hit] results. After you suffer [Critical Hit] damage, you may perform a [Calculate] or [Focus] action on your action bar, even while stressed, treating that action as red.",
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/enduring.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/enduring.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Attack Speed',
    limited: 0,
    xws: 'attackspeed-battleofyavin',
    sides: [
      {
        title: 'Attack Speed',
        type: 'Talent',
        ability:
          'After you fully execute a [3 [Straight]] or [4 [Straight]] maneuver, you may perform a boost using the [1 [Straight]] template. (This is not an action).',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Fanatic',
    limited: 0,
    xws: 'fanatic-battleofyavin',
    sides: [
      {
        title: 'Fanatic',
        type: 'Talent',
        ability:
          'While you perform a primary attack, if you are damaged, you may change 1 [Focus] result to a [Hit] result.',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Vengeful',
    limited: 0,
    xws: 'vengeful-battleofyavin',
    sides: [
      {
        title: 'Vengeful',
        type: 'Talent',
        ability:
          'After a friendly ship at range 0-3 is destroyed, if that ship is limited, you may remove 1 of your red tokens or recover 1 recurring charge on your ship card.',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Efficient Processing',
    limited: 0,
    xws: 'efficientprocessing-swz103',
    sides: [
      {
        title: 'Efficient Processing',
        type: 'Talent',
        ability: 'After you perform a [Calculate] action, gain one calculate token.',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Mercenary',
    limited: 0,
    xws: 'mercenary-swz103',
    sides: [
      {
        title: 'Mercenary',
        type: 'Talent',
        ability:
          'After another friendly ship at range 0-2 is destroyed, before it is removed from the play area, transfer one of its green tokens to yourself.',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Swift Approach',
    limited: 0,
    xws: 'swiftapproach-swz98',
    sides: [
      {
        title: 'Swift Approach',
        type: 'Talent',
        ability:
          'During the System Phase, after you drop or launch a device, you may perform a white [Barrel Roll] or [Boost] action, even while stressed.',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Top Cover',
    limited: 0,
    xws: 'topcover-swz98',
    sides: [
      {
        title: 'Top Cover',
        type: 'Talent',
        ability:
          'After a friendly ship at range 0-1 defends, if you have not dropped or launched a device this round, you may launch a device using the (3 [Bank Left]), (3 [Straight]), or (3 [Bank Right]) template. You ignore the effects of friendly devices.',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'True Grit',
    limited: 0,
    xws: 'truegrit-swz98',
    sides: [
      {
        title: 'True Grit',
        type: 'Talent',
        ability:
          'At the end of the Activation Phase, if you are not strained, you may gain one strain token to remove one non-lock red or orange token.',
        slots: ['Talent'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'noescape-rsl',
    sides: [
      {
        ability:
          'While you perform a primary attack, if there are more friendly ships than enemy ships at range 0-1 of the defender, you may reroll 1 of your blank results.',
        title: 'No Escape',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/noescape-rsl.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/noescape-rsl.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }, {}],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'silenthunter-rsl',
    sides: [
      {
        ability: 'After you decloak, you may acquire a lock on an enemy ship in your [Bullseye Arc].',
        title: 'Silent Hunter',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/silenthunter-rsl.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/silenthunter-rsl.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'partinggift-rsl',
    sides: [
      {
        ability:
          'After you are destroyed, you may drop 1 bomb. If you do, you must place it in the play area touching you instead.',
        title: 'Parting Gift',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/partinggift-rsl.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/partinggift-rsl.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    limited: 3,
    xws: 'formedup-rsl',
    sides: [
      {
        ability:
          'At the end of the End Phase, if there are at least 2 other friendly TIE/ln Fighters at range 0-1 or another friendly ship with the Formed Up upgrade at range 0-1, you may remove 1 non-lock red token.',
        title: 'Formed Up',
        type: 'Talent',
        slots: ['Talent'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/formedup-rsl.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/formedup-rsl.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Galactic Empire'] }, { chassis: ['tielnfighter'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
