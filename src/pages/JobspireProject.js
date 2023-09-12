import React, { useState } from "react";
import JobspireHeroSection from "../components/Jobspire/JobspireHeroSection";
import { homeObjTwo } from "../components/Jobspire/JobspireElement/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import JobspireElement from "../components/Jobspire/JobspireElement";
import ProjectsFooter from "../components/ProjectsFooter";

const JobspireProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <JobspireHeroSection />
      <JobspireElement {...homeObjTwo} />
      <ProjectsFooter/>
      <Footer />
    </>
  );
};

export default JobspireProject;
