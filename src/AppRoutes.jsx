import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Workpage from "./components/Workpage";
import SkillsPage from "./components/SkillsPage";
import TestParticles from "./subComponents/TestParticles";

const AppRoutes = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
        <Route path="/about" element={<AboutPage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
        <Route path="/blog" element={<BlogPage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
        <Route path="/work" element={<Workpage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
        <Route path="/skills" element={<SkillsPage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
        <Route path="/test" element={<TestParticles toggleTheme={props.toggleTheme} theme={props.theme}/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
