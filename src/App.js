import logo from './logo.svg';
import './App.css';
import './components/ItemCount/ItemCount.css';
import './components/Item/Item.css'

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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ItemListContainer />





      </header>

    </div>
  );
}

export default App;
