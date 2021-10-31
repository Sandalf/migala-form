import {Option} from "src/model/Survey/SurveyModel";
import {generateUniqSerial} from "src/utils/GeneralUtils";

export const PublicEmployeeCategories: Array<Option> = [
    {
        id: 'gobermentEmployee_0',
        value: 'Gobierno local'
    },
    {
        id: 'gobermentEmployee_1',
        value: 'Gobierno federal'
    },
    {
        id: 'gobermentEmployee_2',
        value: 'Sindicatos y/o organizaciones políticas'
    },
    {
        id: 'gobermentEmployee_3',
        value: 'Organizaciones de la sociedad civil'
    },
    {
        id: 'gobermentEmployee_4',
        value: 'Poder legislativo'
    },
    {
        id: 'gobermentEmployee_5',
        value: 'Poder judicial'
    }
]