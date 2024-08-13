import "./App.css";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import HomePage from "../src/HomePage.jsx";
import Contact from "../src/Contact.jsx";
import Footer from "../src/Footer.jsx";
import HomePageMob from "../src/HomepageMob.jsx";

// App Component
function App() {
  return (
    <div className="Con" id="root">
      <HomePage />
      <HomePageMob />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
