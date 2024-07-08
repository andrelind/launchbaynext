import { SheetDefinition } from "react-native-actions-sheet";
import { CreateSquadronSheetProps, CreateSquadronSheetReturn } from "./createSquadron";
import { PilotActionSheetProps, PilotActionSheetReturn } from "./pilotActions";
import { SelectFormatSheetProps, SelectFormatSheetReturn } from "./selectFormat";
import { SelectObstaclesSheetProps, SelectObstaclesSheetReturn } from "./selectObstacles";

declare module 'react-native-actions-sheet' {
    interface Sheets {
        CreateSquadronSheet: SheetDefinition<{
            payload: CreateSquadronSheetProps;
            returnValue: CreateSquadronSheetReturn;
        }>;
        PilotActionSheet: SheetDefinition<{
            payload: PilotActionSheetProps;
            returnValue: PilotActionSheetReturn;
        }>;
        SelectFormatSheet: SheetDefinition<{
            payload: SelectFormatSheetProps;
            returnValue: SelectFormatSheetReturn;
        }>;
        SelectObstaclesSheet: SheetDefinition<{
            payload: SelectObstaclesSheetProps;
            returnValue: SelectObstaclesSheetReturn;
        }>;
    }
}