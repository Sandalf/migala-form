import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {FaChevronDown, FaChevronUp} from "react-icons/all";
import {Option} from "src/model/Survey/SurveyModel";
import {FormContext} from "src/context/FormContext";

interface SelectInputProps {
    placeHolder?: string,
    options: Array<Option>,
    field?:any,
    withInputContainer?: Boolean,
    onSelectionChange?: (option?: Option) => void,
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

export const SelectInput = ({
        placeHolder,
        options,
        field,
        withInputContainer = false,
        inputProps = {},
        onSelectionChange = () => {}
    }: SelectInputProps) => {

    const {
        formResponses, setFormResponses
    } = useContext(FormContext)

    const [showExitAnimation, setShowExitAnimation] = useState(!withInputContainer)
    const [isOpen, setIsOpen] = useState(!!withInputContainer)
    const [label, setLabel] = useState(placeHolder)

    useEffect(() => {
        if(!field){
            return
        }

        let dataSaved: Option = formResponses[field] || {}
        setLabel(dataSaved.value || (placeHolder || ""))

    }, [])

    const toggleOpen = () => {
        setShowExitAnimation(isOpen)
        setTimeout(() => {
            setIsOpen(prevState => !prevState)
        }, 200)
    }

    const handleOptionSelected = (option: Option) => {
        toggleOpen()
        setLabel(option.value)
        onSelectionChange(option)

        if(field){
            let newObject:any = {}
            newObject[field] = option
            setFormResponses((prevState:any) => ({...prevState, ...newObject}))
        }
    }

    return (
        <SelectMainContainer>
            <SelectInputContainer onClick={toggleOpen}>

                {withInputContainer &&
                <LabelItemInput
                    value={inputProps.value}
                    onChange={inputProps.onChange}
                    disabled={inputProps.disabled}
                    type={inputProps.type}
                    onClick={(event) => {
                        event.stopPropagation()
                    }}
                />
                }

                {!withInputContainer &&
                <LabelItem>{label}</LabelItem>
                }


                {isOpen &&
                <ChevronUp className={"animated-fast rotateIn"}/>
                }
                {!isOpen &&
                <ChevronDown className={"animated-fast rotateIn"}/>
                }
            </SelectInputContainer>

            {isOpen &&
            <ItemOptionContainer showexitanimation={showExitAnimation}>
                {options.map(option => (
                    <ItemOptionText key={option.id}
                                    onClick={() => handleOptionSelected(option)}>{option.value}</ItemOptionText>
                ))
                }
            </ItemOptionContainer>
            }
        </SelectMainContainer>
    )
}

const SelectMainContainer = styled.div`
  position: relative;
  padding: 30px 0;
`;

const SelectInputContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 0 2px 0 ${props => props.theme.slateGray};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  overflow: hidden;
`;

const LabelItem = styled.h1`
  border-inline: none;
  background: transparent;
  outline: none;
  border: 0;
  font-size: calc(12px + 1vmin);
  color: ${props => props.theme.text};
  padding: 0 10px 0 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LabelItemInput = styled.input`
  border-inline: none;
  background: transparent;
  outline: none;
  border: 0;
  font-size: calc(12px + 1vmin);
  color: ${props => props.theme.text};
  padding: 0 10px 0 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  z-index: 2;
`;

const ChevronDown = styled(FaChevronDown)<any>`
  color: ${props => props.theme.text};
  cursor: pointer;
`;

const ChevronUp = styled(FaChevronUp)<any>`
  color: ${props => props.theme.text};
  cursor: pointer;
`;

const ItemOptionContainer = styled.div<any>`
  width: 100%;
  max-height: 250px;
  overflow: auto;
  display: flex;
  flex-flow: column;
  z-index: 10;

  position: absolute;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: ${props => props.theme.themeBackground};
  box-shadow: 0 0 2px 0 ${props => props.theme.slateGray};
  border-radius: 0 0 12px 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  animation-name: ${props => !!props.showexitanimation ? 'fadeOut' : 'fadeIn'};
  animation-duration: 0.5s;
  animation-fill-mode: both;
`;

const ItemOptionText = styled.span`
  font-size: calc(12px + 1vmin);
  color: ${props => props.theme.text};
  padding: 10px 15px;

  :hover {
    background-color: ${props => props.theme.slateGray};
    color: ${props => props.theme.white};
    cursor: pointer;
  }
`;