import React, {useState} from "react";
import styled from "styled-components";
import {Survey} from "src/model/Survey/Survey";
import {ItemQuestionSection} from "src/pages/Form/components/ItemQuestionSection";
import {SurveyModel} from "src/model/Survey/SurveyModel";

export const MainForm = () => {

    const [survey, setSurvey] = useState([...Survey])

    const getSurveyClone = () => [...survey]

    const getSurveyByItem = (item: SurveyModel) => {

        return getSurveyClone().find( f => f.id === item.id )
    }

    const getSurveyIndexByItem = (item: SurveyModel) => {
        let surveyClone = getSurveyClone()
        return surveyClone.findIndex( f => f.id === item.id )
    }

    const toggleExpanded = (item: SurveyModel) => {

        let surveyClone = getSurveyClone()
        let foundSurvey = getSurveyByItem(item)

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

    const showNextToggleExpanded = (item: SurveyModel, type: 'next' | 'prev') => {
        let foundSurveyIndex = getSurveyIndexByItem(item)

        if(type === 'next'){
            if(foundSurveyIndex !== -1 && (foundSurveyIndex + 1 <= survey.length - 1)){
                let itemToExpand = {...getSurveyClone()[foundSurveyIndex + 1]}
                toggleExpanded(itemToExpand)
            }
        }else{
            if(foundSurveyIndex !== -1 && (foundSurveyIndex - 1 >= 0)){
                let itemToExpand = {...getSurveyClone()[foundSurveyIndex - 1]}
                toggleExpanded(itemToExpand)
            }
        }
    }

    return (
        <MainContainer className={"animated slideInUp"}>
            <MainInnerContainer>
                {survey.map((m, index) => (
                    <ItemQuestionSection
                        item={m}
                        key={m.id}
                        toggleExpanded={toggleExpanded}
                        showNextToggleExpanded={showNextToggleExpanded}
                    />
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
  @media (max-width: 320px) {
    padding: 50px 10px 10px;
  }
`;

const MainInnerContainer = styled.div`
  border: 1px solid ${(props) => props.theme.slateGray};
  border-bottom: 0;

  transition: all 1s;
`;