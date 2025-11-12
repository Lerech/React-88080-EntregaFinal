import { useContext } from "react";
import CartContext from "./CartContext";

function CartWidget({ onClick }) {
    const { countItemsInCart } = useContext(CartContext)
    const totalItems = countItemsInCart()
    return (
        <div className="cart-container">
            <button className="cart-btn" onClick={onClick}>
                <img className="cart-img" src="https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png?width=340&height=340&fit=crop" alt="cart" />
                {totalItems > 0 && (
                    <span
                        style={{
                            position: "initial",
                            top: 0,
                            right: 0,
                            background: "red",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.2rem 0.5rem",
                            fontSize: "0.8rem",
                        }}
                    >
                        {totalItems}
                    </span>
                )}
            </button>
        </div>
    );
}
export default CartWidget;