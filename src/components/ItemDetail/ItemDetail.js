import React from 'react'
import './ItemDetail.css'


const ItemDetail = ({ info }) => {

    console.log(info);
    return (
        <div className='containerdet'>


            <img src={info[0].img} alt='supra' />
            <div className='container-detalle'>
                <h1 className='containerdet-titulo'>Modelo: {info[0].titulo}</h1>
                <p className='containerdet-detalle'> Informacion: {info[0].detalle}</p>
                <p className='containerdet-precio'> Precio: {info[0].precio}</p>



                <button className='buttons'>Agregar al carrito</button>
            </div>


        </div>
    )
}

export default ItemDetail