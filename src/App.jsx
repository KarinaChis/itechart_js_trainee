import React from "react";
import "./styles/App.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { AppWrapper } from "./styles/AppWrapper.jsx"
import SignInContainer from "./containers";
import MainPage from "./components/MainPage";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header/>
        <MainPage />
        <Footer />
        <SignInContainer/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
