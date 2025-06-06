import fs from 'fs';
import prettier from 'prettier';
import { pilots, upgrades } from '../src/assets/xwa';
import { Faction, SlotKey } from '../src/types';

const slots: { [s: string]: SlotKey } = {
  '1': 'talent',
  '2': 'sensor',
  '3': 'cannon',
  '4': 'turret',
  '5': 'torpedo',
  '6': 'missile',
  '7': 'hardpoint',
  '8': 'crew',
  '9': 'team',
  '10': 'astromech',
  '11': 'cargo',
  '12': 'device',
  '13': 'illicit',
  '14': 'modification',
  '15': 'title',
  '16': 'gunner',
  '17': 'forcepower',
  '18': 'configuration',
  '19': 'tech',
  '96': 'team',
  '97': 'hardpoint',
  '98': 'command',
  '99': 'cargo',
  '1000': 'tacticalrelay',
  '1001': 'command',
  '1003': 'hyperdrive',
  '1004': 'forcepower',
};

const factions: { [s: string]: Faction } = {
  '1': 'Rebel Alliance',
  '2': 'Galactic Empire',
  '3': 'Scum and Villainy',
  '4': 'Resistance',
  '5': 'First Order',
  '6': 'Galactic Republic',
  '7': 'Separatist Alliance',
};

const oldShips = {
  '1': 'modifiedyt1300lightfreighter',
  '3': 'starviperclassattackplatform',
  '4': 'scurrgh6bomber',
  '5': 'yt2400lightfreighter',
  '6': 'auzituckgunship',
  '7': 'kihraxzfighter',
  '8': 'sheathipedeclassshuttle',
  '9': 'quadrijettransferspacetug',
  '10': 'firesprayclasspatrolcraft',
  '11': 'tielnfighter',
  '12': 'btla4ywing',
  '13': 'tieadvancedx1',
  '14': 'alphaclassstarwing',
  '15': 'ut60duwing',
  '16': 'tieskstriker',
  '17': 'asf01bwing',
  '18': 'tieddefender',
  '19': 'tiesabomber',
  '20': 'tiecapunisher',
  '21': 'aggressorassaultfighter',
  '22': 'g1astarfighter',
  '23': 'vcx100lightfreighter',
  '24': 'yv666lightfreighter',
  '25': 'tieadvancedv1',
  '26': 'lambdaclasst4ashuttle',
  '27': 'tiephphantom',
  '28': 'vt49decimator',
  '29': 'tieagaggressor',
  '30': 'btls8kwing',
  '31': 'arc170starfighter',
  '32': 'attackshuttle',
  '33': 't65xwing',
  '34': 'hwk290lightfreighter',
  '35': 'rz1awing',
  '36': 'fangfighter',
  '38': 'z95af4headhunter',
  '39': 'm12lkimogilafighter',
  '40': 'ewing',
  '41': 'tieininterceptor',
  '42': 'lancerclasspursuitcraft',
  '43': 'tiereaper',
  '44': 'm3ainterceptor',
  '45': 'jumpmaster5000',
  '47': 'customizedyt1300lightfreighter',
  '49': 'tiefofighter',
  '50': 'tiesffighter',
  '51': 'upsilonclassshuttle',
  '52': 'tievnsilencer',
  '53': 't70xwing',
  '54': 'rz2awing',
  '55': 'mg100starfortress',
  '56': 'modifiedtielnfighter',
  '57': 'scavengedyt1300',
  '58': 'belbullab22starfighter',
  '59': 'vultureclassdroidfighter',
  '60': 'sithinfiltrator',
  '61': 'delta7aethersprite',
  '62': 'v19torrentstarfighter',
  '63': 'resistancetransport',
  '64': 'hyenaclassdroidbomber',
  '65': 'resistancetransportpod',
  '66': 'nabooroyaln1starfighter',
  '67': 'nantexclassstarfighter',
  '68': 'btlbywing',
  '69': 'fireball',
  '70': 'tiebainterceptor',
  '71': 'nimbusclassvwing',
  '72': 'tierbheavy',
  '73': 'xiclasslightshuttle',
  '74': 'laatigunship',
  '75': 'hmpdroidgunship',
  '76': 'eta2actis',
  '77': 'droidtrifighter',
  '78': 'cr90corelliancorvette',
  '79': 'raiderclasscorvette',
  '80': 'gr75mediumtransport',
  '81': 'gozanticlasscruiser',
  '82': 'croccruiser',
  '84': 'syliureclasshyperspacering',
  '85': 'escapecraft',
  '86': 'btanr2ywing',
  '87': 'tiesebomber',
  '88': 'tiewiwhispermodifiedinterceptor',
};

