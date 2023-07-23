import * as React from "react";
//import * as ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Resume from "./Pages/ResumePage";
import Contact from "./Pages/ContactPage";

// Common component
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

function App() {
  return (
    <>
      <div className="root-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
