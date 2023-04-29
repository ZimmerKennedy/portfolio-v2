import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Backend, Frontend, Tools } from "../subComponents/AllSvgs";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import SnowParticleComponent from "../subComponents/SnowParticleComponent";
import RainParticleComponent from "../subComponents/RainParticleComponent";
import StarParticleComponent from "../subComponents/StarParticleComponent";
import { motion } from 'framer-motion';
import BigTitle from "../subComponents/BigTitle";

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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  
`;
const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: #000000;
background: #FCF6F4;
  padding: 2rem;
  width: 20vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  
  @media (max-width: 768px) {
    height: 25vh;
    width: 40vw;
    ${props => props.isFirst ? 'margin-top: 8rem;' : 'margin-top: 1rem'}
    
  }
  
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  &>*:first-child{
    margin-right: 1rem;
  }
`;

const Description = styled.div`

font-size: calc(0.6em + 1vw);
padding: 0.5rem;
`

const SkillsPage = (props) => {

  const hoverAnimation = {
    scale: 1.2,
    transition: { duration: 0.3 },
  };

  const initialAnimation = {
    scale: 1,
    transition: { duration: 0.3 },
  };

  return (

    <Container>

      <Box>
        <Logos theme='light'/>
        <Socials theme='light'/>
        
        <PowerButton toggleTheme={props.toggleTheme} theme={props.theme} />
        {props.theme === "night" && <StarParticleComponent />}
        {props.theme === "clouds" && <SnowParticleComponent />}
        <Main isFirst={true} initial={initialAnimation} whileHover={hoverAnimation}>
          <Title>
            <Frontend width={50} height={50}  />
            Frontend
          </Title>
          <Description>React, Redux, Javascript, ThreeJS, TailwindCSS, Bootstrap, Materialize, Webpack, Vite, HTML, CSS</Description>
        </Main>
        <Main initial={initialAnimation} whileHover={hoverAnimation}>
          <Title>
            <Tools width={50} height={50}  />
            Tools
          </Title>
          <Description>Github, NPM, APIs, JSON, Authentication, Figma, Excalidraw, Postman, JWT, Postman, Firestore, Vercel, Render</Description>
        </Main>
        <Main initial={initialAnimation} whileHover={hoverAnimation}>
          <Title>
            <Backend width={50} height={50}  />
            Backend
          </Title>
          <Description>NodeJS, ExpressJS, PostgreSQL, Sequelize, Firebase</Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" left="30%"/>
      </Box>
    </Container>


  );
};

export default SkillsPage;
