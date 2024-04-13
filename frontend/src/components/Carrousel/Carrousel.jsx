import { useState } from 'react'
import PropTypes from 'prop-types'
import './Carrousel.sass'

/* Création du composant Carrousel en récupérant en propos l'array d'images présentes dans l'annonce */
function Carrousel({ pictures }) {
  /* Initialisation d'un state servant à stocker le numéro de l'image active */
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className="carrousel">
      <img
        className="carrousel__img-active"
        key={`carrousel-img-${activeImg}`}
        /* src de l'image sera prise dans le tableau pictures a la position égale à activeImg */
        src={pictures[activeImg]}
        alt=""
      />
      <div className="carrousel__buttons">
        {pictures.map((picture, index) => (
          <button
            key={`carrousel-button-${index}`}
            className={index === activeImg ? "carrousel__button active" : "carrousel__button"}
            onClick={() => setActiveImg(index)}
          >
          </button>
        ))}
      </div>
    </div>
  )
}

Carrousel.propTypes = {
    pictures: PropTypes.array.isRequired,
}

export default Carrousel