import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import './components/cart.css'
import './components/navbar.css'
import ItemDetailContainer from './components/itemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CartContextProvider } from './components/CartContextProvider';
import CartContainer from './components/CartContainer';
import { useState } from "react"
import "./components/CartSidebar.css";

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
          <Route path="/" element={<ItemListContainer greetings="Bienvenidos a RJC Juegos Didácticos" />} />
          <Route path="/detail/:idParam" element={<ItemDetailContainer />} />
          <Route path="/category/:catParam" element={<ItemListContainer greetings={'Nuestros productos'} />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h2>Error 404: URL no encontrada</h2>} />
        </Routes>

      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;