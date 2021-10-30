import {SurveyModel} from "../SurveyModel";
import {generateUniqSerial} from "../../../utils/GeneralUtils";

export const GeneralInformationGroup: SurveyModel = {
    id: generateUniqSerial(),
    surveyTitle: "Información General",
    backgroundColor: "#8f02a5",
    questionsGroups: [
        {
            id: "gender_birthday_question",
            questions: [
                {
                    id: "gender_question",
                    title: "¿Cual es tu genero?",
                    type: "select",
                    field: "gender",
                    options: [
                        {
                            id: "gender01",
                            value: "Masculino"
                        },
                        {
                            id: "gender02",
                            value: "Femenino"
                        },
                        {
                            id: "gender03",
                            value: "No binario"
                        }
                    ]
                },
                {
                    id: "birthday_question",
                    title: "¿Cuando naciste?",
                    type: "date",
                    field: "birthday",
                }
            ]
        },
        {
            id: "address_question",
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Donde vives actualmente?",
                    type: "address",
                    field: "address",
                }
            ]
        },
        {
            id: "contact_question",
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Cuando llegue el momento \ncómo podemos contactarte?",
                    type: "multiple-inputs",
                    field: '',
                    inputs: [
                        {
                            id: "email_contact_question",
                            name: "email",
                            placeHolder: "algo@algo.com",
                            label: "Ingresa tu correo electronico",
                            field: "email"
                        },
                        {
                            id: "phone_contact_question",
                            name: "telefono celular a diez digitos",
                            placeHolder: "(555) 555 5555",
                            label: "Ingresa tu número a 10 digitos",
                            field: "phone"
                        }
                    ]
                }
            ]
        },
        {
            id: "electoral_question",
            questions: [
                {
                    id: "elector_key_question",
                    title: "Ahora sí, saca tu credencial de elector\nrecuerda que este campo es opcional, \nsi decides ponerlo nos ayudas a saber \ndónde tenemos presencia y validar tu información.\nSi aún no cumples 18 años no te preocupes\ndéjalo vacío.",
                    type: "multiple-inputs",
                    field: "",
                    inputs: [
                        {
                            id: "elector_key_question00",
                            name: "Clave de elector",
                            placeHolder: "987987987989",
                            label: "Ingresa clave",
                            field: "electorkey"
                        },
                        {
                            id: "elector_district_question01",
                            name: "Distrito Electoral",
                            placeHolder: "9999",
                            label: "Ingresa distrito",
                            field: "electoralDistrict"
                        }
                    ]
                }
            ]
        }
    ]
}