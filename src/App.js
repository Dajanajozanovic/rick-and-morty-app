import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import './Card.js'
import Card from './Card.js'
import Header from './Header.js'

export default function App() {
  const [characters, setCharacters] = useState([])

  const url = 'https://rickandmortyapi.com/api/character'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [])

  console.log(characters)
  return (
    <div>
      {characters.map(character => {
        return (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
          />
        )
      })}
    </div>
  )
}
