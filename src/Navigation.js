import './Navigation.css'

export default function Navigation({ isActive, handleClick }) {
  return (
    <nav className="Navigation">
      <button
        name="characters"
        onClick={handleClick}
        className={
          isActive.characters
            ? 'nav__Button nav__Button--active'
            : 'nav__Button'
        }
      >
        Characters
      </button>
    </nav>
  )
}
