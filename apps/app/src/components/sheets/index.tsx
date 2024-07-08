import { registerSheet } from 'react-native-actions-sheet';
import CreateSquadronSheet from './createSquadron';
import PilotActionSheet, { PilotActionSheetId } from './pilotActions';
import SelectFormatSheet, { SelectFormatSheetId } from './selectFormat';
import SelectObstaclesSheet, {
  SelectObstaclesSheetId
} from './selectObstacles';

import './types';

registerSheet('CreateSquadronSheet', CreateSquadronSheet);
registerSheet(PilotActionSheetId, PilotActionSheet);
registerSheet(SelectFormatSheetId, SelectFormatSheet);
registerSheet(SelectObstaclesSheetId, SelectObstaclesSheet);

export { };

