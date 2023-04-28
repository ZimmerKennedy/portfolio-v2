import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Moon, Sun } from "../subComponents/AllSvgs";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import SnowParticleComponent from "../subComponents/SnowParticleComponent";
import RainParticleComponent from "../subComponents/RainParticleComponent";
import StarParticleComponent from "../subComponents/StarParticleComponent";
const Box = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover&{
    &>*{
      color:${props => props.theme.body};
    }
  }
  &>*:first-child{
    margin-right: 1rem;
  }
`;

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem;

${Main}:hover&{
  &>*{
    color:${props => props.theme.text};
  }

`

const SkillsPage = (props) => {
  return (


      <Box>
        <Logos theme='light'/>
        <Socials theme='light'/>
        <PowerButton toggleTheme={props.toggleTheme} theme={props.theme}/>
        {/* <RainParticleComponent/> */}
        {/* <SnowParticleComponent /> */}
        <StarParticleComponent />
        {/* <TestParticles /> */}
        
        <Main>
          <Title>
            <Moon width={40} height={40} />
            Frontend
          </Title>
          <Description>React, React, React, React</Description>
        </Main>
        <Main>
          <Title>
            <Sun width={40} height={40} />
            Backend
          </Title>
          <Description>Node, Node, Node, Node, Node</Description>
        </Main>
      </Box>


  );
};

export default SkillsPage;
