import React, {useState} from "react";
import styled from "styled-components";
import {Survey} from "src/model/Survey/Survey";
import {ItemQuestionSection} from "src/pages/Form/components/ItemQuestionSection";
import {SurveyModel} from "src/model/Survey/SurveyModel";

export const MainForm = () => {

    const [survey, setSurvey] = useState([...Survey])

    const toggleExpanded = (item: SurveyModel) => {

        let surveyClone = [...survey]
        let foundSurvey = surveyClone.find( f => f.id === item.id )

        if(item.isExpanded && foundSurvey ){
            foundSurvey.isExpanded = false
            setSurvey(surveyClone)
            return
        }

        if(foundSurvey){
            surveyClone.forEach( f => f.isExpanded = false );
            foundSurvey.isExpanded = true;

            setSurvey(surveyClone)
        }
    }

    return (
        <MainContainer className={"animated slideInUp"}>
            <MainInnerContainer>
                {survey.map((m, index) => (
                    <ItemQuestionSection item={m} key={m.id} toggleExpanded={toggleExpanded}/>
                ))
                }
            </MainInnerContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 50px 30px 10px;
  
  transition: all 1s;
`;

const MainInnerContainer = styled.div`
  border: 1px solid ${props => props.theme.slateGray};
  border-bottom: 0;

  transition: all 1s;
`;