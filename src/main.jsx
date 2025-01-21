import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("ourRoot")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// React Dom -> Main Dom /HTML             -> React App

// App()
// <App />
