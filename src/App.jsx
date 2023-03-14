import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Small from "./pages/Small";
import Medium from "./pages/Medium";
import Contact from "./components/modal/Contact";
import Large from "./pages/Large";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CookieBanner from 'react-cookie-banner';
import "./App.css";
import Cart from './components/cart/Cart';

const App = () => {
 
  return (
    <>
      <div className=".container .is-max-widescreen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />            <Route path="/small" element={<Small />} />
            <Route path="/medium" element={<Medium />} />
            <Route path="/large" element={<Large />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
 
        </Router>
        <CookieBanner disableStyle={true} />
        <Footer />
      </div>
    </>
  )
}

export default App
