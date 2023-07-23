import React from "react";
import file from "../Public/Headshot_Placeholder.jpg";

// SVG file imports
import htmlSvg from "../Public/html.svg";
import cssSvg from "../Public/css3.svg";
import jsSvg from "../Public/javascript.svg";
import javaSvg from "../Public/java.svg";
import pythonSvg from "../Public/python.svg";
import mongoSvg from "../Public/mongodb.svg";

// Picture imports personal project
import capybaraPic from "../Public/capybara.jpg";
import shufflePic from "../Public/dancing.jpg";
import iphonePic from "../Public/iphone.jpg";
function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <FeaturedProjects />
    </>
  );
}

//------------------------
// Hero Section
//------------------------
function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero-content">
        <h1 className="hero-h1">Hi, I'm Adam Nguyen!</h1>
        <p>Virginia Tech Computer Science Major striving for</p>
      </div>
      <img
        className="hero-img"
        src={file}
        alt="Adam Nguyen, the developer of this website"
      />
    </section>
  );
}
//------------------------
// Skills Section
//------------------------
// Contains my skills from my resume
function Skills() {
  return (
    <section className="section-skills">
      <h2>Skills</h2>

      <ul className="skill-list">
        <li>
          <img src={jsSvg} alt="javascript SVG logo" />
          Javascript
        </li>
        <li>
          <img src={htmlSvg} alt="mongoDb SVG logo" />
          HTML
        </li>
        <li>
          <img src={cssSvg} alt="mongoDb SVG logo" />
          CSS
        </li>
        <li>
          <img src={javaSvg} alt="mongoDb SVG logo" /> Java
        </li>
        <li>
          <img src={pythonSvg} alt="mongoDb SVG logo" /> Python
        </li>
        <li>
          <img src={mongoSvg} alt="mongoDb SVG logo" /> MongoDB
        </li>
      </ul>
    </section>
  );
}
//------------------------
// Featured Section
//------------------------

// Showcases the github projects I'm working on
function FeaturedProjects() {
  return (
    <section className="section-projects">
      <h2>Personal projects</h2>
      <div className="projects-container">
        <ProjectCard
          title="CapybaraSpace.com"
          description="Using MERN Stack, this project aims to create a interactive online community
        built on the love of Capybaras. Taking inspiration from reddit. Project is currently going underway."
        />
        <ProjectImage
          src={capybaraPic}
          alt="picture of capybaras by the river"
        />
        <ProjectImage src={shufflePic} alt="picture of someone shuffling" />
        <ProjectCard
          title="ShuffleVT.com"
          description="Bringing my passion for shuffling to life, a webpage featuring 
          dance videos and a call-to-action that motivates fellow hokies to join the club."
        />
        <ProjectCard
          title="Shuffle Trainer Ios App"
          description="At a fast bpm, dance creativity drops drastically as the human brain 
          prioritizes the most efficient dance moves. This limits the variety of moves a user 
          can do leading to a stale freestyle dance. This app hopes to assist with that by 
          providing a deck of moves that 'shuffles' what move the user should do next."
        />
        <ProjectImage src={iphonePic} alt="picture of a project" />
      </div>
    </section>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function ProjectImage({ src, alt }) {
  return (
    <div>
      <img className="project-img" src={src} alt={alt} />
    </div>
  );
}

//------------------------
// Experience Section
//------------------------

export default HomePage;
