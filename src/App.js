import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import CV from "./pages/CVPage";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/CV" component={CV} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
