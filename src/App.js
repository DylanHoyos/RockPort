import logo from './logo.svg';
import './App.css';
import './components/ItemCount/ItemCount.css';
import './components/Item/Item.css'
import './components/ItemDetail/ItemDetail.css'

import './components/Navbar/Navbar.js'
import Navbar from './components/Navbar/Navbar.js';

import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">

        <ItemListContainer />
        <ItemDetailContainer />





      </header>

    </div>
  );
}

export default App;
