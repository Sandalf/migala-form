import React, {useContext, useState} from "react";
import {Option, Question, QuestionsGroup} from "../model/Survey/SurveyModel";
import {FormContext} from "../context/FormContext";
import {getYearsOld} from "../utils/GeneralUtils";
import {PrivateEmployeeCategories} from "../model/Survey/occupationCategories/PrivateEmployeeCategories";
import {PublicEmployeeCategories} from "../model/Survey/occupationCategories/PublicEmployeeCategories";
import {StudentCategories} from "../model/Survey/occupationCategories/StudentCategories";
import {UnEmployeeCategories} from "../model/Survey/occupationCategories/UnEmployeeCategories";
import {InformalEmployeeCategories} from "../model/Survey/occupationCategories/InformalEmployeeCategories";
import {HomeEmployeeCategories} from "../model/Survey/occupationCategories/HomeEmployeeCategories";
import {OwnBusinessEmployeeCategories} from "../model/Survey/occupationCategories/OwnBussinessEmployeeCategories";
import {FreeLancerCategories} from "../model/Survey/occupationCategories/FreeLancerCategories";
import {TeacherCategories} from "../model/Survey/occupationCategories/TeacherCategories";
import {SocialAdminSciences} from "../model/Survey/studyAreas/SocialAdminSciences";
import {SocialBehaviorSciences} from "../model/Survey/studyAreas/SocialBehaviorSciences";
import {EngineerManufacturer} from "../model/Survey/studyAreas/EngineerManufacturer";
import {Education} from "../model/Survey/studyAreas/Education";
import {NaturalExactScience} from "../model/Survey/studyAreas/NaturalExactScience";
import {MathStatistic} from "../model/Survey/studyAreas/MathStatistic";
import {Services} from "../model/Survey/studyAreas/Services";
import {ArtHumanity} from "../model/Survey/studyAreas/ArtHumanity";
import {Health} from "../model/Survey/studyAreas/Health";
import {AgronomyVeterinary} from "../model/Survey/studyAreas/AgronomyVeterinary";

/**
 *
 * Este hook recibe como props las preguntas
 * y devuelve las mismas preguntas con o sin modificaciones
 *
 * el metodo de applyFormValidations debe ser el contenedor para las validaciones
 * la primera validación que agregue es la de si es mayor de edad quitar
 * la pregunta de datos electorales, el callback sirve para cambiar de pregunta hasta modificar
 * el array de preguntas
 *
 * **/
