import * as React from "react";
//import * as ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import About from "./About";

import NavBar from "./Shared/NavBar";
function App() {
  return (
    <>
      <div className="root-container">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
