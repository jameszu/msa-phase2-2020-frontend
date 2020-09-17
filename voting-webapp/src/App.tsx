import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LatestGrid from "./Components/LatestGrid/LatestGrid";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage"
import NamePage from "./Pages/NamePage/NamePage"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
          {/* <Route path="/" component={LatestGrid} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Name" component={NamePage} />
      </Router>
    </div>
  );
};

export default App;