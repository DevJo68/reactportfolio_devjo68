import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>Mes services</h5>
      <h2>Services proposés</h2>
      <div className="container services__container">
        <article className="service">
           <div className="service__head">
             <h3>Développement Web</h3>
           </div>
           <ul className='service__list'>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Création d'un site vitrine</p>
             </li>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Création d'un site web d'entreprise </p>
             </li>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Création d'une boutique en ligne</p>
             </li>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Création d'un site portfolio </p>
             </li>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Création d'un site web personnel</p>
             </li>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Création d'un site web sur-mesure</p>
             </li>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Refonte et mise à jour de votre site web</p>
             </li>
           </ul>
        </article>
        {/*END OF Developpement Web*/}
        <article className="service">
           <div className="service__head">
             <h3>Développement D'application</h3>
           </div>
           <ul className='service__list'>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Création d'une application web sur-mesure</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Création d'une application de e-commerce</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Création d'une application web portails</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Création d'une application web statique ou dynamique</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Création d'une application de gestion de contenu</p>
              </li>
           </ul>
        </article>
         {/*END OF Developpement d'application*/}
        <article className="service">
           <div className="service__head">
             <h3>Webmastering et E-commerce</h3>
           </div>
           <ul className='service__list'>
             <li>
               <BiCheck className='service__list-icon'/>
               <p>Creation d'un site e-commerce avec Prestahop,WoocCommerce ou Shopify</p>
             </li>
             <li>
               <BiCheck className='service__list-icon'/>
               <p> Gestion de votre site e-commerce(intranet,ajout de produit,mise en place du paiement, ajout du catalogue produit)</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p> Création d'un site de réservation de service, biens, ou évènement</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p> Création d'une boutique de dropshipping</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p> Création d'un site restaurent</p>
              </li>
           </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services