import logo from './logo.svg';
import './App.css';
import './components/ItemCount/ItemCount.css';

import './components/Navbar/Navbar.js'
import Navbar from './components/Navbar/Navbar.js';
// import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
// import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemListContainer greeting='Hola Usuario, buenas tardes' stock="3" />





      </header>

    </div>
  );
}

export default App;
