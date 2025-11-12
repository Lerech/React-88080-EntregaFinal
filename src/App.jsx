import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import './components/cart.css'
import './components/navbar.css'
import './components/mockAPIservice'
import ItemDetailContainer from './components/itemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CartContextProvider } from './components/CartContextProvider';
import CartContainer from './components/CartContainer';


function App() {
  


  return (

    <CartContextProvider>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings="Bienvenidos a RJC Juegos Didácticos" />} />
          <Route path="/detail/:idParam" element={<ItemDetailContainer />} />
          <Route path="/category/:catParam" element={<ItemListContainer greetings={'Productos'} />} />
          <Route path="/cart" element={<CartContainer />} />


          <Route path="*" element={<h2>Error 404: URL no encontrada</h2>} />



        </Routes>

      </BrowserRouter>
    </CartContextProvider>
  );

}

export default App;
