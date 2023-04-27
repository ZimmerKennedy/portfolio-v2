import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkedIn, Resume } from "./AllSvgs";
import resumeZimmer from "/resumeZimmer.pdf";
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

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const Socials = () => {
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
      <div>
        <NavLink
          style={{ color: "inherit" }}
          onClick={() =>
            window.open("https://github.com/ZimmerKennedy", "_blank")
          }
        >
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/zimmerkennedy/", "_blank")
          }
        >
          <LinkedIn width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink style={{ color: "inherit" }}>
          <Resume
            width={25}
            height={25}
            fill="currentColor"
            onClick={downloadResume}
          />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default Socials;
