import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <div >
            <ul className="nav-container">
                <li className="nav-items">
                    <NavLink to='/cart'> <CartWidget /></NavLink>
                </li>

                <li className="nav-items">
                    <NavLink to='/' className='nav-a' > <span>logo</span></NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to='/' className='nav-a' > <span>RockPort</span></NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to='categoria/importados' className='nav-a'><span>Autos Importados</span></NavLink>
                </li>
                <li className="nav-items">
                    <NavLink to='categoria/nacionales' className='nav-a'><span>Autos Nacioneles</span></NavLink>
                </li>




            </ul>
            <hr className='linea'></hr>

        </div >
    )

}
export default Navbar;