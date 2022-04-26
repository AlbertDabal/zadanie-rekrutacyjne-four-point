import React from "react";
import styled from "styled-components";
import logo from "images/rsom_logo.svg";

const Wrapper = styled.nav`
  height: 65px;
  background-color: ${({ theme }) => theme.navbarColor};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

const Image = styled.img``;

export const Navbar = () => {
  return (
    <Wrapper>
      <Image src={logo} alt="logo-company" />
    </Wrapper>
  );
};
