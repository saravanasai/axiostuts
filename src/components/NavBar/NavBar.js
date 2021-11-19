import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="nav navbar-nav">
        <Link class="nav-item nav-link" to="/home">
          Home
        </Link>
        <Link class="nav-item nav-link" to="/contact">
          COntact
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
