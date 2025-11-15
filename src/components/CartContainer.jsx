import { useContext, useState } from "react";
import CartContext from "./CartContext";
import { createBuyOrder } from "../FireStoreService.js";
import CheckoutForm from "./CheckoutForm";

function CartContainer() {
  const { cart, clearCart, removeItem } = useContext(CartContext);
  const [orderCreated, setOrderCreated] = useState(false);

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      cart,
      total: 999,
      date: new Date(),
    }

    const response = await createBuyOrder(orderData);
    alert(`Gracias por tu compra! este es el id de tu orden de compra: ${response.id}`);
    setOrderCreated(response.id);
    clearCart();
  }


  if (orderCreated) {
    return <section>
      <h2>Gracias por tu compra!</h2>
      <p>Este es el id: {orderCreated}</p>
    </section>
  }

  return <section>
    <h2>Tu carrito de compras</h2>
    <div>
      {cart.map(item => <div key={item.id}>
        <h3>{item.title}</h3>
        <img width="150" src={item.img}></img>
        <p>$ {item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <button onClick={() => removeItem(item.id)}>Limpiar Carrito</button>
      </div>)}
    </div>
    <hr />
    <div>
      Total de tu compra: $999
    </div>

    <CheckoutForm handleCheckout={handleCheckout} />


  </section>
}

export default CartContainer;