import React from "react";
import styled from "styled-components";
import { PowerBtn } from "./AllSvgs";
import { NavLink } from "react-router-dom";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: none;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;
  transition: transform 250ms;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 204, 102, 0.4) 0%,
      rgba(255, 102, 0, 0.4) 100%
    );
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
