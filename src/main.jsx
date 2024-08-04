import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Header />
    <h1>Hola mundo</h1>
    <Footer />
  </React.StrictMode>
);
