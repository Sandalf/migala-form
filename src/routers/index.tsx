import React, {useEffect, useRef, useState} from "react";
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Header} from "src/theme/components/Header/Header";
import {HomePage} from "src/pages/Home/HomePage";
import styled from "styled-components";

const history = createBrowserHistory();

export const MainRouter = () => {

    const mainContainer:any = useRef(null)
    const [showPages, setShowPages] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            mainContainer.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
        }, 1200)

    }, [showPages])

    const showContent = () => {
        setShowPages(true)
    }


    return (
        <MainContainer ref={mainContainer}>
            <Router history={history}>
                <RouteContentContainer>
                    <Header expanded={false} showContent={showContent}/>
                    {showPages &&
                    <PagesContainer>

                        <Switch>
                            <Route path="/" component={HomePage}/>
                        </Switch>

                    </PagesContainer>
                    }
                </RouteContentContainer>
            </Router>
        </MainContainer>
    )

}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100%;

  overflow: auto;
  transition: all 1s;
  background: ${ props => props.theme.themeBackground };
`

const RouteContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

const PagesContainer = styled.div`
  width: 100%;
  height: 700px;
`