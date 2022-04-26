import { Heading } from "components/atoms/heading/Heading";
import { Line } from "components/atoms/line/Line";
import React from "react";
import styled from "styled-components";
import dataLibrary from "images/icon/data_lib.svg";
import yourself from "images/icon/diy_ai.svg";
import social from "images/icon/social_env.svg";
import prod from "images/icon/increase_prod.svg";
import { Paragraph } from "components/atoms/paragraph/Paragraph";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 80%;
  padding-top: 10vh;

  @media (min-width: 500px) and (max-width: 1024px) {
    width: 85%;
    padding-top: 3vh;
  }

  @media (min-width: 1025px) {
    width: 80%;
    max-width: 1280px;
    padding-top: 0;
  }
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 50vh;
  margin-top: 8vh;
  gap: 6vh 0;

  @media (min-width: 500px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 6vh;
    justify-content: space-between;
    gap: 6vh 160px;
  }

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 12vh;
    gap: 30px 15px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 10px;

  @media (min-width: 500px) {
    padding: 0px 0px;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 30px 0px 48px 0px;

  &.other {
    margin: 30px 0px 15px 0px;
  }

  @media (min-width: 500px) {
    margin: 39px 0px 48px 0px;
    &.other {
      margin: 39px 0px 12px 0px;
    }
  }
`;

const Image = styled.img`
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const Description = styled(Heading)`
  width: 100%;

  @media (min-width: 500px) and (max-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1025px) {
    width: 32%;
  }
`;

export const Adventage = () => {
  return (
    <Wrapper>
      <Heading>AdvAntages of RSOM</Heading>
      <Line />

      <Description bold>
        Our data science platform helps
        <br /> mining companies source, centralize and analyze new and historic
        datasets
      </Description>
      <Column>
        <Item>
          <Image src={dataLibrary} />
          <StyledHeading bold>Data Library</StyledHeading>
          <Paragraph small>
            Cleaned, centralized public, paid &<br /> proprietary data.
            Satellite data <br /> provided by multipe providers. Machine data
            accesses through OEM systems. Other data sourced from various paid
            and free databases.
          </Paragraph>
        </Item>
        <Item>
          <Image src={yourself} />
          <StyledHeading bold>Do It Yourself AI</StyledHeading>
          <Paragraph small>
            Test hypotheses and map mines to
            <br /> detect potential hazards (e.g. Natural)
            <br /> and ensure that businesses do not
            <br /> affect protected areas. Monitor and optimize the use of
            natural resources such as soil and water during mining operations.
          </Paragraph>
        </Item>
        <Item>
          <Image src={social} />
          <StyledHeading className="other" bold>
            Social and
            <br /> Environmental Impact
          </StyledHeading>
          <Paragraph small>
            Monitor the environmental impact of extraction, satellite imagery
            detecting deforestation, groundwater contamination. Data also play a
            role in enhancing the mine closure process including land
            rehabilitation and geospatial and vegetation management.
          </Paragraph>
        </Item>
        <Item>
          <Image src={prod} />
          <StyledHeading className="other" bold>
            Increase
            <br /> Productivity
          </StyledHeading>
          <Paragraph small>
            Monitor the transportation of goods around the site. This is
            especially useful in conjunction with shipping containers equipped
            with sensors for monitoring and tracking. Improve freight routes and
            geotagging data, e.g. From mining equipment, agricultural sensors,
            and oil and gas machinery.
          </Paragraph>
        </Item>
      </Column>
    </Wrapper>
  );
};
