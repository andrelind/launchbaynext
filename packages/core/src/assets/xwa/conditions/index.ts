import { Condition } from '../../../types';

const conditions: Condition[] = [
  {
    name: 'Hunted',
    ability:
      'After you are destroyed, you must choose another friendly ship and assign this condition to it, if able.',
    xws: 'hunted',
  },
  {
    name: "I'll Show You the Dark Side",
    ability:
      'When this card is assigned, if there is no faceup damage card on it, the player who assigned it searches the damage deck for 1 Pilot damage card and places it faceup on this card. Then shuffle the damage deck. When you would suffer 1 [Critical Hit] damage, you are instead dealt the faceup damage card on this card. Then, remove this card.',
    xws: 'illshowyouthedarkside',
    image:
      'https://images-cdn.fantasyflightgames.com/filer_public/d1/43/d143413b-c3ee-4eca-b489-9ca1f463980a/swz18_ill-show-you_a3.png',
  },
  {
    name: 'Listening Device',
    ability:
      'During the System Phase, if an enemy ship with the Informant upgrade is at range 0-2, flip your dial faceup.',
    xws: 'listeningdevice',
  },
  {
    name: 'Optimized Prototype',
    ability:
      'While you perform a [Front Arc] primary attack against a ship locked by a friendly ship with the Director Krennic upgrade, you may spend 1 [Hit], [Critical Hit], or [Focus] result. If you do, choose one: the defender loses 1 shield, or the defender flips 1 of its facedown damage cards.',
    xws: 'optimizedprototype',
    image:
      'https://images-cdn.fantasyflightgames.com/filer_public/0d/94/0d94dd35-08eb-493c-b4bd-c077be0e2292/swx75_card2_optimized-prototype.png',
  },
  {
    name: 'Rattled',
    ability:
      'After a bomb or mine at range 0-1 detonates, suffer 1 [Critical Hit] damage. Then, remove this card. ACTION: If there are no bombs or mines at range 0-1, remove this card.',
    xws: 'rattled',
  },
  {
    name: 'Suppressive Fire',
    ability:
      'While you perform an attack against a ship other than Captain Rex, roll 1 fewer attack die. After Captain Rex defends, remove this card. At the end of the Combat phase, if Captain Rex did not perform an attack this phase, remove this card. After Captain Rex is destroyed, remove this card.',
    xws: 'suppressivefire',
  },
  {
    name: 'Decoyed',
    ability:
      'While you defend, each friendly Naboo Handmaiden in the attack arc may spend 1 evade token to change one of your results to an [Evade] result. If you are a Naboo Royal N-1 Starfighter, each friendly Naboo Handmaiden in the attack may spend 1 evade token to add 1 [Evade] result instead.',
    xws: 'decoyed',
  },
  {
    name: 'Compromising Intel',
    ability:
      'During the System Phase, if the enemy Vi Moradi is at range 0-3, flip your dial faceup. While you defend or perform an attack against the enemy Vi Moradi, you cannot spend focus tokens.',
    xws: 'compromisingintel',
  },
  {
    name: "It's the Resistance",
    ability:
      "Setup: Start in reserve. When you deploy, you are placed within range 1 of any table edge and beyond range 3 of any enemy ship. At the start of the round, if all of the friendly GA-97's [Charge] are active, you must deploy. Then remove this card. After the friendly GA-97 is destroyed, you must deploy. Then gain 1 disarm token and remove this card.",
    xws: 'itstheresistance',
  },
  {
    name: 'Fearful Prey',
    ability:
      'After you defend against an enemy Fearsome Predator, if you did not spend at least 1 green token during the attack, gain 1 strain token.',
    xws: 'fearfulprey',
  },
  {
    name: "You'd Better Mean Business",
    ability:
      "This condition is assigned facedown. Reveal it after you defend. After you defend, you may spend 2 [Charge] from Zam Wesell. If you do, perform a bonus attack against the attacker. At the end of the Engagement Phase, if this card is facedown and you are in an enemy ship's firing arc, you may reveal this card. If you do, Zam Wesell recovers 2 [Charge]. At the start of the System Phase, remove this condition.",
    xws: 'youdbettermeanbusiness',
  },
  {
    name: 'You Should Thank Me',
    ability:
      "This condition is assigned facedown. Reveal it after you defend. After you defend, Zam Wesell recovers 1 [Charge]. Then, you may acquire a lock on the attacker. At the end of the Engagement Phase, if this card is facedown and you are in an enemy's firing arc, you may reveal this card and spend 2 [Charge] from Zam Wesell. If you do, you may perform a bonus attack. At the start of the System Phase, remove this condition.",
    xws: 'youshouldthankme',
  },
  {
    name: 'False Friend',
    ability:
      'During the System Phase, if an enemy ship with the Tal Merrik upgrade is at range 0-2 or an enemy remote is at range 0-2, flip your dial faceup. Action: Gain 1 deplete token and 1 stress token to discard this condition.',
    xws: 'falsefriend',
  },
  {
    name: 'Merciless Pursuit',
    ability:
      'After you perform an attack, if the defender is equipped with The Child, you may acquire a lock on the defender.',
    xws: 'mercilesspursuit',
  },
  {
    name: 'Marked for Elimination',
    ability:
      'While you defend, if the attacker is equipped with Tracking Fob and has a lock on you, you cannot spend green tokens.',
    xws: 'markedforelimination',
  },
];

export default conditions;
