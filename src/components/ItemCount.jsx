import { useState } from "react";

function ItemCount({ initial = 1, onAdd, stock = 30 }) {

    const [count, setCount] = useState(initial);

    function sumar() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function restar() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div
            id="count"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
                flexDirection: "column"
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button onClick={restar}>-</button>

                <p style={{ margin: "0 6px", minWidth: 24, textAlign: "center" }}>
                    {count}
                </p>

                <button onClick={sumar}>+</button>
            </div>

            <button
                onClick={() => onAdd(count)}   
                style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#0d6efd",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;
