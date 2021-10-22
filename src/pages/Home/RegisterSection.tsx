import React from "react";
import styled from "styled-components";
import {Input} from "src/theme/components/Input/Input";
import {MainButton} from "src/theme/components/MainButton/MainButton";


export const RegisterSection = () => {

    const handleInputChange = () => {

    }

    return(
        <RegisterSectionContainer className="animated slideInRight">

            <Input label={"Nombre (s)"} placeholder={"Juanito"} value={""} onChange={handleInputChange}/>
            <Input label={"Apellidos"} placeholder={"Perez Perez"} value={""} onChange={handleInputChange}/>
            <Input label={"Correo electronico"} placeholder={"algo@algo.com"} value={""} onChange={handleInputChange}/>
            <Input label={"Curp"} placeholder={"CURP9342HVZRP90S"} value={""} onChange={handleInputChange}/>

            <ButtonContainer>
                <MainButton title={"Registrar"} />
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