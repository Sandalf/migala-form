import React, {useEffect, useState} from 'react';
import './App.css';
import {MainRouter} from "src/routers";
import ThemedProvider from "./theme/styles/ThemedProvider";
import {FormContext} from "src/context/FormContext";

function App() {

    //En la variable formResponses se encuentran las respuestas del usuario
    const [formResponses, setFormResponses]: any = useState({})

    useEffect(() => {
        let formSaved = JSON.parse(localStorage.getItem('formResponses') || "{}")
        setFormResponses((prevState:any) => ({...prevState, ...formSaved}))
    }, [])

    useEffect(() => {
        localStorage.setItem('formResponses', JSON.stringify(formResponses))
    }, [formResponses])

    return (
        <ThemedProvider theme={'light'}>
            <FormContext.Provider value={{formResponses, setFormResponses}}>
                <MainRouter/>
            </FormContext.Provider>
        </ThemedProvider>
    );
}

export default App;
