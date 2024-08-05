import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Contact from "./Contact.jsx";
import NavBar from "./NavBar.jsx";

import Projects from "./Projects.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/contact", element: <Contact /> },

  { path: "/projects", element: <Projects /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
