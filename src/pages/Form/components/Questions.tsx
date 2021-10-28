import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Option, QuestionsGroup} from "src/model/Survey/SurveyModel";
import {Input} from "src/theme/components/Input/Input";
import {Options} from "src/theme/components/Options/Options";
import {DatePicker} from "src/theme/components/DatePicker/DatePicker";
import {Address} from "src/theme/components/Address/Address";
import {MultipleInputs} from "src/theme/components/MultipleInputs/MultipleInputs";
import {CheckBoxInputsElement} from "src/theme/components/CheckBox/CheckBoxInputsElement";
import {SelectInput} from "src/theme/components/Select/SelectInput";
import {LightText} from "src/theme/styles/generalstyles/Text";
import {MainButton} from "src/theme/components/MainButton/MainButton";
import {RadioInputs} from "src/theme/components/RadioInputs/RadioInputs";
import {FormContext} from "src/context/FormContext";

interface QuestionsProps {
    questions: Array<QuestionsGroup>,
    changeSurveySection: () => void
}
export const Questions = ({ questions, changeSurveySection }: QuestionsProps) => {

    const { formResponses, setFormResponses } = useContext(FormContext)

    const [currentIndexSurveyGroup, setCurrentIndexSurveyGroup] = useState(0)
    const [currentGroup, setCurrentGroup] = useState(questions[currentIndexSurveyGroup])

    useEffect(() => {
        setCurrentGroup(questions[currentIndexSurveyGroup])
    }, [questions, currentIndexSurveyGroup])

    const incrementCounter = () => {
        if(currentIndexSurveyGroup === (questions.length - 1)){
            changeSurveySection()
            return
        }

        /*let foundDateInput = questions[currentIndexSurveyGroup + 1].questions.findIndex( f => f.type === 'date' )

        if(foundDateInput !== -1){
            questions[currentIndexSurveyGroup + 1].questions.splice(0, 1)
        }*/

        setCurrentIndexSurveyGroup(prevState => prevState + 1)
    }

    const decrementCounter = () => {
        if(currentIndexSurveyGroup === 0){
            changeSurveySection()
            return
        }

        /*let foundDateInput = questions[currentIndexSurveyGroup + 1].questions.findIndex( f => f.type === 'date' )

        if(foundDateInput !== -1){
            questions[currentIndexSurveyGroup + 1].questions.splice(0, 1)
        }*/

        setCurrentIndexSurveyGroup(prevState => prevState - 1)
    }

    const handleInputChange = (value:any, field:string) => {
        let newObject:any = {}
        newObject[field] = value

        console.log("Epale perros")
        setFormResponses((prevState: any) => ({...prevState, ...newObject}))
    }

    return(
        <QuestionsContainer>
            <QuestionInputsContainer>
                { currentGroup.questions.map( question => (
                    <QuestionSingle key={question.id}>

                        { !!question.title &&
                        <QuestionTitle>{question.title}</QuestionTitle>
                        }

                        { question.type === 'input' &&
                        <Input
                            label={question.label}
                            placeholder={question.placeHolder}
                            value={(formResponses[question.field] || "")}
                            onChange={({target:{value}}) => handleInputChange(value, question.field)}
                        />
                        }

                        { question.type === 'options' &&
                        <Options
                            optionsList={question.options || []}
                            field={question.field}
                        />
                        }

                        { question.type === 'date' &&
                        <DatePicker
                            value={(formResponses[question.field] || "")}
                            onChange={({target:{value}}) => handleInputChange(value, question.field)}
                        />
                        }

                        { question.type === 'address' &&
                        <Address />
                        }

                        { question.type === 'multiple-inputs' &&
                        <MultipleInputs inputs={question.inputs || []}/>
                        }

                        { question.type === 'checkbox' &&
                        <CheckBoxInputsElement
                            options={question.options || []}
                            field={question.field}
                        />
                        }

                        { question.type === 'select' &&
                        <SelectInput
                            placeHolder={question.placeHolder}
                            options={question.options || []}
                            field={question.field}
                            onSelectionChange={(value) => handleInputChange(value, question.field)}
                        />
                        }

                        { question.type === 'radio' &&
                        <RadioInputs
                            placeHolder={question.placeHolder}
                            field={question.field}
                            options={question.options || []}
                        />
                        }

                    </QuestionSingle>
                ))
                }

            </QuestionInputsContainer>

            <ButtonsContainer>
                <MainButton title={"Atras"} onAction={decrementCounter}/>
                <MainButton title={"Siguiente"} onAction={incrementCounter}/>
            </ButtonsContainer>

        </QuestionsContainer>
    )
}

const QuestionsContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 20px 20px;
  width: 100%;
  min-height: 600px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.slateGray};
`;

const QuestionInputsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 45px;
`;

const QuestionSingle = styled.div`
    width: 100%;
`;

const QuestionTitle = styled(LightText)`
  font-size: calc(16px + 1vmin);
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;