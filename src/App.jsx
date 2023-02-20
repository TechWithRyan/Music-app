import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from './components/Navbar';
import Body from './body/Body';
import Footer from './footer/Footer';
import CookieBanner from 'react-cookie-banner';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import "./App.css";
import Login from './components/Login';

const App = () => {
  const [token, setToken] = useState();

  /* if(!token) {
    return <Login setToken={setToken} />
  } */
  return (
    <>
    <div className="wrapper">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
      <CookieBanner disableStyle={true} />
     {/*  <Login /> */}
    {/*   <Body /> */}
      <Footer />

    </div>
    </>
  )
}

export default App