const oldPilots = {
  '1': 'wedgeantilles',
  '2': 'lukeskywalker',
  '3': 'thanekyrell',
  '4': 'garvendreis-t65xwing',
  '5': 'jekporkins',
  '6': 'kullbeesperado',
  '7': 'biggsdarklighter',
  '8': 'leevantenza',
  '9': 'edriotwotubes',
  '10': 'redsquadronveteran',
  '11': 'bluesquadronescort',
  '12': 'cavernangelszealot',
  '13': 'norrawexley-btla4ywing',
  '14': 'dutchvander',
  '15': 'hortonsalm',
  '16': 'evaanverlaine',
  '17': 'goldsquadronveteran',
  '18': 'graysquadronbomber',
  '19': 'jakefarrell',
  '20': 'arvelcrynyd',
  '21': 'greensquadronpilot',
  '22': 'phoenixsquadronpilot',
  '23': 'braylenstramm',
  '24': 'tennumb',
  '25': 'bladesquadronveteran',
  '26': 'bluesquadronpilot',
  '27': 'airencracken',
  '28': 'lieutenantblount',
  '29': 'talasquadronpilot',
  '30': 'banditsquadronpilot',
  '31': 'wullffwarro',
  '32': 'lowhhrick',
  '33': 'kashyyykdefender',
  '34': 'herasyndulla',
  '35': 'sabinewren',
  '36': 'ezrabridger',
  '37': 'zeborrelios',
  '38': 'fennrau-sheathipedeclassshuttle',
  '39': 'ezrabridger-sheathipedeclassshuttle',
  '40': 'zeborrelios-sheathipedeclassshuttle',
  '41': 'ap5',
  '42': 'janors',
  '43': 'kylekatarn',
  '44': 'roarkgarnet',
  '45': 'rebelscout',
  '46': 'ezrabridger-tielnfighter',
  '47': 'sabinewren-tielnfighter',
  '48': 'captainrex',
  '49': 'zeborrelios-tielnfighter',
  '50': 'corranhorn',
  '51': 'gavindarklighter',
  '52': 'roguesquadronescort',
  '53': 'knavesquadronescort',
  '54': 'bodhirook',
  '55': 'sawgerrera',
  '56': 'cassianandor',
  '57': 'magvayarro',
  '58': 'benthictwotubes',
  '59': 'hefftobber',
  '60': 'bluesquadronscout',
  '61': 'partisanrenegade',
  '62': 'mirandadoni',
  '63': 'esegetuketu',
  '64': 'wardensquadronpilot',
  '65': 'norrawexley',
  '66': 'garvendreis',
  '67': 'sharabey',
  '68': 'ibtisam',
  '69': 'hansolo-modifiedyt1300lightfreighter',
  '70': 'landocalrissian-modifiedyt1300lightfreighter',
  '71': 'chewbacca',
  '72': 'outerrimsmuggler',
  '73': 'herasyndulla-vcx100lightfreighter',
  '74': 'kananjarrus',
  '75': 'chopper',
  '76': 'lothalrebel',
  '77': 'dashrendar',
  '78': 'leebo',
  '79': 'wildspacefringer',
  '80': 'maulermithel',
  '81': 'howlrunner',
  '82': 'scourgeskutu',
  '83': 'idenversio',
  '84': 'gideonhask',
  '85': 'delmeeko',
  '86': 'seynmarana',
  '87': 'valenrudor',
  '88': 'nightbeast',
  '89': 'wampa',
  '90': 'blacksquadronace',
  '91': 'obsidiansquadronpilot',
  '92': 'academypilot',
  '93': 'darthvader',
  '94': 'maarekstele',
  '95': 'vedfoslo',
  '96': 'zertikstrom',
  '97': 'stormsquadronace',
  '98': 'tempestsquadronpilot',
  '99': 'grandinquisitor',
  '100': 'seventhsister',
  '101': 'baronoftheempire',
  '102': 'inquisitor',
  '103': 'soontirfel',
  '104': 'turrphennir',
  '105': 'sabersquadronace',
  '106': 'alphasquadronpilot',
  '107': 'tomaxbren',
  '108': 'captainjonus',
  '109': 'majorrhymer',
  '110': 'deathfire',
  '111': 'gammasquadronace',
  '112': 'scimitarsquadronpilot',
  '113': 'majorvermeil',
  '114': 'captainferoph',
  '115': 'vizier',
  '116': 'scarifbasepilot',
  '117': 'duchess',
  '118': 'countdown',
  '119': 'puresabacc',
  '120': 'blacksquadronscout',
  '121': 'planetarysentinel',
  '122': 'rexlerbrath',
  '123': 'colonelvessery',
  '124': 'countessryad',
  '125': 'onyxsquadronace',
  '126': 'deltasquadronpilot',
  '127': 'lieutenantkestal',
  '128': 'doubleedge',
  '129': 'onyxsquadronscout',
  '130': 'sienarspecialist',
  '131': 'whisper',
  '132': 'echo',
  '133': 'sigmasquadronace',
  '134': 'imdaartestpilot',
  '135': 'majorvynder',
  '136': 'lieutenantkarsabi',
  '137': 'rhosquadronpilot',
  '138': 'nusquadronpilot',
  '139': 'redline',
  '140': 'deathrain',
  '141': 'cutlasssquadronpilot',
  '142': 'captainkagi',
  '143': 'coloneljendon',
  '144': 'lieutenantsai',
  '145': 'omicrongrouppilot',
  '146': 'captainoicunn',
  '147': 'rearadmiralchiraneau',
  '148': 'patrolleader',
  '149': 'bobafett',
  '150': 'emonazzameen',
  '151': 'kathscarlet',
  '152': 'koshkafrost',
  '153': 'krassistrelix',
  '154': 'bountyhunter',
  '155': 'fennrau',
  '156': 'oldteroch',
  '157': 'joyrekkoff',
  '158': 'kadsolus',
  '159': 'skullsquadronpilot',
  '160': 'zealousrecruit',
  '161': 'constablezuvio',
  '162': 'sarcoplank',
  '163': 'unkarplutt',
  '164': 'jakkugunrunner',
  '165': 'kavil',
  '166': 'drearenthal',
  '167': 'hiredgun',
  '168': 'crymorahgoon',
  '169': 'ndrusuhlak',
  '170': 'kaatoleeachos',
  '171': 'nashtahpup',
  '172': 'blacksunsoldier',
  '173': 'binayrepirate',
  '174': 'dacebonearm',
  '175': 'palobgodalhi',
  '176': 'torkilmux',
  '177': 'spicerunner',
  '178': 'guri',
  '179': 'dalanoberos-starviperclassattackplatform',
  '180': 'princexizor',
  '181': 'blacksunassassin',
  '182': 'blacksunenforcer',
  '183': 'serissu',
  '184': 'genesisred',
  '185': 'laetinashera',
  '186': 'quinnjast',
  '187': 'inaldra',
  '188': 'sunnybounder',
  '189': 'tansariipointveteran',
  '190': 'cartelspacer',
  '191': 'talonbanecobra',
  '192': 'graz',
  '193': 'viktorhel',
  '194': 'captainjostero',
  '195': 'blacksunace',
  '196': 'cartelmarauder',
  '197': 'ig88a',
  '198': 'ig88b',
  '199': 'ig88c',
  '200': 'ig88d',
  '201': '4lom',
  '202': 'zuckuss',
  '203': 'gandfindsman',
  '204': 'captainnym',
  '205': 'solsixxa',
  '206': 'lokrevenant',
  '207': 'toranikulda',
  '208': 'dalanoberos',
  '209': 'cartelexecutioner',
  '210': 'bossk',
  '211': 'moraloeval',
  '212': 'lattsrazzi',
  '213': 'trandoshanslaver',
  '214': 'dengar',
  '215': 'manaroo',
  '216': 'teltrevura',
  '217': 'contractedscout',
  '218': 'ketsuonyo',
  '219': 'asajjventress',
  '220': 'sabinewren-lancerclasspursuitcraft',
  '221': 'shadowporthunter',
  '222': 'hansolo',
  '223': 'landocalrissian',
  '224': 'l337',
  '225': 'freightercaptain',
  '226': 'landocalrissian-escapecraft',
  '227': 'outerrimpioneer',
  '228': 'l337-escapecraft',
  '229': 'autopilotdrone',
  '397': 'midnight',
  '398': 'scorch',
  '399': 'static',
  '400': 'longshot',
  '401': 'muse',
  '402': 'null',
  '403': 'omegasquadronace',
  '404': 'zetasquadronpilot',
  '405': 'epsilonsquadroncadet',
  '406': 'quickdraw',
  '407': 'backdraft',
  '408': 'omegasquadronexpert',
  '409': 'zetasquadronsurvivor',
  '410': 'majorstridan',
  '411': 'lieutenanttavson',
  '412': 'lieutenantdormitz',
  '413': 'starkillerbasepilot',
  '414': 'kyloren',
  '415': 'blackout',
  '416': 'firstordertestpilot',
  '417': 'sienarjaemusengineer',
  '418': 'poedameron',
  '419': 'elloasty',
  '420': 'niennunb',
  '421': 'karekun',
  '422': 'temminwexley',
  '423': 'jessikapava',
  '424': 'jophseastriker',
  '425': 'redsquadronexpert',
  '426': 'bluesquadronrookie',
  '427': 'hansolo-scavengedyt1300',
  '428': 'rey',
  '429': 'chewbacca-scavengedyt1300',
  '430': 'resistancesympathizer',
  '431': 'finchdallow',
  '432': 'benteene',
  '433': 'cat',
  '434': 'cobaltsquadronbomber',
  '435': 'lulolampar',
  '436': 'tallissanlintra',
  '437': 'greersonnel',
  '438': 'zaribangel',
  '439': 'greensquadronexpert',
  '440': 'bluesquadronrecruit',
  '441': 'foremanproach',
  '442': 'ahhav',
  '443': 'captainseevor',
  '444': 'overseeryushyn',
  '445': 'miningguildsurveyor',
  '446': 'miningguildsentry',
  '447': 'edonkappehl',
  '448': 'vennie',
  '449': 'lieutenantbastian',
  '450': 'jaycristubbs',
  '451': 'blacksquadronace-t70xwing',
  '452': 'commandermalarus',
  '453': 'tn3465',
  '454': 'lieutenantrivas',
  '455': 'recoil',
  '456': 'avenger',
  '457': 'captaincardinal',
  '458': 'pettyofficerthanisson',
  '492': 'generalgrievous',
  '493': 'wattambor',
  '494': 'captainsear',
  '495': 'skakoanace',
  '496': 'feethanottrawautopilot',
  '497': 'separatistdrone',
  '498': 'tradefederationdrone',
  '499': 'dfs081',
  '500': 'precisehunter',
  '501': 'dfs311',
  '502': 'haorchallprototype',
  '503': 'darthmaul',
  '504': 'countdooku',
  '505': '066',
  '506': 'darkcourier',
  '507': 'anakinskywalker',
  '508': 'luminaraunduli',
  '509': 'barrissoffee',
  '510': 'ahsokatano',
  '511': 'obiwankenobi',
  '512': 'macewindu',
  '513': 'plokoon',
  '514': 'saeseetiin',
  '515': 'jediknight',
  '516': 'oddball',
  '517': 'kickback',
  '518': 'axe',
  '519': 'swoop',
  '520': 'tucker',
  '521': 'bluesquadronprotector',
  '522': 'goldsquadrontrooper',
  '523': 'oddball-arc170starfighter',
  '524': 'wolffe',
  '525': 'jag',
  '526': 'sinker',
  '527': 'squadsevenveteran',
  '528': '104thbattalionpilot',
  '557': 'ricolie',
  '558': 'anakinskywalker-nabooroyaln1starfighter',
  '559': 'padmeamidala',
  '560': 'dineeellberger',
  '561': 'naboohandmaiden',
  '562': 'bravoflightofficer',
  '563': 'dbs404',
  '564': 'dbs32c',
  '565': 'bombardmentdrone',
  '566': 'baktoidprototype',
  '567': 'separatistbomber',
  '568': 'technounionbomber',
  '569': 'covanell',
  '570': 'pammichnerrogoode',
  '571': 'nodinchavdri',
  '572': 'logisticsdivisionpilot',
  '573': 'bb8',
  '574': 'rosetico',
  '575': 'finn',
  '576': 'vimoradi',
  '596': 'anakinskywalker-btlbywing',
  '597': 'oddball-btlbywing',
  '598': 'matchstick',
  '599': 'broadside',
  '600': 'r2d2',
  '601': 'goji',
  '602': 'shadowsquadronveteran',
  '603': 'redsquadronbomber',
  '604': 'sunfac',
  '605': 'berwerkret',
  '606': 'chertek',
  '607': 'gorgol',
  '608': 'petranakiarenaace',
  '609': 'stalgasinhiveguard',
  '620': 'jarekyeager',
  '621': 'kazudaxiono',
  '622': 'r1j5',
  '623': 'colossusstationmechanic',
  '624': 'majorvonreg',
  '625': 'holo',
  '626': 'ember',
  '627': 'firstorderprovocateur',
  '628': 'ginamoonsong',
  '629': 'k2so',
  '630': 'leiaorgana',
  '631': 'alexsandrkallus',
  '632': 'fifthbrother',
  '633': 'vagabond',
  '634': 'mornakee',
  '635': 'bossk-z95af4headhunter',
  '636': 'g4rgorvm',
  '637': 'nomlumb',
  '638': 'zizitlo',
  '639': 'ronithblario',
  '640': 'paigetico',
  '641': 'lieutenantlehuse',
  '642': 'captainphasma',
  '643': 'rush',
  '656': 'commandermalarus-xiclasslightshuttle',
  '657': 'gideonhask-xiclasslightshuttle',
  '658': 'agentterex',
  '659': 'firstordercourier',
  '660': 'hawk',
  '661': 'warthog',
  '662': 'hound',
  '663': '212thbattalionpilot',
  '664': 'dgs286',
  '665': 'onderonoppressor',
  '666': 'dgs047',
  '667': 'separatistpredator',
  '668': 'geonosianprototype',
  '669': 'baktoiddrone',
  '693': 'rampage',
  '694': 'lyttandree',
  '695': 'onyxsquadronsentry',
  '696': 'caridaacademycadet',
  '697': 'poedameron-swz68',
  '698': 'temminwexley-swz68',
  '699': 'caithrenalli',
  '700': 'nimichireen',
  '701': 'seftinvanik',
  '702': 'wrobietyce',
  '703': 'suralindajavos',
  '704': 'merlcobben',
  '705': 'republicjudiciary',
  '706': 'alderaanianguard',
  '707': 'outerrimpatrol',
  '708': 'firstordercollaborators',
  '709': 'echobaseevacuees',
  '710': 'newrepublicvolunteers',
  '711': 'outerrimgarrison',
  '712': 'firstordersympathizers',
  '713': 'syndicatesmugglers',
  '714': 'separatistprivateers',
  '781': 'anakinskywalker-eta2actis',
  '782': 'obiwankenobi-eta2actis',
  '783': 'aaylasecura',
  '784': 'shaakti',
  '785': 'yoda',
  '786': 'jedigeneral',
  '787': 'transgalmegcontrollink',
  '788': 'oddball-nimbusclassvwing',
  '789': 'contrail',
  '790': 'klick',
  '791': 'wilhufftarkin',
  '792': 'shadowsquadronescort',
  '793': 'loyalistvolunteer',
  '794': 'dist81',
  '795': 'dis347',
  '796': 'phlacarphoccprototype',
  '797': 'fearsomepredator',
  '798': 'separatistinterceptor',
  '799': 'colicoidinterceptor',
  '800': 'jangofett',
  '801': 'zamwesell',
  '802': 'bobafett-separatistalliance',
  '803': 'separatistracketeer',
  '878': 'herasyndulla-asf01bwing',
  '879': 'netrempollard',
  '880': 'herasyndulla-rz1awing',
  '881': 'ahsokatano-rz1awing',
  '882': 'sharabey-rz1awing',
  '883': 'wedgeantilles-rz1awing',
  '884': 'derekklivian',
  '885': 'sabinewren-rz1awing',
  '886': 'darthvader-tieddefender',
  '887': 'vultskerris',
  '888': 'captaindobbs',
  '889': 'cienaree',
  '890': 'vultskerris-tieininterceptor',
  '891': 'commandantgoran',
  '892': 'gideonhask-tieininterceptor',
  '893': 'lieutenantlorrir',
  '894': 'nashwindrider',
  '895': 'tapusk',
  '896': 'gamutkey',
  '897': 'kananjarrus-hwk290lightfreighter',
  '898': 'leemakai',
  '899': 'arlizhadrassian',
  '900': 'padric',
  '901': 'amaxinewarrior',
  '902': 'jinatasecurityofficer',
  '903': 'zoriibliss',
  '904': 'tezanasz',
  '905': 'wilsateshlo',
  '906': 'shasazaro',
  '907': 'legafossang',
  '908': 'aftabackbar',
  '909': 'coruskapellim',
  '910': 'caithrenalli-btanr2ywing',
  '911': 'newrepublicpatrol',
  '912': 'kijimispicerunner',
  '913': 'breach',
  '914': 'scorch-tiesebomber',
  '915': 'dread',
  '916': 'grudge',
  '917': 'firstordercadet',
  '918': 'sienarjaemustestpilot',
  '919': 'kyloren-tiewiwhispermodifiedinterceptor',
  '920': 'wrath',
  '921': 'nightfall',
  '922': 'whirlwind',
  '923': '709thlegionace',
  '924': 'redfuryzealot',
};

