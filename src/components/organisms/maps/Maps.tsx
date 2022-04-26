import { Heading } from "components/atoms/heading/Heading";
import { Line } from "components/atoms/line/Line";
import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  width: 80%;
  max-width: 1280px;
  min-height: 100vh;

  padding-top: 16vh;

  @media (min-width: 500px) and (max-width: 1024px) {
    padding-top: 8vh;
  }

  @media (min-width: 1025px) {
    padding-top: 2vh;
  }
`;

export const Maps = () => {
  return (
    <Wrapper>
      <Heading>Water Area Detection</Heading>
      <Line />
    </Wrapper>
  );
};
