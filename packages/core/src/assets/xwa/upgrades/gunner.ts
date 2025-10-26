import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'agilegunner',
    sides: [
      {
        title: 'Agile Gunner',
        type: 'Gunner',
        ability:
          'During the End Phase, you may rotate your [Single Turret Arc] indicator.',
        slots: ['Gunner'],
        ffg: 388,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/agilegunner.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/agilegunner.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'bt1',
    sides: [
      {
        title: 'BT-1',
        type: 'Gunner',
        ability:
          'While you perform an attack, you may change 1 [Hit] result to a [Critical Hit] result for each stress token the defender has.',
        slots: ['Gunner'],
        ffg: 365,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bt1.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bt1.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [
      { factions: ['Scum and Villainy'], character: ['Darth Vader'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'bistan',
    sides: [
      {
        title: 'Bistan',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, if you are focused, you may perform a bonus [Single Turret Arc] attack against a ship you have not already attacked this round.',
        slots: ['Gunner'],
        ffg: 319,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bistan.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bistan.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'bossk',
    sides: [
      {
        title: 'Bossk',
        type: 'Gunner',
        ability:
          'After you perform a primary attack that misses, if you are not stressed, you must receive 1 stress token to perform a bonus primary attack against the same target.',
        slots: ['Gunner'],
        ffg: 364,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bossk.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/bossk.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'dengar',
    sides: [
      {
        title: 'Dengar',
        type: 'Gunner',
        ability:
          'After you defend, if the attacker is in your firing arc, you may spend 1 [Charge]. If you do, roll 1 attack die unless the attacker chooses to remove 1 green token. On a [Hit] or [Critical Hit] result, the attacker suffers 1 [Hit] damage.',
        slots: ['Gunner'],
        charges: { value: 1, recovers: 1 },
        ffg: 366,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/dengar.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/dengar.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'ezrabridger',
    sides: [
      {
        title: 'Ezra Bridger',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, you may spend 1 [Force] to perform a bonus [Single Turret Arc] attack from a [Single Turret Arc] you have not attacked from this round. If you do and you are stressed, you may reroll 1 attack die.',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        ffg: 320,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ezrabridger.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ezrabridger.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'fifthbrother',
    sides: [
      {
        title: 'Fifth Brother',
        type: 'Gunner',
        ability:
          'While you perform an attack, you may spend 1 [Force] to change 1 of your [Focus] results to a [Critical Hit] result.',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        ffg: 348,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/fifthbrother.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/fifthbrother.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Galactic Empire'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'greedo',
    sides: [
      {
        title: 'Greedo',
        type: 'Gunner',
        ability:
          'While you perform an attack, you may spend 1 [Charge] to change 1 [Hit] result to a [Critical Hit] result. While you defend, if your [Charge] is active, the attacker may change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Gunner'],
        charges: { value: 1, recovers: 1 },
        ffg: 367,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/greedo.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/greedo.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'hansolo',
    sides: [
      {
        title: 'Han Solo',
        type: 'Gunner',
        ability:
          'During the Engagement Phase, at initiative 7, you may perform a [Single Turret Arc] attack. You cannot attack from that [Single Turret Arc] again this round.',
        slots: ['Gunner'],
        ffg: 321,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hansolo.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/hansolo.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'hansolo-gunner',
    sides: [
      {
        title: 'Han Solo',
        type: 'Gunner',
        ability: 'Before you engage, you may perform a red [Focus] action.',
        slots: ['Gunner'],
        ffg: 389,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hansolo-gunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/hansolo-gunner.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['Scum and Villainy'] }],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'hotshotgunner',
    sides: [
      {
        title: 'Hotshot Gunner',
        type: 'Gunner',
        ability:
          'While you perform a [Single Turret Arc] attack, after the Modify Defense Dice step, the defender removes 1 focus or calculate token.',
        slots: ['Gunner'],
        ffg: 278,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hotshotgunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/hotshotgunner.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'lukeskywalker',
    sides: [
      {
        title: 'Luke Skywalker',
        type: 'Gunner',
        ability:
          'At the start of the Engagement Phase, you may spend 1 [Force] and gain 1 deplete token to rotate your [Single Turret Arc] indicator.',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        ffg: 322,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/lukeskywalker.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/lukeskywalker.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'skilledbombardier',
    sides: [
      {
        title: 'Skilled Bombardier',
        type: 'Gunner',
        ability:
          'If you would drop or launch a device, you may use a template of the same bearing with a speed 1 higher or lower.',
        slots: ['Gunner'],
        ffg: 279,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/skilledbombardier.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/skilledbombardier.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'specialforcesgunner',
    sides: [
      {
        title: 'Special Forces Gunner',
        type: 'Gunner',
        ability:
          'While you perform a primary [Front Arc] attack, if your [Single Turret Arc] is in your [Front Arc], you may roll 1 additional attack die. After you perform a primary [Front Arc] attack, if your [Single Turret Arc] is in your [Rear Arc], you may perform a bonus primary [Single Turret Arc] attack.',
        slots: ['Gunner'],
        ffg: 470,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/specialforcesgunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/specialforcesgunner.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [
      { factions: ['First Order'] },
      { chassis: ['tiesffighter'] },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'veterantailgunner',
    sides: [
      {
        title: 'Veteran Tail Gunner',
        type: 'Gunner',
        ability:
          'After you perform a primary [Front Arc] attack, you may perform a bonus primary [Rear Arc] attack.',
        slots: ['Gunner'],
        ffg: 280,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/veterantailgunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/veterantailgunner.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ arcs: ['Rear Arc'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'veteranturretgunner',
    sides: [
      {
        title: 'Veteran Turret Gunner',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, you may perform a bonus [Single Turret Arc] attack using a [Single Turret Arc] you did not already attack from this round.',
        slots: ['Gunner'],
        ffg: 281,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/veteranturretgunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/veteranturretgunner.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ action: { type: 'Rotate Arc' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'finn',
    sides: [
      {
        title: 'Finn',
        type: 'Gunner',
        ability:
          'While you defend or perform a primary attack, if the enemy ship is in your [Front Arc], you may add 1 blank result to your roll (this die can be rerolled or otherwise modified).',
        slots: ['Gunner'],
        ffg: 476,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/finn.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/finn.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'paigetico',
    sides: [
      {
        title: 'Paige Tico',
        type: 'Gunner',
        ability:
          'After you perform a primary attack, you may drop 1 bomb or rotate your [Single Turret Arc]. After you are destroyed, you may drop 1 bomb.',
        slots: ['Gunner'],
        ffg: 477,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/paigetico.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/paigetico.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['Resistance'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
        ffg: 478,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/rey-gunner.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/rey-gunner.png',
      },
    ],
    restrictions: [{ factions: ['Resistance'] }],
    cost: { value: 14 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'ahsokatano',
    sides: [
      {
        ffg: 615,
        title: 'Ahsoka Tano',
        ability:
          'After you execute a maneuver, you may spend 1 [Force] and choose a friendly ship at range 1-3 in your firing arc. If you do, it may perform a red [Focus] action, even while stressed.',
        slots: ['Gunner'],
        force: { value: 1, recovers: 1, side: ['light'] },
        type: 'Gunner',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ahsokatano.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/ahsokatano.png',
      },
    ],
    cost: { value: 12 },
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
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
        ffg: 553,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/seventhfleetgunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/seventhfleetgunner.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    cost: { value: 9 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 1,
    xws: 'clonecommandercody',
    sides: [
      {
        title: 'Clone Commander Cody',
        type: 'Gunner',
        slots: ['Gunner'],
        ability:
          'After you perform an attack that missed, if 1 or more [Hit]/[Critical Hit] results were neutralized, the defender gains 1 strain token.',
        ffg: 552,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/clonecommandercody.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/clonecommandercody.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }],
    cost: { value: 4 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'bobafett-gunner',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability:
          'While you perform an attack, if there are no other ships in the attack arc, you may change 1 of your [Focus] results to a [Hit] result.',
        title: 'Boba Fett',
        type: 'Gunner',
        slots: ['Gunner'],
        ffg: 857,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/bobafett-gunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/bobafett-gunner.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Separatist Alliance', 'Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'clonecaptainrex',
    limited: 1,
    cost: { value: 2 },
    sides: [
      {
        ffg: 688,
        title: 'Clone Captain Rex',
        type: 'Gunner',
        slots: ['Gunner'],
        ability:
          'While you perform an attack, you may spend 1 [Focus] result. If you do, each friendly ship that has the defender in its [Bullseye Arc] may gain 1 strain to perform a [Focus] action.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/clonecaptainrex.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/clonecaptainrex.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic'] }],
    extended: true,
  },
  {
    xws: 'suppressivegunner',
    limited: 0,
    cost: { value: 7 },
    sides: [
      {
        ffg: 689,
        title: 'Suppressive Gunner',
        type: 'Gunner',
        slots: ['Gunner'],
        ability:
          'While you perform an attack, you may spend 1 [Focus] result. If you do, the defender gains 1 deplete token unless it chooses to suffer 1 [Hit] damage.',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/suppressivegunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/suppressivegunner.png',
      },
    ],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'weaponssystemsofficer',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'After you perform a special attack with the [Lock] requirement, you may acquire a lock on the defender.',
        title: 'Weapons Systems Officer',
        type: 'Gunner',
        slots: ['Gunner'],
        ffg: 859,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/weaponssystemsofficer.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/weaponssystemsofficer.png',
      },
    ],
    cost: { value: 5 },
    extended: true,
  },
  {
    xws: 'sabinewren-gunner',
    limited: 1,
    cost: { value: 2 },
    sides: [
      {
        ability:
          'After you perform a special attack, you may choose a number of friendly ships at range 0-3 of the defender up to the number of damage cards dealt to the defender during that attack. Each chosen ship may remove 1 strain or stress token.',
        title: 'Sabine Wren',
        type: 'Gunner',
        slots: ['Gunner'],
        ffg: 921,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sabinewren-gunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/sabinewren-gunner.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Rebel Alliance'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'dt798',
    sides: [
      {
        title: 'DT-798',
        type: 'Gunner',
        ability:
          'At the start of the Engagement Phase, you may choose a friendly ship in your firing arc. If you do, that ship gains 1 strain token. While you perform an attack, you may reroll up to 1 die for each ship in the attack arc with 1 or more non-lock red or orange tokens.',
        slots: ['Gunner'],
        ffg: 940,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/dt798.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/dt798.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'firstorderordnancetech',
    sides: [
      {
        title: 'First Order Ordnance Tech',
        type: 'Gunner',
        text: 'The First Order trains its pilots and gunners to be fanatically loyal, prioritizing victory even over survival.',
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
        slots: ['Gunner'],
        ffg: 937,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/firstorderordnancetech.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/firstorderordnancetech.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['First Order'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    xws: 'migsmayfeld',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability:
          'After you perform a [Front Arc] attack, you may perform a [Rear Arc] or [Single Turret Arc] attack as a bonus attack against a different target with 1 or more red or orange tokens.',
        title: 'Migs Mayfeld',
        type: 'Gunner',
        slots: ['Gunner'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/migsmayfeld.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/migsmayfeld.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire', 'Scum and Villainy'] }],
    extended: true,
  },
  {
    xws: 'tibersaxon',
    limited: 1,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'After you perform an attack at attack range 1-2 that hits, if the defender has no faceup damage cards, you may spend 1 or more [Charge]. For each [Charge] you spend, the defender gains 1 strain token.',
        title: 'Tiber Saxon',
        charges: { value: 2, recovers: 1 },
        type: 'Gunner',
        slots: ['Gunner'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tibersaxon.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/tibersaxon.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Empire'] }],
    extended: true,
  },
  {
    xws: 'ursawren-gunner',
    limited: 1,
    cost: { value: 4 },
    sides: [
      {
        ability:
          'After you acquire a lock on an enemy unit beyond range 2, if there are no friendly units at range 0-1 of the locked unit, gain 1 calculate token.',
        title: 'Ursa Wren',
        type: 'Gunner',
        slots: ['Gunner'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ursawren-gunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ursawren-gunner.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ factions: ['Galactic Republic', 'Separatist Alliance'] }],
    extended: true,
  },
  {
    limited: 1,
    xws: 'garsaxon-gunner',
    sides: [
      {
        title: 'Gar Saxon',
        type: 'Gunner',
        ability:
          'While you perform the [Lock] action, you can only choose an object in your [Front Arc] or [Rear Arc]. While you perform a primary attack, if the defender is in your [Front Arc] or [Rear Arc], you may remove 1 orange or red token from the defender to roll 1 additional die, to a maximum of 4.',
        slots: ['Gunner'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/garsaxon-gunner.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/garsaxon-gunner.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { baseSizes: ['Large', 'Huge'] },
      { factions: ['Scum and Villainy'] },
    ],
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 1,
    xws: 'airencracken-battleoverendor',
    sides: [
      {
        title: 'Airen Cracken',
        type: 'Gunner',
        ability:
          'After defending, if the attack hit, you may gain 1 deplete token to perform a bonus primary attack targeting the attacker.',
        slots: ['Gunner'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
    cost: { value: 0 },
  },
  {
    name: 'First Order Ordnance Tech',
    limited: 0,
    xws: 'firstorderordnancetech-evacuationofdqar',
    sides: [
      {
        title: 'First Order Ordnance Tech',
        type: 'Gunner',
        ability:
          'After you gain a disarm token, gain 1 calculate token. While you have exactly 1 disarm token, you can still perform [front arc] primary attacks.',
        slots: ['Gunner'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Fennec Shand',
    limited: 1,
    xws: 'fennecshand-armedanddangerous',
    sides: [
      {
        title: 'Fennec Shand',
        type: 'Gunner',
        ability:
          'While you defend or perform an attack, if you have a lock on the enemy ship, the enemy ship rolls 1 fewer die',
        slots: ['Gunner'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Tobias Beckett',
    limited: 1,
    xws: 'tobiasbeckett-armedanddangerous',
    sides: [
      {
        title: 'Tobias Beckett',
        type: 'Gunner',
        ability:
          'While you perform an attack, if you are stressed, you may reroll up to 2 attack dice. Then suffer 1 [crit] damage if 1 or more of the rerolled results is a [crit] result.',
        slots: ['Gunner'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'R2-G8',
    limited: 1,
    xws: 'r2g8-armedanddangerous',
    sides: [
      {
        title: 'R2-G8',
        type: 'Gunner',
        ability:
          'After you perform a primary attack that hits, you may spend 2 [charges] to choose an enemy ship at range 0-1 of the defender. If you do, that ship gains a strain token.',
        charges: { value: 2, recovers: 0 },
        slots: ['Gunner'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Paige Tico',
    limited: 1,
    xws: 'paigetico-evacuationofdqar',
    sides: [
      {
        title: 'Paige Tico',
        type: 'Gunner',
        ability:
          'While you have exactly 1 disarm token, you can still perform [single arc turret] attacks.\n\nAfter you perform an attack, you may drop a bomb or rotate your [single arc turret] indicator.',
        slots: ['Gunner'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Dedicated Gunners',
    limited: 0,
    xws: 'dedicatedgunners-evacuationofdqar',
    sides: [
      {
        title: 'Dedicated Gunners',
        type: 'Gunner',
        ability:
          'While you perform a primary attack, if the defender is in your [single rotating arc], you may spend 1 focus token to roll 1 additional attack die.\n\nAfter you perform a primary attack, you may perform a bonus [single rotating arc] attack using a [single rotating arc] you did not already attack from this round.',
        slots: ['Gunner', 'Gunner'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 1,
    xws: 'hansolo-rebel',
    sides: [
      {
        title: 'Han Solo',
        type: 'Gunner',
        ability:
          'During the Engagement Phase, at initiative 7, you may perform a [Single Turret Arc] attack. You cannot attack from that [Single Turret Arc] again this round.',
        slots: ['Gunner'],
        image: 'https://infinitearenas.com/xw2/images/upgrades/hansolo.png',
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hansolo.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['Rebel Alliance'] }],
    standard: true,
    extended: true,
    epic: true,
    restricted: 0,
  },
];

export default t;
