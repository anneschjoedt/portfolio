import React, { useState } from "react";
import { homeObjTwo } from "../components/Sleepers/SleepersElement/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SleepersElement from "../components/Sleepers/SleepersElement";
import SleepersHeroSection from "../components/Sleepers/SleepersHeroSection";

const SleepersProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SleepersHeroSection />
      <SleepersElement {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default SleepersProject;
