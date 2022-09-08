

const Item = ({ titulo, precio, img }) => {
    return (
        <div className="container" >
            <h1 className="container-titulo">{titulo}</h1>
            <img src={img} alt={titulo} />
            <h3 className="container-precio">Precio: {precio}$</h3>
            <button className="buttons">Ver detalles</button>
        </div>
    )
}

export default Item