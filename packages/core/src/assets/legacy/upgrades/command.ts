import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Agent of the Empire',
    limited: 1,
    xws: 'agentoftheempire',
    sides: [
      {
        ability:
          'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 TIE/ln fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        title: 'Agent of the Empire',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/agentoftheempire.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/agentoftheempire.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Dreadnought Hunter',
    limited: 2,
    xws: 'dreadnoughthunter',
    sides: [
      {
        ability:
          'While you perform an attack against a huge ship, if the attack deals a faceup damage card to the defender and the defender is in your [Bullseye Arc], you may apply the Precision Shot effect even if you are not in the specified arc.',
        title: 'Dreadnought Hunter',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/dreadnoughthunter.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/dreadnoughthunter.png',
      },
    ],
    cost: { value: 3 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'First Order Elite',
    limited: 1,
    xws: 'firstorderelite',
    sides: [
      {
        ability:
          'You are a wing leader. Your wingmates must be 2 or 3 TIE/fo fighters or TIE/sf fighters. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        title: 'First Order Elite',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/firstorderelite.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/firstorderelite.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Veteran Wing Leader',
    limited: 0,
    xws: 'veteranwingleader',
    sides: [
      {
        ability:
          'You are a wing leader. Your wingmates must be 2, 3, 4, or 5 other ships of your ship type. While you defend, up to 2 of your wingmates in the attack arc may suffer 1 [Hit] or [Critical Hit] damage to cancel a matching result.',
        title: 'Veteran Wing Leader',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/veteranwingleader.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/veteranwingleader.png',
      },
    ],
    cost: { value: 2 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Admiral Ozzel',
    limited: 1,
    xws: 'admiralozzel',
    sides: [
      {
        ability:
          'While a friendly large or huge ship at range 0-3 executes a maneuver, it may suffer 1 [Hit] damage to execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
        title: 'Admiral Ozzel',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/admiralozzel.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/admiralozzel.png',
      },
    ],
    cost: { value: 6 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Azmorigan',
    limited: 1,
    xws: 'azmorigan',
    sides: [
      {
        ability:
          'During the End Phase, you may choose up to 2 friendly ships at range 0-1. If you do, each of these ships does not remove 1 calculate or evade token.',
        title: 'Azmorigan',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/azmorigan.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/azmorigan.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Captain Needa',
    limited: 1,
    xws: 'captainneeda',
    sides: [
      {
        ability:
          'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
        title: 'Captain Needa',
        type: 'Command',
        slots: ['Command', 'Crew'],
        charges: { value: 4, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/captainneeda.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/captainneeda.png',
      },
    ],
    cost: { value: 8 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Carlist Rieekan',
    limited: 1,
    xws: 'carlistrieekan',
    sides: [
      {
        ability:
          'After a friendly ship at range 0-2 is destroyed, you may choose a friendly ship at range 0-2. If you do, it may perform a red [Evade] action.',
        title: 'Carlist Rieekan',
        type: 'Command',
        slots: ['Command', 'Crew'],
        grants: [{ action: { type: 'Evade', difficulty: 'Red' }, value: 1 }],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/carlistrieekan.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/carlistrieekan.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Jan Dodonna',
    limited: 1,
    xws: 'jandodonna',
    sides: [
      {
        ability: 'Friendly ships at range 0-3 can spend your focus and evade tokens.',
        title: 'Jan Dodonna',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/jandodonna.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/jandodonna.png',
      },
    ],
    cost: { value: 3 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Raymus Antilles',
    limited: 1,
    xws: 'raymusantilles',
    sides: [
      {
        ability:
          'After you are destroyed, each friendly ship at range 0-1 gains 1 focus token. After you are destroyed, you are not removed until the end of the End Phase.',
        title: 'Raymus Antilles',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/raymusantilles.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/raymusantilles.png',
      },
    ],
    cost: { value: 8 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Stalwart Captain',
    limited: 1,
    xws: 'stalwartcaptain',
    sides: [
      {
        ability: 'After you are destroyed, you are not removed until the end of the End Phase.',
        title: 'Stalwart Captain',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/stalwartcaptain.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/stalwartcaptain.png',
      },
    ],
    cost: { value: 10 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Strategic Commander',
    limited: 1,
    xws: 'strategiccommander',
    sides: [
      {
        ability:
          'After a friendly ship at range 0-4 reveals its dial, you may spend 1 [Charge]. If you do, it sets its dial to another maneuver of the same difficulty and speed.',
        title: 'Strategic Commander',
        type: 'Command',
        slots: ['Command', 'Crew'],
        charges: { value: 3, recovers: 0 },
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/strategiccommander.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/strategiccommander.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Jedi Commander',
    limited: 0,
    xws: 'jedicommander',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 V-19 Torrents or 2-5 Nimbus-class V-wings. After you are placed, flip this card.',
        title: 'Jedi Commander',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/jedicommander-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/jedicommander-sideb.png',
      },
      {
        ability:
          'While your wingmates execute purple maneuvers, they treat those maneuvers as red, instead. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Jedi Commander',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/jedicommander.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/jedicommander.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['galacticrepublic'] }, { chassis: ['delta7aethersprite', 'eta2actis'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'B6 Blade Wing Prototype',
    limited: 1,
    xws: 'b6bladewingprototype-command',
    sides: [
      {
        ability:
          'Add [Gunner] slot. Attack ([Lock]): Gain 1 ion token to perform this attack. If this attack hits, the defender suffers 1 additional [Hit]/[Critical Hit] damage for each matching uncanceled result after the first.',
        title: 'B6 Blade Wing Prototype',
        type: 'Command',
        slots: ['Command', 'Title'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/b6bladewingprototype-command.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/b6bladewingprototype-command.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['rebelalliance'] }, { chassis: ['asf01bwing'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Bounty',
    limited: 0,
    xws: 'bounty',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You can be included in Separatist, Imperial, and First Order squads. After you perform an attack, if the defender was a limited ship and was destroyed, you may recover 1 [Charge] on your ship card and each of your upgrade cards. Then flip this card.',
        title: 'Bounty (Hired)',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bounty.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bounty.png',
      },
      {
        text: 'Bounty hunting is a complicated profession. Any assassin can kill, but the best hunters are renowned for their ability to bring a mark in alive, as doing so is more difficult but invariably commands a much greater reward.',
        title: 'Bounty (Paid)',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/bounty-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/bounty-sideb.png',
      },
    ],
    cost: { value: 1 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Phoenix Squadron',
    limited: 1,
    xws: 'phoenixsquadron',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 of the following: 0-1 Attack Shuttle 0-1 Sheathipede-class Shuttle 0-5 RZ-1 A-wings After you are placed, flip this card.',
        title: 'Phoenix Squadron',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/phoenixsquadron-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/phoenixsquadron-sideb.png',
      },
      {
        ability:
          'At the start of the Planning Phase, 1 of your wingmates that is docked with you may join your wing without gaining a stress token. While you or your Attack Shuttle wingmate or Sheathipede-class wingmate defends, up to 2 of your RZ-1 A-wing wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Phoenix Squadron',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/phoenixsquadron.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/phoenixsquadron.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Shadow Wing',
    limited: 1,
    xws: 'shadowwing',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 other ships of your type. After you are placed, flip this card.',
        title: 'Shadow Wing',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/shadowwing-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/shadowwing-sideb.png',
      },
      {
        ability:
          'Your wingmates can perform [Barrel Roll] or [Boost] actions. If they do, they voluntarily split from the wing. While you defend, up to 2 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Shadow Wing',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/shadowwing.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/shadowwing.png',
      },
    ],
    cost: { value: 4 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Skystrike Academy Class',
    limited: 2,
    xws: 'skystrikeacademyclass',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You are a wing leader. Your wingmates must be 2-5 TIE/ln Fighters with initiative lower than yours. After you are placed, flip this card.',
        title: 'Skystrike Academy Class',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/skystrikeacademyclass-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/skystrikeacademyclass-sideb.png',
      },
      {
        ability:
          'After you barrel roll or boost, each of your wingmates is forced to split from the wing. While you defend, up to 5 of your wingmates in the attack arc may each suffer 1 [Hit]/[Critical Hit] damage to cancel 1 matching result.',
        title: 'Skystrike Academy Class',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/skystrikeacademyclass.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/skystrikeacademyclass.png',
      },
    ],
    cost: { value: 3 },
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'In It For The Money',
    limited: 0,
    xws: 'initforthemoney',
    sides: [
      {
        ability:
          'Setup: Equip this side faceup. You can be included in Republic, Rebel, and Resistance squads. After an allied limited ship in your squad is destroyed, gain 1 focus token and flip this card.',
        title: 'In It For The Money',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/initforthemoney.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/initforthemoney.png',
      },
      {
        ability: 'Non-Scum ships in your squad are treated as friendly instead of allied.',
        title: 'In It For Your Rebellion',
        type: 'Command',
        slots: ['Command'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/initforthemoney-sideb.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/initforthemoney-sideb.png',
      },
    ],
    cost: { value: 1 },
    restrictions: [{ factions: ['scumandvillainy'] }, {}, {}],
    standarized: true,
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Mar Tuuk',
    limited: 1,
    xws: 'martuuk',
    sides: [
      {
        ability:
          'Setup: After placing forces, choose 1 friendly wing of ships with [Calculate] on their action bars and place that wing in reserve. During the End Phase, you may place that wing within your deployment area or beyond range 2 of any enemy shp. Then you may choose 1 enemy ship at range 0-1 of you; each ship in that wing acquires a lock on it.',
        title: 'Mar Tuuk',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/martuuk.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/martuuk.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ factions: ['separatistalliance'] }, { baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Riff Tamson',
    limited: 1,
    xws: 'rifftamson',
    sides: [
      {
        ability:
          'During the Engagement Phase, at initiative 5, you may spend 1 [Energy] to perform a bonus [Hardpoint] attack. After you perform an attack, if the defender was dealt 1 or more faceup damage cards, it gains 2 strain tokens.',
        title: 'Riff Tamson',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/rifftamson.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/rifftamson.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ factions: ['separatistalliance'] }, { baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Asajj Ventress',
    limited: 1,
    xws: 'asajjventresscommand',
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Force]. IF you do, each enemy ship in your [Front Arc] at range 0-1 gains 1 strain token unless it chooses to gain 1 jam token.',
        title: 'Asajj Ventress',
        type: 'Command',
        slots: ['Command', 'Crew'],
        grants: [
          {
            action: {
              type: 'Focus',
              difficulty: 'White',
              linked: { type: 'Coordinate', difficulty: 'Purple' },
            },
            value: 1,
          },
          { value: 1 },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/asajjventresscommand.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/asajjventresscommand.png',
      },
    ],
    cost: { value: 8 },
    restrictions: [{ factions: ['separatistalliance', 'scumandvillainy'] }, { baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Zealous Captain',
    limited: 1,
    xws: 'zealouscaptain',
    sides: [
      {
        ability:
          'During the Engagement Phase, at initiative 4, you may spend 1 [Energy] to perform a bonus [Hardpoint] attack.',
        title: 'Zealous Captain',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/zealouscaptain.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/zealouscaptain.png',
      },
    ],
    cost: { value: 4 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Hondo Ohnaka',
    limited: 1,
    xws: 'hondoohnakacommand',
    sides: [
      {
        ability:
          'During the System Phase, you may spend 1 [Charge] and choose 1 friendly ship at range 0-1. Move 1 Victory Token or Objective Token from its ship card to your ship card, or from your ship card to its ship card.',
        charges: { value: 2, recovers: 0 },
        title: 'Hondo Ohnaka',
        type: 'Command',
        slots: ['Command', 'Crew'],
        grants: [
          {
            action: {
              type: 'Coordinate',
              difficulty: 'White',
              linked: { type: 'Jam', difficulty: 'Red' },
            },
            value: 1,
          },
        ],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/hondoohnakacommand.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/hondoohnakacommand.png',
      },
    ],
    cost: { value: 6 },
    restrictions: [{ baseSizes: ['Huge'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'General Grievous',
    limited: 1,
    xws: 'generalgrievouscommand',
    sides: [
      {
        ability:
          'During the Engagement Phase, at initiative 4, you may spend 1 [Energy] to perform a bonus [Hardpoint] attack. You can perform attacks against friendly ships. After you perform an attack, if the defender was destroyed, each friendly ship at range 0-2 of it may perform a [Calculate] action.',
        title: 'General Grievous',
        type: 'Command',
        slots: ['Command', 'Crew'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/generalgrievouscommand.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/generalgrievouscommand.png',
      },
    ],
    cost: { value: 5 },
    restrictions: [{ baseSizes: ['Huge'] }, { factions: ['separatistalliance'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
  {
    name: 'Combat Boarding Tube',
    limited: 0,
    xws: 'combatboardingtube',
    sides: [
      {
        ability:
          'During the System Phase, if you would drop a [Crew] remote and there is an enemy medium, large, or huge ship at range 0-1 in your [Rear Arc], you may place that device in the play area in your [Rear Arc] at range 0-1 so that it is at range 0 of that enemy ship instead. Then, that enemy ship gains 1 deplete, strain, or stress token of your choice.',
        title: 'Combat Boarding Tube',
        type: 'Command',
        slots: ['Command', 'Configuration'],
        artwork:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/upgrades/combatboardingtube.png',
        image:
          'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/upgrades/combatboardingtube.png',
      },
    ],
    cost: { value: 0 },
    restrictions: [{ chassis: ['gauntletfighter'] }],
    standard: false,
    wildspace: false,
    epic: true,
  },
];

export default t;
