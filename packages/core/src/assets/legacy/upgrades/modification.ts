import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Ablative Plating',
    limited: 0,
    xws: 'ablativeplating',
    sides: [
      {
        title: 'Ablative Plating',
        type: 'Modification',
        ability:
          'Before you would suffer damage from an obstacle or from a friendly bomb detonating, you may spend 1 [Charge]. If you do, prevent 1 damage.',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ablativeplating.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ablativeplating.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Advanced SLAM',
    limited: 0,
    xws: 'advancedslam',
    sides: [
      {
        title: 'Advanced SLAM',
        type: 'Modification',
        ability:
          'After you perform a [SLAM] action, if you fully executed the maneuver, you may perform a white action on your action bar, treating that action as red.',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/advancedslam.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/advancedslam.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'SLAM', difficulty: 'White' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Afterburners',
    limited: 0,
    xws: 'afterburners',
    sides: [
      {
        title: 'Afterburners',
        type: 'Modification',
        ability:
          'After you fully execute a speed 3-5 maneuver, you may spend 1 [Charge] to perform a [Boost] action, even while stressed.',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/afterburners.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/afterburners.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 4, '1': 4, '2': 4, '3': 4, '4': 5, '5': 6, '6': 7 },
    },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Electronic Baffle',
    limited: 0,
    xws: 'electronicbaffle',
    sides: [
      {
        title: 'Electronic Baffle',
        type: 'Modification',
        ability: 'During the End Phase, you may suffer 1 [Hit] damage to remove 1 red token.',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/electronicbaffle.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/electronicbaffle.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Engine Upgrade',
    limited: 0,
    xws: 'engineupgrade',
    sides: [
      {
        title: 'Engine Upgrade',
        type: 'Modification',
        text: 'Large military forces such as the Galactic Empire have standardized engines, but individual pilots and small organizations often replace the power couplings, add thrusters, or use high-performance fuel to get extra push out of their engines.',
        slots: ['Modification'],
        actions: [{ type: 'Boost', difficulty: 'White' }],
        grants: [{ action: { type: 'Boost', difficulty: 'White' }, value: 1 }],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/engineupgrade.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/engineupgrade.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 3, Medium: 4, Large: 7, Huge: 7 },
    },
    restrictions: [{ action: { type: 'Boost', difficulty: 'Red' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hull Upgrade',
    limited: 0,
    xws: 'hullupgrade',
    sides: [
      {
        title: 'Hull Upgrade',
        type: 'Modification',
        text: 'For those who cannot afford an enhanced shield generator, bolting additional plates onto the hull of a ship can serve as an adequate substitute.',
        slots: ['Modification'],
        grants: [{ stat: 'hull', value: 1 }],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hullupgrade.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hullupgrade.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 2, '1': 3, '2': 5, '3': 7 } },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Munitions Failsafe',
    limited: 0,
    xws: 'munitionsfailsafe',
    sides: [
      {
        title: 'Munitions Failsafe',
        type: 'Modification',
        ability:
          'While you perform a [Torpedo] or [Missile] attack, after rolling attack dice, you may cancel all dice results to recover 1 [Charge] you spent as a cost for the attack.',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/munitionsfailsafe.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/munitionsfailsafe.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Shield Upgrade',
    limited: 0,
    xws: 'shieldupgrade',
    sides: [
      {
        title: 'Shield Upgrade',
        type: 'Modification',
        text: "Deflector shields are a substantial line of defense on most starchassis beyond the lightest fighters. While enhancing a ship's shield capacity can be costly, all but the most confident or reckless pilots see the value in this sort of investment.",
        slots: ['Modification'],
        grants: [{ stat: 'shields', value: 1 }],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/shieldupgrade.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/shieldupgrade.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Static Discharge Vanes',
    limited: 0,
    xws: 'staticdischargevanes',
    sides: [
      {
        title: 'Static Discharge Vanes',
        type: 'Modification',
        ability:
          'Before you would gain 1 ion or jam token, if you are not stressed, you may choose another ship at range 0-1 and gain 1 stress token. If you do, the chosen ship gains that ion or jam token instead, then you suffer 1 [Hit] damage.',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/staticdischargevanes.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/staticdischargevanes.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Stealth Device',
    limited: 0,
    xws: 'stealthdevice',
    sides: [
      {
        title: 'Stealth Device',
        type: 'Modification',
        ability:
          'While you defend, if your [Charge] is active, roll 1 additional defense die. After you suffer damage, lose 1 [Charge].',
        slots: ['Modification'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/stealthdevice.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/stealthdevice.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 3, '1': 4, '2': 6, '3': 8 } },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tactical Scrambler',
    limited: 0,
    xws: 'tacticalscrambler',
    sides: [
      {
        title: 'Tactical Scrambler',
        type: 'Modification',
        ability: "While you obstruct an enemy ship's attack, the defender rolls 1 additional defense die.",
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tacticalscrambler.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tacticalscrambler.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Impervium Plating',
    limited: 0,
    xws: 'imperviumplating',
    sides: [
      {
        title: 'Impervium Plating',
        type: 'Modification',
        ability: 'Before you would be dealt a faceup Ship damage card, you may spend 1 [Charge] to discard it instead.',
        charges: { value: 2, recovers: 0 },
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/imperviumplating.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/imperviumplating.png',
      },
    ],
    restrictions: [{ chassis: ['belbullab22starfighter'] }],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Synchronized Console',
    xws: 'synchronizedconsole',
    limited: 0,
    sides: [
      {
        title: 'Synchronized Console',
        type: 'Modification',
        ability:
          'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/synchronizedconsole.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/synchronizedconsole.png',
      },
    ],
    restrictions: [{ factions: ['Galactic Republic'] }, { action: { type: 'Lock', difficulty: 'White' } }],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Spare Parts Canisters',
    limited: 0,
    xws: 'sparepartscanisters',
    sides: [
      {
        title: 'Spare Parts Canisters',
        type: 'Modification',
        ability:
          'Action: Spend 1 [Charge] to recover 1 charge on one of your equipped [Astromech] upgrades. Action: Spend 1 [Charge] to drop 1 spare parts, then break all locks assigned to you.',
        charges: { value: 1, recovers: 0 },
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sparepartscanisters.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sparepartscanisters.png',
      },
    ],
    restrictions: [{ equipped: ['Astromech'] }],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Delayed Fuses',
    limited: 0,
    xws: 'delayedfuses',
    sides: [
      {
        title: 'Delayed Fuses',
        type: 'Modification',
        ability: 'After you drop, launch, or place a bomb or mine, you may place 1 fuse marker on that device.',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/delayedfuses.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/delayedfuses.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Angled Deflectors',
    limited: 0,
    xws: 'angleddeflectors',
    sides: [
      {
        text: "Starfighter shields often have manual overrides that allow them to be angled for increased front or rear protection. However, doing so leaves the ship exposed if the pilot's situational awareness falters.",
        title: 'Angled Deflectors',
        type: 'Modification',
        slots: ['Modification'],
        grants: [
          { stat: 'shields', value: -1 },
          { action: { type: 'Reinforce', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/angleddeflectors.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/angleddeflectors.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 6, '1': 3, '2': 1, '3': 1 } },
    restrictions: [{ baseSizes: ['Small', 'Medium'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Targeting Computer',
    limited: 0,
    xws: 'targetingcomputer',
    sides: [
      {
        title: 'Targeting Computer',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/targetingcomputer.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/targetingcomputer.png',
        text: 'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
        slots: ['Modification'],
        type: 'Modification',
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Independent Calculations',
    limited: 0,
    xws: 'independentcalculations',
    sides: [
      {
        ability:
          'Replace your Networked Calculations ship ability with the following: Independent Calculations: While you perform a white [Calculate] action, you may treat it as red to gain 1 additional calculate token. Other chassis cannot spend your calculate tokens using the Networked Calculations ship ability.',
        title: 'Independent Calculations',
        type: 'Modification',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/independentcalculations.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/independentcalculations.png',
      },
    ],
    restrictions: [
      {
        chassis: ['vultureclassdroidfighter', 'hyenaclassdroidbomber', 'droidtrifighter', 'rogueclassstarfighter'],
      },
      { action: { type: 'Calculate' } },
    ],
    standarized: true,
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Overdrive Thruster',
    limited: 1,
    xws: 'overdrivethruster',
    sides: [
      {
        ability:
          'While you perform a red [Boost], [Barrel Roll], or [SLAM] action, you must use a template of 1 speed higher, if able.',
        title: 'Overdrive Thruster',
        type: 'Modification',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/overdrivethruster.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/overdrivethruster.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7, '6': 8 },
    },
    restrictions: [{ chassis: ['t70xwing'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Precision Ion Engines',
    limited: 0,
    xws: 'precisionionengines',
    sides: [
      {
        ability:
          "Before you execute a speed 1-3 Koiogran Turn ([Koiogran Turn]) maneuver, you may spend 1 [Charge] to execute that maneuver as a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver instead.",
        title: 'Precision Ion Engines',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/precisionionengines.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/precisionionengines.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 1, '1': 1, '2': 1, '3': 1, '4': 1, '5': 2, '6': 2 },
    },
    restrictions: [{ keywords: ['TIE'] }, { stat: { type: 'agility', value: 3 } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Mandalorian Optics',
    limited: 0,
    xws: 'mandalorianoptics',
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Charge] to acquire a lock on an object in your [Front Arc]. While you perform a primary attack, if you have a lock on the defender, ignore obstacles beyond range 0 obstructing the attack.',
        title: 'Mandalorian Optics',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/mandalorianoptics.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/mandalorianoptics.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ keywords: ['Mandalorian'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Drop-Seat bay',
    limited: 0,
    xws: 'dropseatbay',
    sides: [
      {
        ability:
          "If you would drop a [Crew] remote using a straight [[Straight]] template, you may use a bank [[Bank Left] or [Bank Right]] template of the same speed instead and can align that template's middle line with the hashmark on your ship's left or right side instead of your rear guides. Remove [Device] slot. Add 2 [Crew] slots.",
        title: 'Drop-Seat bay',
        type: 'Modification',
        grants: [
          { slot: 'Crew', value: 2 },
          { slot: 'Device', value: -1 },
        ],
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/dropseatbay.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/dropseatbay.png',
      },
    ],
    restrictions: [{ chassis: ['gauntletfighter'] }],
    cost: { value: 1 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Beskar Reinforced Plating',
    limited: 0,
    xws: 'beskarreinforcedplating',
    sides: [
      {
        ability:
          'While you defend, if the attacker is in your [Front Arc], before you would be dealt a faceup damage card, you may spend 1 [Charge] to be dealt that card facedown instead, or spend 2 [Charge] to discard it instead.',
        title: 'Beskar Reinforced Plating',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/beskarreinforcedplating.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/beskarreinforcedplating.png',
      },
    ],
    cost: { variable: 'agility', values: { '0': 2, '1': 3, '2': 4, '3': 5 } },
    restrictions: [{ keywords: ['Mandalorian'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Burnout Thrusters',
    limited: 0,
    xws: 'burnoutthrusters',
    sides: [
      {
        ability:
          'After you perform a [SLAM] action, lose 1 [Charge]. Then you may gain 1 deplete token to remove 1 disarm token. If your [Charge] is inactive, you cannot perform the [SLAM] action.',
        title: 'Burnout Thrusters',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/burnoutthrusters.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/burnoutthrusters.png',
        grants: [{ action: { type: 'SLAM', difficulty: 'White' }, value: 1 }],
      },
    ],
    restrictions: [{ factions: ['Scum and Villainy'] }, { baseSizes: ['Small', 'Medium'] }],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Unstable Sublight Engines',
    limited: 0,
    xws: 'unstablesublightengines-battleofyavin',
    sides: [
      {
        ability:
          'After you are destroyed, you must execute a [1 [Straight]] maneuver, then each other ship at range 0-1 suffers 1 [Hit] damage.',
        title: 'Unstable Sublight Engines',
        type: 'Modification',
        slots: ['Modification'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Sensor Jammer',
    limited: 0,
    xws: 'sensorjammer-battleofyavin',
    sides: [
      {
        ability:
          "While defending, if there is a friendly lock on the attacker, you may change 1 of the attacker's [Hit] results to a [Focus] result.",
        title: 'Sensor Jammer',
        type: 'Modification',
        slots: ['Modification'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Contingency Protocol',
    limited: 0,
    xws: 'contingencyprotocol-siegeofcoruscant',
    sides: [
      {
        ability:
          'After this ship is destroyed, another friendly ship at range 0-3 with Contingency Protocol may perform an action, even while stressed.',
        title: 'Contingency Protocol',
        type: 'Modification',
        slots: ['Modification'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Evasion Sequence 7',
    limited: 0,
    xws: 'evasionsequence7-siegeofcoruscant',
    sides: [
      {
        ability:
          'While you perform a red [Evade] action, if there is an obstacle or scenario feature at range 1, treat the action as white, instead.',
        title: 'Evasion Sequence 7',
        type: 'Modification',
        slots: ['Modification'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Automated Loaders',
    limited: 0,
    xws: 'automatedloaders-swz98',
    sides: [
      {
        ability: 'After you perform a primary attack, you may spend 1 [Charge] to perform a [Reload] action.',
        title: 'Automated Loaders',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 1, recovers: 0 },
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'contingencyprotocol-rsl',
    sides: [
      {
        title: 'Contingency Protocol',
        type: 'Modification',
        ability:
          'After you are destroyed, you may choose a friendly ship with the Contingency Protocol upgrade at range 0-3. If you do, it may perform an action, even while stressed',
        slots: ['Modification'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/contingencyprotocol-rsl.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/contingencyprotocol-rsl.png',
      },
    ],
    cost: { variable: 'size', values: { Small: 1, Medium: 2, Large: 2 } },
    restrictions: [{ factions: ['Separatist Alliance'] }, { equipped: ['Tactical Relay'] }, {}],
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
