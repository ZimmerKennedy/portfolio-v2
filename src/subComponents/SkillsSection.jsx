import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const circularLight =
  "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FCF6F4 8px, #FCF6F4 100px)";
const circularDark =
  "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 5px, #000000 100px)";

const circularDarkMobile =
  "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #000000 8px, #000000 40px)";
const circularLightMobile =
  "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FCF6F4 8px, #FCF6F4 40px)";

const SkillContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 600;
  background-color: ${(props) =>
    props.theme === "sunny" ? "#111111" : "#f5f5f5"};
  color: ${(props) => (props.theme === "sunny" ? "#f5f5f5" : "#111111")};
  padding: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: absolute;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 0.1rem;
    height: 0.1rem;
  }
`;

const WebContainer = styled(SkillContainer)`
  padding: 2rem;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 1) 0%,
    rgba(255, 165, 0, 1) 50%,
    rgba(255, 140, 0, 1) 100%
  );

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-image: ${(props) =>
    props.theme === "sunny" ? circularLight : circularDark};

  @media (max-width: 768px) {
    width: 100vw;
    height: 50vh;
    background-image: ${(props) =>
      props.theme === "sunny" ? circularLightMobile : circularDarkMobile};
  }
`;

const Container = styled(motion.div)`
  min-height: 100vh;
  background: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
`;

const Skill = ({ name, x, y, theme }) => {
  return (
    <SkillContainer
      theme={theme}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </SkillContainer>
  );
};

const SkillsSection = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Background theme={theme}>
        <WebContainer whileHover={{ scale: 1.05 }}>WEB</WebContainer>
        <Skill theme={theme} name="HTML" x="-20vw" y="2vw" />
        <Skill theme={theme} name="CSS" x="-10vw" y="-10vw" />
        <Skill theme={theme} name="Javascript" x="20vw" y="6vw" />
        <Skill theme={theme} name="ReactJS" x="0vw" y="22vw" />
        <Skill theme={theme} name="Redux" x="-20vw" y="-15vw" />
        <Skill theme={theme} name="TailwindCSS" x="15vw" y="-12vw" />
        <Skill theme={theme} name="NodeJS" x="32vw" y="-5vw" />
        <Skill theme={theme} name="ExpressJS" x="0vw" y="-20vw" />
        <Skill theme={theme} name="PostgreSQL" x="-25vw" y="18vw" />
        <Skill theme={theme} name="Firebase" x="35vw" y="18vw" />
        <Skill theme={theme} name="Github" x="-30vw" y="-18vw" />
        <Skill theme={theme} name="APIs" x="-35vw" y="-1vw" />
      </Background>
    </Container>
  );
};

export default SkillsSection;

