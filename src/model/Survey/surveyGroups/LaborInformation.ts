import {SurveyModel} from "../SurveyModel";
import {generateUniqSerial} from "../../../utils/GeneralUtils";
import {PrivateEmployeeCategories} from "../occupationCategories/PrivateEmployeeCategories";
import {PublicEmployeeCategories} from "../occupationCategories/PublicEmployeeCategories";
import {StudentCategories} from "../occupationCategories/StudentCategories";

export const LaborInformation: SurveyModel = {
    id: generateUniqSerial(),
    surveyTitle: "Información Laboral",
    backgroundColor: "#7147c2",
    questionsGroups: [
        {
            id: "edu_level_section",
            questions: [
                {
                    id: "edu_level_questions",
                    title: "¿Cuál ha sido tu último grado de estudios que hayas concluido?",
                    type: "select",
                    field: "edu_level",
                    options: [
                        {
                            id: "Primaria",
                            value: "Primaria"
                        },
                        {
                            id: "Secundaria",
                            value: "Secundaria"
                        },
                        {
                            id: "Preparatoria",
                            value: "Preparatoria"
                        },
                        {
                            id: "Universidad",
                            value: "Universidad"
                        },
                        {
                            id: "Posgrado",
                            value: "Posgrado"
                        },

                    ]
                },
                {
                    id: "work_in_your_study_section",
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
            id: "occupation_section",
            questions: [
                {
                    id: "occupation_questions",
                    title: "¿Actualmente cuál es tu ocupación? \nPuedes seleccionar hasta tres casillas",
                    type: "checkbox",
                    field: "occupation",
                    options: [
                        {
                            id: "private_employee",
                            value: "Empleado en el sector privado"
                        },
                        {
                            id: "public_employee",
                            value: "Empleado en el sector publico"
                        },
                        {
                            id: "student",
                            value: "Estudiante"
                        },
                        {
                            id: "unemployed",
                            value: "Desemplead@ / Pensionad@"
                        },
                        {
                            id: "informal_employee",
                            value: "Emplead@ informal"
                        },
                        {
                            id: "home_employee",
                            value: "Trabajo doméstico y/o de cuidado"
                        },
                        {
                            id: "own_business",
                            value: "Negocio propio y/o familiar"
                        },
                        {
                            id: "freelancer",
                            value: "Freelancer"
                        },
                        {
                            id: "teacher",
                            value: "Docencia / Academía"
                        },
                    ]
                }
            ]
        },
        {
            id: "dynamic_categories_section",
            questions: []
        },
        {
            id: "educational_formation_section",
            questions: [
                {
                    id: "educational_formation_questions",
                    title: "Ahora queremos conocer más sobre tu formación académica \nSelecciona el área de conocimiento en el que te especializas",
                    type: "select",
                    placeHolder: "Selecciona una opción",
                    options: [
                        {
                            id: "social_sciences_admin",
                            value: "Ciencias sociales, administración y derecho"
                        },
                        {
                            id: "social_sciences_behavior",
                            value: "Ciencias sociales y estudios del comportamiento"
                        },
                        {
                            id: "engineering_manufacture_construction",
                            value: "Ingeniería, manufactura y construcción "
                        },
                        {
                            id: "education",
                            value: "Educación"
                        },
                        {
                            id: "natural_exact_sciences",
                            value: "Ciencias naturales, exactas y de la computación"
                        },
                        {
                            id: "math_statistic",
                            value: "Matemáticas y estadística"
                        },
                        {
                            id: "services",
                            value: "Servicios"
                        },{
                            id: "art_humanity",
                            value: "Artes y humanidades"
                        },
                        {
                            id: "health",
                            value: "Salud"
                        },
                        {
                            id: "agronomy_veterinary",
                            value: "Agronomía y veterinaria"
                        },
                        {
                            id: "other_study_area",
                            value: "Otro"
                        }

                    ],
                    field: "studyArea"
                },
            ]
        },
        {
            id: "educational_speciality_section",
            questions: [
                {
                    id: "educational_speciality_questions",
                    title: "¿Selecciona tu especialidad?",
                    type: "select",
                    placeHolder: "Selecciona una opción",
                    options: [],
                    field: "studySpeciality"
                }
            ]
        },
        {
            id: "hobby_section",
            questions: [
                {
                    id: "hobby_questions",
                    title: "¿En que actividades participas que no son de trabajo?\nPuedes seleccionar hasta tres casillas",
                    type: "checkbox",
                    options: [
                        {
                            id: "hobby_artistic",
                            value: "Artisticas"
                        },
                        {
                            id: "hobby_politic",
                            value: "Politicas"
                        },
                        {
                            id: "hobby_sports",
                            value: "Deportivas"
                        },
                        {
                            id: "hobby_ong",
                            value: "ONG, organizaciones sin findes de lucro"
                        },
                        {
                            id: "hobby_help_group",
                            value: "Grupos de ayuda"
                        },
                        {
                            id: "hobby_community",
                            value: "Labor comunitaria"
                        }
                    ],
                    field: "hobby"
                }
            ]
        },
        {
            id: "hobby_specific_section",
            questions: []
        }
    ]
}