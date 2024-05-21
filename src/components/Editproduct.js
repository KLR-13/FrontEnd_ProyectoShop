
import { useState, useEffect } from "react" // Para guardar info y renderizarlo apenas tenga la info respectivamente. El UseEffect no se usa porque no es necesario, ya que no necesita hacer nada.
import axios from "axios" // Para llamar a los productos esta vez, consume la API.
export default function Editproduct({producto}) {
    const [product, setProduct] = useState({ id: producto.id, Nombre:producto.Nombre, Descripción: producto.Descripción, Precio: producto.Precio, imagenURL: producto.imagenURL })
    //Acá se guarda la info de la API

    const handlePut = () => {
        console.log(product)
        axios.put (`http://localhost:3001/products/edit/${product.id}`, product)
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    }

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value /* Para cambiar las claves de forma dinámica y almacenar los datos. Hace una copia de todo. */
        })
    }


    return (
        <div className="load">
            <label>Nombre</label> {/* Es lo que vas a hacer en el input */}
            <input type="text" name="Nombre" onChange={handleChange} value={product.Nombre}></input>
            <label>Descripción</label>
            <input type="text" name="Descripción" onChange={handleChange}  value={product.Descripción}></input>
            <label>Precio</label>
            <input type="text" name="Precio" onChange={handleChange} value={product.Precio}></input>
            <label>imagenURL</label>
            <input type="text" name="imagenURL" onChange={handleChange}  value={product.imagenURL}></input>
            {/* El "name" lo usamos para indicar la clave del objeto donde se guardan los datos de cada uno de los input. */}
            {/* El "onChange "handlePut" es para editar cosas*/}

            <button onClick={()=>handlePut()}>Edit</button> {/* Llamamos la función de arriba cuando clickeamos */}
        </div>
    )
}

/*  ESTO FORMA PART DEL PRODUCT DETAIL, PARA ENTRAR ACÁ, INGRESÁ A PRODUCTDETAIL */