import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Github } from "./AllSvgs";
const Box = styled(motion(NavLink))`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 70vh;
  width: 40vw;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 10;
  transition: all 0.2s ease;
  &:hover{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
}
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 100%;
  background-size: contain;
  border: 1px solid transparent;
  background-position: center;
  background-repeat: no-repeat;
  
  z-index: 5;
  
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 767px) {
    height: 50%;
  }
`;

const Title = styled.div`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  font-size: 3rem;
  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  whute-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla', sans-serif;
font-weight: 500;
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled(NavLink)`
background-color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 50px 0 50px;
color: ${props => props.theme.body};
font-size: calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
}
`

const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}: hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}
`

const Container = styled(motion.div)``;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogSection = (props) => {
  const {id, name, description, tags, demo, imgSrc, github } = props.project;

  return (
    <Container variants={Item}>
      <Box target="_blank" to={demo}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <Description>
            {description}
        </Description>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Footer>
            <Link target="_blank" to={demo}>
                Website
            </Link>
            <Git target="_blank" to={github}>
                <Github width={30} height={30}/>
            </Git>
        </Footer>
      </Box>
    </Container>
  );
};

export default BlogSection;
