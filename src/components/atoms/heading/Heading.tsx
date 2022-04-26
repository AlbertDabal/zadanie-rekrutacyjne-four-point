import styled, { css } from "styled-components";

interface Props {
  bold?: boolean;
}

export const Heading = styled.h1<Props>`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 18px;
  font-family: ${({ theme }) => theme.barlowFont};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  ${(props) =>
    props.bold &&
    css`
      letter-spacing: 0;
      color: ${({ theme }) => theme.primaryColor};
      font-weight: 600;
      font-size: 2.6rem;
      line-height: 28px;
      text-transform: none;
      font-family: ${({ theme }) => theme.barlowCondensed};
    `}
  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1.8rem;
    line-height: 18px;
    letter-spacing: 0.14em;
    ${(props) =>
      props.bold &&
      css`
        letter-spacing: 0;
        font-size: 2.6rem;
        line-height: 28px;
      `}
  }

  @media (min-width: 1025px) {
    font-size: 2.4rem;
    line-height: 24px;
    letter-spacing: 0.14em;
    ${(props) =>
      props.bold &&
      css`
        letter-spacing: 0;
        font-size: 3rem;
        line-height: 36px;
      `}
  }
`;
