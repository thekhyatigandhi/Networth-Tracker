import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from 'react-dom'
import "./index.css"; // Correct import path for index.css
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = document.getElementById("root"); // Use document.getElementById directly
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root // Use the 'root' element as the second argument
);
