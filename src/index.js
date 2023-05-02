import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Dockable from "./components/dockable";
// import App from "./components/dockable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Dockable /> */}
  </React.StrictMode>
);
