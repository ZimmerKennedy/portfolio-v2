import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, sunnyTheme } from "./Themes";
import { Backend, Frontend, Tools } from "../subComponents/AllSvgs";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import SnowParticleComponent from "../subComponents/SnowParticleComponent";
import RainParticleComponent from "../subComponents/RainParticleComponent";
import StarParticleComponent from "../subComponents/StarParticleComponent";
import { motion } from 'framer-motion';
import astronaut from '../../public/images/astro3.png';


const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.body};
  
  /* Add a console.log statement here */
  ${props => console.log(props)}
`;
const Box = styled.div`
  color: ${props => props.theme.body};
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background: ${props => props.theme.body};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
opacity: 0.7;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
font-weight: 800;
`

const Spaceman = styled.div`
position: absolute;
top: 2%;
right: 9.5%;
width: 30vw;
opacity: 0.7;
img{
  width: 100%;
  height: auto;
}
`





const AboutPage = (props) => {
  console.log(`i am about`, props)
  const hoverAnimation = {
    scale: 1.2,
    transition: { duration: 0.3 },
  };

  const initialAnimation = {
    scale: 1,
    transition: { duration: 0.3 },
  };

  return (
    <ThemeProvider theme={sunnyTheme}>
    <Container>

      <Box>
      <Logos theme={props.theme === 'sunny' ? 'light' : 'dark'} />
        <Socials theme={props.theme === 'sunny' ? 'light' : 'dark'} />
        
        <PowerButton toggleTheme={props.toggleTheme} theme={props.theme} />
        {props.theme === "night" && <StarParticleComponent />}
        {props.theme === "clouds" && <SnowParticleComponent />}

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </Main>
      </Box>
    </Container>
      </ThemeProvider>


  );
};

export default AboutPage;
