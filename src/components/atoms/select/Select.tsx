import React, { useState } from "react";
import styled from "styled-components";
import open from "images/icon/open.svg";
import close from "images/icon/close.svg";

interface Props {
  option?: string[];
  setOption: Function;
  setSelectItem: Function;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 20px;
  background: #403b37;
  user-select: none;
`;

const Item = styled.span`
  cursor: pointer;
  font-family: ${({ theme }) => theme.barlowFont};
  color: white;
  font-weight: 600;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  height: 36px;
  border-radius: 20px;
  padding: 0 25px;
  background: rgba(255, 255, 255, 0.06);

  z-index: 40;

  &.choose {
    background: rgba(64, 59, 55, 1);
    border: 1;
    position: absolute;
    width: 300px;
    height: 36px;
    z-index: 10;
    display: none;
    align-items: flex-end;
    padding-bottom: 17px;
  }
`;

export const Select = ({ option, setOption, setSelectItem }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const ChooseElement = (select?: string) => {
    if (option) {
      if (isOpen === false) {
      } else {
        if (select !== option[0]) {
          setSelectItem(select);
          setOption(option.reverse());
        }
      }
    }

    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      {option && (
        <>
          <Item onClick={() => ChooseElement(option[0])}>
            {option[0]} <img src={isOpen ? close : open} />
          </Item>
          <Item
            onClick={() => ChooseElement(option[1])}
            style={
              isOpen
                ? { height: "87px", display: "flex" }
                : { height: "40px", display: "none" }
            }
            className="choose"
          >
            {option[1]}
          </Item>
        </>
      )}
    </Wrapper>
  );
};
