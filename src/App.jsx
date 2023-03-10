import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CookieBanner from 'react-cookie-banner';
import "./App.css";

const App = () => {

  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>
        <CookieBanner disableStyle={true} />
        <Footer />
      </div>
    </>
  )
}

export default App
