import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* chemin vers la page accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path fonctionne si jamais l'url ne correspond a rien de declarer au dessus et ramene a l'accueil */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
