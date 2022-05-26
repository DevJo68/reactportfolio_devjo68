import React from 'react'
import CV from '../../assets/CV_Joël_NDOMBELE.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} className="btn">Télécharger mon CV</a>
        <a href="#contact" className='btn btn-primary'>Contactez-moi</a>
    </div>
  )
}

export default CTA