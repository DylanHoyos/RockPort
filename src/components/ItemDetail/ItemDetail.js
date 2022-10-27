import { useContext, useState } from "react"
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../../context/CartContext"
import './ItemDetail.css'


const ItemDetail = ({ info }) => {
    let initial = 1;
    const { addProduct } = useContext(CartContext);
    const [contador, setContador] = useState(initial);

    const onAdd = (cantidad) => {

        addProduct(info, cantidad)
    }


    return (
        <div className='containerdet '>
            <h1 className='containerdet-titulo'> {info.title}</h1>
            <div className='containerdet-izq'>
                <img src={info.image} alt={info.title} />
                <p className='containerdet-precio'>{info.descripcion}</p>

            </div>

            <div className='container-detalle'>

                <h3 className='containerdet-detalle'> Potencia: {info.detalle}</h3>
                <p className='containerdet-precio'> Precio: ${info.price}</p>

                <div className="container-detalle-count">

                    <ItemCount initial={initial} stock={5} onAdd={onAdd} contador={contador} setContador={setContador} />
                </div>

                <hr className='linea-det'></hr>

                <div className='containerdet-footer'>
                    <p className='containerdet-p'> Id: {info.id}</p>
                    <p className='containerdet-p'>Marca: {info.marca}</p>



                </div>
            </div>


        </div>
    )
}

export default ItemDetail