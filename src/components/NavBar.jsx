import CartWidget from "./CartWidget"
import Logo from "./logo";
import './logo.css'
import { Link } from "react-router-dom";

function NavBar({ onCartClick }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item"><Link to="/">Inicio</Link></li>
        <li className="nav-item"><Link to="./productos">Productos</Link></li>
        <li className="nav-item"><Link to="./contacto">Contacto</Link></li>
      </ul>

      <CartWidget onClick={onCartClick} />

      <Logo />
    </nav>
  );
}

export default NavBar;