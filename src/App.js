import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './components/Navbar/Navbar.js'
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (

    <BrowserRouter >
      <Navbar />
      <div className='App-header'>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='categoria/:catID' element={<ItemListContainer />} />
          <Route path='detalle/:id' element={<ItemDetailContainer />} />
          <Route path='cart' element={<CartWidget />} />


        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
