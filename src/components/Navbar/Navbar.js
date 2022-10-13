import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import logo from './logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div >
            <ul className="nav-container">
                <div className='nav-container-items-logo'>
                    <li className="nav-items">
                        <NavLink to='/' > <div className='container-logo'></div></NavLink>
                    </li>


                    <li className="nav-items">
                        <NavLink to='/' className='nav-a' > <span >RockPort</span></NavLink>
                    </li>

                </div>


                <div className='nav-container-items'>
                    <li className="nav-items">
                        <NavLink to='categoria/importados' className='nav-a'><span>Autos Importados</span></NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to='categoria/nacionales' className='nav-a'><span>Autos Nacioneles</span></NavLink>
                    </li>

                </div>


                <div className='nav-container-items'>
                    <li className="nav-items">
                        <NavLink to='/cart' className='nav-container-cart'> <CartWidget /></NavLink>
                    </li>

                </div>
            </ul>
            <hr className='linea'></hr>

        </div >
    )

}
export default Navbar;