import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import CV from "./pages/CVPage";
import Contact from "./pages/ContactPage";
import "./fonts/wotfard-regular-webfont.ttf";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/https://drive.google.com/file/d/1ICiiXHZpFM-pPBWI_kL3oYsx_NITGTxI/view"
          exact
        />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
