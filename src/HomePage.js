function HomePage() {
  return (
    <>
      <Hero />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <div className="section-hero">
      <div className="hero-content">
        Hi, I'm Adam Nguyen. I'm a sophmore at Virginia Tech and I'm majoring in
        Computer Science.
      </div>
      <img alt="Adam Nguyen, the developer of this website" />
    </div>
  );
}
function Footer() {
  return;
}
export default HomePage;
