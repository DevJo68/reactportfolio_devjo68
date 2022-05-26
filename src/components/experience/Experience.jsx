import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>Quels sont mes compétences ?</h5>
      <h2>Mon expérience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Développement Frontend</h3>
            <div className="experience__content">
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Confirmé</small>
                     </div>
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Confirmé</small>
                     </div>
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                        <h4>Javascript</h4>
                        <small className='text-light'>Confirmé</small>
                     </div>
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                        <h4>Boostrap</h4>
                        <small className='text-light'>Intermédiaire</small>
                     </div>
                     
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/>
                     <div>
                        <h4>React</h4>
                        <small className='text-light'>Débutant</small>
                     </div>
               </article>
            </div>
        </div>
        {/* END OF FRONTEND*/}
        <div className="experience__backend">
        <h3>Développement Backend</h3>
            <div className="experience__content">
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon' />
                     <div>
                        <h4>PHP</h4>
                        <small className='text-light'>Confirmé</small>
                     </div>
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon' />
                     <div>
                        <h4>Symfony</h4>
                        <small className='text-light'>Intermédiaire</small>
                     </div>
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon' />
                     <div>
                        <h4>C#</h4>
                        <small className='text-light'>Intermédiaire</small>
                     </div>
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon' />
                     <div>
                        <h4>SQL</h4>
                        <small className='text-light'>Intermédiaire</small>
                     </div>  
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon' />
                     <div>
                        <h4>Node JS</h4>
                        <small className='text-light'>Débutant</small>
                     </div>
               </article>
               <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon' />
                     <div>
                        <h4>Python</h4>
                        <small className='text-light'>Débutant</small>
                     </div>
               </article>
            </div>
      
        </div>
      </div>
    </section>
  )
}

export default Experience