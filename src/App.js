import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* chemin vers la page accueil */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* path fonctionne si jamais l'url ne correspond a rien de declarer au dessus et ramene a l'accueil */}
          <Route path="*" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
