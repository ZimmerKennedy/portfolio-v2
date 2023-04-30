import React from "react";
import styled from "styled-components";
import Logos from "../subComponents/Logos";
import PowerButton from "../subComponents/PowerButton";
import Socials from "../subComponents/Socials";
import { Blogs } from "../data/BlogData";
import BlogSection from "./BlogSection";
import Slider from "../subComponents/Slider";
import SnowParticleComponent from "../subComponents/RainParticleComponent";
import StarParticleComponent from "../subComponents/StarParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  width: 100vw;
`;
const Container = styled.div`
  background: ${(props) => props.theme.body};
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
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

const BlogPage = (props) => {
  return (
    <MainContainer
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
      <Container>
      <Logos theme={props.theme === "sunny" ? "light" : "dark"} />
          <Socials theme={props.theme === "sunny" ? "light" : "dark"} />
        <PowerButton toggleTheme={props.toggleTheme} theme={props.theme} />
        {props.theme === "night" && <StarParticleComponent />}
        {props.theme === "clouds" && <SnowParticleComponent />}

        <Slider />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogSection key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
        <BigTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
