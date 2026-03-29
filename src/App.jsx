import "./App.css";
import NavBar from "./NavBar.jsx";
import HomePage from "./HomePage.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <div className="noise-overlay" />
      <NavBar />
      <main className="overflow-x-hidden w-full">
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
