import { useParams } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from "react" // Para guardar info y renderizarlo apenas tenga la info respectivamente.
import Editproduct from './Editproduct';
export default function Productdetail() { //Export es para exportar todo para llevarlo al App.JS
    const [product, setProduct] = useState() //Acá se guarda la info de la API

    const { id } = useParams()

    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:3001/products/${id}`) // Incrustamos una variable de ID, porque es lo que busca.
            //Los Backsticks sirven para poner variables dentro, sirven para estos caso.
            .then((data) => {
                console.log(data.data)
                setProduct(data.data)
            }) // Esta data es a lo que responde el axios... Si sale bien.
            .catch((error) => console.log(error))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/products/${id}`)
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }

    return (
        <div className="product">
            <h3>{product?.Nombre}</h3>
            <h3>${product?.Precio}</h3>
            <h3>{product?.Descripción}</h3>
            <img src={product?.imagenURL}></img>

            {/* El signo de pregunta es por si existe el producto */}

            <button>Edit</button>
            <button onClick={() => handleDelete()}>Delete</button>

            {product && <Editproduct producto={product}></Editproduct>}
        </div>

        /* ------------------------------- BOTÓN DE EDICIÓN -------------------------- */


    )
}



