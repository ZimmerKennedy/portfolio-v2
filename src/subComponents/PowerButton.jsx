import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Cloud, Moon, Sun } from "./AllSvgs";
import { NavLink } from "react-router-dom";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 100%;

  border: none;
  width: 0;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;

`;

const StyledSun = styled(Sun)`
padding: 0.3rem;
  border-radius: 100%;
transition: transform 250ms;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 204, 102, 0.4) 0%,
      rgba(255, 102, 0, 0.4) 100%
    );
  }
`

const StyledMoon = styled(Moon)`
  padding: 0.5rem;
  border-radius: 100%;
  transition: transform 250ms;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(220, 220, 220, 0.4) 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
  }
`;
const StyledClouds = styled(Cloud)`
  padding: 0.5rem;
  border-radius: 100%;
  transition: transform 250ms;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(220, 220, 220, 0.4) 50%,
      rgba(255, 255, 255, 0.4) 100%
    );
  }
`;

const PowerButton = ({toggleTheme, theme}) => {

  const [powerState, setPowerState] = useState("sunny");

  const handlePowerStateChange = () => {
    const nextState =
      powerState === "sunny" ? "night" : powerState === "night" ? "clouds" : "sunny";
    setPowerState(nextState);
    toggleTheme(nextState);
  };

  useEffect(() => {
    setPowerState(theme);
  }, [theme]);

  return (
     <Power onClick={handlePowerStateChange}>
      <div>

      {powerState === "sunny" && (
        <StyledSun width={50} height={50} fill="currentColor" />
        )}
      {powerState === "night" && (
        <StyledMoon width={50} height={50} fill="currentColor" />
        )}
      {powerState === "clouds" && (
        <StyledClouds width={50} height={50} fill="currentColor" />
        )}
        </div>
    </Power>
  );
};

export default PowerButton;
