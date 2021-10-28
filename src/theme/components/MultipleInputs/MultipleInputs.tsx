import React, {useContext} from "react";
import styled from "styled-components";
import {Input as InputModel} from "src/model/Survey/SurveyModel";
import {Input} from "../Input/Input";
import {FormContext} from "src/context/FormContext";

interface MultipleInputsProps {
    inputs: Array<InputModel>
}

export const MultipleInputs = ( { inputs }: MultipleInputsProps ) => {

    const { formResponses, setFormResponses } = useContext(FormContext)

    const handleInputChange = (value:any, field:string) => {
        let newObject:any = {}
        newObject[field] = value

        console.log("Epale perros")
        setFormResponses((prevState: any) => ({...prevState, ...newObject}))
    }

    return(
        <MultipleInputsContainer className="animated fadeIn">
            { inputs.map( input => (
                <SingleInputContainer key={input.id}>
                    <Input
                        label={input.label}
                        placeholder={input.placeHolder}
                        value={(formResponses[input.field] || "")}
                        onChange={({target:{value}}) => handleInputChange(value, input.field)}
                    />
                </SingleInputContainer>
            ))
            }
        </MultipleInputsContainer>
    )
}

const MultipleInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SingleInputContainer = styled.div`
  padding: 10px;
  width: 100%;
`;