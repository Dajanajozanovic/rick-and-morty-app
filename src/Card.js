import './Card.css'
import { useState } from 'react'

export default function Card({ name, image, status, species, gender }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <section className={(species = 'Alien' ? 'Card Card--alien' : 'Card')}>
      <h2>{name}</h2>

      <div className="Card__image">
        <img className="Card__image--cards" src={image} alt="" />
      </div>

      <button className="Card__button" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'hide Infos' : 'Show Infos'}
      </button>

      {isActive && (
        <ul className="Card-list">
          <li>Status: {status}</li>
          <li>Species: {species}</li>
          <li>Gender: {gender}</li>
        </ul>
      )}
    </section>
  )
}
