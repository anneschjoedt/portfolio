import React, { useState } from "react";
import CompanySection from "../components/CompanySection";
import AbenHeroSection from "../components/AbenHeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjTwo } from "../components/AbenElement/Data";
import { RecommendObjOne } from "../components/RecommendSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AbenElement from "../components/AbenElement";

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
      <Footer />
    </>
  );
};

export default AbenProject;
