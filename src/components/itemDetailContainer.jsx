import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import { getProductById } from "../FireStoreService.js"
import { DotLoader } from "react-spinners"
import cartContext from "./CartContext"

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loading: true })
  const { idParam } = useParams()
  const { addItem } = useContext(cartContext)

  useEffect(() => {
    getProductById(idParam).then((res) => setItemData(res))
  }, [idParam])

  if (itemData.loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <DotLoader color={"green"} size={60} />
      </div>
    )
  }

  function handleAddToCart() {
    const itemToAdd = {
      id: itemData.id,
      title: itemData.name,
      price: itemData.price,
      quantity: 1,
      img: itemData.img
    }
    addItem(itemToAdd)
    alert("Producto agregado al carrito!")
  }

  return (
    <div className="item-detail" style={{ textAlign: "center", marginTop: "2rem" }}>
      <img src={itemData.img || ""} alt={itemData.name} style={{ width: "30%" }} />
      <h2>{itemData.name}</h2>
      <p>{itemData.description || "Descripción del producto"}</p>
      <p>Precio: ${itemData.price}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetailContainer
