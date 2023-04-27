import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import { NavLink } from "react-router-dom";
import {
  Earth,
  PersonHardware,
  PersonLaptop,
  PersonThinking,
  PowerBtn,
  TechStack,
  YinYang,
} from "../subComponents/AllSvgs";
import Intro from "./Intro";

const HomeContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
  text-decoration: none;
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  z-index: 1;
  text-decoration: none;
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
`;

const BOTTOMBAR = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  z-index: 1;
  text-decoration: none;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
  text-decoration: none;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  left: ${(props) => (props.click ? "85%" : "50%")};
  top: ${(props) => (props.click ? "82%" : "50")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Karla", sans-serif;
  font-weight: 800;
  transition: all 1.5s ease;

  & > :first-child {
    animation: ${rotate} infinite 12s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: #111;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  top: 0;
  bottom: 0;
  right: 50%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Homepage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <HomeContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <Logos theme={click ? "dark" : "light"} />
        <Socials theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={200}
            fill="currentColor"
          />
          <h2>Click Me</h2>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:kennedyzimmer00@gmail.com" }}
        >
          <h2>Say Hi...</h2>
        </Contact>
        <BLOG to="/blog">
          <h2>Blog</h2>
        </BLOG>
        <WORK to="/work" click={click}>
          <h2>Work</h2>
        </WORK>
        <BOTTOMBAR>
          <ABOUT to="/about" click={click}>
            <h2>About</h2>
          </ABOUT>
          <SKILLS to="/skills" click={click}>
            <h2>Skills</h2>
          </SKILLS>
        </BOTTOMBAR>
      </Container>
      {click ? <Intro click={click} /> : null}
    </HomeContainer>
  );
};

export default Homepage;
