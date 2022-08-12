import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { LevelsProvider } from "./context/levels/LevelsContext";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LevelsProvider>
      <App />
    </LevelsProvider>
  </React.StrictMode>
);
