import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Gallery from "./pages/Gallery";
import Project from "./pages/Project";
import DesainGrafis from "./pages/Desaingrafis";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Fullstack from "./pages/Fullstack";
import MachineLearning from "./pages/MachineLearning";
import Skills from "./pages/Skills";
import UIUX from "./pages/UIUX";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/project' element={<Project />} />
        <Route path="/desaingrafis" element={<DesainGrafis />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/machinelearning" element={<MachineLearning />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/uiux" element={<UIUX />} />
      </Routes>
    </Router>
  );
}
