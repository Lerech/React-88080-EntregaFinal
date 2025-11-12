import products from "../data.js";
import Item from "./Item";
import { ClipLoader, DotLoader } from "react-spinners";

function getData() {
    return new Promise((resolve,) => {
        setTimeout(() => {
            console.log("Promesa cumplida");
            resolve(products);
        }, 1000);
    });
}

export function getProductById(idParam) {
    return new Promise((resolve,) => {
        setTimeout(() => {
            const productoRequested = products.find((p) => {
                return String(p.id) === String(idParam);
            });
            resolve(productoRequested);
        }, 500);
    });
}

export function getProductsByCategory(catParam) {
    return new Promise((resolve,) => {
        setTimeout(() => {
            const productosFiltrados = products.filter((p) => {
                return String(p.category) === String(catParam);
            });
            resolve(productosFiltrados);
        }, 500);
    });
}

export default getData;