import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import { NavLink } from "react-router-dom";
import { PersonPointingTop, WWW } from "../subComponents/AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";

const HomeContainer = styled.div`
background: ${(props) => {
  console.log('HomeContainer props:', props);
  return props.theme.body;
}};
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
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  left: ${(props) => (props.click ? "90%" : "50%")};
  top: ${(props) => (props.click ? "83%" : "50")};
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
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 3s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: #c0aa9a;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  top: 0;
  bottom: 0;
  right: 50%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Homepage = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <HomeContainer>
      <DarkDiv click={click} />
      <Container>
        <PowerButton toggleTheme={props.toggleTheme} theme={props.theme}/>
        <Logos theme={click ? "dark" : "light"} />
        <Socials theme={click ? "dark" : "light"} />

        <Center click={click} onClick={() => handleClick()}>
          <WWW width={click ? 50 : 180} height={200} fill="currentColor" />
          <PersonPointingTop width={60} height={60}>
            Click Me
          </PersonPointingTop>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:kennedyzimmer00@gmail.com" }}
        >
          <motion.h2 whileHover={{ scale: 1.5 }} whileTap={{ scale: 2 }}>
            Say Hi...
          </motion.h2>
        </Contact>
        <BLOG to="/blog">
          <motion.h2 whileHover={{ scale: 1.5 }} whileTap={{ scale: 2 }}>
            Blog
          </motion.h2>
        </BLOG>
        <WORK to="/work" click={click}>
          <motion.h2 whileHover={{ scale: 1.5 }} whileTap={{ scale: 2 }}>
            Work
          </motion.h2>
        </WORK>
        <BOTTOMBAR>
          <ABOUT to="/about" click={click}>
            <motion.h2 whileHover={{ scale: 1.5 }} whileTap={{ scale: 2 }}>
              About
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills" click={click}>
            <motion.h2 whileHover={{ scale: 1.5 }} whileTap={{ scale: 2 }}>
              Skills
            </motion.h2>
          </SKILLS>
        </BOTTOMBAR>
      </Container>
      {click ? <Intro click={click} /> : null}
    </HomeContainer>
  );
};

export default Homepage;
