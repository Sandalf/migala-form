import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {LightText, MainTitle} from "src/theme/styles/generalstyles/Text";
import {SurveyModel} from "src/model/Survey/SurveyModel";
import {IoChevronDownSharp, IoChevronUpSharp} from "react-icons/all";
import {Questions} from "src/pages/Form/components/Questions";


interface ItemQuestionSectionProps {
    item: SurveyModel,
    toggleExpanded: (item: SurveyModel) => void
}

export const ItemQuestionSection = ({ item, toggleExpanded }: ItemQuestionSectionProps) => {

    const [isExpanded, setIsExpanded] = useState(item.isExpanded)

    useEffect(() => {
        setIsExpanded(item.isExpanded)
    }, [item.isExpanded])

    const getTotalCounter = () => {
        let newItem = {...item}

        return newItem.questionsGroups.reduce( (previousValue, currentValue) => {
            return previousValue + currentValue.questions.length
        }, 0)
    }

    return (
        <ItemQuestionSectionContainer>
            <ItemQuestionsHeader onClick={() => toggleExpanded(item)}>
                <ItemQuestionTitle>{item.surveyTitle}</ItemQuestionTitle>
                <RightSection>
                    <Counter>0/{getTotalCounter()}</Counter>
                    {isExpanded &&
                    <ChevronUp/>
                    }
                    {!isExpanded &&
                    <ChevronDown/>
                    }
                </RightSection>
            </ItemQuestionsHeader>

            { isExpanded && <Questions questions={item.questionsGroups} changeSurveySection={() => {}}/> }
        </ItemQuestionSectionContainer>
    )
}

const ItemQuestionSectionContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const ItemQuestionsHeader = styled.div`
  width: 100%;
  height: 102px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.slateGray};
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ItemQuestionTitle = styled(MainTitle)`
  font-weight: 300;
`;

const RightSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 80px;
  justify-content: space-between;
`;

const Counter = styled(LightText)`
  color: ${props => props.theme.itemSectionLabel};
`;

const ChevronDown = styled(IoChevronDownSharp)`
  font-size: calc(18px + 1vmin);
  color: ${props => props.theme.text};
`;

const ChevronUp = styled(IoChevronUpSharp)`
  font-size: calc(18px + 1vmin);
  color: ${props => props.theme.text};
`;