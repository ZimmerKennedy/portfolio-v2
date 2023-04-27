import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Workpage from "./components/Workpage";
import SkillsPage from "./components/SkillsPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work" element={<Workpage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
