import { ShipType } from '../../../../types';
import cr90corelliancorvette from './cr90-corellian-corvette';
import gr75mediumtransport from './gr-75-medium-transport';
import mg100starfortress from './mg-100-starfortress-sf-17';
import scavengedyt1300 from './scavenged-yt-1300';
import rz2awing from './rz-2-a-wing';
import t70xwing from './t-70-x-wing';
import resistancetransport from './resistance-transport';
import resistancetransportpod from './resistance-transport-pod';
import fireball from './fireball';
import btanr2ywing from './bta-nr2-y-wing';
import btanr2wywing from './bta-nr2-w-y-wing';

const ships: { [s: string]: ShipType } = {
  cr90corelliancorvette,
  gr75mediumtransport,
  mg100starfortress,
  scavengedyt1300,
  rz2awing,
  t70xwing,
  resistancetransport,
  resistancetransportpod,
  fireball,
  btanr2ywing,
  btanr2wywing,
};

export default ships;
