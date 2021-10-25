import React from "react";
import styled from "styled-components";
import {Input as InputModel} from "src/model/Survey/SurveyModel";
import {Input} from "../Input/Input";

interface MultipleInputsProps {
    inputs: Array<InputModel>
}

export const MultipleInputs = ( { inputs }: MultipleInputsProps ) => {

    return(
        <MultipleInputsContainer className="animated fadeIn">
            { inputs.map( input => (
                <SingleInputContainer key={input.id}>
                    <Input label={input.label} placeholder={input.placeHolder}/>
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