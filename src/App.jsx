import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { AppWrapper } from "./styles/AppWrapper.jsx"

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
