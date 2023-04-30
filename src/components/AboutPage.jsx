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
import { motion } from "framer-motion";
import astronaut from "../assets/images/astro3.png";
import BigTitle from "../subComponents/BigTitle";

const Container = styled(motion.div)`
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

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  font-weight: 800;
`;

const Spaceman = styled.div`
  position: absolute;
  top: 2%;
  right: 9.5%;
  width: 30vw;
  opacity: 0.8;
  img {
    width: 100%;
    height: auto;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};

const AboutPage = (props) => {
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

          <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman>
          <Main>
            A Full Stack Software Developer who loves turning ideas into reality
            through web development.
            <br /> <br />
            I bring a disciplined and determined approach to my work. taking
            pride in writing clean, efficient code and enjoy tackling complex
            challenges to find elegant solutions.
            <br /> <br />
            When I'm not coding, You can find me in the gym working out,
            swimming, and or cycling. I believe that a healthy body and mind are
            essential to achieving success in all areas of life.
          </Main>
          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AboutPage;
