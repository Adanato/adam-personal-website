import React from "react";
import file from "../Public/Headshot_Placeholder.jpg";

// SVG file imports
import htmlSvg from "../Public/html.svg";
import cssSvg from "../Public/css3.svg";
import jsSvg from "../Public/javascript.svg";
import javaSvg from "../Public/java.svg";
import pythonSvg from "../Public/python.svg";
import mongoSvg from "../Public/mongodb.svg";
function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <FeaturedProjects />
      <CallToAction />
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
        <ProjectImage alt="picture of capybaras by the river" />
        <ProjectImage alt="picture of someone shuffling" />
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
        <ProjectImage alt="picture of a project" />
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

function ProjectImage({ alt }) {
  return (
    <div>
      <img src="" alt={alt} />
    </div>
  );
}

//------------------------
// Experience Section
//------------------------

//------------------------
// Call-To-Action Section
//------------------------
// Hit them with the hire me now
function CallToAction() {
  return (
    <section className="section-cta">
      <div className="cta-container">
        <h2>Contacts</h2>
        <ul>
          <li>
            <a href="linked.com/in/adanato">LinkedIn </a>
          </li>
          <li>
            <a href="mailto: adanato@vt.edu">Email Me</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
