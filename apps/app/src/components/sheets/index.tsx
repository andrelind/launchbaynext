import { registerSheet } from 'react-native-actions-sheet';
import CreateSquadronSheet from './createSquadron';
import ExportSquadronSheet, { ExportSquadronSheetId } from './exportSquadron';
import FilterSquadronsSheet, { FilterSquadronsSheetId } from './filterSquadron';
import PilotActionSheet, { PilotActionSheetId } from './pilotActions';
import ScanQRCodeSheet, { ScanQRCodeSheetId } from './scanQRCode';
import SelectFormatSheet, { SelectFormatSheetId } from './selectFormat';
import SelectObstaclesSheet, { SelectObstaclesSheetId } from './selectObstacles';
import SelectTagsSheet, { SelectTagsSheetId } from './selectTags';
import './types';

registerSheet('CreateSquadronSheet', CreateSquadronSheet);
registerSheet(ExportSquadronSheetId, ExportSquadronSheet);
registerSheet(FilterSquadronsSheetId, FilterSquadronsSheet);
registerSheet(PilotActionSheetId, PilotActionSheet);
registerSheet(SelectFormatSheetId, SelectFormatSheet);
registerSheet(SelectObstaclesSheetId, SelectObstaclesSheet);
registerSheet(SelectTagsSheetId, SelectTagsSheet);
registerSheet(ScanQRCodeSheetId, ScanQRCodeSheet);

export { };

