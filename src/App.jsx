import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import './components/cart.css'
import './components/navbar.css'
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Detalles from "./components/Detalles";
import ItemDetailContainer from './components/itemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from "./components/CartContextProvider";
import CartContainer from './components/CartContainer';
import { useState } from "react"
import "./components/CartSidebar.css";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartContextProvider>

        <NavBar onCartClick={() => setIsCartOpen(true)} />

        <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>

          <div className="cart-content">
            <CartContainer />
          </div>

          <div className="cart-footer">
            <button className="checkout-btn">FINALIZAR COMPRA</button>
          </div>
        </div>

        {isCartOpen && (
          <div
            className="overlay"
            onClick={() => setIsCartOpen(false)}
          />
        )}

        <Routes>
          <Route path="/" element={<>
            <h1>Bienvenidos a nuestra tienda</h1>
            <img src="https://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/imgs/todos-los-juegos.jpg" alt="Foto" style={{ display: "block", margin: "0 auto", maxWidth: "30%" }} />
            <h2>Los juegos didacticos son una herramienta muy importante para el entretenimiento de toda la familia. En RJC juegos didacticos nos dedicamos a la fabricacion de juegos didacticos de alta calidad, garantizando la durabilidad de nuestros productos. Si quieres saber mas sobre nosotros, puedes visitar nuestra seccion de contacto, donde podras encontrar toda la informacion necesaria para ponerte en contacto con nosotros y recibir asesoramiento personalizado.</h2>
          </>} />
          <Route path="/detail/:idParam" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/category/:catParam" element={<ItemListContainer greetings={'Nuestros productos'} />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h2>Error 404: URL no encontrada</h2>} />
        </Routes>
        <ToastContainer position="top-right" autoClose={500} transition={Flip} />

      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;