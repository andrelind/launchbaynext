import { ShipType } from '../../../../types';
import btanr2wywing from './bta-nr2-w-y-wing';
import btanr2ywing from './bta-nr2-y-wing';
import cr90corelliancorvette from './cr90-corellian-corvette';
import fireball from './fireball';
import gr75mediumtransport from './gr-75-medium-transport';
import mg100starfortress from './mg-100-starfortress';
import resistancetransport from './resistance-transport';
import resistancetransportpod from './resistance-transport-pod';
import rz2awing from './rz-2-a-wing';
import scavengedyt1300 from './scavenged-yt-1300';
import t70xwing from './t-70-x-wing';

const ships: { [s: string]: ShipType } = {
  gr75mediumtransport,
  mg100starfortress,
  resistancetransportpod,
  resistancetransport,
  rz2awing,
  scavengedyt1300,
  t70xwing,
  fireball,
  btanr2ywing,
  btanr2wywing,
  cr90corelliancorvette,
};

export default ships;
