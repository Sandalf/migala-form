import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Option} from "src/model/Survey/SurveyModel";
import {LightText} from "src/theme/styles/generalstyles/Text";
import {FormContext} from "src/context/FormContext";
import {OptionstList} from "src/theme/components/Options/Options";
import * as _ from "lodash"


interface CheckBoxList extends Option {
    selected?: boolean
}

interface CheckBoxInputsElementProps {
    options: Array<CheckBoxList>,
    field: any
}

export const CheckBoxInputsElement = ({ options, field }: CheckBoxInputsElementProps) => {

    const [ checkOptions, setCheckOptions ] = useState(options)

    const { formResponses, setFormResponses } = useContext(FormContext)

    useEffect(() => {

        if(!formResponses[field]){
            return
        }

        let newOptions = [...options];

        (formResponses[field] || []).forEach( (f:any) => {
            let indexFound = newOptions.findIndex( option => option.id === f.id )

            if(indexFound !== -1){
                newOptions[indexFound].selected = true
            }
        })

        setCheckOptions(newOptions)
    }, [])

    const toggleOptionSelected = (option: OptionstList, checked:any) => {
        let newOptions = [...options]
        let index = newOptions.findIndex( f => f.id === option.id )

        if(index !== -1){
            newOptions[index].selected = checked
            setCheckOptions(newOptions)

            setFormResponses((prevState:any) => {
                let newValues = [...newOptions.filter( f => f.selected === true )]
                let newObject:any = {}
                newObject[field] = _.uniqBy(newValues, 'id')


                return {...prevState, ...newObject}
            })
        }
    }

    return(
        <CheckBoxContainer className="animated fadeIn">
            { checkOptions.map( option => (
              <CheckBoxItemContainer key={option.id}>
                  <CheckBoxItemContainer>
                      <CheckBox
                          type={'checkbox'}
                          checked={(option.selected || false)}
                          onChange={({target:{checked}}) => toggleOptionSelected(option, checked)}
                      />
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