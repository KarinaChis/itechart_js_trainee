import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";
import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  orange: #ff9800;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
