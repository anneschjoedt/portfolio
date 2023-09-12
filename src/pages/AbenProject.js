import React, { useState } from "react";
import AbenHeroSection from "../components/Aben/AbenHeroSection";
import { homeObjTwo } from "../components/Aben/AbenElement/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AbenElement from "../components/Aben/AbenElement";
import ProjectsFooter from "../components/ProjectsFooter";

const AbenProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AbenHeroSection />
      <AbenElement {...homeObjTwo} />
      <ProjectsFooter/>
      <Footer />
    </>
  );
};

export default AbenProject;
