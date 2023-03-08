import React from 'react'
import './Footer.css'
import { ImFacebook2 } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='box'>
            <div className="footer">
                <div className="sb__footer section__padding">
                    <div className="sb__footer-links">
                        <div className="sb__footer-links_div">
                            <h4>For Business</h4>
                            <a href="/employer"><p>Employer</p></a>
                            <a href="/healthplan"><p>Health Plan</p></a>
                            <a href="/individual"><p>Individual</p></a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Resources</h4>
                            <a href="/resource"><p>Resource Center</p></a>
                            <a href="/resource"><p>Feedback</p></a>
                            <a href="/resource"><p>Tech</p></a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Partners</h4>
                            <a href="/about">
                                <p>About</p>
                            </a>
                            <a href="/press">
                                <p>Press</p>
                            </a>
                            <a href="/career">
                                <p>Career</p>
                            </a>
                            <a href="/contact">
                                <p>Contact</p>
                            </a>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4>Coming soon on</h4>
                            <div className="socialMedia">
                                <p><ImFacebook2 /> </p>
                                <p><FiInstagram />  </p>
                                <p><FaYoutube /></p>
                                <p><FaLinkedin /></p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="sb__footer-below">
                        <div className="sb__footer-copyright">
                            <p>
                                @{new Date().getFullYear()} TechWithRyan. All rights reserved
                            </p>
                        </div>

                  

                        <div className="sb__footer-below-links">
                            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                            <a href="/privacy"><div><p>Privacy</p></div></a>
                            <a href="/security"><div><p>Security</p></div></a>
                            <a href="/cookies"><div><p>Cookies Declaration</p></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
