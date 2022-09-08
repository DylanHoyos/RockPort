import Item from "../Item/Item";

const ItemList = ({ catalogo }) => {
    console.log(catalogo);
    return (
        <>
            {
                catalogo.map((car) =>
                (<Item
                    key={car.id}
                    titulo={car.titulo}
                    precio={car.precio}
                    img={car.img}
                />)
                )
            }


        </>
    )
}

export default ItemList