import {SurveyModel} from "../SurveyModel";
import {generateUniqSerial} from "../../../utils/GeneralUtils";
import {PrivateEmployeeCategories} from "../ocupationCategories/PrivateEmployeeCategories";
import {PublicEmployeeCategories} from "../ocupationCategories/PublicEmployeeCategories";
import {StudentCategories} from "../ocupationCategories/StudentCategories";

export const LaborInformation: SurveyModel = {
    id: generateUniqSerial(),
    surveyTitle: "Información Laboral",
    backgroundColor: "#7147c2",
    questionsGroups: [
        {
            id: generateUniqSerial(),
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Actualmente cuál es tu ocupación?\nPuedes seleccionar hasta tres casillas",
                    type: "checkbox",
                    field: "ocupation",
                    options: [
                        {
                            id: "ocupation01",
                            value: "Empleado en el sector privado"
                        },
                        {
                            id: "ocupation02",
                            value: "Empleado en el sector publico"
                        },
                        {
                            id: "ocupation03",
                            value: "Estudiante"
                        },
                        {
                            id: "ocupation04",
                            value: "Otro 1"
                        },
                        {
                            id: "ocupation05",
                            value: "Otro 2"
                        }
                    ]
                }
            ]
        },
        {
            id: generateUniqSerial(),
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Puedes especificar un poco más?",
                    type: "select",
                    placeHolder: "Selecciona una categoria de empleado privado",
                    options: [
                        ...PrivateEmployeeCategories
                    ],
                    field: "employeeSelect"
                },
                {
                    id: generateUniqSerial(),
                    title: "",
                    type: "select",
                    placeHolder: "Selecciona una categoria de empleado publico",
                    options: [
                        ...PublicEmployeeCategories
                    ],
                    field: "publicSelect"
                },
                {
                    id: generateUniqSerial(),
                    title: "",
                    type: "select",
                    placeHolder: "Selecciona una categoria de Estudiante",
                    options: [
                        ...StudentCategories
                    ],
                    field: "studenSelect"
                }
            ]
        },
        {
            id: generateUniqSerial(),
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Qué estudiaste?",
                    type: "select",
                    placeHolder: "Selecciona una opción",
                    options: [
                        {
                            id: generateUniqSerial(),
                            value: "Primaria"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Secundaria"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Preparatoria"
                        }
                    ],
                    field: "studyLevel"
                },
                {
                    id: generateUniqSerial(),
                    title: "¿Trabajas en lo que estudiaste?",
                    type: "options",
                    options: [
                        {
                            id: "workInYourStudy01",
                            value: "Si"
                        },
                        {
                            id: "workInYourStudy02",
                            value: "No"
                        }
                    ],
                    field: "workInYourStudy"
                }
            ]
        },
        {
            id: generateUniqSerial(),
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿En que actividades participas que no son de trabajo?\nPuedes seleccionar hasta tres casillas",
                    type: "checkbox",
                    options: [
                        {
                            id: generateUniqSerial(),
                            value: "Artisticas"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Politicas"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "ONG, organizaciones sin findes de lucro"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Labor comunitaria"
                        }
                    ],
                    field: "hobby"
                }
            ]
        },
    ]
}