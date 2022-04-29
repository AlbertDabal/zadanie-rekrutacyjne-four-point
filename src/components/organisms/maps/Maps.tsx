import { Heading } from "components/atoms/heading/Heading";
import { Line } from "components/atoms/line/Line";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Select } from "components/atoms/select/Select";
import satelite from "images/maps/satelite.png";
import waterline from "images/maps/waterline.png";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { Login } from "api/FetchUser";
import { Data, Primary, Secondary } from "api/FetchAreas";
import createPlotlyComponent from "react-plotly.js/factory";
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

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

const MapBox = styled(MapContainer)`
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

const Loading = styled.div`
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

const StyledPlot = styled(Plot)`
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

export const Maps = () => {
  const [option, setOption] = useState(["Satelite view", "Waterline"]);
  const [selectItem, setSelectItem] = useState("Satelite view");
  const [geoLocation, setGeoLocation] = useState(null);
  const [matrix, setMatrix] = useState(null);

  useEffect(() => {
    const SetLogin = async () => {
      try {
        const res = await Login();

        const primary = await Primary();

        console.log(primary);

        const secondary = await Secondary(res.key);
        let result = secondary.extent.slice(10);
        // @ts-ignore: Unreachable code error
        var geojson_pgons = Terraformer.WKT.parse(result);

        setGeoLocation(geojson_pgons);

        const data = await Data(res.key);

        setMatrix(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    SetLogin();
  }, []);

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
      {geoLocation ? (
        <MapBox
          center={[18.59811200969181, 52.00954324850903]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* @ts-ignore: Unreachable code error */}
          <Polygon positions={geoLocation.coordinates} />
        </MapBox>
      ) : (
        <Loading>
          <Heading>ŁADOWANIE MAPY...</Heading>
        </Loading>
      )}
      {matrix ? (
        //  @ts-ignore: Unreachable code error
        <StyledPlot
          data={[
            {
              z: matrix,
              type: "heatmap",
            },
          ]}
          layout={{ title: "Heatmap" }}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <Loading>
          <Heading>ŁADOWANIE HEATMAPY...</Heading>
        </Loading>
      )}
    </Wrapper>
  );
};
