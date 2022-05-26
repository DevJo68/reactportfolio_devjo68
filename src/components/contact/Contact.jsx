import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_gchr0ml', 'template_jxqnka5', form.current, 't9S8GSj0W1_3dfOkr')
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   
    e.target.reset();
};
  return (
    <section id="contact">
       <h5>Restons en contact</h5>
       <h2>Contactez moi </h2>
       <div className="container contact__container">
         <div className="contact__options">
           <article className="contact__option">
                <MdOutlineEmail className='contact__options-icon'/>
                <h4>Email</h4>
                <h5>jolecodeurcontact@gmail.com</h5>
                <a href="mailto:jolecodeurcontact@gmail.com">Envoyez un message</a>
           </article>
           <article className="contact__option">
                <MdOutlineEmail/>
                <h4>Messenger</h4>
                <h5>jolecodeur</h5>
                <a href="url facebook">Envoyez un message</a>
           </article>
           <article className="contact__option">
                <BsWhatsapp className='contact__options-icon'/>
                <h4>WhatsApp</h4>
                <h5>+33636945876</h5>
                <a href="https://api.whatsapp.com/send?phone=0636945876">Envoyez un message</a>
           </article>
         </div>
         {/* END OF CONTACT OPTIONS*/}
         <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name' placeholder='Votre nom' required/>
           <input type="email" name='email' placeholder='Votre email' required/>
           <textarea name="message" cols="30" rows="7" placeholder='Votre message' required></textarea>
           <button type="submit" className='btn btn-primary'>Envoyer</button>
         </form>
       </div>
    </section>
  )
}

export default Contact