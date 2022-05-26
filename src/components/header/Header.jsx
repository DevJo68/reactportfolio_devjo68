import React from 'react'
import './header.css'
import CTA from './CTA'
import Moi from '../../assets/moi.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
          <h5>Bonjour je m'appelle</h5>
          <h1>Joël NDOMBELE</h1>
          <h5 className='text-light'>Je suis Développeur Fullstack</h5>
          <CTA />
          <HeaderSocials />
          <div className="moi">
             <img src={Moi} alt="Moi" />
          </div>
          <a href="" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header