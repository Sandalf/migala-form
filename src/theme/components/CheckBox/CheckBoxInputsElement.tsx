import React from "react";
import styled from "styled-components";
import {Option} from "src/model/Survey/SurveyModel";
import {LightText} from "src/theme/styles/generalstyles/Text";


interface CheckBoxList extends Option {
    selected?: boolean
}

interface CheckBoxInputsElementProps {
    options: Array<CheckBoxList>
}

export const CheckBoxInputsElement = ({ options }: CheckBoxInputsElementProps) => {

    return(
        <CheckBoxContainer className="animated fadeIn">
            { options.map( option => (
              <CheckBoxItemContainer key={option.id}>
                  <CheckBoxItemContainer>
                      <CheckBox type={'checkbox'} />
                      <Label>
                          {option.value}
                      </Label>
                  </CheckBoxItemContainer>
              </CheckBoxItemContainer>
            ))
            }
        </CheckBoxContainer>
    )
}

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-content: baseline;
  align-items: center;
  flex-flow: column;
  padding: 10px 0;
`;

const CheckBoxItemContainer = styled.div`
  padding: 2px 10%;
  width: 100%;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

const Label = styled(LightText)`
  font-size: calc(10px + 1vmin);
  padding: 0 10px;
`;