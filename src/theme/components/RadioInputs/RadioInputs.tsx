import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Option} from "src/model/Survey/SurveyModel";
import {FormContext} from "src/context/FormContext";

interface RadioOption extends Option {
    selected?: boolean
}

interface RadioInputsProps {
    placeHolder?: string,
    field: any,
    options: Array<RadioOption>,
}
export const RadioInputs = ({ placeHolder, field, options }: RadioInputsProps) => {

    const [ radioOptions, setRadioOptions ] = useState(options)

    const { formResponses, setFormResponses } = useContext(FormContext)

    useEffect(() => {
        let newOptions = [...options]
        newOptions.forEach( option => { option.selected = false })

        if(!formResponses[field]){
            return
        }

        let index = newOptions.findIndex( f => f.id === formResponses[field].id )

        if(index !== -1){
            newOptions[index].selected = true
            setRadioOptions(newOptions)
        }
    }, [])

    const handleRadioChange = (option: Option) => {
        let newOptions = [...radioOptions]
        newOptions.forEach( f => f.selected = false )

        let index = newOptions.findIndex( f => f.id === option.id )

        if(index !== -1){
            newOptions[index].selected = true
            setRadioOptions(newOptions)

            let newObject:any = {}
            newObject[field] = {...newOptions[index]}
            setFormResponses((prevState:any) => ({ ...prevState, ...newObject }))
        }
    }

    return(
        <RadioInputsContainer>
            { options.map( (option, index) => (
              <InputContainer key={option.id}>
                  <InputRadio
                      id='radio-option'
                      checked={(option.selected || false)}
                      onChange={() => handleRadioChange(option)}
                      type={'radio'} />
                  <label>{ option.value }</label>
              </InputContainer>
            ))
            }
        </RadioInputsContainer>
    )
}

const RadioInputsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const InputContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;

const InputRadio = styled.input`
    cursor: pointer;
`;