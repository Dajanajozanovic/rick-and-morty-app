import './Header.css'

import image from './images/rick_and_morty1.jpg'

export default function Header() {
  return (
    <div className="Header">
      <img className="Header__image" src={image} alt="" />
    </div>
  )
}
