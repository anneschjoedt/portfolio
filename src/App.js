import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/ContactPage";
import "./fonts/wotfard-regular-webfont.ttf";
import JobspireProject from "./pages/JobspireProject";
import AnnoAnnoProject from "./pages/AnnoAnnoProject";
import AbenProject from "./pages/AbenProject";
import AboutPage from "./pages/AboutPage";
import SleepersProject from "./pages/SleepersProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/jobspire" element={<JobspireProject />} exact />
        <Route path="/annoanno" element={<AnnoAnnoProject />} exact />
        <Route path="/aben" element={<AbenProject />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="/sleepers" element={<SleepersProject />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
