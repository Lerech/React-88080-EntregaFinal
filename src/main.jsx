import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './components/cart.css'
import './components/NavBar.css'
import './components/ItemListContainer.css'
import './components/ItemDetailContainer.css'
import './components/ItemDetail.css'
import './components/Item.css'
import './components/Checkout.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
