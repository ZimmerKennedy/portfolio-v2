import React from "react";
import styled from "styled-components";
import Logos from "../subComponents/Logos";
import Socials from "../subComponents/Socials";
import { motion } from "framer-motion";
import BigTitle from "../subComponents/BigTitle";
import SkillsSection from "../subComponents/SkillsSection";
import PowerButton from "../subComponents/PowerButton";

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
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

const SkillsPage = (props) => {
  return (
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
      
      <Logos theme={props.theme === "sunny" ? "light" : "dark"} />
          <Socials theme={props.theme === "sunny" ? "light" : "dark"} />
        <PowerButton toggleTheme={props.toggleTheme} theme={props.theme} />
      <SkillsSection theme={props.theme}/>
        <BigTitle text="SKILLS" top="80%" left="30%" />
      
    </Container>
  );
};

export default SkillsPage;
