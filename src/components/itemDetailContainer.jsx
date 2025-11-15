import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../FireStoreService.js"
import { DotLoader } from "react-spinners"
import CartContext from "./CartContext"
import ItemCount from "./ItemCount"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loading: true })
  const { idParam } = useParams()
  const { addItem } = useContext(CartContext)

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

  function handleAddToCart(quantitySelected) {
    const itemToAdd = {
      id: itemData.id,
      title: itemData.name,
      price: itemData.price,
      img: itemData.img,
      quantity: quantitySelected,   
    }

    addItem(itemToAdd)
    toast.success(`Agregaste ${quantitySelected} unidades al carrito!`)
  }

  return (
    <div className="item-detail" style={{ textAlign: "center", marginTop: "2rem" }}>
      <img src={itemData.img || ""} alt={itemData.name} style={{ width: "30%" }} />
      <h2>{itemData.name}</h2>
      <p>{itemData.description || "Descripción del producto"}</p>
      <p>Precio: ${itemData.price}</p>

      <ItemCount
        stock={10}
        initial={1}
        onAdd={handleAddToCart}
      />
    </div>
  )
}

export default ItemDetailContainer