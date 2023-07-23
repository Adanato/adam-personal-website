import * as React from "react";
//import * as ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";

function NavBar() {
  return (
    <header className="main-header">
      <div className="main-header-container">
        <svg
          className="svg-icon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
          stroke="url(#gradient)"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1971c2" />
              <stop offset="100%" stop-color="#845ef7" />
            </linearGradient>
          </defs>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
        AdamNguyen.Dev
      </div>

      <nav className="main-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>

        <Link className="nav-link nav-contact-button" to="contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
