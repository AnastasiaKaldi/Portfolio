import "./App.css";
import React from "react";
import Island from "../src/models/Island.jsx";

// App Component
function App() {
  return (
    <div id="root">
      <div className="Background">
        <div className="title-text">
          <h1 className="text-8xl">Hello, I am Anastasia!</h1>
          <p className="text-7xl"> Welcome to my website</p>
        </div>
        <Island className="Spline" />
      </div>
    </div>
  );
}

export default App;
