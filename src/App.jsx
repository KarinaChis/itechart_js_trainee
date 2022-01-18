import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login  from "./components/Login";

import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { AppWrapper } from "./styles/AppWrapper.jsx"
import Signup from "./components/Signup";
import SignInContainer from "./containers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        {/* <Login /> */}
        {/* <Signup /> */}
        <SignInContainer />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
