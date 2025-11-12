import { useState } from "react";
function ItemCount() {

    const [count, setCount] = useState(1);
    const maxValue = 30;
    function suma() {
        if (count < maxValue)
        {setCount(count+1);}
    }
    function resta() {
        if (count > 1) {
            {setCount(count-1)};
        }
    }
    return (
        <div id= "count" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
            <button onClick={resta}>-</button>
            <p>{count}</p>
            <button onClick={suma}>+</button>
        </div>
    );
}
export default ItemCount;