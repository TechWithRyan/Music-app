import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CookieBanner from 'react-cookie-banner';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import "./App.css";

const App = () => {
  const [token, setToken] = useState();

  /* if(!token) {
    return <Login setToken={setToken} />
  } */
  return (
    <>
          <div className="container">
        <Router>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </Router>
        <CookieBanner disableStyle={true} />
        <Footer />
          </div>
    </>
  )
}

export default App
