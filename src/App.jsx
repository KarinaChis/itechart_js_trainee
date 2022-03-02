import React from "react";
import "./styles/App.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { AppWrapper } from "./styles/AppWrapper.jsx"
import SignInContainer from "./containers";
import { useState } from "react";
import MainPage from "./components/MainPage";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [isAuth, setIsAuth] = useState(false);
  // const store = useSelector( store => store);
  // const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header setModalVisible={setModalVisible} setIsAuth={setIsAuth} isAuth={isAuth}/>
        <MainPage />
        <Footer />
        <SignInContainer visible={modalVisible} setVisible={setModalVisible} setIsAuth={setIsAuth} isAuth={isAuth}/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
