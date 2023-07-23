import file from "./Headshot_Placeholder.jpg";
function HomePage() {
  return (
    <>
      <HeroSection />
      <Skills />
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
    <section>
      <h2>Here are my skills</h2>
      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li></li>
      </ul>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <span>Adam Nguyen Footer</span>
      <div className="social-media"></div>
    </footer>
  );
}
export default HomePage;
