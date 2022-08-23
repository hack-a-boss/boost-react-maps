import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlacesContextProvider } from "./context/PlacesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PlacesContextProvider>
      <App />
    </PlacesContextProvider>
  </React.StrictMode>
);
