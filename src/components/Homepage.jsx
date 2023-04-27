import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import { NavLink } from "react-router-dom";
import { PersonHardware, PersonLaptop, PersonThinking, PowerBtn, TechStack, YinYang } from "../subComponents/AllSvgs";

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
  color: ${(props) => props.theme.text};
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
  color: ${(props) => props.theme.text};
  z-index: 1;
  text-decoration: none;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
  text-decoration: none;
`;

const breathe = keyframes`
0% { height: 0px; width: 1000px; }
30% { height: 425px; width: 1000px; opacity: 1 }
40% { height: 425px; width: 1000px; opacity: 0.3; }
100% { height: 0px; width: 1000px; opacity: 0.7; }
`;
const breatheMobile = keyframes`
  0% { height: 5px; width: 200px; }
  30% { height: 200px; width: 200px; opacity: 1 }
  40% { height: 200px; width: 200px; opacity: 0.5; }
  100% { height: 5px; width: 200px; opacity: 0.7; }
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
  font-family: 'Karla', sans-serif;
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
  }

  & > :last-child {
    padding-top: 1rem;
    letter-spacing: 1em;
    @media (max-width: 768px) {
      letter-spacing: 0.1em;
      font-size: 1rem;
    }
  }
`;

  const Name = styled.h1`{
    font-size: 7.5rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 6.5rem;
    }
  }`


const Homepage = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <HomeContainer>
      <Container>
        <PowerButton />
        <Logos />
        <Socials />

        <Center click={click}>
          <TechStack onClick={() => handleClick()} width={200} height={200} fill='currentColor'/>
          <PersonThinking width={200} height={200} fill='currentColor'/>
          <Name>Zimmer Kennedy</Name>
          <h2>Full-Stack Web Developer</h2>
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
        <WORK to="/work">
          <h2>Work</h2>
        </WORK>
        <BOTTOMBAR>
          <ABOUT to="/about">
            <h2>About</h2>
          </ABOUT>
          <SKILLS to="/skills">
            <h2>Skills</h2>
          </SKILLS>
        </BOTTOMBAR>
      </Container>
    </HomeContainer>
  );
};

export default Homepage;
