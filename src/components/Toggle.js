import React, { useState } from "react";
import styled, { css } from "styled-components";

function Toggle({ toggle, setToggle }) {
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Wrapper>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleBtn = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "lightgray" : "white")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: ${(props) => (!props.toggle ? "white" : "black")};
  width: 24px;
  height: 24px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(30px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

export default Toggle;
