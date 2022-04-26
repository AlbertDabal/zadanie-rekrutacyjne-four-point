import { Navbar } from "components/molecues/navbar/Navbar";
import { About } from "components/organisms/about/About";
import { Adventage } from "components/organisms/adventage/Adventage";
import { Main } from "components/organisms/main/Main";
import { Maps } from "components/organisms/maps/Maps";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Main />
      <About />
      <Adventage />
      <Maps />
    </Wrapper>
  );
}

export default App;
