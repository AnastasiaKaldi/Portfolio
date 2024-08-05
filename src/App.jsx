import "./App.css";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import HomePage from "../src/HomePage.jsx";
import Contact from "../src/Contact.jsx";

// App Component
function App() {
  return (
    <div className="Con" id="root">
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
