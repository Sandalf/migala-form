import React, {useState} from "react";
import styled from "styled-components";

import LOGO_WHITE from 'src/assets/images/logo_white.png'
import {ArrowDown} from "src/theme/components/ArrowDown/ArrowDown";

interface HeaderProps {
    expanded: boolean
    showContent?: () => void
}

export const Header = ({ showContent = () => {}, expanded = false }: HeaderProps) => {

    const [isExpanded, setIsExpanded] = useState(expanded)

    const changeHeaderExpanded = () => {
        setIsExpanded(true)
        showContent()
    }

    return(
        <HeaderContainer isExpanded={isExpanded}>

            <MainImageLogo className="animated-slow zoomIn" src={LOGO_WHITE} />

            { !isExpanded &&
                <SwipeDownContainer className="animated-slow animated-delay-1 fadeIn" onClick={changeHeaderExpanded}>
                    <Description>Loremp ipsum sit Dolor et Amet Consecteturm</Description>
                    <Label>INICIAR ENCUESTA</Label>
                    <ArrowDown />
                </SwipeDownContainer>
            }

        </HeaderContainer>
    )
}

export const HeaderContainer = styled.div<any>`
  width: 100%;
  height: ${(props) => (props.isExpanded ? 30 : 100)}vh;
  background: ${(props) => props.theme.headerBackground};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  border-radius: ${(props) => (props.isExpanded ? 15 : 100)};

  transition: all 1s;
`;

const MainImageLogo = styled.img`
  width: calc(300px + 10vh);
  /* media query to max phone width */
  @media (max-width: 425px) {
    width: 90%;
  }
`;

const SwipeDownContainer = styled.div`
  cursor: pointer;
`;

const Description = styled.p`
  text-align: center;
  font-weight: normal;
  font-family: "Open Sans", serif;
  font-size: calc(12px + 1vmin);
  color: ${(props) => props.theme.white};
`;

const Label = styled.p`
  text-align: center;
  font-weight: bold;
  font-family: "Open Sans", serif;
  font-size: calc(12px + 2vmin);
  color: ${(props) => props.theme.white};
  padding: 5px 0;
`;
