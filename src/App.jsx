/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
import "./App.css";
import React from "react";
import Island from "../src/models/Island.jsx";

// App Component
function App() {
  return (
    <div className="Background grid-cols-2">
      <div className="Island flex text-black">col 1</div>
      <Island className="" />
    </div>
  );
}

export default App;
