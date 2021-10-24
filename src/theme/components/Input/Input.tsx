import React from "react";
import styled from "styled-components";
import {LightText} from "src/theme/styles/generalstyles/Text";

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
}

export const Input = (
    { label = 'Ingrese un valor', ...props}: InputProps) => {

    return(
        <InputContainer className="animated fadeIn">
            <Label>{label} { props.required && <RequiredLabel>*</RequiredLabel> }</Label>
            <InputItem
                value={props.value}
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={props.onChange}
            />
        </InputContainer>
    )
}

const InputContainer = styled.div`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-flow: column;
  font-size: calc(12px + 1vmin);
  min-width: 100%;
  color: ${props => props.theme.text};
  
  transition: all 0.5s;
`;

const Label = styled(LightText)`
  padding: 10px 0;
`;

const RequiredLabel = styled(LightText)`
  padding: 10px 0;
  color: ${props => props.theme.requiredLabel};
`;

const InputItem = styled.input`
  border-inline: none;
  outline: none;
  border: 0;
  font-size: calc(10px + 1vmin);
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.pattensBlue};
  padding: 15px;
  border-radius: 4px;

  font-family: "Open Sans", sans-serif;

  ::placeholder {
    color: ${ props => props.theme.placeHolder }
  }
`;