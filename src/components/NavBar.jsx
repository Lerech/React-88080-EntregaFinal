import CartWidget from "./CartWidget"
import Logo from "./logo";
import './Logo.css'
import { Link } from "react-router";

function NavBar({ onCartClick }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item"><Link to="/">Inicio</Link></li>
        <li className="nav-item"><Link to="/category/productos">Productos</Link></li>
        <li className="nav-item"><Link to="/category/contacto">Contacto</Link></li>
        <li className="nav-item"><Link to="/category/detail">Detalles</Link></li>
      </ul>

      {/* Boton del carrito */}
      <CartWidget onClick={onCartClick} />

      <Logo />
    </nav>
  );
}

export default NavBar;