import React, {useState} from "react";
import styled from "styled-components";
import {FaChevronDown} from "react-icons/all";
import {Option} from "src/model/Survey/SurveyModel";

interface SelectInputProps {
    placeHolder?: string,
    options: Array<Option>
}

export const SelectInput = ( { placeHolder, options }: SelectInputProps) => {

    const [ showExitAnimation, setShowExitAnimation ] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [label, setLabel] = useState(placeHolder)

    const toggleOpen = () => {
        setShowExitAnimation(isOpen)
        setTimeout(() => {
            setIsOpen(prevState => !prevState)
        }, 200)
    }

    const handleOptionSelected = (option: Option) => {
        toggleOpen()
        setLabel(option.value)
    }

    return(
        <SelectMainContainer>
            <SelectInputContainer onClick={toggleOpen}>
                <LabelItem>{ label }</LabelItem>
                <Chevron showExitAnimation={showExitAnimation}/>
            </SelectInputContainer>

            { isOpen &&
                <ItemOptionContainer showExitAnimation={showExitAnimation}>
                    { options.map(option => (
                        <ItemOptionText key={option.id} onClick={() => handleOptionSelected(option)}>{option.value}</ItemOptionText>
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
  height: 45px;
  border: 1px solid ${props => props.theme.text};
  border-radius: 10px;
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

const Chevron = styled(FaChevronDown)<any>`
  color: ${props => props.theme.text};
  cursor: pointer;
  
  animation-name: ${props => props.showExitAnimation ? 'rotateDown' : 'rotateUp'};
  animation-duration: 0.5s;
  animation-fill-mode: both;
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
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 0 0 12px 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  animation-name: ${props => props.showExitAnimation ? 'fadeOut' : 'fadeIn'};
  animation-duration: 0.5s;
  animation-fill-mode: both;
`;

const ItemOptionText = styled.span`
  font-size: calc(12px + 1vmin);
  color: ${props => props.theme.white};
  padding: 5px 15px;
  
  :hover{
    background-color: rgba(255,255,255, 0.2);
    cursor: pointer;
  }
`;