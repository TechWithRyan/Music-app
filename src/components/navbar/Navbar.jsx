import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import logo from "../../assets/logo.png";

const Navbar = () => {

    const [Mobile, setMobile] = useState(false);

    return (
        <nav className="navbar">
            <h3 className="navbar-header"><img src={logo} alt="" /><a href="/">TechWithRyan</a></h3>

            <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to="/"><li>Hem</li></Link>
                <Link to="/email"><li>Kontakt</li></Link>
                <Link to="/about"><li>Om</li></Link>
            </ul>

            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
            </button>
        </nav>
    )
}

export default Navbar
