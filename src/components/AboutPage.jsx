import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { sunnyTheme } from "./Themes";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import SnowParticleComponent from "../subComponents/RainParticleComponent";
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
  width: calc(40% + 10vw);
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

  @media (max-width: 767px) {
    left: calc(3rem + 5vw);
  }
`;

const Spaceman = styled.div`
  position: absolute;
  top: calc(1% + 2vh);
  right: calc(1% + 8.5vw);
  width: 30vw;
  opacity: 0.8;
  img {
    width: calc(70% + 10vw);
    height: auto;
  }
  @media (max-width: 767px) {
    z-index:10;
    top: calc(5% + 5vh);
    right: calc(1% + 1vw);
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
