import React from 'react'
import './portfolio.css'
import img from '../../assets/original-5942facdedee2c6caf3d7d4f80666cc2.webp'


const data = [
              {
                id: '1',
                image: img,
                title:'My project',
                github: 'https://github.com',
                demo: '#'
              },
              {
                id: '2',
                image: img,
                title:'My project',
                github: 'https://github.com',
                demo: '#'
              },
              {
                id: '3',
                image: img,
                title:'My project',
                github: 'https://github.com',
                demo: '#'
              },
              {
                id: '4',
                image: img,
                title:'My project',
                github: 'https://github.com',
                demo: '#'
              },
              {
                id: '5',
                image: img,
                title:'My project',
                github: 'https://github.com',
                demo: '#'
              },
              {
                id: '6',
                image: img,
                title:'My project',
                github: 'https://github.com',
                demo: '#'
              }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Me récents travaux</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} className='btn'  target='_blank'>Live Demo</a>
                </div>
              </article>
             )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio