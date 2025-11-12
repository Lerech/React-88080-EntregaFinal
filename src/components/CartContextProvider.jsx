import { useState } from 'react'
import CartContext from './CartContext'


export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addItem(item) {
    const newCartItems = structuredClone(cartItems)
    newCartItems.push(item)
    setCartItems(newCartItems)
  }

  function removeItem(id) {
    const newCartItems = cartItems.filter(item => item.id !== id)
    setCartItems(newCartItems)
  }

  function clearCart() {
    setCartItems([])
  }

  function countItemsInCart() {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  function getTotalPrice() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
  <CartContext.Provider
    value={{
      cart: cartItems,
      addItem,
      removeItem,
      clearCart,
      countItemsInCart,
      getTotalPrice
    }}
  >
    {children}
  </CartContext.Provider>
)
}
