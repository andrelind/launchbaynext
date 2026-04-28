import { ShipType } from '../../../../types';
import vultureclassdroidfighter from './vulture-class-droid-fighter';
import croccruiser from './c-roc-cruiser';
import belbullab22starfighter from './belbullab-22-starfighter';
import sithinfiltrator from './sith-infiltrator';
import hyenaclassdroidbomber from './hyena-class-droid-bomber';
import nantexclassstarfighter from './nantex-class-starfighter';
import droidtrifighter from './droid-tri-fighter';
import hmpdroidgunship from './hmp-droid-gunship';
import tridentclassassaultship from './trident-class-assault-ship';
import firesprayclasspatrolcraft from './firespray-class-patrol-craft';
import rogueclassstarfighter from './rogue-class-starfighter';
import gauntletfighter from './gauntlet-fighter';

const ships: { [s: string]: ShipType } = {
  vultureclassdroidfighter,
  croccruiser,
  belbullab22starfighter,
  sithinfiltrator,
  hyenaclassdroidbomber,
  nantexclassstarfighter,
  droidtrifighter,
  hmpdroidgunship,
  tridentclassassaultship,
  firesprayclasspatrolcraft,
  rogueclassstarfighter,
  gauntletfighter,
};

export default ships;
