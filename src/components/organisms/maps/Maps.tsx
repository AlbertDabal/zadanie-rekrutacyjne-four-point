import { Heading } from "components/atoms/heading/Heading";
import { Line } from "components/atoms/line/Line";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Select } from "components/atoms/select/Select";
import satelite from "images/maps/satelite.png";
import waterline from "images/maps/waterline.png";

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

const Map = styled.img`
  width: 100%;
  height: 40vh;
`;

export const Maps = () => {
  const [option, setOption] = useState(["Satelite view", "Waterline"]);
  const [selectItem, setSelectItem] = useState("Satelite view");

  useEffect(() => {}, [option]);

  return (
    <Wrapper>
      <Heading>Water Area Detection</Heading>
      <Line />
      <Select
        setSelectItem={setSelectItem}
        option={option}
        setOption={setOption}
      />
      {option[0] === "Satelite view" ? (
        <Map src={satelite} />
      ) : (
        <Map src={waterline} />
      )}
      <Map src={satelite}></Map>
    </Wrapper>
  );
};
