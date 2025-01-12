const icons: { [s: string]: string } = {
  agility: '\u005e',
  astromech: '\u0041',
  attack: '\u0025',
  bankleft: '\u0037',
  bankright: '\u0039',
  barrelroll: '\u0072',
  'base-all': '\u00c0',
  'base-small': '\u00c1',
  'base-medium': '\u00c2',
  'base-large': '\u00c3',
  boost: '\u0062',
  bullseyearc: '\u007d',
  calculate: '\u0061',
  cannon: '\u0043',
  cargo: '\u0047',
  charge: '\u0067',
  cloak: '\u006b',
  command: '\u0056',
  'condition-outline': '\u00c6',
  condition: '\u00b0',
  config: '\u006e',
  coordinate: '\u006f',
  crew: '\u0057',
  crit: '\u0063',
  'dalan-bankleft': '\u005b',
  'dalan-bankright': '\u005d',
  device: '\u0042',
  doublerecurring: '\u005f',
  doubleturretarc: '\u0071',
  empire: '\u0040',
  energy: '\u0028',
  epic: '\u0029',
  evade: '\u0065',
  firstorder: '\u002b',
  'first-player-1-outline': '\u0139',
  'first-player-1': '\u013a',
  'first-player-2-outline': '\u013b',
  'first-player-2': '\u013c',
  'first-player-3-outline': '\u013d',
  'first-player-3': '\u013e',
  'first-player-4-outline': '\u013f',
  'first-player-4': '\u0140',
  focus: '\u0066',
  forcecharge: '\u0068',
  forcepower: '\u0046',
  frontarc: '\u007b',
  fullfrontarc: '\u007e',
  fullreararc: '\u00a1',
  fuse: '\u002c',
  gunner: '\u0059',
  hardpoint: '\u0048',
  'helmet-imperial': '\u0079',
  'helmet-rebel': '\u0078',
  'helmet-scum': '\u007a',
  hit: '\u0064',
  hull: '\u0026',
  'ig88d-sloopleft': '\u0022',
  'ig88d-sloopright': '\u0027',
  illicit: '\u0049',
  jam: '\u006a',
  kturn: '\u0032',
  leftarc: '\u00a3',
  linked: '\u003e',
  lock: '\u006c',
  missile: '\u004d',
  modification: '\u006d',
  negativerecurring: '\u0081',
  'obstacle-core2asteroid0-outline': '\u0109',
  'obstacle-core2asteroid0': '\u0125',
  'obstacle-core2asteroid1-outline': '\u010c',
  'obstacle-core2asteroid1': '\u0128',
  'obstacle-core2asteroid2-outline': '\u010a',
  'obstacle-core2asteroid2': '\u0126',
  'obstacle-core2asteroid3-outline': '\u010b',
  'obstacle-core2asteroid3': '\u0127',
  'obstacle-core2asteroid4-outline': '\u010d',
  'obstacle-core2asteroid4': '\u0129',
  'obstacle-core2asteroid5-outline': '\u010e',
  'obstacle-core2asteroid5': '\u012a',
  'obstacle-coreasteroid0-outline': '\u0102',
  'obstacle-coreasteroid0': '\u011e',
  'obstacle-coreasteroid1-outline': '\u0103',
  'obstacle-coreasteroid1': '\u011f',
  'obstacle-coreasteroid2-outline': '\u0101',
  'obstacle-coreasteroid2': '\u011d',
  'obstacle-coreasteroid3-outline': '\u0105',
  'obstacle-coreasteroid3': '\u0121',
  'obstacle-coreasteroid4-outline': '\u0104',
  'obstacle-coreasteroid4': '\u0120',
  'obstacle-coreasteroid5-outline': '\u0100',
  'obstacle-coreasteroid5': '\u011c',
  'obstacle-vt49decimatordebris0-outline': '\u0110',
  'obstacle-vt49decimatordebris0': '\u012c',
  'obstacle-vt49decimatordebris1-outline': '\u0111',
  'obstacle-vt49decimatordebris1': '\u012d',
  'obstacle-vt49decimatordebris2-outline': '\u0107',
  'obstacle-vt49decimatordebris2': '\u0123',
  'obstacle-yt2400debris0-outline': '\u010f',
  'obstacle-yt2400debris0': '\u012b',
  'obstacle-yt2400debris1-outline': '\u0108',
  'obstacle-yt2400debris1': '\u0124',
  'obstacle-yt2400debris2-outline': '\u0106',
  'obstacle-yt2400debris2': '\u0122',
  'obstacle-gascloud1': '\u012e',
  'obstacle-gascloud1-outline': '\u0112',
  'obstacle-gascloud2': '\u012f',
  'obstacle-gascloud2-outline': '\u0113',
  'obstacle-gascloud3': '\u0130',
  'obstacle-gascloud3-outline': '\u0114',
  'obstacle-gascloud4': '\u0131',
  'obstacle-gascloud4-outline': '\u0115',
  'obstacle-gascloud5': '\u0132',
  'obstacle-gascloud5-outline': '\u0116',
  'obstacle-gascloud6': '\u0133',
  'obstacle-gascloud6-outline': '\u0117',
  point: '\u00cc',
  rangebonusindicator: '\u003f',
  reararc: '\u007c',
  'rebel-outline': '\u002d',
  rebel: '\u0021',
  recover: '\u0076',
  recurring: '\u0060',
  reinforce: '\u0069',
  reload: '\u003d',
  republic: '\u002f',
  reversebankleft: '\u004a',
  reversebankright: '\u004c',
  reversestraight: '\u004b',
  rightarc: '\u00a2',
  rotatearc: '\u0052',
  scum: '\u0023',
  separatists: '\u002e',
  sensor: '\u0053',
  shield: '\u002a',
  singleturretarc: '\u0070',
  slam: '\u0073',
  sloopleft: '\u0031',
  sloopright: '\u0033',
  'squad-point-cost': '\u0030',
  stop: '\u0035',
  straight: '\u0038',
  tacticalrelay: '\u005a',
  talent: '\u0045',
  team: '\u0054',
  tech: '\u0058',
  title: '\u0074',
  'token-calculate-outline': '\u00cb',
  'token-calculate': '\u00ca',
  'token-charge-outline': '\u00d3',
  'token-charge': '\u00d2',
  'token-crit-outline': '\u00e8',
  'token-crit': '\u00c7',
  'token-cloak-outline': '\u00f4',
  'token-cloak': '\u00e5',
  'token-deplete-outline': '\u00f7',
  'token-deplete': '\u00f8',
  'token-evade-outline': '\u00e9',
  'token-evade': '\u00c5',
  'token-focus-outline': '\u00e7',
  'token-focus': '\u00c4',
  'token-force-outline': '\u00d5',
  'token-force': '\u00d4',
  'token-disarm-outline': '\u00ed',
  'token-disarm': '\u00d6',
  'token-ion-outline': '\u00f3',
  'token-ion': '\u00e4',
  'token-jam-outline': '\u00f0',
  'token-jam': '\u00e1',
  'token-lock-outline': '\u00f2',
  'token-lock': '\u00e3',
  'token-point-1-outline': '\u00ce',
  'token-point-1': '\u00d0',
  'token-point-3-outline': '\u00cd',
  'token-point-3': '\u00cf',
  'token-reinforce-outline': '\u00ec',
  'token-reinforce': '\u00dc',
  'token-reinforceaft-outline': '\u00ee',
  'token-reinforceaft': '\u00dd',
  'token-shield-outline': '\u00eb',
  'token-shield': '\u00d1',
  'token-strain-outline': '\u00f5',
  'token-strain': '\u00f6',
  'token-stress-outline': '\u00ea',
  'token-stress': '\u00c9',
  'token-tractor-outline': '\u00ef',
  'token-tractor': '\u00e0',
  torpedo: '\u0050',
  triplerecurring: '\u0080',
  trollleft: '\u003a',
  trollright: '\u003b',
  turnleft: '\u0034',
  turnright: '\u0036',
  turret: '\u0055',
  'unique-outline': '\u2022',
  unique: '\u0075',

  // Additional
  'bank left': '7',
  'bank right': '9',
  'barrel roll': 'r',
  basesmall: 'Á',
  basemedium: 'Â',
  baselarge: 'Ã',
  'bullseye arc': '}',
  charges: 'g',
  configuration: 'n',
  'critical hit': 'c',
  'double turret arc': 'q',
  'galactic empire': '@',
  galacticempire: '@',
  'galactic republic': '/',
  galacticrepublic: '/',
  'first order': '+',
  force: 'h',
  'force power': 'h',
  'front arc': '{',
  'full front arc': '~',
  'full rear arc': '¡',
  'koiogran turn': '2',
  'left arc': '£',
  ordnance: '?',
  'rear arc': '|',
  resistance: '!',
  'rebel alliance': '!',
  rebelalliance: '!',
  'right arc': '¢',
  'rotate arc': 'R',
  'scum and villainy': '#',
  scumandvillainy: '#',
  shields: '*',
  'single turret arc': 'p',
  "segnor's loop left": '1',
  "segnor's loop right": '3',
  'separatist alliance': '.',
  separatistalliance: '.',
  stationary: '5',
  'tactical relay': 'Z',
  targetlock: 'l',
  'token-cannotattack-outline': 'í',
  'token-cannotattack': 'Ö',
  'tallon roll left': ':',
  'tallon roll right': ';',
  'turn left': '4',
  'turn right': '6',
};

