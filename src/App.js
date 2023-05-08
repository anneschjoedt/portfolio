import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/ContactPage";
import "./fonts/wotfard-regular-webfont.ttf";
import JobspireProject from "./pages/JobspireProject";
import AnnoAnnoProject from "./pages/AnnoAnnoProject";
import AbenProject from "./pages/AbenProject";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/jobspire" component={JobspireProject} exact />
        <Route path="/annoanno" component={AnnoAnnoProject} exact />
        <Route path="/aben" component={AbenProject} exact />
        <Route path="/about" component={AboutPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
