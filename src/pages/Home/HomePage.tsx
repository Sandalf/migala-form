import React from "react";
import styled from "styled-components";

import {InformativeSection} from "src/pages/Home/InformativeSection";
import {RegisterSection} from "src/pages/Home/RegisterSection";
import {useHistory} from "react-router-dom";

export const HomePage = () => {

    const history = useHistory()

    const saveRegister = () => {
        history.push("/form")
    }

    return(
        <HomePageContainer>

            <HomeSections>
                <InformativeSection />
            </HomeSections>

            <HomeSections>
                <RegisterSection handleRegister={saveRegister}/>
            </HomeSections>

        </HomePageContainer>
    )
}

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const HomeSections = styled.div`
  flex: 1 500px;
  gap: 10px;
`;