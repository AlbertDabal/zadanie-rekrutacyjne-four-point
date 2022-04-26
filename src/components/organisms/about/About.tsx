import { Heading } from "components/atoms/heading/Heading";
import { Line } from "components/atoms/line/Line";
import { Paragraph } from "components/atoms/paragraph/Paragraph";
import React from "react";
import styled from "styled-components";
import image1 from "images/image1.png";
import image2 from "images/image2.png";

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  width: 80%;
  padding-top: 96px;

  @media (min-width: 500px) and (max-width: 1024px) {
    width: 85%;
  }

  @media (min-width: 1025px) {
    width: 80%;
    max-width: 1280px;
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  &.reverse {
    flex-direction: column-reverse;
  }

  justify-content: space-between;
  margin-bottom: 5vh;
  margin-top: 3vh;

  @media (min-width: 500px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3vh;

    &.reverse {
      flex-direction: row;
    }
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10vh;
    margin-top: 0;

    &.reverse {
      flex-direction: row;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  margin-top: 4vh;
  @media (min-width: 500px) and (max-width: 1024px) {
    width: 47%;
    margin-top: 0;
  }

  @media (min-width: 1025px) {
    width: 42%;
    margin-top: 0;
  }
`;

const StyledParagraph = styled(Paragraph)``;

const Image = styled.img`
  width: auto;
  height: 25vh;

  @media (min-width: 500px) and (max-width: 1024px) {
    height: 28vh;
    width: 50%;
  }

  @media (min-width: 1025px) {
    height: 45vh;
    width: 50%;
  }
`;

const List = styled.ul`
  margin-left: 30px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 30px;
`;

export const About = () => {
  return (
    <Wrapper>
      <Heading>What is RSOM?</Heading>
      <Line />
      <Section className="reverse">
        <Description>
          <StyledParagraph>
            <b>Remote sensing for opencast mines (RSOM)</b> app is designed to
            analyze the productivity of a mine, its impact on the environment,
            plan new extraction and track machine telematics. It is addressed to
            mine managements, state bodies and consulting companies that deal
            with the design and rehabilitation of the area.
            <br />
            <br /> What, among other things, can be tracked in the RSOM app?
            <br />
            <List>
              <li>terrain changes,</li>
              <li>identification of the mine site,</li>
              <li>which area is affected by the mine,</li>
              <li>
                identification of specified areas on satellite images (water
                area, vegetation areas, buildings,large vehicles, clouds).
              </li>
            </List>
          </StyledParagraph>
        </Description>

        <Image src={image1} />
      </Section>

      <Section>
        <Image src={image2} />
        <Description>
          <StyledHeading bold>
            Improving the management of mines and streamlining the process of
            opencast mining through the use of satellite images.
          </StyledHeading>
          <StyledParagraph>
            RSOM is a satellite eye that looks at the mines and their
            surrounding areas. This innovative project can track the level and
            quality of water in the vicinity of the mine, the quality of the
            afforestation, the level of humidity, pollution and detect the
            potential danger created inside the quarry.
          </StyledParagraph>
        </Description>
      </Section>
    </Wrapper>
  );
};
