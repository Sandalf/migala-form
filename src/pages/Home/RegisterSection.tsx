import React, {useContext} from "react";
import styled from "styled-components";
import {Input} from "src/theme/components/Input/Input";
import {MainButton} from "src/theme/components/MainButton/MainButton";
import {FormContext} from "src/context/FormContext";

interface RegisterSectionProps {
    handleRegister: () => void
}

export const RegisterSection = ({handleRegister}: RegisterSectionProps) => {

    const {formResponses, setFormResponses} = useContext(FormContext)

    const handleInputChange = (value:any, field: string) => {
        let newObject:any = {}
        newObject[field] = value

        setFormResponses( (prevState:any) => ({...prevState, ...newObject}) )
    }

    return (
        <RegisterSectionContainer className="animated slideInRight">

            <Input
                label={"Nombre (s)"}
                required={true}
                placeholder={"Juanito"}
                value={(formResponses['name'] || "")}
                onChange={({target: {value}}) => handleInputChange(value, 'name')}/>

            <Input
                label={"Apellidos"}
                required={true}
                placeholder={"Perez Perez"}
                value={(formResponses['lastName'] || "")}
                onChange={({target: {value}}) => handleInputChange(value, 'lastName')}/>

            <Input
                label={"Correo electronico"}
                required={true}
                placeholder={"algo@algo.com"}
                value={(formResponses['email'] || "")}
                onChange={({target: {value}}) => handleInputChange(value, 'email')}/>

            <Input
                label={"Curp"}
                required={true}
                placeholder={"CURP9342HVZRP90S"}
                value={(formResponses['curp'] || "")}
                onChange={({target: {value}}) => handleInputChange(value, 'curp')}/>

            <ButtonContainer>
                <MainButton title={"Registrar"} onAction={handleRegister}/>
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