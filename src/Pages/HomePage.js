import React from "react";
import file from "../Public/Headshot_Placeholder.jpg";
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
      <h2>Here are my skills</h2>

      <ul className="skill-list">
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>Python</li>
        <li>C</li>
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
      <div className="projects-container">
        <ProjectCard />
        <ProjectImage />
        <ProjectImage />
        <ProjectCard />
        <ProjectCard />
        <ProjectImage />
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <div className="project-card">
      <h2>Project Title</h2>

      <ul>
        <li>React</li>
        <li>Javascript</li>
      </ul>
    </div>
  );
}

function ProjectImage({ alt }) {
  return (
    <div>
      <img src="" alt="displays the relevant project" /> Place holder{" "}
    </div>
  );
}

//------------------------
// Call-To-Action Section
//------------------------
// Hit them with the hire me now
function CallToAction() {
  return (
    <div className="cta-container">Insert text and super cool button here</div>
  );
}

export default HomePage;
