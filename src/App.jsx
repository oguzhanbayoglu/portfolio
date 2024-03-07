import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Archive from "./pages/Archive";
import ProjectDetails from "./pages/ProjectDetails";
import projects from "./projects.json";

const App = () => {
  return (
    <BrowserRouter>
      <Routes basename="/portfolio">
        <Route path="portfolio" element={<Layout />}>
          <Route index path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="archive" element={<Archive />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path=":project"
            element={<ProjectDetails projects={projects.projects} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
