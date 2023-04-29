import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkedIn, Resume } from "./AllSvgs";
import resumeZimmer from "../assets/images/resumeZimmer.pdf";
import { darkTheme } from "../components/Themes";
import { motion } from "framer-motion";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const Socials = (props) => {
  function downloadResume() {
    const link = document.createElement("a");
    link.href = resumeZimmer;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.5 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          onClick={() =>
            window.open("https://github.com/ZimmerKennedy", "_blank")
          }
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.3 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/zimmerkennedy/", "_blank")
          }
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.1 }}
      >
        <NavLink style={{ color: "inherit" }}>
          <Resume
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
            onClick={downloadResume}
          />
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default Socials;
