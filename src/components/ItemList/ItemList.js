import Item from "../Item/Item";

const ItemList = ({ catalogo }) => {
    // console.log(catalogo);
    return (
        <>
            {
                catalogo.map((car) =>
                (<Item
                    key={car.id}
                    id={car.id}
                    titulo={car.title}
                    precio={car.price}
                    img={car.image}
                />)
                )
            }


        </>
    )
}

export default ItemList