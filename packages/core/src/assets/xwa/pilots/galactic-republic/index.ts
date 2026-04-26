import { ShipType } from '../../../../types';
import gozanticlasscruiser from './gozanti-class-cruiser';
import arc170starfighter from './arc-170-starfighter';
import delta7aethersprite from './delta-7-aethersprite';
import delta7baethersprite from './delta-7b-aethersprite';
import cr90corelliancorvette from './cr90-corellian-corvette';
import v19torrentstarfighter from './v-19-torrent-starfighter';
import nabooroyaln1starfighter from './naboo-royal-n-1-starfighter';
import btlbywing from './btl-b-y-wing';
import eta2actis from './eta-2-actis';
import gauntletfighter from './gauntlet-fighter';
import laatigunship from './laat-i-gunship';
import nimbusclassvwing from './nimbus-class-v-wing';
import syliureclasshyperspacering from './syliure-class-hyperspace-ring';
import clonez95headhunter from './clone-z-95-headhunter';

const ships: { [s: string]: ShipType } = {
  gozanticlasscruiser,
  arc170starfighter,
  delta7aethersprite,
  delta7baethersprite,
  cr90corelliancorvette,
  v19torrentstarfighter,
  nabooroyaln1starfighter,
  btlbywing,
  eta2actis,
  gauntletfighter,
  laatigunship,
  nimbusclassvwing,
  syliureclasshyperspacering,
  clonez95headhunter,
};

export default ships;
