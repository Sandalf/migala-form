import {SurveyModel} from "../SurveyModel";
import {generateUniqSerial} from "../../../utils/GeneralUtils";

export const ProjectSupport: SurveyModel = {
    id: generateUniqSerial(),
    surveyTitle: "Como podrias apoyar al proyecto",
    backgroundColor: "#9c9ba0",
    questionsGroups: [
        {
            id: generateUniqSerial(),
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Cómo te gustaría participar en este proyecto?\nContesta con honestidad, no pasa nada y selecciona solo una opción.",
                    type: "checkbox",
                    field: "workInMigala",
                    options: [
                        {
                            id: generateUniqSerial(),
                            value: "Tienen mi apoyo, pero no puedo participar de forma activa."
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Me gustaría integrarme en algunas actividades digitales específicas \nque no me requieran mucho tiempo."
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Podría participar en actividades de conformación del partido de forma activa\nsiempre y cuando no intervengan con mis otras actividades."
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Podría dedicar la mitad de mi tiempo de forma física y digital a la \nconformación del partido."
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Podría dedicarme de tiempo completo de forma física y digital a la \nconfomación del partido"
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
                    title: "¿A qué actividades podrías integrarte?\nPuedes seleccionar hasta tres casillas.",
                    type: "checkbox",
                    field: "workActivities",
                    options: [
                        {
                            id: generateUniqSerial(),
                            value: "Grupos de discusión de temas específicos"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Labores de organización en linea"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Diseño y/o comunicación"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Desarrollo web"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Labores administrativas"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Redacción de documentos legales"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Difusión y promocion"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Organización de eventos publicos"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Organización de asambleas"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Tramites frente a gobierno"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Organización territorial y visita domiciliaria"
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
                    title: "¿Cuantas horas podrias dedicarle a la semana a dichas actividades?.",
                    type: "radio",
                    field: "hoursForWeek",
                    options: [
                        {
                            id: "hoursForweek01",
                            value: "2-4"
                        },
                        {
                            id: "hoursForweek02",
                            value: "4-8"
                        },
                        {
                            id: "hoursForweek03",
                            value: "8-12"
                        },
                        {
                            id: "hoursForweek04",
                            value: "12-16"
                        },
                        {
                            id: "hoursForweek05",
                            value: "16 o mas"
                        },
                    ]
                }
            ]
        },
        {
            id: generateUniqSerial(),
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "Nuestra forma de organización digital requiere\n" +
                        "que tengamos la capacidad para que estemos todos conectad@s\n" +
                        "¿cuentas con lo siguiente?",
                    type: "checkbox",
                    field: "digitalDevices",
                    options: [
                        {
                            id: generateUniqSerial(),
                            value: "Servicio de internet en casa"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Servicio de datos moviles"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Telefono celular con conexión a internet"
                        },
                        {
                            id: generateUniqSerial(),
                            value: "Laptop o computadora de escritorio"
                        }
                    ]
                }
            ]
        }
    ]
}