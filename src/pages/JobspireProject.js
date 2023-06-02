import React, { useState } from "react";
import CompanySection from "../components/CompanySection";
import JobspireHeroSection from "../components/JobspireHeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjTwo } from "../components/JobspireElement/Data";
import { RecommendObjOne } from "../components/RecommendSection/Data";
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
