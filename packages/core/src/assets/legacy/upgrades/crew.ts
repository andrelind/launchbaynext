import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: '“Chopper”',
    limited: 1,
    xws: 'chopper-crew',
    sides: [
      {
        title: '“Chopper”',
        type: 'Crew',
        ability:
          'During the Perform Action step, you may perform 1 action, even while stressed. After you perform an action while stressed, suffer 1 [Hit] damage unless you expose 1 of your damage cards.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chopper-crew.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chopper-crew.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: '“Zeb” Orrelios',
    limited: 1,
    xws: 'zeborrelios',
    sides: [
      {
        title: '“Zeb” Orrelios',
        type: 'Crew',
        ability:
          'You can perform primary attacks at range 0. Enemy ships at range 0 can perform primary attacks against you.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/zeborrelios.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/zeborrelios.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: '0-0-0',
    limited: 1,
    xws: '000',
    sides: [
      {
        title: '0-0-0',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may choose 1 enemy ship at range 0-1. If you do, you gain 1 calculate token unless that ship chooses to gain 1 stress token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/000.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/000.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [
      { factions: ['scumandvillainy'], character: ['Darth Vader'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: '4-LOM',
    limited: 1,
    xws: '4lom',
    sides: [
      {
        title: '4-LOM',
        type: 'Crew',
        ability:
          'While you perform an attack, after rolling attack dice, you may name a type of green token. If you do, gain 2 ion tokens and, during this attack, the defender cannot spend tokens of the named type.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/4lom.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/4lom.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Admiral Sloane',
    limited: 1,
    xws: 'admiralsloane',
    sides: [
      {
        title: 'Admiral Sloane',
        type: 'Crew',
        ability:
          'After another friendly ship at range 0-3 defends, if it is destroyed, the attacker gains 2 stress tokens. While a friendly ship at range 0-3 performs an attack against a stressed ship, it may reroll 1 attack die.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/admiralsloane.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/admiralsloane.png',
      },
    ],
    cost: { value: 18 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Agent Kallus',
    limited: 1,
    xws: 'agentkallus',
    sides: [
      {
        title: 'Agent Kallus',
        type: 'Crew',
        ability:
          'Setup: After placing forces, assign the Hunted condition to 1 enemy ship. While you perform an attack against the ship with the Hunted condition, you may change 1 of your [Focus] results to a [Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/agentkallus.png',
        conditions: ['hunted'],
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/agentkallus.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Baze Malbus',
    limited: 1,
    xws: 'bazemalbus',
    sides: [
      {
        title: 'Baze Malbus',
        type: 'Crew',
        ability:
          'While you perform a [Focus] action, you may treat it as red. If you do, gain 1 additional focus token for each enemy ship at range 0-1, to a maximum of 2.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bazemalbus.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bazemalbus.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Boba Fett',
    limited: 1,
    xws: 'bobafett',
    sides: [
      {
        title: 'Boba Fett',
        type: 'Crew',
        ability:
          'Setup: Start in reserve. At the end of Setup, place yourself at range 0 of an obstacle and beyond range 3 of any enemy ship.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bobafett.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bobafett.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'C-3PO',
    limited: 1,
    xws: 'c3po',
    sides: [
      {
        title: 'C-3PO',
        type: 'Crew',
        ability:
          'Before rolling defense dice, you may spend 1 calculate token to guess aloud a number 1 or higher. If you do and you roll exactly that many [Evade] results, add 1 [Evade] result. After you perform the [Calculate] action, gain 1 calculate token.',
        slots: ['Crew'],
        actions: [{ type: 'Calculate', difficulty: 'White' }],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/c3po.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/c3po.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Cad Bane',
    limited: 1,
    xws: 'cadbane',
    sides: [
      {
        title: 'Cad Bane',
        type: 'Crew',
        ability:
          'After you drop or launch a device, you may perform a red [Boost] action.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/cadbane.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/cadbane.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Captain Phasma',
    limited: 1,
    xws: 'captainphasma',
    sides: [
      {
        title: 'Captain Phasma',
        type: 'Crew',
        ability:
          'At the end of the Engagement Phase, each enemy ship at range 0-1 that is not stressed gains 1 stress token.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/captainphasma.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/captainphasma.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['firstorder'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Cassian Andor',
    limited: 1,
    xws: 'cassianandor',
    sides: [
      {
        title: 'Cassian Andor',
        type: 'Crew',
        ability:
          "During the System Phase, you may choose 1 enemy ship at range 1-2 and guess aloud a bearing and speed, then look at that ship's dial. If the chosen ship's bearing and speed match your guess, you may set your dial to another maneuver.",
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/cassianandor.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/cassianandor.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Chewbacca',
    limited: 1,
    xws: 'chewbacca',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may spend 2 [Charge] to repair 1 faceup damage card.',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chewbacca.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chewbacca.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Chewbacca',
    limited: 1,
    xws: 'chewbacca-crew',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'At the start of the End Phase, you may spend 1 focus token to repair 1 of your faceup damage cards.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chewbacca-crew.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chewbacca-crew.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ciena Ree',
    limited: 1,
    xws: 'cienaree',
    sides: [
      {
        title: 'Ciena Ree',
        type: 'Crew',
        ability:
          'After you perform a [Coordinate] action, if the ship you coordinated performed a [Barrel Roll] or [Boost] action, it may gain 1 stress token to rotate 90°.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/cienaree.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/cienaree.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['galacticempire'] },
      { action: { type: 'Coordinate' } },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Cikatro Vizago',
    limited: 1,
    xws: 'cikatrovizago',
    sides: [
      {
        title: 'Cikatro Vizago',
        type: 'Crew',
        ability:
          'During the End Phase, you may choose 2 [Illicit] upgrades equipped to friendly ships at range 0-1. If you do, you may exchange these upgrades. End of Game: Return all [Illicit] upgrades to their original ships.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/cikatrovizago.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/cikatrovizago.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Darth Vader',
    limited: 1,
    xws: 'darthvader',
    sides: [
      {
        title: 'Darth Vader',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, you may choose 1 ship in your firing arc at range 0-2 and spend 1 [Force]. If you do, that ship suffers 1 [Hit] damage unless it chooses to remove 1 green token.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/darthvader.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/darthvader.png',
      },
    ],
    cost: { value: 16 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Death Troopers',
    limited: 1,
    xws: 'deathtroopers',
    sides: [
      {
        title: 'Death Troopers',
        type: 'Crew',
        ability:
          'During the Activation Phase, enemy ships at range 0-1 cannot remove stress tokens.',
        slots: ['Crew', 'Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/deathtroopers.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/deathtroopers.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Director Krennic',
    limited: 1,
    xws: 'directorkrennic',
    sides: [
      {
        title: 'Director Krennic',
        type: 'Crew',
        ability:
          'Setup: Before placing forces, assign the Optimized Prototype condition to another friendly ship.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/directorkrennic.png',
        conditions: ['optimizedprototype'],
        slots: ['Crew'],
        actions: [{ type: 'Lock', difficulty: 'White' }],
        grants: [{ action: { type: 'Lock', difficulty: 'White' }, value: 1 }],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/directorkrennic.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Emperor Palpatine',
    limited: 1,
    xws: 'emperorpalpatine',
    sides: [
      {
        title: 'Emperor Palpatine',
        type: 'Crew',
        ability:
          'While another friendly ship defends or performs an attack, you may spend 1 [Force] to modify 1 of its dice as though that ship had spent 1 [Force].',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/emperorpalpatine.png',
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/emperorpalpatine.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Freelance Slicer',
    limited: 0,
    xws: 'freelanceslicer',
    sides: [
      {
        title: 'Freelance Slicer',
        type: 'Crew',
        ability:
          'While you defend, before attack dice are rolled, you may spend a lock you have on the attacker to roll 1 attack die. If you do, the attacker gains 1 jam token. Then, on a [Hit] or [Critical Hit] result, gain 1 jam token.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/freelanceslicer.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/freelanceslicer.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'General Hux',
    limited: 1,
    xws: 'generalhux',
    sides: [
      {
        title: 'General Hux',
        type: 'Crew',
        ability:
          'While you perform a white [Coordinate] action, you may treat it as red. If you do, you may coordinate up to 2 additional ships of the same ship type, and each ship you coordinate must perform the same action, treating that action as red.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/generalhux.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/generalhux.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['firstorder'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'GNK “Gonk” Droid',
    limited: 0,
    xws: 'gnkgonkdroid',
    sides: [
      {
        title: 'GNK “Gonk” Droid',
        type: 'Crew',
        ability:
          'Setup: Lose 1 [Charge]. Action: Recover 1 [Charge]. Action: Spend 1 [Charge] to recover 1 shield.',
        slots: ['Crew'],
        charges: { value: 1, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/gnkgonkdroid.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/gnkgonkdroid.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Grand Inquisitor',
    limited: 1,
    xws: 'grandinquisitor',
    sides: [
      {
        title: 'Grand Inquisitor',
        type: 'Crew',
        ability:
          'After an enemy ship at range 0-2 reveals its dial, you may spend 1 [Force] to perform 1 white action on your action bar, treating that action as red.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/grandinquisitor.png',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/grandinquisitor.png',
      },
    ],
    cost: { value: 13 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Grand Moff Tarkin',
    limited: 1,
    xws: 'grandmofftarkin',
    sides: [
      {
        title: 'Grand Moff Tarkin',
        type: 'Crew',
        ability:
          'During the System Phase, you may spend 2 [Charge]. If you do, each friendly ship may acquire a lock on a ship that you have locked.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/grandmofftarkin.png',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/grandmofftarkin.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [
      { factions: ['galacticempire'] },
      { action: { type: 'Lock' } },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hera Syndulla',
    limited: 1,
    xws: 'herasyndulla',
    sides: [
      {
        title: 'Hera Syndulla',
        type: 'Crew',
        ability:
          'You can execute red maneuvers even while stressed. After you fully execute a red maneuver, if you have 3 or more stress tokens, remove 1 stress token and suffer 1 [Hit] damage.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/herasyndulla.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/herasyndulla.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'IG-88D',
    limited: 1,
    xws: 'ig88d',
    sides: [
      {
        title: 'IG-88D',
        type: 'Crew',
        ability:
          'You have the pilot ability of each other friendly ship with the IG-2000 upgrade. After you perform a [Calculate] action, gain 1 calculate token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ig88d.png',
        slots: ['Crew'],
        actions: [{ type: 'Calculate', difficulty: 'White' }],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ig88d.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'ISB Slicer',
    limited: 0,
    xws: 'isbslicer',
    sides: [
      {
        title: 'ISB Slicer',
        type: 'Crew',
        ability:
          'During the End Phase, enemy ships at range 1-2 cannot remove jam tokens.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/isbslicer.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/isbslicer.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Informant',
    limited: 1,
    xws: 'informant',
    sides: [
      {
        title: 'Informant',
        type: 'Crew',
        ability:
          'Setup: After placing forces, choose 1 enemy ship and assign the Listening Device condition to it.',
        conditions: ['listeningdevice'],
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/informant.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/informant.png',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Jabba the Hutt',
    limited: 1,
    xws: 'jabbathehutt',
    sides: [
      {
        title: 'Jabba the Hutt',
        type: 'Crew',
        ability:
          'During the End Phase, you may choose 1 friendly ship at range 0-2 and spend 1 [Charge]. If you do, that ship recovers 1 [Charge] on 1 of its equipped [Illicit] upgrades.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/jabbathehutt.png',
        slots: ['Crew', 'Crew'],
        charges: { value: 4, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/jabbathehutt.png',
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Jyn Erso',
    limited: 1,
    xws: 'jynerso',
    sides: [
      {
        title: 'Jyn Erso',
        type: 'Crew',
        ability:
          'If a friendly ship at range 0-3 would gain a focus token, it may gain 1 evade token instead.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/jynerso.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/jynerso.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Kanan Jarrus',
    limited: 1,
    xws: 'kananjarrus',
    sides: [
      {
        title: 'Kanan Jarrus',
        type: 'Crew',
        ability:
          'After a friendly ship at range 0-2 fully executes a white maneuver, you may spend 1 [Force] to remove 1 stress token from that ship.',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/kananjarrus.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/kananjarrus.png',
      },
    ],
    cost: { value: 12 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ketsu Onyo',
    limited: 1,
    xws: 'ketsuonyo',
    sides: [
      {
        title: 'Ketsu Onyo',
        type: 'Crew',
        ability:
          'At the start of the End Phase, you may choose 1 enemy ship at range 0-2 in your firing arc. If you do, that ship does not remove its tractor tokens.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ketsuonyo.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ketsuonyo.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Kylo Ren',
    limited: 1,
    xws: 'kyloren',
    sides: [
      {
        title: 'Kylo Ren',
        type: 'Crew',
        ability:
          "Action: Choose 1 enemy ship at range 1-3. If you do, spend 1 [Force] to assign the I'll Show You the Dark Side condition to that ship.",
        conditions: ['illshowyouthedarkside'],
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/kyloren.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/kyloren.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['firstorder'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'L3-37',
    limited: 1,
    xws: 'l337',
    sides: [
      {
        title: 'L3-37',
        type: 'Crew',
        ability:
          'Setup: Equip this side faceup. While you defend, you may flip this card. If you do, the attacker must reroll all attack dice.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/l337.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/l337-sideb.png',
      },
      {
        title: "L3-37's Programming",
        type: 'Configuration',
        ability:
          'If you are not shielded, decrease the difficulty of your bank ([Bank Left] and [Bank Right]) maneuvers.',
        slots: ['Configuration'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/l337-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/l337.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Lando Calrissian',
    limited: 1,
    xws: 'landocalrissian-crew',
    sides: [
      {
        title: 'Lando Calrissian',
        type: 'Crew',
        ability:
          'After you roll dice, you may spend 1 green token to reroll up to 2 of your results.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/landocalrissian-crew.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/landocalrissian-crew.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Lando Calrissian',
    limited: 1,
    xws: 'landocalrissian',
    sides: [
      {
        title: 'Lando Calrissian',
        type: 'Crew',
        ability:
          'Action: Roll 2 defense dice. For each [Focus] result, gain 1 focus token. For each [Evade] result, gain 1 evade token. If both results are blank, the opposing player chooses focus or evade. You gain 1 token of that type.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/landocalrissian.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/landocalrissian.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Latts Razzi',
    limited: 1,
    xws: 'lattsrazzi',
    sides: [
      {
        title: 'Latts Razzi',
        type: 'Crew',
        ability:
          'While you defend, if the attacker is stressed, you may remove 1 stress from the attacker to change 1 of your blank/[Focus] results to an [Evade] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/lattsrazzi.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/lattsrazzi.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Leia Organa',
    limited: 1,
    xws: 'leiaorgana',
    sides: [
      {
        title: 'Leia Organa',
        type: 'Crew',
        ability:
          'At the start of the Activation Phase, you may spend 3 [Charge]. During this phase, each friendly ship reduces the difficulty of its red maneuvers.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/leiaorgana.png',
        slots: ['Crew'],
        charges: { value: 3, recovers: 1 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/leiaorgana.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Magva Yarro',
    limited: 1,
    xws: 'magvayarro',
    sides: [
      {
        title: 'Magva Yarro',
        type: 'Crew',
        ability:
          'After you defend, if the attack hit, you may acquire a lock on the attacker.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/magvayarro.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/magvayarro.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Maul',
    limited: 1,
    xws: 'maul',
    sides: [
      {
        title: 'Maul',
        type: 'Crew',
        ability:
          'After you suffer damage, you may gain 1 stress token to recover 1 [Force]. You can equip “Dark Side” upgrades.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/maul.png',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        grants: [{ value: 1 }],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/maul.png',
      },
    ],
    cost: { value: 11 },
    restrictions: [
      { factions: ['scumandvillainy'], character: ['Ezra Bridger'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Minister Tua',
    limited: 1,
    xws: 'ministertua',
    sides: [
      {
        title: 'Minister Tua',
        type: 'Crew',
        ability:
          'At the start of the Engagement Phase, if you are damaged, you may perform a red [Reinforce] action.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ministertua.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ministertua.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Moff Jerjerrod',
    limited: 1,
    xws: 'moffjerjerrod',
    sides: [
      {
        title: 'Moff Jerjerrod',
        type: 'Crew',
        ability:
          'During the System Phase, you may spend 2 [Charge]. If you do, choose the [1 [Bank Left]], [1 [Straight]], or [1 [Bank Right]] template. Each friendly ship may perform a red [Boost] action using that template.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/moffjerjerrod.png',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/moffjerjerrod.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [
      { factions: ['galacticempire'] },
      { action: { type: 'Coordinate' } },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Nien Nunb',
    limited: 1,
    xws: 'niennunb',
    sides: [
      {
        title: 'Nien Nunb',
        type: 'Crew',
        ability:
          'Decrease the difficulty of your bank maneuvers ([Bank Left] and [Bank Right]).',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/niennunb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/niennunb.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Novice Technician',
    limited: 0,
    xws: 'novicetechnician',
    sides: [
      {
        title: 'Novice Technician',
        type: 'Crew',
        ability:
          'At the end of the round, you may roll 1 attack die to repair 1 faceup damage card. Then on a [Hit] result, expose 1 damage card.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/novicetechnician.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/novicetechnician.png',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Perceptive Copilot',
    limited: 0,
    xws: 'perceptivecopilot',
    sides: [
      {
        title: 'Perceptive Copilot',
        type: 'Crew',
        ability: 'After you perform a [Focus] action, gain 1 focus token.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/perceptivecopilot.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/perceptivecopilot.png',
      },
    ],
    cost: { value: 8 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Petty Officer Thanisson',
    limited: 1,
    xws: 'pettyofficerthanisson',
    sides: [
      {
        title: 'Petty Officer Thanisson',
        type: 'Crew',
        ability:
          'During the Activation or Engagement Phase, after an enemy ship in your [Front Arc] at range 0-1 gains a red or orange token, if you are not stressed, you may gain 1 stress token. If you do, that ship gains 1 additional token of the type that it gained.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/pettyofficerthanisson.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/pettyofficerthanisson.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['firstorder'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: "Qi'ra",
    limited: 1,
    xws: 'qira',
    sides: [
      {
        title: "Qi'ra",
        type: 'Crew',
        ability:
          'While you move and perform attacks, you ignore obstacles that you are locking.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/qira.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/qira.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'R2-D2',
    limited: 1,
    xws: 'r2d2-crew',
    sides: [
      {
        title: 'R2-D2',
        type: 'Crew',
        ability:
          'During the End Phase, if you are damaged and not shielded, you may roll 1 attack die to recover 1 shield. On a [Hit] result, expose 1 of your damage cards.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/r2d2-crew.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/r2d2-crew.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Sabine Wren',
    limited: 1,
    xws: 'sabinewren',
    sides: [
      {
        title: 'Sabine Wren',
        type: 'Crew',
        ability:
          'Setup: Place 1 ion, 1 jam, 1 stress, and 1 tractor token on this card. After a ship suffers the effect of a friendly bomb, you may remove 1 ion, jam, stress, or tractor token from this card. If you do, that ship gains a matching token.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sabinewren.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sabinewren.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Saw Gerrera',
    limited: 1,
    xws: 'sawgerrera',
    sides: [
      {
        title: 'Saw Gerrera',
        type: 'Crew',
        ability:
          'While you perform an attack, you may suffer 1 [Hit] damage to change all of your [Focus] results to [Critical Hit] results.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/sawgerrera.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/sawgerrera.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Seasoned Navigator',
    limited: 0,
    xws: 'seasonednavigator',
    sides: [
      {
        title: 'Seasoned Navigator',
        type: 'Crew',
        ability:
          'After you reveal your dial, you may set your dial to another non-red maneuver of the same speed. While you execute that maneuver, increase its difficulty.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/seasonednavigator.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/seasonednavigator.png',
      },
    ],
    cost: {
      variable: 'initiative',
      values: {
        '0': 2,
        '1': 3,
        '2': 4,
        '3': 5,
        '4': 6,
        '5': 7,
        '6': 8,
        '7': 9,
        '8': 10,
      },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Seventh Sister',
    limited: 1,
    xws: 'seventhsister',
    sides: [
      {
        title: 'Seventh Sister',
        type: 'Crew',
        ability:
          'If an enemy ship at range 0-1 would gain a stress token, you may spend 1 [Force] to have it gain 1 jam or tractor token instead.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/seventhsister.png',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/seventhsister.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Supreme Leader Snoke',
    limited: 1,
    xws: 'supremeleadersnoke',
    sides: [
      {
        title: 'Supreme Leader Snoke',
        type: 'Crew',
        ability:
          "During the System Phase, you may choose any number of enemy ships beyond range 1. If you do, spend that many [Force] to flip each chosen ship's dial faceup.",
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/supremeleadersnoke.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/supremeleadersnoke.png',
      },
    ],
    cost: { value: 13 },
    restrictions: [{ factions: ['firstorder'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tactical Officer',
    limited: 0,
    xws: 'tacticalofficer',
    sides: [
      {
        title: 'Tactical Officer',
        type: 'Crew',
        text: 'In the chaos of a starfighter battle, a single order can mean the difference between a victory and a massacre.',
        slots: ['Crew'],
        actions: [{ type: 'Coordinate', difficulty: 'White' }],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tacticalofficer.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tacticalofficer.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ action: { type: 'Coordinate', difficulty: 'Red' } }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tobias Beckett',
    limited: 1,
    xws: 'tobiasbeckett',
    sides: [
      {
        title: 'Tobias Beckett',
        type: 'Crew',
        ability:
          'Setup: After placing forces, you may choose 1 obstacle in the play area. If you do, place it anywhere in the play area beyond range 2 of any board edge or ship and beyond range 1 of other obstacles.',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tobiasbeckett.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tobiasbeckett.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Unkar Plutt',
    limited: 1,
    xws: 'unkarplutt',
    sides: [
      {
        title: 'Unkar Plutt',
        type: 'Crew',
        ability:
          'After you partially execute a maneuver, you may suffer 1 [Hit] damage to perform 1 white action.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/unkarplutt.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/unkarplutt.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Zuckuss',
    limited: 1,
    xws: 'zuckuss',
    sides: [
      {
        title: 'Zuckuss',
        type: 'Crew',
        ability:
          'While you perform an attack, if you are not stressed, you may choose 1 defense die and gain 1 stress token. If you do, the defender must reroll that die.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/zuckuss.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/zuckuss.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'C-3PO',
    limited: 1,
    xws: 'c3po-crew',
    sides: [
      {
        title: 'C-3PO',
        type: 'Crew',
        ability:
          'While you coordinate, you can choose friendly ships beyond range 2 if they have [Calculate] on their action bar. After you perform the [Calculate] or [Coordinate] action, gain 1 calculate token.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/c3po-crew.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/c3po-crew.png',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Han Solo',
    limited: 1,
    xws: 'hansolo-crew',
    sides: [
      {
        title: 'Han Solo',
        type: 'Crew',
        ability:
          'After you perform an [Evade] action, gain additional evade tokens equal to the number of enemy ships at range 0-1.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hansolo-crew.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hansolo-crew.png',
        slots: ['Crew'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Chewbacca',
    limited: 1,
    xws: 'chewbacca-crew-swz19',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'Setup: Lose 1 [Charge]. After a friendly ship at range 0-3 is dealt 1 damage card, recover 1 [Charge]. While you perform an attack, you may spend 2 [Charge] to change 1 [Focus] result to a [Critical Hit] result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chewbacca-crew-swz19.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chewbacca-crew-swz19.png',
        slots: ['Crew'],
        charges: { value: 2, recovers: 0 },
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Rose Tico',
    limited: 1,
    xws: 'rosetico',
    sides: [
      {
        title: 'Rose Tico',
        type: 'Crew',
        ability:
          'While you defend or perform an attack, you may spend 1 of your results to acquire a lock on the enemy ship.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/rosetico.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/rosetico.png',
        slots: ['Crew'],
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Chancellor Palpatine',
    limited: 1,
    xws: 'chancellorpalpatine',
    sides: [
      {
        title: 'Chancellor Palpatine',
        type: 'Crew',
        ability:
          'Setup: Equip this side faceup. After you defend, if the attacker is at range 0-2, you may spend 1 [Force]. If you do, the attacker gains 1 stress token. During the End Phase, you may flip this card.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chancellorpalpatine.png',
        force: { value: 1, recovers: 1, side: ['dark'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chancellorpalpatine-sideb.png',
      },
      {
        title: 'Darth Sidious',
        type: 'Crew',
        ability:
          'After you perform a purple [Coordinate] action, the ship you coordinated gains 1 stress token. Then, it gains 1 focus token or recovers 1 [Force].',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/chancellorpalpatine-sideb.png',
        force: { value: 1, recovers: 1, side: ['dark'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/chancellorpalpatine.png',
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['galacticrepublic', 'separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Count Dooku',
    limited: 1,
    xws: 'countdooku',
    sides: [
      {
        title: 'Count Dooku',
        type: 'Crew',
        ability:
          'Before a ship at range 0-2 rolls attack or defense dice, if all of your [Force] are active, you may spend 1 [Force] and name a result. If the roll does not contain the named result, the ship must change 1 die to that result.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/countdooku.png',
        force: { value: 1, recovers: 1, side: ['dark'] },
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/countdooku.png',
      },
    ],
    cost: { value: 14 },
    restrictions: [{ factions: ['separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'General Grievous',
    limited: 1,
    xws: 'generalgrievous',
    sides: [
      {
        title: 'General Grievous',
        type: 'Crew',
        ability:
          'While you defend, after the Neutralize Results step, if there are 2 or more [Hit]/[Critical Hit] results, you may spend 1 [Charge] to cancel 1 [Hit] or [Critical Hit] result. After a friendly ship is destroyed, recover 1 [Charge].',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/generalgrievous.png',
        charges: { value: 1, recovers: 0 },
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/generalgrievous.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Amilyn Holdo',
    limited: 1,
    xws: 'amilynholdo',
    sides: [
      {
        ability:
          'Before you engage, you may choose another friendly ship at range 1-2. You may transfer to that ship 1 token of a type that ship does not have. That ship may transfer 1 token to you of a type you do not have.',
        title: 'Amilyn Holdo',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/amilynholdo.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/amilynholdo.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'GA-97',
    limited: 1,
    xws: 'ga97',
    sides: [
      {
        ability:
          "Setup: Before placing forces, you may spend 3-5 [Charge]. If you do, choose another friendly ship and assign the It's the Resistance condition to it.",
        conditions: ['itstheresistance'],
        title: 'GA-97',
        type: 'Crew',
        slots: ['Crew'],
        charges: { value: 5, recovers: 1 },
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ga97.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ga97.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Kaydel Connix',
    limited: 1,
    xws: 'kaydelconnix',
    sides: [
      {
        ability:
          'After you reveal your dial, you may set your dial to a basic maneuver of the next higher speed. While you execute that maneuver, increase its difficulty.',
        title: 'Kaydel Connix',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/kaydelconnix.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/kaydelconnix.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Korr Sella',
    limited: 1,
    xws: 'korrsella',
    sides: [
      {
        ability:
          'After you fully execute a blue maneuver, remove all of your stress tokens.',
        title: 'Korr Sella',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/korrsella.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/korrsella.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: "Larma D'Acy",
    limited: 1,
    xws: 'larmadacy',
    sides: [
      {
        ability:
          'While you have 2 or fewer stress tokens, you can perform [Reinforce], [Coordinate], and [Jam] actions, even while stressed. While you perform a white [Reinforce], [Coordinate], or [Jam] action, if you are stressed, treat that action as red.',
        title: "Larma D'Acy",
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/larmadacy.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/larmadacy.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Leia Organa',
    limited: 1,
    xws: 'leiaorgana-resistance',
    sides: [
      {
        ability:
          'After a friendly ship reveals its dial, you may spend 1 [Force]. If you do, the chosen ship reduces the difficulty of that maneuver.',
        title: 'Leia Organa',
        type: 'Crew',
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/leiaorgana-resistance.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/leiaorgana-resistance.png',
      },
    ],
    cost: { value: 16 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'PZ-4CO',
    limited: 1,
    xws: 'pz4co',
    sides: [
      {
        ability:
          'At the end of the Activation Phase, you may choose 1 friendly ship at range 1-2. If you do, transfer 1 calculate token to that ship. If your revealed maneuver is blue, you may transfer 1 focus token instead.',
        title: 'PZ-4CO',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/pz4co.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/pz4co.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['resistance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'C-3PO',
    limited: 1,
    xws: 'c3po-republic',
    sides: [
      {
        title: 'C-3PO',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/c3po-republic.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/c3po-republic.png',
        ability:
          'While you defend, if you are calculating, you may reroll 1 defense die. After you perform a [Calculate] action, gain 1 calculate token.',
        slots: ['Crew'],
        type: 'Crew',
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Aayla Secura',
    limited: 1,
    xws: 'aaylasecura',
    sides: [
      {
        ability:
          'While an enemy ship in your [Bullseye Arc] performs an attack, if the defender is friendly and at range 0-2, the defender may change 1 blank result to a [Focus] result.',
        title: 'Aayla Secura',
        type: 'Crew',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Purple' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/aaylasecura.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/aaylasecura.png',
      },
    ],
    cost: { value: 12 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Agent Terex',
    limited: 1,
    xws: 'agentterex',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup and place 3 calculate tokens on this card. At the start of the Engagement Phase, you may choose a friendly ship at range 0-3 and remove 1 calculate token from this card to have that ship gain a matching token. Then, if there are no calculate tokens on this card, flip it.',
        title: 'Agent Terex',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/agentterex-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/agentterex.png',
      },
      {
        slots: ['Crew'],
        title: 'Agent Terex (Cyborg)',
        type: 'Crew',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/agentterex.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/agentterex-sideb.png',
        ability:
          'During the System Phase, roll 1 attack die. On a [Hit] or [Critical Hit] result, gain 1 calculate token. Otherwise gain 1 jam token. Action: Transfer 1 calculate token or 1 jam token to a ship at range 0-3.',
      },
    ],
    cost: { value: 7 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'K-2SO',
    limited: 1,
    xws: 'k2so',
    sides: [
      {
        ability:
          'During the System Phase, you may choose a friendly ship at range 0-3. That ship gains 1 calculate and 1 stress token.',
        title: 'K-2SO',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
          { action: { type: 'Jam', difficulty: 'White' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/k2so.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/k2so.png',
      },
    ],
    cost: { value: 6 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Plo Koon',
    limited: 1,
    xws: 'plokoon',
    sides: [
      {
        ability:
          'At the start of the End Phase, if you are reinforced, you may choose 1 friendly ship at range 0 or in your [Left Arc] or [Right Arc] at range 1. That ship removes 1 deplete or strain token, or repairs 1 faceup damage card.',
        force: { value: 1, recovers: 1, side: ['light'] },
        title: 'Plo Koon',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Reinforce', difficulty: 'Purple' }, value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/plokoon.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/plokoon.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 8, Medium: 8, Large: 9, Huge: 15 },
    },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Toryn Farr',
    limited: 1,
    xws: 'torynfarr',
    sides: [
      {
        ability:
          'After you coordinate a friendly ship, it may acquire a lock on a ship you are locking, ignoring range restrictions.',
        title: 'Toryn Farr',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          {
            action: {
              type: 'Lock',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/torynfarr.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/torynfarr.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Kit Fisto',
    limited: 1,
    xws: 'kitfisto',
    sides: [
      {
        title: 'Kit Fisto',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/kitfisto.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/kitfisto.png',
        ability:
          'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-1 and spend 1 [Force]. If you do, it may perform a red [Evade] action.',
        force: { value: 1, recovers: 1, side: ['light'] },
        grants: [{ action: { type: 'Evade', difficulty: 'Purple' }, value: 1 }],
      },
    ],
    cost: { value: 8 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Yoda',
    limited: 1,
    xws: 'yoda',
    sides: [
      {
        title: 'Yoda',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/yoda.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/yoda.png',
        ability:
          'After another friendly ship at range 0-2 fully executes a purple maneuver or performs a purple action, you may spend 1 [Force]. If you do, that ship recovers 1 [Force].',
        force: { value: 2, recovers: 1, side: ['light'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
        ],
      },
    ],
    cost: { value: 11 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: '“Fives”',
    limited: 1,
    xws: 'fives',
    sides: [
      {
        title: '“Fives”',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/fives.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/fives.png',
        ability:
          "After you perform an attack that missed, if the defender's initiative is equal to or greater than your initiative, place 1 evade or focus token on this card. Before you engage, you may remove 1 token from this card to gain 1 matching token.",
      },
    ],
    cost: { value: 3 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Wolfpack',
    limited: 1,
    xws: 'wolfpack',
    sides: [
      {
        title: 'Wolfpack',
        type: 'Crew',
        slots: ['Crew', 'Gunner'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/wolfpack.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/wolfpack.png',
        ability:
          'After a friendly ship at range 0-3 defends, if the attacker is in your firing arc, the defender may gain 1 strain token to acquire a lock on the attacker.',
      },
    ],
    cost: { value: 4 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Commander Malarus',
    limited: 1,
    xws: 'commandermalarus',
    sides: [
      {
        title: 'Commander Malarus',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/commandermalarus.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/commandermalarus.png',
        ability:
          'Setup: Equip this side faceup. While a friendly non-limited ship at range 0-1 performs a primary attack, that ship may reroll 1 blank result. If it does and the attack does not hit, you must flip this card.',
      },
      {
        title: 'Commander Malarus (Perfected)',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/commandermalarus-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/commandermalarus-sideb.png',
        ability:
          'While you perform an attack, if the defender is in your [Bullseye Arc], you must convert all [Focus] results to [Hit] results and gain 1 stress token. Then, if you have 2 or more stress tokens, suffer 1 [Hit] damage.',
      },
    ],
    cost: { value: 2 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ghost Company',
    limited: 1,
    xws: 'ghostcompany',
    sides: [
      {
        title: 'Ghost Company',
        type: 'Crew',
        slots: ['Crew', 'Gunner'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ghostcompany.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ghostcompany.png',
        ability:
          'After you perform a primary attack, if you are focused, you may perform a [Single Turret Arc] attack against a ship you have not attacked this round as a bonus attack.',
        grants: [
          {
            action: {
              type: 'Rotate Arc',
              difficulty: 'White',
              linked: { type: 'Focus', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Commander Pyre',
    limited: 1,
    xws: 'commanderpyre',
    sides: [
      {
        title: 'Commander Pyre',
        type: 'Crew',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/commanderpyre.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/commanderpyre.png',
        ability:
          'Setup: After placing forces, choose an enemy ship. It gains 2 stress tokens. While you defend, if the attacker is stressed, you may reroll 1 defense die.',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Hondo Ohnaka',
    limited: 1,
    xws: 'hondoohnaka',
    sides: [
      {
        ability:
          'Action: Choose 2 ships at range 1-3 of you that are friendly to each other. Coordinate one of the chosen ships, then jam the other, ignoring range restrictions.',
        title: 'Hondo Ohnaka',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hondoohnaka.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hondoohnaka.png',
      },
    ],
    cost: { value: 5 },
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Jango Fett',
    limited: 1,
    xws: 'jangofett',
    sides: [
      {
        ability:
          "While you defend or perform an attack, you may spend your lock on the enemy ship to change 1 of the enemy ship's [Focus] results to a blank result.",
        title: 'Jango Fett',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/jangofett.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/jangofett.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [{ factions: ['scumandvillainy', 'separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Zam Wesell',
    limited: 1,
    xws: 'zamwesell',
    sides: [
      {
        ability:
          "Setup: Lose 2 [Charge]. During the System Phase, you may assign 1 of your secret conditions to yourself facedown: You Should Thank Me You'd Better Mean Business",
        title: 'Zam Wesell',
        type: 'Crew',
        slots: ['Crew'],
        conditions: ['youdbettermeanbusiness', 'youshouldthankme'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/zamwesell.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/zamwesell.png',
      },
    ],
    cost: { value: 11 },
    restrictions: [{ factions: ['scumandvillainy', 'separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Gamut Key',
    limited: 1,
    xws: 'gamutkey',
    sides: [
      {
        ability:
          'At the start of the End Phase, you may spend 2 [Charge] to choose a ship at range 0-1 with 1 or more circular tokens. During the End Phase, circular tokens are not removed from that ship.',
        title: 'Gamut Key',
        charges: { value: 2, recovers: 1 },
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/gamutkey.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/gamutkey.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Protectorate Gleb',
    limited: 1,
    xws: 'protectorategleb',
    sides: [
      {
        ability:
          'After you coordinate a friendly ship, you may transfer 1 orange or red token to the ship you coordinated.',
        title: 'Protectorate Gleb',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/protectorategleb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/protectorategleb.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['scumandvillainy', 'galacticempire', 'firstorder'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'The Mandalorian',
    limited: 1,
    xws: 'themandalorian',
    sides: [
      {
        ability:
          'During the End Phase, if you did not defend this round, recover 1 non-recurring [Force], if able.',
        title: 'The Mandalorian',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Reinforce', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/themandalorian.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/themandalorian.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'The Child',
    limited: 1,
    xws: 'thechild',
    sides: [
      {
        ability:
          'Setup: After placing forces, choose an opponent; they assign the Merciless Pursuit condition to 2 of their ships. Your [Force] lose the recurring icon. After you defend, if you suffer damage during that attack, recover 1 [Force].',
        title: 'The Child',
        type: 'Crew',
        slots: ['Crew'],
        force: { value: 2, recovers: 0, side: ['light'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/thechild.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/thechild.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [
      { factions: ['galacticempire', 'rebelalliance', 'scumandvillainy'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'IG-11',
    limited: 1,
    xws: 'ig11',
    standard: true,
    wildspace: true,
    epic: true,
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. Before you would be dealt a faceup damage card, you must place 1 fuse marker on this card and gain 1 calculate token instead. Then, if there are 2 fuse markers on this card, flip it.',
        title: 'IG-11',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ig11.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ig11.png',
      },
      {
        ability:
          'During the End Phase, remove 1 fuse marker from this card. Then, if this card has no fuse markers on it, you are destroyed and each other ship at range 0-1 suffers 1 [Critical Hit] damage. Action: Place 1 fuse marker on this card.',
        title: 'IG-11 (Anti-Capture Protocol)',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ig11-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ig11-sideb.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['scumandvillainy'] }],
  },
  {
    name: 'Greef Karga',
    limited: 1,
    xws: 'greefkarga',
    sides: [
      {
        ability:
          'You can coordinate allied ships as if they were friendly ships. After you coordinate a ship, it may acquire a lock on an object you have locked.',
        title: 'Greef Karga',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Red' }, value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/greefkarga.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/greefkarga.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Kuiil',
    limited: 1,
    xws: 'kuiil',
    standard: true,
    wildspace: true,
    epic: true,
    sides: [
      {
        ability:
          'Action: Roll 1 attack die for each damage card you have. For each [Hit] result, repair 1 faceup Ship damage card, then for each [Critical Hit] result, repair 1 facedown damage card. For each blank result, remove 1 orange token, then for each [Focus] result, gain 1 focus token.',
        title: 'Kuiil',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/kuiil.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/kuiil.png',
      },
    ],
    cost: {
      variable: 'size',
      values: { Small: 3, Medium: 6, Large: 8, Huge: 15 },
    },
    restrictions: [{ factions: ['scumandvillainy'] }],
  },
  {
    name: 'Peli Motto',
    limited: 1,
    xws: 'pelimotto',
    sides: [
      {
        ability:
          'During the System Phase, you may perform an action on 1 of your damage cards, even while stressed. After you repair a faceup Ship damage card, you may roll 1 attack die. On a [Hit] result, repair another faceup Ship damage card. On a [Critical Hit] result, expose 1 damage card.',
        title: 'Peli Motto',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/pelimotto.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/pelimotto.png',
      },
    ],
    cost: { value: 3 },
    restrictions: [
      { factions: ['scumandvillainy'] },
      { baseSizes: ['Medium', 'Large'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Prime Minister Almec',
    limited: 1,
    xws: 'primeministeralmec',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. After a friendly ship at range 0-2 reveals a white maneuver, if it has no green tokens, it may gain 1 stress token to gain 1 calculate token. During the End Phase, if you have 2 or more stress tokens, flip this card. ',
        title: 'Prime Minister Almec',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/primeministeralmec.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/primeministeralmec.png',
      },
      {
        ability:
          'After a friendly ship at range 0-2 fully executes a red maneuver, that ship may perform a [Calculate] or [Focus] action on its action bar, even while stressed.',
        title: "Almec, Maul's Puppet",
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/primeministeralmec-sideb.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/primeministeralmec-sideb.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['scumandvillainy', 'galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Rook Kast',
    limited: 1,
    xws: 'rookkast',
    sides: [
      {
        ability:
          'After you perform a red action, you may gain 1 strain token. While you perform an attack, if you are strained, you may change 1 of your blank or [Focus] results to a result.',
        title: 'Rook Kast',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/rookkast.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/rookkast.png',
        grants: [{ action: { type: 'Lock', difficulty: 'Red' }, value: 1 }],
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Obi-Wan Kenobi',
    limited: 1,
    xws: 'obiwankenobi',
    sides: [
      {
        ability:
          'After a friendly ship at range 0-2 spends a focus or evade token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
        title: 'Obi-wan Kenobi',
        type: 'Crew',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/obiwankenobi.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/obiwankenobi.png',
      },
    ],
    cost: { value: 9 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Bo-Katan Kryze',
    limited: 1,
    xws: 'bokatankryze',
    sides: [
      {
        ability:
          'While you perform an attack, if you are at range 0-1 of the defender, you may reroll 1 attack die.',
        title: 'Bo-Katan Kryze',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bokatankryze.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bokatankryze.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['galacticrepublic', 'separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Bo-Katan Kryze',
    limited: 1,
    xws: 'bokatankryze-rebel-scum',
    sides: [
      {
        ability:
          'After you perform an attack, if the defender was destroyed, each friendly ship at range 0-2 may remove 1 red or orange token.',
        title: 'Bo-Katan Kryze',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bokatankryze-rebel-scum.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bokatankryze-rebel-scum.png',
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['scumandvillainy', 'rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Korkie Kryze',
    xws: 'korkiekryze',
    limited: 1,
    sides: [
      {
        ability:
          'After a friendly ship in your [Full Front Arc] at range 1-2 becomes the defender, you may transfer 1 green token to it. \n\nWhile a friendly ship in your [Full Front Arc] at range 1-2 defends, if you obstruct the attack, the defender rolls 1 additional defense die.',
        title: 'Korkie Kryze',
        type: 'Crew',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/korkiekryze.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/korkiekryze.png',
        slots: ['Crew'],
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    epic: true,
    wildspace: true,
  },
  {
    name: 'Satine Kryze',
    limited: 1,
    xws: 'satinekryze',
    sides: [
      {
        ability:
          'At the start of the Engagement Phase, you may spend 2 [Charge]. If you do, each friendly ship may choose to gain 1 deplete token and 1 focus tokken or to gain 1 disarm token and 1 evade token.',
        title: 'Satine Kryze',
        type: 'Crew',
        slots: ['Crew'],
        charges: { value: 2, recovers: 1 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/satinekryze.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/satinekryze.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tal Merrik',
    limited: 1,
    xws: 'talmerrik',
    sides: [
      {
        ability:
          'Setup: Before placing forces, choose 1 enemy ship and assign the False Friend condition to it. Action: If the False Friend condition is not assigned to an enemy ship, assign it to an enemy ship in your [Front Arc] at range 0-2.',
        title: 'Tal Merrik',
        type: 'Crew',
        slots: ['Crew'],
        conditions: ['falsefriend'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/talmerrik.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/talmerrik.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Savage Opress',
    limited: 1,
    xws: 'savageopress',
    sides: [
      {
        ability:
          'After a friendly ship in your [Front Arc] at range 1-2 gains a stress of strain token, you may spend 1 [Force]. If you do, that ship gains 1 focus token.',
        title: 'Savage Opress',
        type: 'Crew',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/savageopress.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/savageopress.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['scumandvillainy', 'separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Fenn Rau',
    limited: 1,
    xws: 'fennrau',
    sides: [
      {
        ability:
          'Before a friendly ship at range 0-2 engages, if its revealed maneuver is 1 speed or higher and there is an enemy ship in its [Front Arc] at range 1, that friendly ship may remove 1 non-lock red token.',
        title: 'Fenn Rau',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/fennrau.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/fennrau.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['scumandvillainy', 'rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Gar Saxon',
    limited: 1,
    xws: 'garsaxon',
    sides: [
      {
        ability:
          'While a friendly ship at range 1-3 with an initiative of 4 or lower performs an attack against a defender you have locked, the attacker may change 1 [Focus] result to a [Hit] result.',
        title: 'Gar Saxon',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/garsaxon.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/garsaxon.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Pre Vizsla',
    limited: 1,
    xws: 'previzsla',
    sides: [
      {
        ability:
          'While you perform a [Coordinate] action, you can choose a friendly [Crew] remote instead of another friendly ship. Instead of performing an action, that remote relocates forward using a [1 [Turn Left]], [1 [Turn Right]], or [2 [Straight]] template.',
        title: 'Pre Vizsla',
        type: 'Crew',
        slots: ['Crew'],
        grants: [
          { action: { type: 'Coordinate', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/previzsla.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/previzsla.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['scumandvillainy', 'separatistalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Tristan Wren',
    limited: 1,
    xws: 'tristanwren',
    sides: [
      {
        ability:
          'While a friendy unit at range 0-3 performs a [Ordnance] attack, you may spend 1 [Charge]. If you do, the attacker may change 1 [Hit] result to a [Critical Hit] result.',
        title: 'Tristan Wren',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/tristanwren.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/tristanwren.png',
        charges: { value: 1, recovers: 1 },
      },
    ],
    cost: { value: 2 },
    restrictions: [{ factions: ['rebelalliance'], character: ['Gar Saxon'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ursa Wren',
    limited: 1,
    xws: 'ursawren',
    sides: [
      {
        ability:
          'You can maintain up to 2 locks. Each lock must be on a different object. After a friendly ship at range 0-3 is locked by an enemy ship, you may acquire a lock on an enemy ship.',
        title: 'Ursa Wren',
        type: 'Crew',
        slots: ['Crew'],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ursawren.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ursawren.png',
      },
    ],
    cost: { value: 7 },
    restrictions: [{ factions: ['rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Captain Hark',
    limited: 1,
    xws: 'captainhark',
    sides: [
      {
        ability:
          'After you fully execute a red maneuver, if you are not focused, you may spend 1 [Charge] to gain 1 focus token.',
        title: 'Captain Hark',
        type: 'Crew',
        slots: ['Crew'],
        charges: { value: 2, recovers: 0 },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/captainhark.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/captainhark.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ factions: ['galacticempire'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Ahsoka Tano',
    limited: 1,
    xws: 'ahsokatano-crew',
    sides: [
      {
        ability:
          'After you fully execute a maneuver, you may spend 1 [Force] to choose 1 friendly ship in your [Full Rear Arc] at range 1-2. If you do, that ship may perform a red [Focus] action, even while stressed.',
        title: 'Ahsoka Tano',
        type: 'Crew',
        slots: ['Crew'],
        force: { value: 1, recovers: 1, side: ['light'] },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/ahsokatano-crew.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/ahsokatano-crew.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['scumandvillainy', 'galacticrepublic'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Maul',
    limited: 1,
    xws: 'maul-crew',
    sides: [
      {
        title: 'Maul',
        type: 'Crew',
        ability: 'Add [Illicit] slot.',
        slots: ['Crew', 'Crew'],
        force: { value: 1, recovers: 1, side: ['dark'] },
        grants: [
          { action: { type: 'Coordinate', difficulty: 'Purple' }, value: 1 },
          { slot: 'Illicit', value: 1 },
        ],
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/maul-crew.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/maul-crew.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ factions: ['scumandvillainy'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Clan Wren Commandos',
    limited: 1,
    xws: 'clanwrencommandos',
    sides: [
      {
        title: 'Clan Wren Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the [1 [Straight]] template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Clan Wren Commandos',
          type: 'Remote',
          image:
            'https://infinitearenas.com/xw2/images/remotes/clanwrencommandos.png',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a [1 [Turn Left]], [2 [Straight]] or [1 [Turn Right]] template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
          initiative: 2,
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 2,
            minrange: 1,
            maxrange: 2,
            ordnance: true,
          },
          stats: [
            { type: 'agility', value: 2 },
            { type: 'hull', value: 2 },
          ],
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/clanwrencommandos.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/clanwrencommandos.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [
      { factions: ['rebelalliance'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Imperial Super Commandos',
    limited: 1,
    xws: 'imperialsupercommandos',
    sides: [
      {
        title: 'Imperial Super Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the [1 [Straight]] template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Imperial Super Commandos',
          type: 'Remote',
          image:
            'https://infinitearenas.com/xw2/images/remotes/imperialsupercommandos.png',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a [1 [Turn Left]], [2 [Straight]] or [1 [Turn Right]] template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
          initiative: 2,
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 2,
            minrange: 1,
            maxrange: 2,
            ordnance: true,
          },
          stats: [
            { type: 'agility', value: 2 },
            { type: 'hull', value: 2 },
          ],
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/imperialsupercommandos.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/imperialsupercommandos.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [
      { factions: ['galacticempire'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Mandalorian Super Commandos',
    limited: 1,
    xws: 'mandaloriansupercommandos',
    sides: [
      {
        title: 'Mandalorian Super Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the [1 [Straight]] template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Mandalorian Super Commandos',
          type: 'Remote',
          image:
            'https://infinitearenas.com/xw2/images/remotes/mandaloriansupercommandos.png',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a [1 [Turn Left]], [2 [Straight]] or [1 [Turn Right]] template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
          initiative: 2,
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 2,
            minrange: 1,
            maxrange: 2,
            ordnance: true,
          },
          stats: [
            { type: 'agility', value: 2 },
            { type: 'hull', value: 2 },
          ],
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/mandaloriansupercommandos.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/mandaloriansupercommandos.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [
      { factions: ['scumandvillainy'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Nite Owl Commandos',
    limited: 1,
    xws: 'niteowlcommandos',
    sides: [
      {
        title: 'Nite Owl Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the [1 [Straight]] template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Nite Owl Commandos',
          type: 'Remote',
          image:
            'https://infinitearenas.com/xw2/images/remotes/niteowlcommandos.png',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a [1 [Turn Left]], [2 [Straight]] or [1 [Turn Right]] template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
          initiative: 2,
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 2,
            minrange: 1,
            maxrange: 2,
            ordnance: true,
          },
          stats: [
            { type: 'agility', value: 2 },
            { type: 'hull', value: 2 },
          ],
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/niteowlcommandos.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/niteowlcommandos.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [
      { factions: ['galacticrepublic'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Death Watch Commandos',
    limited: 1,
    xws: 'deathwatchcommandos',
    sides: [
      {
        title: 'Death Watch Commandos',
        type: 'Crew',
        ability:
          "During the System Phase, you may spend 1 [Charge] to drop a Commando Team remote using the [1 [Straight]] template. You can place that device using its front or rear guides. This card's [Charge] cannot be recovered.",
        slots: ['Crew', 'Crew'],
        charges: { value: 2, recovers: 0 },
        device: {
          name: 'Death Watch Commandos',
          type: 'Remote',
          image:
            'https://infinitearenas.com/xw2/images/remotes/deathwatchcommandos.png',
          effect:
            'After an enemy ship overlaps you, it gains 1 strain token. Activation Phase: At the start of this phase, you may relocate forward using a [1 [Turn Left]], [2 [Straight]] or [1 [Turn Right]] template. Engagement Phase: You cannot attack if there are enemy ships at range 0. To perform an attack, you must spend 1 [Charge]. While you perform an attack, you may change 1 [Focus] result to a [Hit] result.',
          initiative: 2,
          charges: { value: 2, recovers: 0 },
          attack: {
            arc: 'Front Arc',
            value: 2,
            minrange: 1,
            maxrange: 2,
            ordnance: true,
          },
          stats: [
            { type: 'agility', value: 2 },
            { type: 'hull', value: 2 },
          ],
        },
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/deathwatchcommandos.png',
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/deathwatchcommandos.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [
      { factions: ['separatistalliance'] },
      { baseSizes: ['Medium', 'Large', 'Huge'] },
    ],
    standard: true,
    wildspace: true,
    epic: true,
  },
  {
    name: 'Chewbacca',
    limited: 1,
    xws: 'chewbacca-battleofyavin',
    sides: [
      {
        title: 'Chewbacca',
        type: 'Crew',
        ability:
          'After you perform an [Evade] action, you may gain 1 focus token.',
        slots: ['Crew'],
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: 'Wolfpack',
    limited: 1,
    xws: 'wolfpack-siegeofcoruscant',
    sides: [
      {
        title: 'Wolfpack',
        type: 'Crew',
        slots: ['Crew', 'Gunner'],
        ability:
          'While you perform an attack, you may spend a lock belonging to a friendly Plo Koon ship or ship with the Born for This ability that is on the defender to reroll any number of attack dice.',
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    name: '“Leebo”',
    limited: 1,
    xws: 'leebo-swz103',
    sides: [
      {
        title: '“Leebo”',
        type: 'Crew',
        slots: ['Crew'],
        ability:
          'After you repair a damage card, you may perform an action from your action bar.',
      },
    ],
    standard: false,
    wildspace: true,
    epic: true,
    standardLoadoutOnly: true,
  },
  {
    limited: 1,
    xws: 'leebo-rsl',
    sides: [
      {
        title: 'Leebo',
        type: 'Crew',
        ability:
          'After you repair a damage card, you may perform an action on your action bar.',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/leebo-rsl.png',
        slots: ['Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/leebo-rsl.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['scumandvillainy', 'rebelalliance'] }],
    standard: true,
    wildspace: true,
    epic: true,
  },
];

export default t;
