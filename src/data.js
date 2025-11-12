const productos = [
    { id: 1, 
        name: "🚗 Auto con bloques", 
        img: "http://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/imgs/Autito%204.jpg",
        price: 10000, 
        description: "🚘 Incluye piezas encastrables. Ideal para desarrollar coordinacion y motricidad, pensado para el juego libre y didactico. Desafia a guiar la canica con movimientos suaves, recomendado para actividades inclusivas." },
    { id: 2, 
        name: "🌈 Laberinto de colores con canica", 
        img:"https://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/imgs/Laberinto2.jpg",
        price: 15000, 
        description: "🧠 Un laberinto de colores vibrantes que estimula la creatividad y la resolución de problemas. Incluye canicas de diferentes tamaños y colores." },
    { id: 3, 
        name: "🔶 Tatetí Gigante",
        img: "https://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/imgs/ta-te-ti.jpg", 
        price: 12000, 
        description: "🎯 Un tatetí de gran tamaño para jugar en familia. Fomenta la colaboración y el pensamiento estratégico." },
];

export default productos;
export function getProductById(id) {
    return productos.find(product => product.id === id);
}