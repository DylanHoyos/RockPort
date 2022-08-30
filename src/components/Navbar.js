import logo from '../logo.svg'
const Navbar = () => {
    return (
        <div >
            <ul className="nav-container">
                <li className="nav-items">
                    <img src={logo} className="nav-logo" />
                </li>
                <li className="nav-items">
                    <a href='#' className='nav-a' > <span>RockPort</span></a>
                </li>
                <li className="nav-items">
                    <a href='#' className='nav-a'><span>Home</span></a>
                </li>
                <li className="nav-items">
                    <a href='#' className='nav-a'><span>Catalogo</span></a>
                </li>


            </ul>
            <hr className='linea'></hr>

        </div >
    )

}
export default Navbar;