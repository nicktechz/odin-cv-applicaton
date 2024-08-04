import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Builder from "./components/Builder";
import Alert from "./components/Alert";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Header />
    <Builder />
    <Footer />
  </React.StrictMode>
);
