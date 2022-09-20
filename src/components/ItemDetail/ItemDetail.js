import { useState } from "react"
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'


const ItemDetail = ({ info }) => {
    let initial = 1;
    const [contador, setContador] = useState(initial);

    const onAdd = (cantidad) => {
        console.log(`se agrego al carrito, cantidad: ${cantidad}`);
    }


    return (
        <div className='containerdet '>

            <div className='containerdet-izq'>
                <img src={info.img} alt={info.titulo} />
                <p className='containerdet-precio'>{info.descripcion}</p>

            </div>

            <div className='container-detalle'>
                <h1 className='containerdet-titulo'> {info.titulo}</h1>
                <h3 className='containerdet-detalle'> Informacion: {info.detalle}</h3>
                <p className='containerdet-precio'> Precio: ${info.precio}</p>

                <div className="container-detalle-count">

                    <ItemCount initial={initial} stock={5} onAdd={onAdd} contador={contador} setContador={setContador} />
                </div>

                <hr className='linea'></hr>

                <div className='containerdet-footer'>
                    <p className='containerdet-p'> Id: {info.id}</p>
                    <p className='containerdet-p'>Marca: {info.marca}</p>



                </div>
            </div>


        </div>
    )
}

export default ItemDetail