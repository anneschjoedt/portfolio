import React, { useState } from "react";
import AnnoAnnoHeroSection from "../components/AnnoAnno/AnnoAnnoHeroSection";
import { homeObjTwo } from "../components/AnnoAnno/AnnoAnnoElement/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AnnoAnnoElement from "../components/AnnoAnno/AnnoAnnoElement";

const AnnoAnnoProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AnnoAnnoHeroSection />
      <AnnoAnnoElement {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default AnnoAnnoProject;
