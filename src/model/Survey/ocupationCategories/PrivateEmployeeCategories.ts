import {Option} from "src/model/Survey/SurveyModel";
import {generateUniqSerial} from "src/utils/GeneralUtils";

export const PrivateEmployeeCategories: Array<Option> = [
    {
        id:generateUniqSerial(),
        value: "Areas biologicas y/o de la salud"
    },
    {
        id:generateUniqSerial(),
        value: "Area de las humanidades y/o las artes"
    },
    {
        id:generateUniqSerial(),
        value: "Area de las ciencias sociales"
    },
    {
        id:generateUniqSerial(),
        value: "Area de las ciencias sociales"
    },
    {
        id:generateUniqSerial(),
        value: "Cualquier otra cosa"
    }
]