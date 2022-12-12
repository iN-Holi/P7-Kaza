import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import './styles/settings.css'
import Error from './pages/Error'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* chemin vers la page accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path fonctionne si jamais l'url ne correspond a rien de declarer au dessus et ramene a l'accueil */}
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
