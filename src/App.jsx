import "./App.css";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import HomePage from "../src/HomePage.jsx";

// App Component
function App() {
  return (
    <div id="root">
      <HomePage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