export const useValidationHook = (questionsProps: Array<QuestionsGroup>) => {

    const { formResponses, setFormResponses } = useContext(FormContext)
    const [questions, setQuestions] = useState(questionsProps)

    const applyFormValidations = (currentGroup: QuestionsGroup, callback?: () => void) => {
        console.log("Validate....")

        if(currentGroup.questions.find( f => f.id === "birthday_question" ) !== undefined){
            handleDateQuestionChange()
        }

        if(currentGroup.id === "occupation_section"){
            handleOccupations()
        }

        if(currentGroup.id === "educational_formation_section"){
            handleStudyAreas()
        }

        if(currentGroup.id === "hobby_section"){
            handleHobbies()
        }

        callback && callback()
    }

    const handleDateQuestionChange = () => {
        console.log("BirthDay validation", formResponses["birthday"])
        let yearsOld = getYearsOld(formResponses["birthday"])

        if(yearsOld < 18){
            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "electoral_question")

            if(foundIndex !== -1){
                newQuestions.splice(foundIndex, 1)
                setQuestions(newQuestions)
            }
        }
    }

    const handleOccupations = () => {
        console.log("Occupation validation...")
        let occupationResponse = formResponses["occupation"]
        if(occupationResponse){
            let idsMapped = occupationResponse.map( (m:any) => m.id )

            let newDynamicQuestions: Array<Question> = []

            idsMapped.forEach((idSelected:string, index:number) => {
                switch (idSelected){
                    case "private_employee":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿Cual es el área de especialidad de tu trabajo en el sector privado?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: PrivateEmployeeCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "public_employee":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿Cual es el área de especialidad de tu trabajo en sector publico?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: PublicEmployeeCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "student":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿En qué nivel te encuentras estudiando actualmente?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: StudentCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "unemployed":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿Cuál es tu estatus actualmente como desempleado?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: UnEmployeeCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "informal_employee":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿En que tipo del sector informal participas?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: InformalEmployeeCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "home_employee":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿Qué tipo de labor realizas como trabajo doméstico/cuidado?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: HomeEmployeeCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "own_business":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿En que tipo de negocio particular/familiar participas?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: OwnBusinessEmployeeCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "freelancer":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿En qué área te especializas/ejerces como trabajador freelancer?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: FreeLancerCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                    case "teacher":
                        newDynamicQuestions.push({
                            id: `dinamy_category_${index}`,
                            title: "¿Cuál es tu área de actividad actualmente dentro de la docencia/academia?",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: TeacherCategories,
                            field: `dinamy_category_${index}`
                        })
                        break;
                }
            })

            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "dynamic_categories_section")

            if(foundIndex !== -1){
                newQuestions[foundIndex].questions = newDynamicQuestions
            }
        }
    }

    const handleStudyAreas = () => {
        console.log("StudyAreas validation...")
        let studyArea = formResponses["studyArea"]
        console.log(studyArea)
        if(studyArea){
            let newDynamicQuestions: Array<Question> = []

            switch (studyArea.id){
                case "social_sciences_admin":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: SocialAdminSciences,
                        field: "studySpeciality"
                    }]
                    break;
                case "social_sciences_behavior":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: SocialBehaviorSciences,
                        field: "studySpeciality"
                    }]
                    break;
                case "engineering_manufacture_construction":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: EngineerManufacturer,
                        field: "studySpeciality"
                    }]
                    break;
                case "education":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: Education,
                        field: "studySpeciality"
                    }]
                    break;
                case "natural_exact_sciences":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: NaturalExactScience,
                        field: "studySpeciality"
                    }]
                    break;
                case "math_statistic":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: MathStatistic,
                        field: "studySpeciality"
                    }]
                    break;
                case "services":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: Services,
                        field: "studySpeciality"
                    }]
                    break;
                case "art_humanity":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: ArtHumanity,
                        field: "studySpeciality"
                    }]
                    break;
                case "health":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: Health,
                        field: "studySpeciality"
                    }]
                    break;
                case "agronomy_veterinary":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "select",
                        placeHolder: "Selecciona una opción",
                        options: AgronomyVeterinary,
                        field: "studySpeciality"
                    }]
                    break;
                case "other_study_area":
                    newDynamicQuestions = [{
                        id: "educational_speciality_questions",
                        title: "¿Selecciona tu especialidad?",
                        type: "input",
                        placeHolder: "Escriba su especialidad",
                        field: "studySpeciality"
                    }]
                    break;
            }


            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "educational_speciality_section")

            if(foundIndex !== -1){
                newQuestions[foundIndex].questions = newDynamicQuestions
                setFormResponses( (prevState:any) => ({...prevState, "studySpeciality": "" }))
            }
        }
    }

    const handleHobbies = () => {
        console.log("Hobbies validation...")
        let hobbyResponse = formResponses["hobby"]
        if(hobbyResponse){
            let idsMapped = hobbyResponse.map( (m:any) => m.id )

            let newDynamicQuestions: Array<Question> = []

            idsMapped.forEach((idSelected:string, index:number) => {
                switch (idSelected){
                    case "hobby_artistic":
                        newDynamicQuestions.push({
                            id: `hobby_speciality_${index}`,
                            title: "Especifica tu especialidad artistica",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: PrivateEmployeeCategories,
                            field: `hobby_speciality_${index}`
                        })
                        break;
                    case "hobby_politic":
                        newDynamicQuestions.push({
                            id: `hobby_speciality_${index}`,
                            title: "Especifica tu especialidad politica",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: PublicEmployeeCategories,
                            field: `hobby_speciality_${index}`
                        })
                        break;
                    case "hobby_sports":
                        newDynamicQuestions.push({
                            id: `hobby_speciality_${index}`,
                            title: "Especifica tu especialidad deportiva",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: StudentCategories,
                            field: `hobby_speciality_${index}`
                        })
                        break;
                    case "hobby_ong":
                        newDynamicQuestions.push({
                            id: `hobby_speciality_${index}`,
                            title: "Especifica tu especialidad en una ONG",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: UnEmployeeCategories,
                            field: `hobby_speciality_${index}`
                        })
                        break;
                    case "hobby_help_group":
                        newDynamicQuestions.push({
                            id: `hobby_speciality_${index}`,
                            title: "Especifica tu especialidad en el grupo de ayuda",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: InformalEmployeeCategories,
                            field: `hobby_speciality_${index}`
                        })
                        break;
                    case "hobby_community":
                        newDynamicQuestions.push({
                            id: `hobby_speciality_${index}`,
                            title: "Especifica tu especialidad en labor comunitaria",
                            type: "select",
                            placeHolder: "Selecciona una opción",
                            options: HomeEmployeeCategories,
                            field: `hobby_speciality_${index}`
                        })
                        break;
                }
            })

            let newQuestions = [...questions]
            let foundIndex = newQuestions.findIndex( f => f.id === "hobby_specific_section")

            if(foundIndex !== -1){
                newQuestions[foundIndex].questions = newDynamicQuestions
            }
        }
    }

    return [questions, applyFormValidations ] as const
}