import styled from "styled-components";

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  margin: 14px 0;

  @media (min-width: 500px) and (max-width: 1024px) {
    margin: 14px 0;
  }

  @media (min-width: 1025px) {
    margin: 32px 0;
  }
`;
