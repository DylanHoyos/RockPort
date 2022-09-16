import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ titulo, precio, img, id }) => {
    return (
        <Link to={`/detalle/${id}`} style={{ textDecoration: 'none', color: 'black' }} >
            <div className="container" >

                <h1 className="container-titulo">{titulo}</h1>
                <img src={img} alt={titulo} />
                <h3 className="container-precio">Precio: {precio}$</h3>
                <button className="buttons">Ver detalles</button>

            </div>
        </Link>
    )
}

export default Item