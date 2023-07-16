function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Content />
      <Footer />
    </>
  );
}

export default App;

function Header() {
  return <header className="">Adam Nguyen</header>;
}

function NavBar() {
  return (
    <nav className="nav-bar">
      Links to move around the site but I havent learned the react router yet
    </nav>
  );
}

function Content() {
  return <div>Hello this is my content</div>;
}
function Footer() {
  return;
}
