import { Data, Primary, Secondary } from "api/FetchAreas";
import { Login } from "api/FetchUser";
import { Navbar } from "components/molecues/navbar/Navbar";
import { About } from "components/organisms/about/About";
import { Adventage } from "components/organisms/adventage/Adventage";
import { Main } from "components/organisms/main/Main";
import { Maps } from "components/organisms/maps/Maps";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
`;

function App() {
  useEffect(() => {
    const SetLogin = async () => {
      try {
        const res = await Login();

        // console.log(res.key);

        // const primary = await Primary();

        // console.log(primary);

        const secondary = await Secondary(res.key);

        console.log("secondary", secondary);

        const data = await Data(res.key);

        console.log("data", data);
      } catch (err) {
        console.log(err);
      }
    };

    SetLogin();
  }, []);

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
