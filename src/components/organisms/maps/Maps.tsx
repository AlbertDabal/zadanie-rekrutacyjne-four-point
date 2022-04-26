import { Heading } from "components/atoms/heading/Heading";
import { Line } from "components/atoms/line/Line";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Select } from "components/atoms/select/Select";
import satelite from "images/maps/satelite.png";
import waterline from "images/maps/waterline.png";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";

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

const Test = styled(MapContainer)`
  height: 50vh;
  margin-bottom: 10vh;
`;

export const Maps = () => {
  const [option, setOption] = useState(["Satelite view", "Waterline"]);
  const [selectItem, setSelectItem] = useState("Satelite view");

  const center = [51.505, -0.09];
  const purpleOptions = { color: "purple" };
  const extent =
    "SRID=4326;POLYGON ((18.59811200969181 52.00954324850903, 18.60683848053626 52.01169065620021, 18.60786068520895 52.00969393549595, 18.59984270901962 52.00730031687287, 18.59811200969181 52.00954324850903))";

  // console.log(extent.geoJSON());

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

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
      {/* @ts-ignore: Unreachable code error */}
      <Test center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* @ts-ignore: Unreachable code error */}
        <Polygon pathOptions={purpleOptions} positions={polygon} />
      </Test>
    </Wrapper>
  );
};
