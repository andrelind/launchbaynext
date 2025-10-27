import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
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
        ffg: 292,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/ablativeplating.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/ablativeplating.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'advancedslam',
    sides: [
      {
        title: 'Advanced SLAM',
        type: 'Modification',
        ability:
          'After you perform a [SLAM] action, if you fully executed the maneuver, you may perform a white action on your action bar, treating that action as red.',
        slots: ['Modification'],
        ffg: 293,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/advancedslam.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/advancedslam.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'SLAM' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
        ffg: 294,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/afterburners.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/afterburners.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ baseSizes: ['Small'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'electronicbaffle',
    sides: [
      {
        title: 'Electronic Baffle',
        type: 'Modification',
        ability:
          'During the End Phase, you may suffer 1 [Hit] damage to remove 1 red token.',
        slots: ['Modification'],
        ffg: 295,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/electronicbaffle.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/electronicbaffle.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
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
        ffg: 296,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/engineupgrade.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/engineupgrade.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'Boost', difficulty: 'Red' } }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'hullupgrade',
    sides: [
      {
        title: 'Hull Upgrade',
        type: 'Modification',
        text: 'For those who cannot afford an enhanced shield generator, bolting additional plates onto the hull of a ship can serve as an adequate substitute.',
        slots: ['Modification'],
        grants: [{ stat: 'hull', value: 1 }],
        ffg: 297,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/hullupgrade.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/hullupgrade.png',
      },
    ],
    cost: { value: 9 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'munitionsfailsafe',
    sides: [
      {
        title: 'Munitions Failsafe',
        type: 'Modification',
        ability:
          'While you perform a [Torpedo] or [Missile] attack, after rolling attack dice, you may cancel all dice results to recover 1 [Charge] you spent as a cost for the attack.',
        slots: ['Modification'],
        ffg: 298,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/munitionsfailsafe.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/munitionsfailsafe.png',
      },
    ],
    cost: { value: 1 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'shieldupgrade',
    sides: [
      {
        title: 'Shield Upgrade',
        type: 'Modification',
        text: "Deflector shields are a substantial line of defense on most starships beyond the lightest fighters. While enhancing a ship's shield capacity can be costly, all but the most confident or reckless pilots see the value in this sort of investment.",
        slots: ['Modification'],
        grants: [{ stat: 'shields', value: 1 }],
        ffg: 299,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/shieldupgrade.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/shieldupgrade.png',
      },
    ],
    cost: { value: 10 },
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'staticdischargevanes',
    sides: [
      {
        title: 'Static Discharge Vanes',
        type: 'Modification',
        ability:
          'Before you would gain 1 ion or jam token, if you are not stressed, you may choose another ship at range 0-1 and gain 1 stress token. If you do, the chosen ship gains that ion or jam token instead, then you suffer 1 [Hit] damage.',
        slots: ['Modification'],
        ffg: 300,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/staticdischargevanes.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/staticdischargevanes.png',
      },
    ],
    cost: { value: 12 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
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
        ffg: 301,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/stealthdevice.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/stealthdevice.png',
      },
    ],
    cost: { value: 8 },
    standard: false,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'tacticalscrambler',
    sides: [
      {
        title: 'Tactical Scrambler',
        type: 'Modification',
        ability:
          "While you obstruct an enemy ship's attack, the defender rolls 1 additional defense die.",
        slots: ['Modification'],
        ffg: 302,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/tacticalscrambler.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/tacticalscrambler.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ baseSizes: ['Medium', 'Large'] }],
    standard: true,
    epic: true,
    extended: true,
  },
  {
    limited: 0,
    xws: 'imperviumplating',
    sides: [
      {
        title: 'Impervium Plating',
        type: 'Modification',
        ability:
          'Before you would be dealt a faceup Ship damage card, you may spend 1 [Charge] to discard it instead.',
        charges: { value: 2, recovers: 0 },
        slots: ['Modification'],
        ffg: 534,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/imperviumplating.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/imperviumplating.png',
      },
    ],
    restrictions: [{ chassis: ['belbullab22starfighter'] }],
    standard: true,
    epic: true,
    cost: { value: 2 },
    extended: true,
  },
  {
    xws: 'synchronizedconsole',
    limited: 0,
    sides: [
      {
        title: 'Synchronized Console',
        type: 'Modification',
        ability:
          'After you perform an attack, you may choose a friendly ship at range 1 or a friendly ship with the Synchronized Console upgrade at range 1-3 and spend a lock you have on the defender. If you do, the friendly ship you chose may acquire a lock on the defender.',
        slots: ['Modification'],
        ffg: 554,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/synchronizedconsole.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/synchronizedconsole.png',
      },
    ],
    restrictions: [
      { factions: ['galacticrepublic'] },
      { action: { type: 'Lock', difficulty: 'White' } },
    ],
    standard: true,
    epic: true,
    cost: { value: 2 },
    extended: true,
  },
  {
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
        ffg: 550,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/sparepartscanisters.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/sparepartscanisters.png',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 3 },
    restrictions: [{ equipped: ['Astromech'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'delayedfuses',
    sides: [
      {
        title: 'Delayed Fuses',
        type: 'Modification',
        ability:
          'After you drop, launch, or place a bomb or mine, you may place 1 fuse marker on that device.',
        slots: ['Modification'],
        ffg: 592,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/delayedfuses.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/delayedfuses.png',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 1 },
    extended: true,
  },
  {
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
        ffg: 593,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/angleddeflectors.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/angleddeflectors.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [
      { baseSizes: ['Small', 'Medium'] },
      { stat: { type: 'shields', value: 1 } },
    ],
    cost: { value: 1 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'targetingcomputer',
    sides: [
      {
        ffg: 619,
        title: 'Targeting Computer',
        text: 'Targeting computers are standard features on many vessels, especially those designed to deliver ordnance. Some light starfighters and transport craft lack such weapons guidance, though it can be installed as an after-market modification.',
        slots: ['Modification'],
        type: 'Modification',
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/targetingcomputer.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/targetingcomputer.png',
      },
    ],
    standard: true,
    epic: true,
    cost: { value: 1 },
    extended: true,
  },
  {
    xws: 'overdrivethruster',
    limited: 1,
    cost: { value: 5 },
    sides: [
      {
        ability:
          'While you perform a red [Boost], [Barrel Roll], or [SLAM] action, you must use a template of 1 speed higher, if able.',
        title: 'Overdrive Thruster',
        type: 'Modification',
        slots: ['Modification'],
        ffg: 721,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/overdrivethruster.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/overdrivethruster.png',
      },
    ],
    standard: true,
    epic: true,
    restrictions: [{ chassis: ['t70xwing'] }],
    extended: true,
  },
  {
    limited: 0,
    xws: 'independentcalculations',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          'Replace your Networked Calculations ship ability with the following: Independent Calculations: While you perform a white [Calculate] action, you may treat it as red to gain 1 additional calculate token. Other ships cannot spend your calculate tokens using the Networked Calculations ship ability.',
        title: 'Independent Calculations',
        type: 'Modification',
        slots: ['Modification'],
        ffg: 866,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/independentcalculations.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/independentcalculations.png',
      },
    ],
    standarized: true,
    restrictions: [{ shipAbility: ['Networked Calculations'] }],
    cost: { value: 1 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'precisionionengines',
    standard: true,
    epic: true,
    sides: [
      {
        ability:
          "Before you execute a speed 1-3 Koiogran Turn ([Koiogran Turn]) maneuver, you may spend 1 [Charge] to execute that maneuver as a Segnor's Loop ([Segnor's Loop Left] or [Segnor's Loop Right]) maneuver instead.",
        title: 'Precision Ion Engines',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        ffg: 867,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/precisionionengines.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/precisionionengines.png',
      },
    ],
    cost: { value: 1 },
    extended: true,
  },
  {
    limited: 0,
    xws: 'mandalorianoptics',
    standard: true,
    epic: true,
    cost: { value: 3 },
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Charge] to acquire a lock on an object in your [Front Arc]. While you perform a primary attack, if you have a lock on the defender, ignore obstacles beyond range 0 obstructing the attack.',
        title: 'Mandalorian Optics',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/mandalorianoptics.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/mandalorianoptics.png',
      },
    ],
    extended: true,
    restrictions: [{ keywords: ['Mandalorian'] }],
  },
  {
    limited: 0,
    xws: 'beskarreinforcedplating',
    standard: true,
    epic: true,
    cost: { value: 6 },
    sides: [
      {
        ability:
          'While you defend, if the attacker is in your [Front Arc], before you would be dealt a faceup damage card, you may spend 1 [Charge] to be dealt that card facedown instead, or spend 2 [Charge] to discard it instead.',
        title: 'Beskar Reinforced Plating',
        type: 'Modification',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/beskarreinforcedplating.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/beskarreinforcedplating.png',
      },
    ],
    extended: true,
    restrictions: [{ keywords: ['Mandalorian'] }],
  },
  {
    limited: 0,
    xws: 'burnoutthrusters',
    standard: true,
    epic: true,
    cost: { value: 5 },
    sides: [
      {
        ability:
          'After you perform a [SLAM] action, lose 1 [Charge]. Then you may gain 1 deplete token to remove 1 disarm token. \n\nIf your [Charge] is inactive, you cannot perform the [SLAM] action.',
        title: 'Burnout Thrusters',
        charges: { value: 1, recovers: 0 },
        grants: [{ action: { type: 'SLAM', difficulty: 'White' }, value: 1 }],
        type: 'Modification',
        slots: ['Modification'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/burnoutthrusters.png',
        image:
          'https://infinitearenas.com/xw2/images/upgrades/burnoutthrusters.png',
      },
    ],
    extended: true,
    restrictions: [
      { factions: ['scumandvillainy'] },
      { baseSizes: ['Small', 'Medium'] },
    ],
  },
  {
    limited: 0,
    xws: 'dropseatbay',
    sides: [
      {
        ability:
          "If you would drop a [Crew] remote using a straight [Straight] template, you may use a bank [Bank Left] or [Bank Right] template of the same speed instead and can align that template's middle line with the hashmark on your ship's left or right side instead of your rear guides. Remove [Device] slot. Add 2 [Crew] slots.",
        title: 'Drop-Seat bay',
        type: 'Modification',
        grants: [
          { slot: 'Crew', value: 2 },
          { slot: 'Device', value: -1 },
        ],
        slots: ['Modification'],
        ffg: -1,
        artwork:
          'https://infinitearenas.com/xw2/images/artwork/upgrades/dropseatbay.png',
        image: 'https://infinitearenas.com/xw2/images/upgrades/dropseatbay.png',
      },
    ],
    restrictions: [{ chassis: ['gauntletfighter'] }],
    cost: { value: 0 },
    standard: true,
    extended: true,
    epic: true,
  },
  {
    limited: 0,
    xws: 'unstablesublightengines-battleofyavin',
    sides: [
      {
        ability:
          'After you are destroyed, you must execute a (1 [Straight]) maneuver, then each other ship at range 0-1 suffers 1 [Hit] damage.',
        title: 'Unstable Sublight Engines',
        type: 'Modification',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
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
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'evasionsequence7-siegeofcoruscant',
    sides: [
      {
        ability:
          'While you perform a red [Evade] action, if there is an obstacle or scenario feature at range 1, treat the action as white, instead.',
        title: 'Evasion Sequence',
        type: 'Modification',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'automatedloaders-swz98',
    sides: [
      {
        title: 'Automated Loaders',
        charges: { value: 1, recovers: 0 },
        type: 'Modification',
        ability:
          'After you perform a primary attack, you may spend 1 [Charge] to perform a [Reload] action.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'chaffparticles-battleoverendor',
    sides: [
      {
        title: 'Chaff Particles',
        type: 'Modification',
        ability:
          'While defending, you may spend 1 [Focus] result at the end of the Neutralize Results step to remove 1 red or orange token.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'computerassistedhandling-battleoverendor',
    sides: [
      {
        title: 'Computer-Assisted Handling',
        type: 'Modification',
        ability:
          'After you fully execute a maneuver, you may spend 1 [Charge] to perform a [Boost] or [Barrel Roll] action.',
        slots: ['Modification'],
        charges: { value: 1, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'targetingmatrix-battleoverendor',
    sides: [
      {
        title: 'Targeting Matrix',
        type: 'Modification',
        ability:
          'While attacking, you may spend 1 [Focus] result at the end of the Neutralize Results step. If you do, after the attack is resolved, the defender gains a strain token.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'targetassistalgorithm-battleoverendor',
    sides: [
      {
        title: 'Target-Assist Algorithm',
        type: 'Modification',
        ability:
          'Before you engage, if you have no green tokens and there are 1 or more enemy objects in your [Front Arc], gain a calculate token.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'ionmaneuveringjet-battleoverendor',
    sides: [
      {
        title: 'Ion Maneuvering Jet',
        type: 'Modification',
        ability:
          'After you fully execute a Koiogran Turn [Koiogran Turn] maneuver, you may spend 1 [Charge] to perform an action, even while stressed.',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'fuelinjectionoverride-battleoverendor',
    sides: [
      {
        title: 'Fuel Injection Override',
        type: 'Modification',
        ability:
          'While you perform a [Boost] or [Barrel Roll] action, you may spend 1 [Charge] to use a template of 1 speed higher.',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Advanced Warning Systmes',
    limited: 0,
    xws: 'advancedwarningsystems-evacuationofdqar',
    sides: [
      {
        title: 'Advanced Warning Systems',
        type: 'Modification',
        ability:
          'After you are declared the defender of an attack, if a friendly ship at range 0-2 has a lock on the attacker, you may perform a red [evade] action.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Adaptable Power Systems',
    limited: 0,
    xws: 'adaptablepowersystems-armedanddangerous',
    sides: [
      {
        title: 'Adaptable Power Systems',
        type: 'Modification',
        ability:
          'After you fully execute a red maneuver or perform a red action, you may spend 1 [Charge]. If you do, you may gain 1 deplete token to remove 1 stress token. Before you engage, you may spend 1 [charge]. If you do, you may gain 1 strain token to remove 1 deplete token.',
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Starboard Thrusters',
    limited: 0,
    xws: 'starboardthrusters-armedanddangerous',
    sides: [
      {
        title: 'Starboard Thrusters',
        type: 'Modification',
        ability:
          "After you reveal a turn ([LeftTurn]) or Segnor's Loop ([sloop left]) maneuver,  you may spend 1 [Charge]. If you do, decrease the difficulty of that maneuver. After you execute a white Segnor's Loop ([sloop left]), gain 1 strain token.",
        slots: ['Modification'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Repulsorlift Engines',
    limited: 0,
    xws: 'repulsorliftengines-evacuationofdqar',
    sides: [
      {
        title: 'Repulsorlift Engines',
        type: 'Modification',
        ability:
          'While you perform a [barrel roll] action, you may gain 1 strain token to use the [left bank] or [right bank] template instead of the [straight] template.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'stygiumreserve-tiephphantom',
    sides: [
      {
        title: 'Stygium Reserve',
        type: 'Modification',
        charges: { value: 1, recovers: 0 },
        ability:
          'After you fully execute a maneuver, you may spend 1 [Charge] to perform a [Boost] action, even while stressed.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 0,
    xws: 'manualailerons-tiephphantom',
    sides: [
      {
        title: 'Manual Ailerons',
        type: 'Modification',
        charges: { value: 2, recovers: 0 },
        ability:
          'When you decloak, you may spend 1 [Charge] to use the [2 [Bank Left]) or [2 [Bank Right]) template instead of the [2 [Straight]) template.',
        slots: ['Modification'],
      },
    ],
    standard: true,
    extended: true,
    epic: true,
    standardLoadoutOnly: true,
  },
];

export default t;
