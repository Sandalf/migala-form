import React from "react";
import styled from "styled-components";
import {Input} from "src/theme/components/Input/Input";
import {MainButton} from "src/theme/components/MainButton/MainButton";

interface RegisterSectionProps {
    handleRegister: () => void
}
export const RegisterSection = ({ handleRegister }: RegisterSectionProps) => {

    const handleInputChange = () => {

    }

    return(
        <RegisterSectionContainer className="animated slideInRight">

            <Input label={"Nombre (s)"} required={true} placeholder={"Juanito"} value={""} onChange={handleInputChange}/>
            <Input label={"Apellidos"} required={true} placeholder={"Perez Perez"} value={""} onChange={handleInputChange}/>
            <Input label={"Correo electronico"} required={true} placeholder={"algo@algo.com"} value={""} onChange={handleInputChange}/>
            <Input label={"Curp"} required={true} placeholder={"CURP9342HVZRP90S"} value={""} onChange={handleInputChange}/>

            <ButtonContainer>
                <MainButton title={"Registrar"} onAction={handleRegister} />
            </ButtonContainer>

        </RegisterSectionContainer>
    )
}

const RegisterSectionContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 50px 30px;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  padding: 10px;
`;