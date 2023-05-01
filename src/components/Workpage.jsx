import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import {sunnyTheme } from "./Themes";

import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import SnowParticleComponent from "../subComponents/RainParticleComponent";
import StarParticleComponent from "../subComponents/StarParticleComponent";
import { motion } from "framer-motion";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { Rocket } from "../subComponents/AllSvgs";
import BigTitle from "../subComponents/BigTitle";

const Container = styled(motion.div)`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.body};
`;

const Box = styled.div`
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.body};
  height: 400vh;
  
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Circle = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = (props) => {
  const ref = useRef(null);
  const circle = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      circle.current.style.transform = `rotate(` + -window.pageYOffset + "deg)";
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={sunnyTheme}>
      <Container
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          y: 5000,
          opacity: 0.5,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        <Box>
          <Logos theme={props.theme === "sunny" ? "light" : "dark"} />
          <Socials theme={props.theme === "sunny" ? "light" : "dark"} />
          <PowerButton toggleTheme={props.toggleTheme} theme={props.theme} />
          {props.theme === "night" && <StarParticleComponent />}
          {props.theme === "clouds" && <SnowParticleComponent />}

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          <Circle ref={circle}>
            <Rocket width={80} height={80} />
          </Circle>
          <BigTitle text="Works" top="10%" right="20%" />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default WorkPage;
