
import { addDoc, getDoc, getFirestore, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, getDocs, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FS_APIKEY,
    authDomain:  import.meta.env.VITE_FS_AUTH,
    projectId:  import.meta.env.VITE_FS_PROJECTID,
    storageBucket: import.meta.env.VITE_FS_BUCKET,
    messagingSenderId: "724281755751",
    appId: import.meta.env.VITE_FS_APPID,
    measurementId: "G-D59KMNFPJE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData() {
    const productsRef = collection(db, "products");
    const productsSnapshot = await getDocs(productsRef);
    const docs = productsSnapshot.docs;
    console.log(docs[0].data());
    const dataDocs = docs.map(item => {
        return { ...item.data(), id: item.id }
    });
    return dataDocs;

}
export async function getProductById(idParam) {
    const docRef = doc(db, "products", idParam);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    const idDoc = docSnapshot.id;
    return { ...docData, id: idDoc };
}

export async function getProductsByCategory(categParam) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", categParam));

    const productsSnapshot = await getDocs(q);
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map(item => {
        return { ...item.data(), id: item.id }
    });
    return dataDocs
}

export async function createBuyOrder(orderData) {
    const ordersRef = collection(db, "orders");
    const newDoc = await addDoc(ordersRef, orderData);
    return newDoc;

}

export async function exportProducts() {
    const productsRef = collection(db, "products");
    // eslint-disable-next-line no-undef
    for (let item of productos) {
        const newDoc = await addDoc(productsRef, item);
        console.log("Documento creado con id: ", newDoc.id);
    }
}

export default getData;

