import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import { AnimatePresence } from "framer-motion";



const AppRoutes = (props) => {
  
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
        <Route path="/about" element={<AboutPage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
        <Route path="/projects" element={<BlogPage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
      
        <Route path="/skills" element={<SkillsPage toggleTheme={props.toggleTheme} theme={props.theme}/>} />
       
      </Routes>
  
    </AnimatePresence>
  );
};

export default AppRoutes;
