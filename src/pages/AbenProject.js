import React, { useState } from "react";
import AbenHeroSection from "../components/AbenHeroSection";
import { homeObjTwo } from "../components/AbenElement/Data";
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
