import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from  'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import img from '../../assets/LogoYourDevExpert.png'


function Footer() {
  return (
    <footer>
      <div className="footer__image">
      <a href="#" className='footer__logo'><img src={img} alt="" height="200" width='100' /></a>
      </div>
      <ul className='permalinks'Home>
           <li><a href="#">Home</a></li>
           <li><a href="#about">A propos</a></li>
           <li><a href="#experience">Expériences</a></li>
           <li><a href="#services">Services</a></li>
           <li><a href="#portfolio">Portfolio</a></li>
           <li><a href="#testimonials">Témoignages</a></li>
           <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://facebook"><FaFacebookF/></a>
          <a href="https://instagram"><FiInstagram/></a>
          <a href="https://twitter"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Joël Ndombele - Mentions légales</small>
      </div>

    </footer>
  )
}

export default Footer