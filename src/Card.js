import './Card.css'

export default function Card({ name, image, status, species, gender }) {
  return (
    <section className="Card">
      <h2>{name}</h2>

      <ul className="Card-list">
        <li>
          <img src={image} alt="" className="image" />
        </li>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
      </ul>
    </section>
  )
}
