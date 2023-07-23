import React from "react";
import file from "../Public/Headshot_Placeholder.jpg";
function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
      <FeaturedProjects />
      <CallToAction />
      <Footer />
    </>
  );
}

// Little Introduction
function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero-content">
        <h1 className="hero-h1">Hi, I'm Adam Nguyen!</h1>
      </div>
      <img
        className="hero-img"
        src={file}
        alt="Adam Nguyen, the developer of this website"
      />
    </section>
  );
}
// Contains my skills from my resume
function Skills() {
  return (
    <section className="section-skills">
      <h2>Here are my skills</h2>

      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>Python</li>
        <li> C</li>
      </ul>
    </section>
  );
}
//
function FeaturedProjects() {
  return (
    <section className="section-projects">
      <div className="projects-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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
// Hit them with the hire me now
function CallToAction() {
  return <p>sd</p>;
}
function Footer() {
  return (
    <footer className="footer">
      <span>&copy; 2023 Adam Nguyen. All rights reserved.</span>
      <div className="social-media"></div>
    </footer>
  );
}
export default HomePage;