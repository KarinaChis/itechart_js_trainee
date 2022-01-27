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
  const [modalVisible, setModalVisible] = useState(true)
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header onClick={() => setModalVisible(true)}/>
        <Footer />
        <SignInContainer visible={modalVisible} setVisible={setModalVisible}/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
