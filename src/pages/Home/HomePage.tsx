import React from "react";
import styled from "styled-components";

import {InformativeSection} from "src/pages/Home/InformativeSection";
import {RegisterSection} from "src/pages/Home/RegisterSection";

export const HomePage = () => {

    return(
        <HomePageContainer>

            <HomeSections>
                <InformativeSection />
            </HomeSections>

            <HomeSections>
                <RegisterSection />
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