const oldUpgrades = {
  '230': 'crackshot',
  '231': 'daredevil',
  '232': 'debrisgambit',
  '233': 'elusive',
  '234': 'experthandling',
  '235': 'fearless',
  '236': 'intimidation',
  '237': 'juke',
  '238': 'lonewolf',
  '239': 'marksmanship',
  '240': 'outmaneuver',
  '241': 'predator',
  '242': 'ruthless',
  '243': 'saturationsalvo',
  '244': 'selfless',
  '245': 'squadleader',
  '246': 'swarmtactics',
  '247': 'trickshot',
  '248': 'heightenedperception',
  '249': 'instinctiveaim',
  '250': 'sense',
  '251': 'supernaturalreflexes',
  '252': 'advancedsensors',
  '253': 'collisiondetector',
  '254': 'firecontrolsystem',
  '255': 'trajectorysimulator',
  '256': 'heavylasercannon',
  '257': 'ioncannon',
  '258': 'jammingbeam',
  '259': 'tractorbeam',
  '260': 'dorsalturret',
  '261': 'ioncannonturret',
  '262': 'advprotontorpedoes',
  '263': 'iontorpedoes',
  '264': 'protontorpedoes',
  '265': 'barragerockets',
  '266': 'clustermissiles',
  '267': 'concussionmissiles',
  '268': 'homingmissiles',
  '269': 'ionmissiles',
  '270': 'protonrockets',
  '271': 'freelanceslicer',
  '272': 'gnkgonkdroid',
  '273': 'informant',
  '274': 'novicetechnician',
  '275': 'perceptivecopilot',
  '276': 'seasonednavigator',
  '277': 'tacticalofficer',
  '278': 'hotshotgunner',
  '279': 'skilledbombardier',
  '280': 'veterantailgunner',
  '281': 'veteranturretgunner',
  '282': 'r2astromech',
  '283': 'r3astromech',
  '284': 'r4astromech',
  '285': 'r5astromech',
  '286': 'cloakingdevice',
  '287': 'contrabandcybernetics',
  '288': 'deadmansswitch',
  '289': 'feedbackarray',
  '290': 'inertialdampeners',
  '291': 'riggedcargochute',
  '292': 'ablativeplating',
  '293': 'advancedslam',
  '294': 'afterburners',
  '295': 'electronicbaffle',
  '296': 'engineupgrade',
  '297': 'hullupgrade',
  '298': 'munitionsfailsafe',
  '299': 'shieldupgrade',
  '300': 'staticdischargevanes',
  '301': 'stealthdevice',
  '302': 'tacticalscrambler',
  '303': 'bazemalbus',
  '304': 'c3po',
  '305': 'cassianandor',
  '306': 'chewbacca',
  '307': 'chopper-crew',
  '308': 'herasyndulla',
  '309': 'jynerso',
  '310': 'kananjarrus',
  '311': 'landocalrissian',
  '312': 'leiaorgana',
  '313': 'magvayarro',
  '314': 'niennunb',
  '315': 'r2d2-crew',
  '316': 'sabinewren',
  '317': 'sawgerrera',
  '318': 'zeborrelios',
  '319': 'bistan',
  '320': 'ezrabridger',
  '321': 'hansolo',
  '322': 'lukeskywalker',
  '323': 'chopper',
  '324': 'r2d2',
  '325': 'r5d8',
  '326': 'ghost',
  '327': 'millenniumfalcon',
  '328': 'moldycrow',
  '329': 'outrider',
  '330': 'phantom',
  '331': 'pivotwing',
  '332': 'pivotwing',
  '333': 'servomotorsfoils',
  '334': 'servomotorsfoils',
  '335': 'admiralsloane',
  '336': 'agentkallus',
  '337': 'cienaree',
  '338': 'darthvader',
  '339': 'deathtroopers',
  '340': 'directorkrennic',
  '341': 'emperorpalpatine',
  '342': 'grandinquisitor',
  '343': 'grandmofftarkin',
  '344': 'isbslicer',
  '345': 'ministertua',
  '346': 'moffjerjerrod',
  '347': 'seventhsister',
  '348': 'fifthbrother',
  '349': 'dauntless',
  '350': 'os1arsenalloadout',
  '351': 'xg1assaultconfiguration',
  '352': '000',
  '353': '4lom',
  '354': 'bobafett',
  '355': 'cadbane',
  '356': 'cikatrovizago',
  '357': 'ig88d',
  '358': 'jabbathehutt',
  '359': 'ketsuonyo',
  '360': 'lattsrazzi',
  '361': 'maul',
  '362': 'unkarplutt',
  '363': 'zuckuss',
  '364': 'bossk',
  '365': 'bt1',
  '366': 'dengar',
  '367': 'greedo',
  '368': 'genius',
  '369': 'r5p8',
  '370': 'r5tk',
  '371': 'andrasta',
  '372': 'havoc',
  '373': 'houndstooth',
  '374': 'ig2000',
  '375': 'marauder',
  '376': 'misthunter',
  '377': 'punishingone',
  '378': 'shadowcaster',
  '379': 'slavei',
  '380': 'virago',
  '381': 'composure',
  '382': 'chewbacca-crew',
  '383': 'l337',
  '384': 'l337',
  '385': 'landocalrissian-crew',
  '386': 'tobiasbeckett',
  '387': 'qira',
  '388': 'agilegunner',
  '389': 'hansolo-gunner',
  '390': 'landosmillenniumfalcon',
  '391': 'st321',
  '392': 'bombletgenerator',
  '393': 'connernets',
  '394': 'protonbombs',
  '395': 'proximitymines',
  '396': 'seismiccharges',
  '459': 'fanatical',
  '460': 'advancedoptics',
  '461': 'hyperspacetrackingdata',
  '462': 'patternanalyzer',
  '463': 'primedthrusters',
  '464': 'targetingsynchronizer',
  '465': 'captainphasma',
  '466': 'generalhux',
  '467': 'kyloren',
  '468': 'pettyofficerthanisson',
  '469': 'supremeleadersnoke',
  '470': 'specialforcesgunner',
  '471': 'heroic',
  '472': 'c3po-crew',
  '473': 'chewbacca-crew-swz19',
  '474': 'hansolo-crew',
  '475': 'rosetico',
  '476': 'finn',
  '477': 'paigetico',
  '478': 'rey-gunner',
  '479': 'bb8',
  '480': 'bbastromech',
  '481': 'm9g8',
  '482': 'r2ha',
  '483': 'r5x3',
  '484': 'blackone',
  '485': 'reysmillenniumfalcon',
  '486': 'integratedsfoils',
  '487': 'integratedsfoils',
  '488': 'ferrospherepaint',
  '489': 'hate',
  '490': 'predictiveshot',
  '491': 'biohexacryptcodes',
  '529': 'treacherous',
  '530': 'tv94',
  '531': 'kraken',
  '532': 'energyshellcharges',
  '533': 'soullessone',
  '534': 'imperviumplating',
  '535': 'grapplingstruts',
  '536': 'brilliantevasion',
  '537': 'k2b4',
  '538': 'chancellorpalpatine',
  '539': 'countdooku',
  '540': 'generalgrievous',
  '541': 'drk1probedroids',
  '542': 'scimitar',
  '543': 'discordmissiles',
  '544': 'dedicated',
  '545': 'battlemeditation',
  '546': 'r4pastromech',
  '547': 'r4p17',
  '548': 'delta7b',
  '549': 'calibratedlasertargeting',
  '550': 'sparepartscanisters',
  '551': 'r4p44',
  '552': 'clonecommandercody',
  '553': 'seventhfleetgunner',
  '554': 'synchronizedconsole',
  '555': 'grapplingstruts',
  '556': 'chancellorpalpatine',
  '577': 'passivesensors',
  '578': 'autoblasters',
  '579': 'plasmatorpedoes',
  '580': 'diamondboronmissiles',
  '581': 'amilynholdo',
  '582': 'ga97',
  '583': 'kaydelconnix',
  '584': 'korrsella',
  '585': 'larmadacy',
  '586': 'leiaorgana-resistance',
  '587': 'pz4co',
  '588': 'r2a6',
  '589': 'r2c4',
  '590': 'ta175',
  '591': 'electroprotonbomb',
  '592': 'delayedfuses',
  '593': 'angleddeflectors',
  '594': 'landingstruts',
  '595': 'landingstruts',
  '610': 'ensnare',
  '611': 'graviticdeflection',
  '612': 'snapshot',
  '613': 'foresight',
  '614': 'precognitivereflexes',
  '615': 'ahsokatano',
  '616': 'c3po-republic',
  '617': 'c110p',
  '618': 'c110p',
  '619': 'targetingcomputer',
  '644': 'r1j5',
  '645': 'stabilizedsfoils',
  '646': 'stabilizedsfoils',
  '647': 'k2so',
  '648': 'clustermines',
  '649': 'ionbombs',
  '650': 'coaxiumhyperfuel',
  '651': 'magpulsewarheads',
  '652': 'proudtradition',
  '653': 'proudtradition',
  '654': 'deuteriumpowercells',
  '655': 'kazsfireball',
  '670': 'deadeyeshot',
  '671': 'automatedtargetpriority',
  '672': 'sensorbuoysuite',
  '673': 'multimissilepods',
  '674': 'syncedlasercannons',
  '675': 'aaylasecura',
  '676': 'kitfisto',
  '677': 'plokoon',
  '678': 'yoda',
  '679': 'fives',
  '680': 'wolfpack',
  '681': 'ghostcompany',
  '682': 'kalani',
  '683': 'commandermalarus',
  '684': 'commandermalarus',
  '685': 'agentterex',
  '686': 'agentterex',
  '687': 'commanderpyre',
  '688': 'clonecaptainrex',
  '689': 'suppressivegunner',
  '690': 'concussionbombs',
  '691': 'repulsorliftstabilizers',
  '692': 'repulsorliftstabilizers',
  '715': 'backwardstailslide',
  '716': 'starbirdslash',
  '717': 'ionlimiteroverride',
  '718': 'underslungblastercannon',
  '719': 'r6d8',
  '720': 'r2d2-resistance',
  '721': 'overdrivethruster',
  '722': 'maneuverassistmgk300',
  '723': 'targetassistmgk300',
  '724': 'admiralozzel',
  '725': 'azmorigan',
  '726': 'captainneeda',
  '727': 'strategiccommander',
  '728': 'carlistrieekan',
  '729': 'jandodonna',
  '730': 'raymusantilles',
  '731': 'stalwartcaptain',
  '732': 'agentoftheempire',
  '733': 'firstorderelite',
  '734': 'veteranwingleader',
  '735': 'dreadnoughthunter',
  '736': 'ioncannonbattery',
  '737': 'ioncannonbattery',
  '738': 'targetingbattery',
  '739': 'targetingbattery',
  '740': 'ordnancetubes',
  '741': 'ordnancetubes',
  '742': 'pointdefensebattery',
  '743': 'pointdefensebattery',
  '744': 'turbolaserbattery',
  '745': 'turbolaserbattery',
  '746': 'bombardmentspecialists',
  '747': 'commsteam',
  '748': 'igrmdroids',
  '749': 'gunneryspecialists',
  '750': 'damagecontrolteam',
  '751': 'ordnanceteam',
  '752': 'sensorexperts',
  '753': 'quickreleaselocks',
  '754': 'saboteursmap',
  '755': 'scannerbaffler',
  '756': 'adaptiveshields',
  '757': 'boostedscanners',
  '758': 'optimizedpowercore',
  '759': 'tibannareserves',
  '760': 'torynfarr',
  '761': 'dodonnaspride',
  '762': 'jainaslight',
  '763': 'liberator',
  '764': 'tantiveiv',
  '765': 'thunderstrike',
  '766': 'brighthope',
  '767': 'luminous',
  '768': 'quantumstorm',
  '769': 'assailer',
  '770': 'corvus',
  '771': 'impetuous',
  '772': 'instigator',
  '773': 'bloodcrow',
  '774': 'requiem',
  '775': 'suppressor',
  '776': 'vector',
  '777': 'brokenhorn',
  '778': 'merchantone',
  '779': 'insatiableworrt',
  '780': 'corsairrefit',
  '834': 'jedicommander',
  '835': 'jedicommander',
  '846': 'margsablclosure',
  '848': 'extrememaneuvers',
  '849': 'patience',
  '850': 'syliure31hyperdrive',
  '851': 'xx23sthreadtracers',
  '853': 'hondoohnaka',
  '854': 'jangofett',
  '856': 'zamwesell',
  '857': 'bobafett-gunner',
  '859': 'weaponssystemsofficer',
  '860': 'r2d2-republic',
  '862': 'r7a7',
  '863': 'q7astromech',
  '864': 'thermaldetonators',
  '866': 'independentcalculations',
  '867': 'precisionionengines',
  '869': 'slavei-swz82',
  '870': 'alpha3bbesh',
  '871': 'alpha3eesk',
  '872': 'interceptbooster',
  '873': 'interceptbooster',
  '877': 'falsetranspondercodes',
  '903': 'b6bladewingprototype-command',
  '904': 'bounty',
  '905': 'bounty',
  '906': 'initforthemoneyrebellion',
  '907': 'initforthemoneyrebellion',
  '908': 'phoenixsquadron',
  '909': 'phoenixsquadron',
  '910': 'shadowwing',
  '911': 'shadowwing',
  '912': 'skystrikeacademyclass',
  '913': 'skystrikeacademyclass',
  '914': 'cutthroat',
  '915': 'disciplined',
  '916': 'hopeful',
  '917': 'interloperturn',
  '918': 'tierfonbellyrun',
  '919': 'gamutkey',
  '920': 'protectorategleb',
  '921': 'sabinewren-gunner',
  '922': 'r4b11',
  '923': 'b6bladewingprototype',
  '924': 'sensitivecontrols',
  '925': 'tiedefenderelite',
  '926': 'vectoredcannonsrz1',
  '927': 'l4er5',
  '928': 'watchfulastromech',
  '929': 'wartimeloadout',
  '930': 'babufrik',
  '931': 'overtunedmodulators',
  '932': 'electrochaffmissiles',
  '933': 'enhancedjammingsuite',
  '934': 'compassion',
  '935': 'malice',
  '936': 'shatteringshot',
  '937': 'firstorderordnancetech',
  '938': 'feedbackping',
  '939': 'sensorscramblers',
  '940': 'dt798',
};

