import React from 'react'

import './ItemDetail.css'


const ItemDetail = ({ info }) => {

    // console.log(info);
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



                <button className='boton-detalle'>Agregar al carrito</button>
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