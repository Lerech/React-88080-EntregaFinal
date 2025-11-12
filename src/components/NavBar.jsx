import { useState } from "react";
import CartWidget from "./CartWidget"
import Logo from "./logo";
import './Logo.css'
import { Link } from "react-router";
import "./CartSidebar.css";
import CartContainer from "./CartContainer";

function NavBar() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (

        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item"><Link to="/">Inicio</Link></li>
                <li className="nav-item"><Link to="/category/productos">Productos</Link></li>
                <li className="nav-item"><Link to="/category/contacto">Contacto</Link></li>
                <li className="nav-item"><Link to="/category/detail">Detalles</Link></li>
            </ul>
            <CartWidget onClick={() => setShowCart(!showCart)} />
            <Logo />
            <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
                <CartContainer />
            </div>
            {isCartOpen && <div className="overlay" onClick={() => setIsCartOpen(false)}></div>}
            {showCart && <CartContainer />}
        </nav>
    );
}
export default NavBar;