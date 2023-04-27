import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkedIn, Resume } from "./AllSvgs";


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom:0;
left: 2rem;
z-index:3;
`

const Line = styled.span`
width: 2px;
height:8rem;
background-color: ${props => props.theme.text}
`
const Socials = () => {
  return (
    <Icons>
      <div>
        <NavLink to="/">
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <LinkedIn width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <Resume width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default Socials;
