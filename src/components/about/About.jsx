import React from 'react'
import './about.css'
import maphoto from '../../assets/moi2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from  'react-icons/vsc'

function About() {
  return (
   <section id='about'>
     <h5>Faisons connaissance</h5>
     <h2>A propos de moi</h2>

     <div className="container about__container">
       <div className="about__me">
          <div className="about__ma-photo">
              <img src={maphoto} alt="ma photo a propos de moi"  />
          </div>
       </div>
        <div className="about__content">
          <div className="about__cards">
              <article className="about__card">
                 <FaAward className='about__icons'/>
                 <h5>Experience</h5>
                 <small>6+ en Entreprise et dans mon temps libre</small>
              </article>
              <article className="about__card">
                 <FiUser className='about__icons'/>
                 <h5>Clients</h5>
                 <small>1</small>
              </article>
              <article className="about__card">
                 <VscFolderLibrary className='about__icons'/>
                 <h5>Projets complétés</h5>
                 <small>2</small>
              </article>
          </div>
           <p>Bonjour ! Je m'appelle Joël Ndombele, développeur web fullstack en freelance. Passionné de développement et de nouvelles technologies depuis ma plus tendre enfance, j'en ai fait le cœur de ma vie et mon métier. Ce que j'aime, c'est participer à des projets de développement d'applications web innovant et futuriste. Du frontend en passant par le backend, de la conception au cahier des charges jusqu'à la mise en production, je saurais m'adapter à vos besoins. Vous avez un projet de création de site web ou d'application ? N'attendez plus et contactez-moi.</p>
           <a href="#contact" className='btn btn-primary'>Discutons de votre projet</a>
        </div>
     </div>
   </section>
  )
}

export default About