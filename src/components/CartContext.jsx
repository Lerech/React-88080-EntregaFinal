import { createContext, useState } from 'react';
import { CartContextProvider } from './CartContextProvider';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const countItemsInCart = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const addItem = (item, quantity) => {
    console.log(item);
    console.log(quantity);

  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addItem,
    removeItem,
    clearCart,
    countItemsInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;