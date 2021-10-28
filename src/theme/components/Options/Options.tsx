import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Option} from "src/model/Survey/SurveyModel";
import {FormContext} from "src/context/FormContext";

export interface OptionstList extends Option{
    selected?: boolean
}

interface OptionsProps {
    optionsList: Array<OptionstList>,
    field: any
}

export const Options = ({ optionsList, field }: OptionsProps) => {

    const [ options, setOptions ] = useState(optionsList)

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
            setOptions(newOptions)
        }
    }, [])

    const toggleOptionSelected = (option: OptionstList) => {
        let newOptions = [...options]
        newOptions.forEach( option => { option.selected = false })

        let index = newOptions.findIndex( f => f.id === option.id )

        if(index !== -1){
            newOptions[index].selected = true
            setOptions(newOptions)

            let newObject:any = {}
            newObject[field] = {...newOptions[index]}
            setFormResponses((prevState:any) => ({ ...prevState, ...newObject }))
        }
    }

    return(
        <OptionsListContainer  className="animated fadeIn">
            { optionsList.map( option => (
                <OptionPaddingItem key={option.id} onClick={() => toggleOptionSelected(option)}>
                    <OptionItem isSelected={option.selected}>
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

const OptionItem = styled.div<any>`
  width: calc(150px + 1vmin);
  height: calc(35px + 1vmin);
  background: ${props => props.theme.buttonBackground}${ props => props.isSelected ? 'FF' : 'A1' };
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