import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Navbar/Navbar.js'
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';



function App() {
  return (

    <BrowserRouter >
      <CartProvider>
        <Navbar />
        <div className='App-header'>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='categoria/:catID' element={<ItemListContainer />} />
            <Route path='detalle/:id' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>

    </BrowserRouter>


  );
}

export default App;
