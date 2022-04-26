import styled, { css } from "styled-components";

interface Props {
  small?: boolean;
}

export const Paragraph = styled.h6<Props>`
  font-family: ${({ theme }) => theme.barlowFont};
  color: white;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 24px;

  @media (min-width: 481px) and (max-width: 1024px) {
    font-size: 1.8rem;
    line-height: 24px;
  }

  @media (min-width: 1025px) {
    font-size: 2.2rem;
    line-height: 34px;
  }

  ${(props) =>
    props.small &&
    css`
      @media (min-width: 1025px) {
        font-size: 1.8rem;
        line-height: 24px;
      }
      font-size: 1.8rem;
      line-height: 24px;
    `}
`;