export type Manifest = {
  ships: { [s: string]: string };
  pilots: { [s: string]: string };
  upgrades: { [s: string]: string };
  factions: { [s: string]: Faction };
  slots: { [s: string]: SlotKey };
};

const runner = async () => {
  const manifest: Manifest = {
    ships: {},
    pilots: {},
    upgrades: {},
    factions,
    slots,
  };
  const revManifest: Manifest = {
    ships: {},
    pilots: {},
    upgrades: {},
    factions,
    slots,
  };

  // Ships start at 89
  let shipId = 89;
  // Pilots starts at 925
  let pilotId = 925;
  Object.keys(pilots).forEach(faction => {
    // @ts-ignore
    Object.keys(pilots[faction]).forEach(ship => {
      if (!revManifest.ships[ship]) {
        // See if the ship is already in the manifest
        const oldValue = Object.keys(oldShips).find(key => {
          // @ts-ignore
          return oldShips[key] === ship;
        });
        if (oldValue) {
          manifest.ships[oldValue] = ship;
          revManifest.ships[ship] = oldValue;
        } else {
          manifest.ships[shipId] = ship;
          revManifest.ships[ship] = `${shipId}`;
          shipId++;
        }
      }
      // @ts-ignore
      pilots[faction][ship].pilots.forEach(pilot => {
        if (!revManifest.pilots[pilot.xws]) {
          // @ts-ignore
          const oldValue = Object.keys(oldPilots).find(key => {
            // @ts-ignore
            return oldPilots[key] === pilot.xws;
          });

          if (oldValue) {
            manifest.pilots[oldValue] = pilot.xws;
            revManifest.pilots[pilot.xws] = oldValue;
          } else {
            manifest.pilots[pilotId] = pilot.xws;
            revManifest.pilots[pilot.xws] = `${pilotId}`;
            pilotId++;
          }
        }
      });
    });
  });

  // Upgrades start at 941
  let upgradeId = 941;
  Object.keys(upgrades).forEach(slot => {
    // @ts-ignore
    upgrades[slot].forEach(upgrade => {
      if (!revManifest.upgrades[upgrade.xws]) {
        // @ts-ignore
        const oldValue = Object.keys(oldUpgrades).find(key => {
          // @ts-ignore
          return oldUpgrades[key] === upgrade.xws;
        });

        if (oldValue) {
          manifest.upgrades[oldValue] = upgrade.xws;
          revManifest.upgrades[upgrade.xws] = oldValue;
        } else {
          manifest.upgrades[upgradeId] = upgrade.xws;
          revManifest.upgrades[upgrade.xws] = `${upgradeId}`;
          upgradeId++;
        }
      }
    });
  });

  // Write the manifest to file
  const formatted = await prettier.format(
    `export const manifest = ${JSON.stringify(manifest, null, 2)};\n\nexport const revManifest = ${JSON.stringify(revManifest, null, 2)}`,
    {
      trailingComma: 'all',
      singleQuote: true,
      parser: 'typescript',
    },
  );

  fs.writeFileSync(`../src/assets/manifest.ts`, formatted, 'utf8');
};

runner();
