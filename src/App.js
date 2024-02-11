import React from 'react';
import Navbar from "./components/Navbar.js";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home.js"
import AboutMe from "./components/aboutme.js"
import ContactMe from "./components/contactme.js"
import Education from "./components/education.js"
import Project from "./components/projects.js"
import Skill from "./components/skill.js"
function App() {
  return (
    <div>
      
      <Navbar/>
      <br/><br/><br/><br/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/contactme" element={<ContactMe/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skill" element={<Skill/>}/>
      </Routes>
    </div>
  );
}

export default App;
