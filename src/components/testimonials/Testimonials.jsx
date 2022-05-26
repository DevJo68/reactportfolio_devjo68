import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/p1.jpg'
import avt2 from '../../assets/p2.jpg'
import avt3 from '../../assets/p3.jpg'
import avt4 from '../../assets/p4.jpg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    
    {
      avatar: avt1,
      name: 'someone',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta delectus quibusdam neque error dolor fugiat asperiores! Explicabo sapiente est soluta aliquam fugiat velit, blanditiis quos id officiis quidem excepturi.'
      
    },
    {
      avatar: avt2,
      name: 'someone',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta delectus quibusdam neque error dolor fugiat asperiores! Explicabo sapiente est soluta aliquam fugiat velit, blanditiis quos id officiis quidem excepturi.'

    },
    {
      avatar: avt3,
      name: 'someone',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta delectus quibusdam neque error dolor fugiat asperiores! Explicabo sapiente est soluta aliquam fugiat velit, blanditiis quos id officiis quidem excepturi.'

    },
    {
      avatar: avt4,
      name: 'someone',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta delectus quibusdam neque error dolor fugiat asperiores! Explicabo sapiente est soluta aliquam fugiat velit, blanditiis quos id officiis quidem excepturi.'
    }
]

function Testimonials() {
  return (
    <section id='testimonials'>
       <h5>Quelques avis de clients</h5>
       <h2>Témoignages</h2>
       <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
              data.map(({avatar, name, review},index) => {
                return(
                 <SwiperSlide className="testimonial">
                   <div className="client__avatar">
                     <img src={avatar}alt="Avatar" />
                   </div>
                     <h5 className='client_name'>{name}</h5>
                     <small className='client__review'>
                      {review}
                     </small>
                  </SwiperSlide> 
     
                )
              })

        }
         
       </Swiper>
    </section>
  )
}

export default Testimonials