import React from "react";
import styled from "styled-components";
import baner from "images/baner.png";
import logoBig from "images/rsom_logo_big.svg";

const Wrapper = styled.div`
  background: url("${baner}");
  width: 100%;
  height: 80vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.barlowCondensed};
  color: white;
  line-height: 56px;
  font-style: normal;
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 30px;

  @media (min-width: 500px) and (max-width: 1024px) {
    font-size: 4.4rem;
    line-height: 42px;
  }

  @media (min-width: 1025px) {
    font-size: 5.6rem;
    line-height: 56px;
    margin-left: 50px;
  }
`;

const Logo = styled.img`
  width: 130px;
  margin-left: -25px;

  @media (min-width: 500px) and (max-width: 1024px) {
    width: 240px;
    margin-left: -30px;
  }

  @media (min-width: 1025px) {
    margin-left: 0px;
    width: 325px;
  }
`;

const Top = styled.div`
  width: 80%;
  max-width: 1280px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 500px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: center;
    width: 80%;
    max-width: 1280px;
  }
`;

export const Main = () => {
  return (
    <Wrapper>
      <Top>
        <Logo src={logoBig} />
        <Title>
          Helping mining professionals
          <br /> make smarter decisions with data, satellite imaging and
          analytics
        </Title>
      </Top>
    </Wrapper>
  );
};
