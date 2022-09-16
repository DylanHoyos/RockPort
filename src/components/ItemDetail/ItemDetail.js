import React from 'react'
import { Link } from 'react-router-dom';
import './ItemDetail.css'


const ItemDetail = ({ info }) => {

    // console.log(info);
    return (
        <div className='containerdet '>


            <img src={info.img} alt='supra' />
            <div className='container-detalle'>
                <h1 className='containerdet-titulo'>Modelo: {info.titulo}</h1>
                <p className='containerdet-detalle'> Informacion: {info.detalle}</p>
                <p className='containerdet-precio'> Precio: ${info.precio}</p>



                <button className='buttons'>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemDetail