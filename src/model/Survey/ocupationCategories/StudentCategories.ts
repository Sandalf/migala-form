import {Option} from "src/model/Survey/SurveyModel";
import {generateUniqSerial} from "src/utils/GeneralUtils";

export const StudentCategories: Array<Option> = [
    {
        id: generateUniqSerial(),
        value: "Secundaria"
    },
    {
        id: generateUniqSerial(),
        value: "Preparatoria"
    },
    {
        id: generateUniqSerial(),
        value: "Universidad"
    }
]