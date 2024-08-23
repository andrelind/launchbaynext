import { ShipType } from '../../../../types';
import belbullab22starfighter from './belbullab-22-starfighter';
import croccruiser from './c-roc-cruiser';
import droidtrifighter from './droid-tri-fighter';
import firesprayclasspatrolcraft from './firespray-class-patrol-craft';
import gauntletfighter from './gauntlet-fighter';
import hmpdroidgunship from './hmp-droid-gunship';
import hyenaclassdroidbomber from './hyena-class-droid-bomber';
import nantexclassstarfighter from './nantex-class-starfighter';
import rogueclassstarfighter from './rogue-class-starfighter';
import sithinfiltrator from './sith-infiltrator';
import tridentclassassaultship from './trident-class-assault-ship';
import vultureclassdroidfighter from './vulture-class-droid-fighter';

const ships: { [s: string]: ShipType } = {
  belbullab22starfighter,
  croccruiser,
  hyenaclassdroidbomber,
  nantexclassstarfighter,
  sithinfiltrator,
  vultureclassdroidfighter,
  droidtrifighter,
  firesprayclasspatrolcraft,
  hmpdroidgunship,
  tridentclassassaultship,
  gauntletfighter,
  rogueclassstarfighter,
};

export default ships;
