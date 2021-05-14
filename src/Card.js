import '/.Card.css'

export default function Card({ name, image }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <img src={image} alt="" />
    </section>
  )
}
