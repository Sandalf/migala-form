import React, {useContext, useState} from "react";
import {QuestionsGroup} from "../model/Survey/SurveyModel";
import {FormContext} from "../context/FormContext";
import {getYearsOld} from "../utils/GeneralUtils";

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

    const { formResponses } = useContext(FormContext)
    const [questions, setQuestions] = useState(questionsProps)

    const applyFormValidations = (currentGroup: QuestionsGroup, callback?: () => void) => {
        console.log("Validate....")

        if(currentGroup.questions.find( f => f.id === "birthday_question" ) !== undefined){
            handleDateQuestionChange()
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


    return [questions, applyFormValidations ] as const
}