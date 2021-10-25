import React from "react";
import styled from "styled-components";
import {Option} from "src/model/Survey/SurveyModel";

interface RadioInputsProps {
    placeHolder?: string,
    options: Array<Option>,
}
export const RadioInputs = ({ placeHolder, options }: RadioInputsProps) => {


    return(
        <RadioInputsContainer>
            { options.map( (option, index) => (
              <InputContainer>
                  <InputRadio id='radio-option' key={option.id} type={'radio'} />
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