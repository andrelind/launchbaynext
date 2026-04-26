import { ShipType } from '../../../../types';
import alphaclassstarwing from './alpha-class-star-wing';
import gauntletfighter from './gauntlet-fighter';
import gozanticlasscruiser from './gozanti-class-cruiser';
import lambdaclasst4ashuttle from './lambda-class-t-4a-shuttle';
import raiderclasscorvette from './raider-class-corvette';
import tieadvancedv1 from './tie-advanced-v1';
import tieadvancedx1 from './tie-advanced-x1';
import tieininterceptor from './tie-in-interceptor';
import tiereaper from './tie-reaper';
import tieddefender from './tie-d-defender';
import tieagaggressor from './tie-ag-aggressor';
import tiecapunisher from './tie-ca-punisher';
import tielnfighter from './tie-ln-fighter';
import tiephphantom from './tie-ph-phantom';
import tiesabomber from './tie-sa-bomber';
import tieskstriker from './tie-sk-striker';
import vt49decimator from './vt-49-decimator';
import tierbheavy from './tie-rb-heavy';

const ships: { [s: string]: ShipType } = {
  alphaclassstarwing,
  gauntletfighter,
  gozanticlasscruiser,
  lambdaclasst4ashuttle,
  raiderclasscorvette,
  tieadvancedv1,
  tieadvancedx1,
  tieininterceptor,
  tiereaper,
  tieddefender,
  tieagaggressor,
  tiecapunisher,
  tielnfighter,
  tiephphantom,
  tiesabomber,
  tieskstriker,
  vt49decimator,
  tierbheavy,
};

export default ships;
