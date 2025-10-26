import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'Syliure-class Hyperspace Ring',
  xws: 'syliureclasshyperspacering',
  size: 'Small',
  dial: [],
  faction: 'Galactic Republic',
  stats: [
    { type: 'agility', value: 1 },
    { type: 'hull', value: 1 },
    { type: 'shields', value: 2 },
  ],
  actions: [],
  ability: {
    name: 'Hyperspace Docking Ring',
    text: "1 Delta-7 Aethersprite, Eta-2 Actis, or Nimbus-class V-wing can dock with you.\n\nWhile a ship is docked with you, you gain that ship's initiative and are assigned that ship's dial. While you execute a maneuver, reduce its speed to 1. Before you execute an advanced maneuver, execute a white stationary maneuver ([Stop]) instead, then you may rotate 90º or 180º.\n\nWhile no ship is docked with you, you are not assigned a maneuver dial and do not activate or engage.",
  },
  pilots: [
    {
      xws: 'transgalmegcontrollink',
      name: 'TransGalMeg Control Link',
      cost: 1,
      initiative: 0,
      limited: 0,
      slots: ['Hyperdrive'],
      standard: false,
      epic: true,
      ffg: 787,
      loadout: 5,
      extended: false,
      image:
        'https://infinitearenas.com/xw2/images/pilots/transgalmegcontrollink.png',
      artwork:
        'https://infinitearenas.com/xw2/images/artwork/pilots/transgalmegcontrollink.png',
      caption: '',
    },
  ],
  icon: 'https://infinitearenas.com/xw2/images/shipicons/galactic-republic/I_Syliure-class_Hyperspace_Ring.png',
};

export default t;
