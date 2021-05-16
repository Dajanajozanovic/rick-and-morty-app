import * as React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import './Card.js'
import Card from './Card.js'
import Header from './Header.js'
import Navigation from './Navigation.js'
import background from './images/background.jpg'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])
  const [isActive, setIsActive] = useState({ characters: true })

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [url])

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header />

      <Navigation isActive={isActive} handleClick={handleClick} />

      <section className="App__main">
        {isActive.characters &&
          characters.map(rickandmorty => {
            const { name, species, gender, id, image, status } = rickandmorty
            return (
              <Card
                key={id}
                name={name}
                species={species}
                image={image}
                gender={gender}
                isActive={isActive}
                status={status}
              />
            )
          })}
      </section>
    </div>
  )

  function handleClick(event) {
    const value = event.target.name
    const obj = { characters: false }
    obj[value] = true
    setIsActive(obj)
  }
}
