import React from "react";
import styled from "styled-components";

interface MainButtonProps {
    title: string,
    onAction?: () => void,
    className?: string
}
export const MainButton = ({ title, onAction, className }: MainButtonProps) => {

    return(
        <ButtonContainer className={className} onClick={onAction}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
  background: ${props => props.theme.buttonBackground};
  border-radius: 10px;
  cursor: pointer;
  height: 45px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px
`;

const ButtonText = styled.h3`
  color: ${props => props.theme.buttonText};
`;