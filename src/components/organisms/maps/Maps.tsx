import { Heading } from "components/atoms/heading/Heading";
import { Line } from "components/atoms/line/Line";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Select } from "components/atoms/select/Select";
import satelite from "images/maps/satelite.png";
import waterline from "images/maps/waterline.png";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 80%;
  padding-top: 16vh;

  @media (min-width: 500px) and (max-width: 1024px) {
    padding-top: 8vh;
    width: 85%;
  }

  @media (min-width: 1025px) {
    padding-top: 2vh;
    width: 80%;
    max-width: 1280px;
  }
`;

const Map = styled.img`
  width: 100%;
  height: 70vh;
  margin-bottom: 10vh;
  margin-top: 2vh;

  @media (min-width: 500px) and (max-width: 1024px) {
    height: 45vh;
    margin-bottom: 8vh;
    margin-top: 2vh;
  }

  @media (min-width: 1025px) {
    height: 50vh;
    margin-bottom: 10vh;
    margin-top: 0vh;
  }
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2vh;
  margin-top: 3vh;

  @media (min-width: 500px) and (max-width: 1024px) {
    padding-top: 1vh;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 3vh;
    margin-top: 0;
  }
`;

export const Maps = () => {
  const [option, setOption] = useState(["Satelite view", "Waterline"]);
  const [selectItem, setSelectItem] = useState("Satelite view");

  return (
    <Wrapper>
      <Heading>Water Area Detection</Heading>
      <Line />
      <Navigation>
        <Select
          setSelectItem={setSelectItem}
          option={option}
          setOption={setOption}
        />
      </Navigation>
      {selectItem === "Satelite view" ? (
        <Map src={satelite} />
      ) : (
        <Map src={waterline} />
      )}

      <Heading>ChlorophYll</Heading>
      <Line />
      <Map src={satelite}></Map>
    </Wrapper>
  );
};
