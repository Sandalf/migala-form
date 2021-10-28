import React from "react";
import DIVIDER from "src/assets/images/register_divisor.png";
import styled from "styled-components";
import {LightText, RegularText} from "src/theme/styles/generalstyles/Text";

export const InformativeSection = () => {
    return (
        <InformativeSectionContainer className="animated slideInLeft">
            <InformativeTitle className="animated-fast fadeIn">
                Registro de participación <br /> al Proyecto Migala.
            </InformativeTitle>

            <Divider src={DIVIDER} className="animated-fast fadeIn"/>

            <DescriptionTitle className="animated-fast fadeIn">
                Este registro <strong>no es una afiliación</strong><br />
                es una forma de organización digital.
            </DescriptionTitle>

            <Divider src={DIVIDER} className="animated-fast fadeIn"/>

            <CheckBoxContainer>
                <CheckBox type={'checkbox'} />
                <Label className="animated-fast fadeIn">
                    Aceptar <strong>política de privacidad</strong> Ten seguro que tus datos estarán protegidos y nunca serán usados con un fin distinto a la organización digital.
                </Label>
            </CheckBoxContainer>

        </InformativeSectionContainer>
    )
}

const InformativeSectionContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 50px 10px;
  align-items: center;
  justify-content: space-between;
`;

const InformativeTitle = styled(LightText)`
  text-align: center;
  font-size: calc(16px + 2vmin);
  padding: 20px 0;
`;

const Divider = styled.img`
  width: 75%;
  padding: 10px 0;
`;

const DescriptionTitle = styled(RegularText)`
  text-align: center;
  padding: 20px 0;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  max-width: 50vmin;
  padding: 20px 0;
  @media (max-width: 425px) {
    max-width: 80vmin
  }
`;

const CheckBox = styled.input`
  cursor: pointer;
`;

const Label = styled(LightText)`
  font-size: calc(10px + 1vmin);
  padding: 0 10px;
`;