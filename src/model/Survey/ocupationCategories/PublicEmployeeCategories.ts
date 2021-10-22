import {Option} from "src/model/Survey/SurveyModel";
import {generateUniqSerial} from "src/utils/GeneralUtils";

export const PublicEmployeeCategories: Array<Option> = [
    {
        id: generateUniqSerial(),
        value: "Gobierno local"
    },
    {
        id: generateUniqSerial(),
        value: "Gobierno federal"
    },
    {
        id: generateUniqSerial(),
        value: "Sindicatos y/o organizaciones politicas"
    }
]