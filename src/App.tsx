import React from 'react';
import './App.css';
import {MainRouter} from "src/routers";
import ThemedProvider from "./theme/styles/ThemedProvider";

function App() {
  return (
    <ThemedProvider theme={'light'}>
      <MainRouter />
    </ThemedProvider>
  );
}

export default App;