export const xwingIcons = (icon?: string) => {
  if (!icon) {
    return;
  }
  return icons[icon.toLowerCase()] || '0';
};

const shipMap: { [s: string]: string } = {
  aggressorassaultfighter: '\u0069',
  alphaclassstarwing: '\u0026',
  arc170starfighter: '\u0063',
  asf01bwing: '\u0062',
  attackshuttle: '\u0067',
  auzituckgunship: '\u0040',
  belbullab22starfighter: '\u005b',
  btla4ywing: '\u0079',
  btlbywing: '\u003a',
  btanr2ywing: '\u0083',
  btls8kwing: '\u006b',
  cr90corvette: '\u0032',
  croccruiser: '\u0035',
  customizedyt1300lightfreighter: '\u0057',
  droidtrifighter: '\u002b',
  delta7aethersprite: '\u005c',
  delta7baethersprite: '\u005c',
  escapecraft: '\u0058',
  eta2actis: '\u002d',
  ewing: '\u0065',
  fangfighter: '\u004d',
  fireball: '\u0030',
  firesprayclasspatrolcraft: '\u0066',
  g1astarfighter: '\u006e',
  gozanticlasscruiser: '\u0034',
  gr75mediumtransport: '\u0031',
  hmpdroidgunship: '\u002e',
  hwk290lightfreighter: '\u0068',
  hyenaclassdroidbomber: '\u003d',
  jumpmaster5000: '\u0070',
  kihraxzfighter: '\u0072',
  laatigunship: '\u002f',
  lambdaclasst4ashuttle: '\u006c',
  lancerclasspursuitcraft: '\u004c',
  m12lkimogilafighter: '\u004b',
  m3ainterceptor: '\u0073',
  mg100starfortress: '\u005a',
  modifiedtielnfighter: '\u0043',
  modifiedyt1300lightfreighter: '\u006d',
  nabooroyaln1starfighter: '\u003c',
  nantexclassstarfighter: '\u003b',
  nimbusclassvwing: '\u002c',
  quadrijettransferspacetug: '\u0071',
  raiderclasscorvette: '\u0033',
  resistancetransport: '\u003e',
  resistancetransportpod: '\u003f',
  rz1awing: '\u0061',
  rz2awing: '\u0045',
  scavengedyt1300: '\u0059',
  scurrgh6bomber: '\u0048',
  sheathipedeclassshuttle: '\u0025',
  sithinfiltrator: '\u005d',
  starviperclassattackplatform: '\u0076',
  syliureclasshyperspacering: '\u002a',
  t65xwing: '\u0078',
  t70xwing: '\u0077',
  tieadvancedv1: '\u0052',
  tieadvancedx1: '\u0041',
  tieagaggressor: '\u0060',
  tiebainterceptor: '\u006a',
  tiecapunisher: '\u004e',
  tieddefender: '\u0044',
  tiefofighter: '\u004f',
  tieinterceptor: '\u0049',
  tielnfighter: '\u0046',
  tiephphantom: '\u0050',
  tierbheavy: '\u004a',
  tiereaper: '\u0056',
  tiesabomber: '\u0042',
  tiesebomber: '\u0081',
  tiesffighter: '\u0053',
  tieskstriker: '\u0054',
  tievnsilencer: '\u0024',
  tiewiwhispermodifiedinterceptor: '\u0080',
  upsilonclasscommandshuttle: '\u0055',
  ut60duwing: '\u0075',
  v19torrentstarfighter: '\u005e',
  vcx100lightfreighter: '\u0047',
  vt49decimator: '\u0064',
  vultureclassdroidfighter: '\u005f',
  xiclasslightshuttle: '\u0051',
  yt2400lightfreighter: '\u006f',
  yv666lightfreighter: '\u0074',
  z95af4headhunter: '\u007a',
  clonez95headhunter: '}',
  rogueclassstarfighter: '|',
  st70assaultship: "'",
  gauntletfighter: '6',

  // Additional
  cr90corelliancorvette: '2',
  ig2000: 'i',
  tieadvprototype: 'R',
  tieininterceptor: 'I',
  upsilonclassshuttle: 'U',
  yt2400: 'o',
  yt2400lightfreighter2023: '\u006f',
};

export const shipIcons = (name: string) => {
  if (!name) {
    return;
  }
  const value = shipMap[name.toLowerCase()];
  if (!value) {
    console.info('MISSING ICON', name);
  }
  return value;
};
