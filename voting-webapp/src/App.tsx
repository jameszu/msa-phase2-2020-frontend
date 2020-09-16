import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LatestGrid from "./Components/LatestGrid/LatestGrid";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage"

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
          {/* <Route path="/" component={LatestGrid} /> */}
          <Route path="/" component={HomePage} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;