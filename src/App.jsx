import React from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  orange: #ff9800;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <Footer />
    </AppWrapper>
  );
}

export default App;
