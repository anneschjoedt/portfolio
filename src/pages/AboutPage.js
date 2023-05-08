import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/AboutSection";
import { homeObjOne } from "../components/AboutSection/Data";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutSection {...homeObjOne} />
      <Footer />
    </>
  );
};

export default AboutPage;
