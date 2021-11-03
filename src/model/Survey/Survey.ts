import {SurveyModel} from "src/model/Survey/SurveyModel";
import {GeneralInformationGroup} from "./surveyGroups/GeneralInformationGroup";
import {LaborInformation} from "./surveyGroups/LaborInformation";
import {ProjectSupport} from "./surveyGroups/ProjectSupport";

export const Survey: Array<SurveyModel> = [
    GeneralInformationGroup,
    LaborInformation,
    ProjectSupport
]