import React from 'react'
import './Footer.css'
import { ImFacebook2 } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='box'>
      <footer className="footer">
        <div className="content has-text-centered">
          <p className='rights-info'>
            <strong>Alla rättigheter förbehållna</strong>
            <a href="https://github.com/TechWithRyan">@Ryan-Phillips Iserhills Cornelio</a>
          </p>
          <br /><hr />
          <div className="socials">
            <a href="https://www.facebook.com/ryanphillips.cornelio/photos"><ImFacebook2 /></a>
            <a href="https://www.instagram.com/techwithryan/"><FiInstagram /></a>
            <a href="https://www.youtube.com/channel/UCOg3PF76vT3K6DMGcU7-XzA"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/ryan-phillips-iserhills-cornelio/"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
