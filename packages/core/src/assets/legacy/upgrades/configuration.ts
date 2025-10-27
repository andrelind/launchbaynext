import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Integrated S-foils',
    limited: 0,
    xws: 'integratedsfoils',
    sides: [
      {
        title: 'Integrated S-foils (Closed)',
        type: 'Configuration',
        ability:
          'While you perform a primary attack, if the defender is not in your [Bullseye Arc], roll 1 fewer attack die. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Barrel Roll', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Barrel Roll', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/integratedsfoils-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/integratedsfoils.png',
      },
      {
        title: 'Integrated S-foils (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/integratedsfoils.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/integratedsfoils-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t70xwing'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Os-1 Arsenal Loadout',
    limited: 0,
    xws: 'os1arsenalloadout',
    sides: [
      {
        title: 'Os-1 Arsenal Loadout',
        type: 'Configuration',
        ability:
          'While you have exactly 1 disarm token, you can still perform [Torpedo] and [Missile] attacks against targets you have locked. If you do, you cannot spend your lock during the attack. Add [Torpedo] and [Missile] slots.',
        slots: ['Configuration'],
        grants: [
          { slot: 'Torpedo', value: 1 },
          { slot: 'Missile', value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/os1arsenalloadout.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/os1arsenalloadout.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    standard: false,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Pivot Wing',
    limited: 0,
    xws: 'pivotwing',
    sides: [
      {
        title: 'Pivot Wing (Closed)',
        type: 'Configuration',
        ability:
          'While you defend, roll 1 fewer defense die. After you execute a [0 [Stationary]] maneuver, you may rotate your ship 90° or 180°. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/pivotwing-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/pivotwing.png',
      },
      {
        title: 'Pivot Wing (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/pivotwing.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/pivotwing-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['ut60duwing'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Swivel Wing',
    limited: 0,
    xws: 'swivelwing',
    sides: [
      {
        title: 'Swivel Wing (Down)',
        type: 'Configuration',
        ability:
          'After you execute a [0 [Stationary]] maneuver, you may rotate your ship 90° or 180°. If you do, you must flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/swivelwing.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/swivelwing.png',
      },
      {
        title: 'Swivel Wing (Up)',
        type: 'Configuration',
        ability:
          'While you defend, roll 1 fewer defense die. After you fully execute a non-stationary ([Stationary]) maneuver, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/swivelwing-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/swivelwing-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['gauntletfighter'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Servomotor S-foils',
    limited: 0,
    xws: 'servomotorsfoils',
    sides: [
      {
        title: 'Servomotor S-foils (Closed)',
        type: 'Configuration',
        ability:
          'While you perform a primary attack, roll 1 fewer attack die. Before you activate, you may flip this card.',
        slots: ['Configuration'],
        actions: [
          { type: 'Boost', difficulty: 'White' },
          {
            type: 'Focus',
            difficulty: 'White',
            linked: { difficulty: 'Red', type: 'Boost' },
          },
        ],
        grants: [
          { action: { type: 'Boost', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Boost', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/servomotorsfoils-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/servomotorsfoils.png',
      },
      {
        title: 'Servomotor S-foils (Open)',
        type: 'Configuration',
        ability: 'Before you activate, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/servomotorsfoils.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/servomotorsfoils-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['t65xwing'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Xg-1 Assault Configuration',
    limited: 0,
    xws: 'xg1assaultconfiguration',
    sides: [
      {
        title: 'Xg-1 Assault Configuration',
        type: 'Configuration',
        ability:
          'While you have exactly 1 disarm token, you can still perform [Cannon] attacks. While you perform a [Cannon] attack while disarmed, roll a maximum of 3 attack dice. Add [Cannon] slot.',
        slots: ['Configuration'],
        grants: [{ slot: 'Cannon', value: 1 }],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/xg1assaultconfiguration.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/xg1assaultconfiguration.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['alphaclassstarwing'] }],
    standard: false,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Grappling Struts',
    limited: 0,
    xws: 'grapplingstruts',
    sides: [
      {
        title: 'Grappling Struts (Closed)',
        type: 'Configuration',
        ability:
          'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/grapplingstruts.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/grapplingstruts.png',
      },
      {
        title: 'Grappling Struts (Open)',
        type: 'Configuration',
        ability:
          'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a [2 [Straight]] and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/grapplingstruts-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/grapplingstruts-sideb.png',
      },
    ],
    restrictions: [{ chassis: ['vultureclassdroidfighter'] }],
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Delta-7B',
    limited: 0,
    xws: 'delta7b',
    sides: [
      {
        title: 'Delta-7B',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { stat: 'agility', value: -1 },
          { stat: 'shields', value: 2 },
          { stat: 'attack', arc: 'Front Arc', value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/delta7b.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/delta7b.png',
        text: "The Delta-7B was designed as a heavier variant of the Delta-7 Aethersprite-class Interceptor, identifiable by the repositioned astromech slot. Many Jedi Generals favor this craft's greater firepower and durability.",
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 15, '1': 15, '2': 15, '3': 15, '4': 16, '5': 18, '6': 22 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    standard: false,
    wildspace: false,
    epic: false,
  },
  {
    name: 'Calibrated Laser Targeting',
    limited: 0,
    xws: 'calibratedlasertargeting',
    sides: [
      {
        title: 'Calibrated Laser Targeting',
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability:
          'While you perform a primary attack, if the defender is in your [Bullseye Arc], add 1 [Focus] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/calibratedlasertargeting.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/calibratedlasertargeting.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: { '0': 2, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 },
    },
    restrictions: [{ chassis: ['delta7aethersprite'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Landing Struts',
    limited: 0,
    xws: 'landingstruts',
    sides: [
      {
        title: 'Landing Struts (Closed)',
        type: 'Configuration',
        ability:
          'Setup: Equip this side faceup. While you execute a maneuver, if you overlap an asteroid or debris cloud and there are 1 or fewer other friendly ships at range 0 of that obstacle, you may flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/landingstruts.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/landingstruts.png',
      },
      {
        title: 'Landing Struts (Open)',
        type: 'Configuration',
        ability:
          'You ignore obstacles at range 0 and while you move through them. After you reveal your dial, if you reveal a maneuver other than a [2 [Straight]] and are at range 0 of an asteroid or debris cloud, skip your Execute Maneuver step and remove 1 stress token; if you revealed a right or left maneuver, rotate your ship 90° in that direction. After you execute a maneuver, flip this card.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/landingstruts-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/landingstruts-sideb.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['hyenaclassdroidbomber'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Corsair Refit',
    limited: 2,
    xws: 'corsairrefit',
    sides: [
      {
        ability:
          'Add [Cannon], [Turret], and [Missile] slots. Bonus Attack: Spend 1 [Energy] to perform a [Cannon], [Turret], or [Missile] attack.',
        title: 'Corsair Refit',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { slot: 'Cannon', value: 1 },
          { slot: 'Turret', value: 1 },
          { slot: 'Missile', value: 1 },
          { stat: 'hull', value: 2 },
          { stat: 'shields', value: -2 },
          { stat: 'energy', value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/corsairrefit.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/corsairrefit.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ chassis: ['croccruiser'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Stabilized S-foils',
    limited: 0,
    xws: 'stabilizedsfoils',
    sides: [
      {
        ability:
          'Before you activate, if you are not critically damaged, you may flip this card.',
        title: 'Stabilized S-foils (Closed)',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Evade', difficulty: 'Red' },
            },
            value: 1,
          },
          { action: { type: 'Reload', difficulty: 'Red' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/stabilizedsfoils.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/stabilizedsfoils-sideb.png',
      },
      {
        ability:
          'After you perform an attack, you may spend your lock on the defender to perform a bonus [Cannon] attack against that ship using a [Cannon] upgrade you have not attacked with this turn. Before you activate, if you are not critically damaged, you may flip this card.',
        title: 'Stabilized S-foils (Open)',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/stabilizedsfoils-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/stabilizedsfoils.png',
      },
    ],
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Repulsorlift Stabilizers',
    limited: 0,
    xws: 'repulsorliftstabilizers',
    sides: [
      {
        title: 'Repulsorlift Stabilizers (Inactive)',
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/repulsorliftstabilizers.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/repulsorliftstabilizers.png',
        ability:
          'Setup: Equip this side faceup. Reduce the difficulty of your straight ([Straight]) maneuvers. After you fully execute a maneuver, you may flip this card.',
      },
      {
        title: 'Repulsorlift Stabilizers (Active)',
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/repulsorliftstabilizers-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/repulsorliftstabilizers-sideb.png',
        ability:
          'After you reveal a bank ([Bank Left] or [Bank Right]) or turn ([Turn Left] or [Turn Right]) maneuver, you must perform that maneuver as a sideslip, then flip this card. After you fully execute a non-sideslip maneuver, you may flip this card.',
      },
    ],
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Alpha-3B “Besh”',
    limited: 0,
    xws: 'alpha3bbesh',
    sides: [
      {
        ability:
          'While you perform a primary attack, you may spend your lock on the defender to change 1 of your blank or [Focus] results to a [Hit] result. Add [Device] slot.',
        title: 'Alpha-3B “Besh”',
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/alpha3bbesh.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/alpha3bbesh.png',
      },
    ],
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Alpha-3E “Esk”',
    limited: 0,
    xws: 'alpha3eesk',
    sides: [
      {
        ability:
          'While you perform a primary attack, before rolling attack dice, you may spend 2 [Charge]. If you do, your [Critical Hit] results inflict ion tokens instead of damage.',
        title: 'Alpha-3E “Esk”',
        type: 'Configuration',
        slots: ['Configuration'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/alpha3eesk.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/alpha3eesk.png',
      },
    ],
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Intercept Booster',
    limited: 0,
    xws: 'interceptbooster',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. During the System Phase, gain 1 disarm token unless you flip this card. At the end of the End Phase, if you have no active [Charge], flip this card.',
        title: 'Intercept Booster (Attached)',
        type: 'Configuration',
        slots: ['Configuration'],
        charges: { value: 3, recovers: -1 },
        grants: [
          {
            action: {
              type: 'SLAM',
              difficulty: 'White',
              linked: { type: 'Lock', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/interceptbooster.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/interceptbooster.png',
      },
      {
        text: 'Unhindered by the frailty of an organic pilot, Droid Tri-Fighters are capable of radical acceleration and acute maneuvering. Fitted with booster rockets and fired from the missile tubes of Separatist capital ships, they can intercept hostiles well beyond the range of conventionally deployed starfighters.',
        title: 'Intercept Booster (Detached)',
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/interceptbooster-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/interceptbooster-sideb.png',
      },
    ],
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Maneuver-Assist MGK-300',
    limited: 0,
    xws: 'maneuverassistmgk300',
    sides: [
      {
        ability:
          'Reduce the difficulty of your speed 3 straight ([Straight]) and bank ([Bank Left] or [Bank Right]) maneuvers.',
        title: 'Maneuver-Assist MGK-300',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/maneuverassistmgk300.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/maneuverassistmgk300.png',
      },
    ],
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Target-Assist MGK-300',
    limited: 0,
    xws: 'targetassistmgk300',
    sides: [
      {
        ability:
          'Before you engage, if you have no green tokens and you are not stressed, gain 1 calculate token for each enemy ship at range 2-3 in your firing arc, to a maximum of 2.',
        title: 'Target-Assist MGK-300',
        type: 'Configuration',
        slots: ['Configuration'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Calculate', difficulty: 'White' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/targetassistmgk300.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/targetassistmgk300.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Sensitive Controls',
    limited: 0,
    xws: 'sensitivecontrols',
    sides: [
      {
        ability:
          'Replace your Autothrusters ship ability with the following:\n<strong>Sensitive Controls:</strong> During the System Phase, you may perform a red [Barrel Roll] or red [Boost] action.',
        title: 'Sensitive Controls',
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sensitivecontrols.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sensitivecontrols.png',
      },
    ],
    restrictions: [{}, {}],
    standarized: true,
    cost: { value: 0 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'TIE Defender Elite',
    limited: 0,
    xws: 'tiedefenderelite',
    sides: [
      {
        ability:
          'Decrease the difficulty of your turn ([Turn Left] or [Turn Right]) maneuvers. Increase the difficulty of your Koiogran Turn ([Koiogran Turn]) maneuvers. Replace your Full Throttle ship ability with the following: Advanced Fire Control: After you perform a [Cannon] or [Missile] attack, if you have a lock on the defender, you may perform a bonus primary attack against the defender.',
        title: 'TIE Defender Elite',
        type: 'Configuration',
        slots: ['Configuration'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tiedefenderelite.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tiedefenderelite.png',
      },
    ],
    restrictions: [
      { factions: ['galacticempire'] },
      { chassis: ['tieddefender'] },
      {},
    ],
    standarized: true,
    cost: { value: -8 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Vectored Cannons (RZ-1)',
    limited: 0,
    xws: 'vectoredcannonsrz1',
    sides: [
      {
        ability:
          'Gain a [Single Turret Arc] indicator. Treat the arc requirement of your [Front Arc] primary attack as [Single Turret Arc]. Replace your Vectored Thrusters ship ability with the following: Vectored Cannons: During the System Phase, you may perform a red [Boost] or red [Rotate Arc] action. You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc].',
        title: 'Vectored Cannons (RZ-1)',
        type: 'Configuration',
        slots: ['Configuration'],
        attack: {
          arc: 'Single Turret Arc',
          value: 2,
          minrange: 1,
          maxrange: 3,
          ordnance: false,
        },
        grants: [{ arc: 'Single Turret Arc', value: 1 }],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/vectoredcannonsrz1.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/vectoredcannonsrz1.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{}, {}],
    standarized: true,
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Wartime Loadout',
    limited: 0,
    xws: 'wartimeloadout',
    sides: [
      {
        title: 'Wartime Loadout',
        type: 'Configuration',
        slots: ['Configuration', 'Modification'],
        ability:
          'Gain 1 [Torpedo] slot and 1 [Missile] slot. Replace your ship ability with the following: Devastating Barrage: While you perform a [Torpedo] or [Missile] attack, if the defender is in your [Bullseye Arc], your [Critical Hit] results cannont be canceled by [Evade] results.',
        grants: [
          { action: { type: 'Lock', difficulty: 'White' }, value: 1 },
          { action: { type: 'Reload', difficulty: 'White' }, value: 1 },
          { stat: 'shields', value: 2 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/wartimeloadout.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/wartimeloadout.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ chassis: ['btanr2ywing'] }, {}],
    standarized: true,
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Enhanced Jamming Suite',
    limited: 0,
    xws: 'enhancedjammingsuite',
    sides: [
      {
        title: 'Enhanced Jamming Suite',
        type: 'Configuration',
        slots: ['Configuration', 'Tech'],
        ability:
          'While you jam, you can choose yourself or another friendly ship. While you defend, if the attacker has no green tokens or there is a jammed ship in the attack arc, you may roll 1 additional defense die.',
        grants: [
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Barrel Roll',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          {
            action: {
              type: 'Boost',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'White' },
            },
            value: 1,
          },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/enhancedjammingsuite.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/enhancedjammingsuite.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['tiewiwhispermodifiedinterceptor'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: "L3-37's Programming",
    limited: 1,
    xws: 'l337sprogramming-battleofyavin',
    sides: [
      {
        title: "L3-37's Programming",
        type: 'Configuration',
        ability:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        slots: ['Configuration'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Strut-Lock Override',
    limited: 0,
    xws: 'strutlockoverride-siegeofcoruscant',
    sides: [
      {
        title: 'Strut-Lock Override',
        type: 'Configuration',
        ability:
          'At the start of your activation, you may spend 1 [Charge]. If you do, ignore obstacles while you move through them this round.',
        charges: { value: 2, recovers: 0 },
        slots: ['Configuration'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
];

export default t;
