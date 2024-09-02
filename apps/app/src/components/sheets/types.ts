import { SheetDefinition } from "react-native-actions-sheet";
import { CreateSquadronSheetProps, CreateSquadronSheetReturn } from "./createSquadron";
import { ExportSquadronSheetProps, ExportSquadronSheetReturn } from "./exportSquadron";
import { FilterSquadronsSheetProps, FilterSquadronsSheetReturn } from "./filterSquadron";
import { PilotActionSheetProps, PilotActionSheetReturn } from "./pilotActions";
import { ScanQRCodeSheetProps, ScanQRCodeSheetReturn } from "./scanQRCode";
import { SelectFormatSheetProps, SelectFormatSheetReturn } from "./selectFormat";
import { SelectObstaclesSheetProps, SelectObstaclesSheetReturn } from "./selectObstacles";
import { SelectTagsSheetProps, SelectTagsSheetReturn } from "./selectTags";

declare module 'react-native-actions-sheet' {
    interface Sheets {
        CreateSquadronSheet: SheetDefinition<{
            payload: CreateSquadronSheetProps;
            returnValue: CreateSquadronSheetReturn;
        }>;
        ExportSquadronSheet: SheetDefinition<{
            payload: ExportSquadronSheetProps;
            returnValue: ExportSquadronSheetReturn;
        }>;
        FilterSquadronsSheet: SheetDefinition<{
            payload: FilterSquadronsSheetProps;
            returnValue: FilterSquadronsSheetReturn;
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
        SelectTagsSheet: SheetDefinition<{
            payload: SelectTagsSheetProps;
            returnValue: SelectTagsSheetReturn;
        }>;
        ScanQRCodeSheet: SheetDefinition<{
            payload: ScanQRCodeSheetProps;
            returnValue: ScanQRCodeSheetReturn;
        }>;
    }
}