import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../FireStoreService"; 


function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then(res => {
      setProductos(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Cargando productos...</h2>;
  }

  return (
    <div
      className="productos-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {productos.map(producto => (
        <div
          key={producto.id}
          className="producto-card"
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <img
            src={producto.img}
            alt={producto.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />

          <h3>{producto.name}</h3>
          <p>${producto.price}</p>

          <Link to={`/detail/${producto.id}`}>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#0d6efd",
                color: "white",
                cursor: "pointer",
              }}
            >
              Ver más detalle
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Productos;
