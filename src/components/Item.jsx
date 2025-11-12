import { Link } from "react-router";
import ItemCount from "./ItemCount";


export default function Item(props) {
    return (

        <div className="item" style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <img width="30%" src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.precio}</p>
            <Link to={`/detail/${props.id}`}>
                <button>Ver Detalle</button>



            </Link>
            <ItemCount />

        </div>
    );
}