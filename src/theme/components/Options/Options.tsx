import React from "react";
import styled from "styled-components";
import {Option} from "src/model/Survey/SurveyModel";

export interface OptionstList extends Option{
    selected?: boolean
}

interface OptionsProps {
    optionsList: Array<OptionstList>
}

export const Options = ({ optionsList }: OptionsProps) => {


    return(
        <OptionsListContainer  className="animated fadeIn">
            { optionsList.map( option => (
                <OptionPaddingItem key={option.id}>
                    <OptionItem >
                        <span>{option.value}</span>
                    </OptionItem>
                </OptionPaddingItem>
            ))
            }
        </OptionsListContainer>
    )
}

const OptionsListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  min-width: 50%;
  transition: all 0.5s;
`;

const OptionPaddingItem = styled.div`
    padding: 10px;
`;

const OptionItem = styled.div`
  width: calc(150px + 1vmin);
  height: calc(35px + 1vmin);
  background: ${props => props.theme.buttonBackground};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;

  span {
    color: ${props => props.theme.buttonText};
  }
  
  &:hover {
    transform: scale(1.1);
    
    span{
      animation-name: pulse;
      animation-duration: 1s;
    }
  }
  
`;