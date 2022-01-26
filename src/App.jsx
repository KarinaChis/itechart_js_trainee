import React from "react";
import "./styles/App.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { AppWrapper } from "./styles/AppWrapper.jsx"
import SignInContainer from "./containers";
import { useState } from "react";

function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Footer />
        <SignInContainer active={modalActive} setModalActive={setModalActive}/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
