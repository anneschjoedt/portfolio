import React, { useState } from "react";
import JobspireHeroSection from "../components/JobspireHeroSection";
import { homeObjTwo } from "../components/JobspireElement/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import JobspireElement from "../components/JobspireElement";

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
      <Footer />
    </>
  );
};

export default JobspireProject;
