import Item from "./Item";
import { getProductsByCategory } from "../FireStoreService.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData from "../FireStoreService.js"
function ItemListContainer(props) {
    console.log(getData);
    const [productos, setProductos] = useState([]);
    const { catParam } = useParams();
    useEffect(() => {

        if (catParam) {
            getProductsByCategory(catParam).then(data => {
                console.log("dato recibido", data);
                setProductos(data);
            }).catch(error => {
                console.log("Error: ", error);
            });
        }
        else {
            getData().then(data => {
                console.log("dato recibido", data);
                setProductos(data);
            }).catch(error => {
                console.log("Error: ", error);
            });
        }
    }, [catParam]);

    return (
        <div>
            <div>
                <h1>{props.greetings}</h1>
            </div>
            <section className="itemList">
                <h2>Productos</h2>
                {productos.map(item => (
                    <Item
                        key={item.id}
                        {...item}
                    />
                ))}
            </section>
        </div>
    );
}





export default ItemListContainer;