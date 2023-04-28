import React from "react";
import styled, { keyframes } from "styled-components";
import {motion} from 'framer-motion'
import { PersonThinking, TechStack } from "../subComponents/AllSvgs";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  display: flex;
  height: 70vh;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;

const breathe = keyframes`
0% { height: 0px; width: 1000px; }
30% { height: 190px; width: 1000px; opacity: 1 }
40% { height: 190px; width: 1000px; opacity: 0.3; }
100% { height: 0px; width: 1000px; opacity: 0.7; }
`;
const breatheMobile = keyframes`
  0% { height: 5px; width: 200px; }
  30% { height: 120px; width: 200px; opacity: 1 }
  40% { height: 120px; width: 200px; opacity: 0.5; }
  100% { height: 5px; width: 200px; opacity: 0.7; }
`;

const Center = styled(motion.div)`
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
  & > :first-child {
    animation: ${breathe};
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }
  @media (max-width: 768px) {
    & > :first-child {
      animation: ${breatheMobile};
      animation-duration: 8s;
      animation-iteration-count: infinite;
    }
    font-size: 7.5rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 6.5rem;
    }
  }
  & > :last-child {
    padding-top: 1rem;
    letter-spacing: 1em;
    @media (max-width: 768px) {
      letter-spacing: 0.5px;
      font-size: 0.8rem;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        letter-spacing: 8px;
      font-size: 1.5rem;
      }
  }
`;

const Name = styled.h1`
   {
    font-size: 7.8rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 4.2rem;
    }
  }
`;

const StyledPersonThinking = styled(PersonThinking)`
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const Intro = () => {
  return (
    <Box
    initial={{height:0}}
    animate={{height: '70vh'}}
    transition={{ type: 'spring', duration:1, delay:1}}
    >
      <Center
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2, delay:1}}
      
      >
        <TechStack width={200} height={200} fill="currentColor" />
        <StyledPersonThinking width={285} height={285} fill="currentColor" />
        <Name>Zimmer Kennedy</Name>
        <h2>Full-Stack Web Developer</h2>
      </Center>
    </Box>
  );
};

export default Intro;
