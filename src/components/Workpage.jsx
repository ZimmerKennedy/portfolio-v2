import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { sunnyTheme } from "./Themes";

import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import SnowParticleComponent from "../subComponents/SnowParticleComponent";
import StarParticleComponent from "../subComponents/StarParticleComponent";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.body};

  /* Add a console.log statement here */
  ${(props) => console.log(props)}
`;
const Box = styled.div`
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const WorkPage = (props) => {
  console.log(`i am about`, props);
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
          <Logos theme={props.theme === "sunny" ? "light" : "dark"} />
          <Socials theme={props.theme === "sunny" ? "light" : "dark"} />
          <PowerButton toggleTheme={props.toggleTheme} theme={props.theme} />
          {props.theme === "night" && <StarParticleComponent />}
          {props.theme === "clouds" && <SnowParticleComponent />}
          WorkPAGE
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default WorkPage;
