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
      <div className="hero-content"></div>
      <img alt="Adam Nguyen, the developer of this website" />
    </div>
  );
}
function Footer() {
  return;
}
export default HomePage;
