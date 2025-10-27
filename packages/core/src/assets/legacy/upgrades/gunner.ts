import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Agile Gunner',
    limited: 0,
    xws: 'agilegunner',
    sides: [
      {
        title: 'Agile Gunner',
        type: 'Gunner',
        ability:
          'During the End Phase, you may rotate your [Single Turret Arc] indicator.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/agilegunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/agilegunner.png',
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'BT-1',
    limited: 1,
    xws: 'bt1',
    sides: [
      {
        title: 'BT-1',
        type: 'Gunner',
        ability:
          'While you perform an attack, you may change 1 [Hit] result to a [Critical Hit] result for each stress token the defender has.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bt1.png',
        slots: ['Gunner'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bt1.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['scumandvillainy'], character: ['Darth Vader'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Bistan',
    limited: 1,
    xws: 'bistan',
    sides: [
      {
        title: 'Bistan',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, if you are focused, you may perform a bonus [Single Turret Arc] attack against a ship you have not already attacked this round.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bistan.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bistan.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Bossk',
    limited: 1,
    xws: 'bossk',
    sides: [
      {
        title: 'Bossk',
        type: 'Gunner',
        ability:
          'After you perform a primary attack that misses, if you are not stressed, you must receive 1 stress token to perform a bonus primary attack against the same target.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bossk.png',
        slots: ['Gunner'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bossk.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Dengar',
    limited: 1,
    xws: 'dengar',
    sides: [
      {
        title: 'Dengar',
        type: 'Gunner',
        ability:
          'After you defend, if the attacker is in your firing arc, you may spend 1 [Charge]. If you do, roll 1 attack die unless the attacker chooses to remove 1 green token. On a [Hit] or [Critical Hit] result, the attacker suffers 1 [Hit] damage.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/dengar.png',
        slots: ['Gunner'],
        charges: { value: 1, recovers: 1 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/dengar.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ezra Bridger',
    limited: 1,
    xws: 'ezrabridger',
    sides: [
      {
        title: 'Ezra Bridger',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, you may spend 1 [Force] to perform a bonus [Single Turret Arc] attack from a [Single Turret Arc] you have not attacked from this round. If you do and you are stressed, you may reroll 1 attack die.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ezrabridger.png',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ezrabridger.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Fifth Brother',
    limited: 1,
    xws: 'fifthbrother',
    sides: [
      {
        title: 'Fifth Brother',
        type: 'Gunner',
        ability:
          'While you perform an attack, you may spend 1 [Force] to change 1 of your [Focus] results to a [Critical Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/fifthbrother.png',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/fifthbrother.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Greedo',
    limited: 1,
    xws: 'greedo',
    sides: [
      {
        title: 'Greedo',
        type: 'Gunner',
        ability:
          'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result. While you defend, if your [Charge] is active, the attacker may change 1 [Hit] result to a [Critical Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/greedo.png',
        slots: ['Gunner'],
        charges: { value: 1, recovers: 1 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/greedo.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Han Solo',
    limited: 1,
    xws: 'hansolo',
    sides: [
      {
        title: 'Han Solo',
        type: 'Gunner',
        ability:
          'During the Engagement Phase, at initiative 7, you may perform a [Single Turret Arc] attack. You cannot attack from that [Single Turret Arc] again this round.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hansolo.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hansolo.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Han Solo',
    limited: 1,
    xws: 'hansolo-gunner',
    sides: [
      {
        title: 'Han Solo',
        type: 'Gunner',
        ability: 'Before you engage, you may perform a red [Focus] action.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hansolo-gunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hansolo-gunner.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hotshot Gunner',
    limited: 0,
    xws: 'hotshotgunner',
    sides: [
      {
        title: 'Hotshot Gunner',
        type: 'Gunner',
        ability:
          'While you perform a [Single Turret Arc] attack, after the Modify Defense Dice step, the defender removes 1 focus or calculate token.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hotshotgunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hotshotgunner.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Luke Skywalker',
    limited: 1,
    xws: 'lukeskywalker',
    sides: [
      {
        title: 'Luke Skywalker',
        type: 'Gunner',
        ability:
          'At the start of the Engagement Phase, you may spend 1 [Force] to rotate your [Single Turret Arc] indicator.',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/lukeskywalker.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/lukeskywalker.png',
      },
    ],
    cost: { value: 26 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Skilled Bombardier',
    limited: 0,
    xws: 'skilledbombardier',
    sides: [
      {
        title: 'Skilled Bombardier',
        type: 'Gunner',
        ability:
          'If you would drop or launch a device, you may use a template of the same bearing with a speed 1 higher or lower.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/skilledbombardier.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/skilledbombardier.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Special Forces Gunner',
    limited: 0,
    xws: 'specialforcesgunner',
    sides: [
      {
        title: 'Special Forces Gunner',
        type: 'Gunner',
        ability:
          'While you perform a primary [Front Arc] attack, if your [Single Turret Arc] is in your [Front Arc], you may roll 1 additional attack die. After you perform a primary [Front Arc] attack, if your [Single Turret Arc] is in your [Rear Arc], you may perform a bonus primary [Single Turret Arc] attack.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/specialforcesgunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/specialforcesgunner.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['firstorder'] }, { chassis: ['tiesffighter'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Veteran Tail Gunner',
    limited: 0,
    xws: 'veterantailgunner',
    sides: [
      {
        title: 'Veteran Tail Gunner',
        type: 'Gunner',
        ability:
          'After you perform a primary [Front Arc] attack, you may perform a bonus primary [Rear Arc] attack.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/veterantailgunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/veterantailgunner.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ arcs: ['Rear Arc'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Veteran Turret Gunner',
    limited: 0,
    xws: 'veteranturretgunner',
    sides: [
      {
        title: 'Veteran Turret Gunner',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, you may perform a bonus [Single Turret Arc] attack using a [Single Turret Arc] you did not already attack from this round.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/veteranturretgunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/veteranturretgunner.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 9, Medium: 8, Large: 7, Huge: 7 },
    },
    restrictions: [{ action: { type: 'Rotate Arc' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Finn',
    limited: 1,
    xws: 'finn',
    sides: [
      {
        title: 'Finn',
        type: 'Gunner',
        ability:
          'While you defend or perform a primary attack, if the enemy ship is in your [Front Arc], you may add 1 blank result to your roll (this die can be rerolled or otherwise modified).',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/finn.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/finn.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Paige Tico',
    limited: 1,
    xws: 'paigetico',
    sides: [
      {
        title: 'Paige Tico',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, you may drop 1 bomb or rotate your [Single Turret Arc]. After you are destroyed, you may drop 1 bomb.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/paigetico.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/paigetico.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Rey',
    limited: 1,
    xws: 'rey-gunner',
    sides: [
      {
        title: 'Rey',
        type: 'Gunner',
        ability:
          'While you defend or perform an attack, if the enemy ship is in your [Single Turret Arc], you may spend 1 [Force] to change 1 of your blank results to a [Evade] or [Hit] result.',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/rey-gunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/rey-gunner.png',
      },
    ],
    restrictions: [{ factions: ['resistance'] }],
    cost: { value: 11 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Seventh Fleet Gunner',
    limited: 0,
    xws: 'seventhfleetgunner',
    sides: [
      {
        title: 'Seventh Fleet Gunner',
        type: 'Gunner',
        slots: ['Gunner'],
        ability:
          'While another friendly ship performs a primary attack, if the defender is in your firing arc, you may spend 1 [Charge]. If you do, the attacker rolls 1 additional die, to a maximum of 4. During the System Phase, you may gain 1 disarm token to recover 1 [Charge].',
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/seventhfleetgunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/seventhfleetgunner.png',
      },
    ],
    restrictions: [{ factions: ['galacticrepublic'] }],
    cost: { value: 6 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Clone Commander Cody',
    limited: 1,
    xws: 'clonecommandercody',
    sides: [
      {
        title: 'Clone Commander Cody',
        type: 'Gunner',
        slots: ['Gunner'],
        ability:
          'After you perform an attack that missed, if 1 or more [Hit]/[Critical Hit] results were neutralized, the defender gains 1 strain token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/clonecommandercody.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/clonecommandercody.png',
      },
    ],
    restrictions: [{ factions: ['galacticrepublic'] }],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ahsoka Tano',
    limited: 1,
    xws: 'ahsokatano',
    sides: [
      {
        title: 'Ahsoka Tano',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ahsokatano.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ahsokatano.png',
        ability:
          'After you execute a maneuver, you may spend 1 [Force] and choose a friendly ship at range 1-3 in your firing arc. If you do, it may perform a red [Focus] action, even while stressed.',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        type: 'Gunner',
      },
    ],
    cost: { value: 9 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Clone Captain Rex',
    limited: 1,
    xws: 'clonecaptainrex',
    sides: [
      {
        title: 'Clone Captain Rex',
        type: 'Gunner',
        slots: ['Gunner'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/clonecaptainrex.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/clonecaptainrex.png',
        ability:
          'While you perform an attack, you may spend 1 [Focus] result. If you do, each friendly ship that has the defender in its [Bullseye Arc] may gain 1 strain to perform a [Focus] action.',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Suppressive Gunner',
    limited: 0,
    xws: 'suppressivegunner',
    sides: [
      {
        title: 'Suppressive Gunner',
        type: 'Gunner',
        slots: ['Gunner'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/suppressivegunner.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/suppressivegunner.png',
        ability:
          'While you perform an attack, you may spend 1 [Focus] result. If you do, the defender gains 1 deplete token unless it chooses to suffer 1 [Hit] damage.',
      },
    ],
    cost: { value: 6 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Boba Fett',
    limited: 1,
    xws: 'bobafett-gunner',
    sides: [
      {
        ability:
          'While you perform an attack, if there are no other ships in the attack arc, you may change 1 of your [Focus] results to a [Hit] result.',
        title: 'Boba Fett',
        type: 'Gunner',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bobafett-gunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bobafett-gunner.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Weapons Systems Officer',
    limited: 0,
    xws: 'weaponssystemsofficer',
    sides: [
      {
        ability:
          'After you perform a special attack with the [Lock] requirement, you may acquire a lock on the defender.',
        title: 'Weapons Systems Officer',
        type: 'Gunner',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/weaponssystemsofficer.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/weaponssystemsofficer.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Sabine Wren',
    limited: 1,
    xws: 'sabinewren-gunner',
    sides: [
      {
        ability:
          'After you perform a special attack, you may choose a number of friendly ships at range 0-3 of the defender up to the number of damage cards dealt to the defender during that attack. Each chosen ship may remove 1 strain or stress token.',
        title: 'Sabine Wren',
        type: 'Gunner',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sabinewren-gunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sabinewren-gunner.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'DT-798',
    limited: 0,
    xws: 'dt798',
    sides: [
      {
        title: 'DT-798',
        type: 'Gunner',
        ability:
          'At the start of the Engagement Phase, you may choose a friendly ship in your firing arc. If you do, that ship gains 1 strain token. While you perform an attack, you may reroll up to 1 die for each ship in the attack arc with 1 or more non-lock red or orange tokens.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/dt798.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/dt798.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['firstorder'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'First Order Ordnance Tech',
    limited: 0,
    xws: 'firstorderordnancetech',
    sides: [
      {
        title: 'First Order Ordnance Tech',
        type: 'Gunner',
        text: 'The First Order trains its pilots and gunners to be fanatically loyal, prioritizing victory even over survival.',
        slots: ['Gunner'],
        grants: [
          {
            action: {
              type: 'Reload',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/firstorderordnancetech.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/firstorderordnancetech.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['firstorder'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Gar Saxon',
    limited: 1,
    xws: 'garsaxon-gunner',
    sides: [
      {
        title: 'Gar Saxon',
        type: 'Gunner',
        ability:
          'While you perform the [Lock] action, you can only choose an object in your [Front Arc] or [Rear Arc]. While you perform a primary attack, if the defender is in your [Front Arc] or [Rear Arc], you may remove 1 orange or red token from the defender to roll 1 additional die, to a maximum of 4.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/garsaxon-gunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/garsaxon-gunner.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [
      { baseSizes: ['Large', 'Huge'] },
      { factions: ['scumandvillainy'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tiber Saxon',
    limited: 1,
    xws: 'tibersaxon',
    sides: [
      {
        title: 'Tiber Saxon',
        type: 'Gunner',
        ability:
          'After you perform an attack at attack range 1-2 that hits, if the defender has no faceup damage cards, you may spend 1 or more [Charge]. For each [Charge] you spend, the defender gains 1 strain token.',
        slots: ['Gunner'],
        charges: { value: 2, recovers: 1 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tibersaxon.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tibersaxon.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ursa Wren',
    limited: 1,
    xws: 'ursawren-gunner',
    sides: [
      {
        title: 'Ursa Wren',
        type: 'Gunner',
        ability:
          'After you acquire a lock on an enemy unit beyond range 2, if there are no friendly units at range 0-1 of the locked unit, gain 1 calculate token.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ursawren-gunner.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ursawren-gunner.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['galacticrepublic', 'separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Migs Mayfeld',
    limited: 1,
    xws: 'migsmayfeld',
    sides: [
      {
        title: 'Migs Mayfeld',
        type: 'Gunner',
        ability:
          'After you perform a [Front Arc] attack, you may perform a [Rear Arc] or [Single Turret Arc] attack as a bonus attack against a different target with 1 or more red or orange tokens.',
        slots: ['Gunner'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/migsmayfeld.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/migsmayfeld.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 2, Medium: 3, Large: 4, Huge: 7 },
    },
    restrictions: [{ factions: ['galacticempire', 'scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
