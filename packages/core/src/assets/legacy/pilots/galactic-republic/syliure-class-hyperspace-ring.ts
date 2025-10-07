import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Syliure-class Hyperspace Ring',
  xws: 'syliureclasshyperspacering',
  size: 'Small',
  faction: 'Galactic Republic',
  stats: [
    { type: 'agility', value: 1 },
    { type: 'hull', value: 1 },
    { type: 'shields', value: 2 },
  ],
  actions: [],
  dial: [],
  pilots: [
    {
      name: 'TransGalMeg Control Link',
      xws: 'transgalmegcontrollink',
      initiative: 0,
      cost: 4,
      slots: ['Hyperdrive'],
      limited: 0,
      artwork:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/Art/pilots/transgalmegcontrollink.png',
      image:
        'https://raw.githubusercontent.com/SogeMoge/x-wing2.0-project-goldenrod/2.0-legacy/src/images/En/pilots/transgalmegcontrollink.png',
      shipAbility: {
        name: 'Hyperspace Docking Ring',
        text: "1 Delta-7 Aethersprite, Eta-2 Actis, or Nimbus-class V-wing can dock with you. While a ship is docked with you, you gain that ships initiative and are assigned that ship's dial. While you execute a maneuver, reduce its speed to 1. Before you execute an advanced maneuver, execute a white stationary maneuver [Stationary] instead, then you may rotate 90° or 180°. While no ship is docked with you, you are not assigned a maneuver dial and do not activate or engage.",
      },
      standard: false,
      wildspace: false,
      epic: true,
      ffg: 787,
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Syliure-class_Hyperspace_Ring.png',
};

export default t;
