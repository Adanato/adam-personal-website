import * as React from "react";
//import * as ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
// const AboutPage = () => <h2>About Page</h2>;

function App() {
  return (
    <>
      <nav>
        <h1>HELLO CHECKING IF THE GTHUB ACTIONS WORKS</h1>
        <Link to="/">Click to view our about page</Link>
        <Link to="/about">Click to view our about page</Link>
        <Link to="contact">Click to view our contact page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
