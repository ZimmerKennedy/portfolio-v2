import React, { useState } from "react";
import styled, { css, keyframes, useTheme  } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import { NavLink } from "react-router-dom";
import { PersonPointingTop, Rocket } from "../subComponents/AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import SnowParticleComponent from "../subComponents/RainParticleComponent";
import StarParticleComponent from "../subComponents/StarParticleComponent";


const HomeContainer = styled(motion.div)`
  background: ${(props) => {
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
  @media (max-width: 767px) {
    top: 3rem;
  }
`;

const PROJECTS = styled(NavLink)`
color: ${(props) => {
  const color = props.click ? props.theme.extraText : props.theme.text;
  return color;
}};
z-index: 1;
text-decoration: none;
`;

const SPAN = styled.span`
color: ${(props) => {
  const color = props.click ? props.theme.extraText : props.theme.text;
  return color;
}};
`

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
  color: ${(props) => {
    const color = props.click ? props.theme.extraText : props.theme.text;

    return color;
  }};
  z-index: 1;
  text-decoration: none;
  @media (max-width: 767px) {
    padding-left: 0.5rem;
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
  text-decoration: none;
`;

const rotateOnClick = keyframes`
  0% {
    transform: rotate(100deg);
  }
  50% {
    transform: rotate(269deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  left: ${(props) => (props.click ? "90%" : "50%")};
  top: ${(props) => (props.click ? "83%" : "50%")};
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
  z-index: 10;
  & > :first-child {
    transform: rotate(-45deg);
    animation: ${(props) =>
      props.click
        ? css`
            ${rotateOnClick} 1s forwards
          `
        : "none"};
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

  const theme = useTheme();

  const handleClick = () => setClick(!click);
  function sendEmail() {
    window.location.href = "mailto:kennedyzimmer00@gmail.com";
  }

  return (
    <HomeContainer
      initial={{
        y: -2000,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      exit={{
        y: -5000,
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <DarkDiv click={click} />
      <Container>
        <PowerButton toggleTheme={props.toggleTheme} theme={props.theme} />
        {props.theme === "night" && <StarParticleComponent />}
        {props.theme === "clouds" && <SnowParticleComponent />}
        <Logos theme={props.theme === "sunny" && !click ? "light" : "dark"} />
        <Socials theme={props.theme === "sunny" && !click ? "light" : "dark"} />

        <Center click={click} onClick={() => handleClick()}>
          <Rocket
            width={click ? 50 : 100}
            height={100}
             fill={theme.text}
          />
          <PersonPointingTop width={20} height={20}>
            Click Me
          </PersonPointingTop>
        </Center>

        <Contact onClick={sendEmail}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0.7 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.7 },
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 2 }}
          >
            Say Hi...
          </motion.h2>
        </Contact>
        <BOTTOMBAR>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 0.7 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.7 },
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 2 }}
            >
              About
            </motion.h2>
          </ABOUT>
          <PROJECTS to="/projects">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0.7 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.7 },
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 2 }}
          >
           <SPAN click={click}>
           Proj
            </SPAN>ects
          </motion.h2>
        </PROJECTS>
          <SKILLS to="/skills" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 0.7 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 0.7 },
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 2 }}
            >
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
