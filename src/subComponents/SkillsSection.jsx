import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const circularLight = "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#FCF6F4 8px, #FCF6F4 100px)";
const circularDark = "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px, #1b1b1b 100px)";

const SkillContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-weight: 600;
  background-color: #111111;
  color: #f5f5f5;
  padding: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: absolute;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const WebContainer = styled(SkillContainer)`
  padding: 2rem;
  background: radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,165,0,1) 50%, rgba(255,140,0,1) 100%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-image: ${circularLight};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-around;
    height: 100vh;
    width: auto;
    padding: 0;
  }
`;

const Skill = ({ name, x, y, mobileX, mobileY }) => {
  return (
    <SkillContainer
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}

      style={{
        "@media (maxWidth: 768px)": {
          x: mobileX,
          y: mobileY,
        },
      }}
    >
      {name}
    </SkillContainer>
  );
};

const SkillsSection = () => {


  return (
    <>
      <Background>
        <WebContainer whileHover={{ scale: 1.05 }}>WEB</WebContainer>
        <Skill name="HTML" x="-5vw" y="-10vw" mobileX="-5vw" mobileY="-5vw" />
        <Skill name="CSS" x="-20vw" y="2vw" mobileX="-20vw" mobileY="2vw" />
        <Skill name="Javascript" x="22vw" y="6vw" mobileX="22vw" mobileY="6vw" />
        <Skill name="ReactJS" x="0" y="12vw" mobileX="0" mobileY="12vw" />
        <Skill name="Redux" x="35vw" y="-15vw" mobileX="35vw" mobileY="-5vw" />
        <Skill name="TailwindCSS" x="10vw" y="-15vw" mobileX="10vw" mobileY="-5vw" />
        <Skill name="NodeJS" x="35vw" y="-5vw" mobileX="35vw" mobileY="5vw" />
        <Skill name="ExpressJS" x="0vw" y="-20vw" mobileX="0vw" mobileY="-10vw" />
        <Skill name="PostgreSQL" x="-29vw" y="18vw" mobileX="-25vw" mobileY="18vw" />
        <Skill name="Firebase" x="18vw" y="18vw" mobileX="18vw" mobileY="28vw" />
        <Skill name="Github" x="-30vw" y="-18vw" mobileX="-30vw" mobileY="-8vw" />
        <Skill name="APIs" x="-35vw" y="-1vw" mobileX="0vw" mobileY="0vw" />
      </Background>
    </>
  );
};

export default SkillsSection;
