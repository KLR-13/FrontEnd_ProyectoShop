import { useState } from "react" // Para guardar info y renderizarlo apenas tenga la info respectivamente. El UseEffect no se usa porque no es necesario, ya que no necesita hacer nada.
import axios from "axios" // Para llamar a los productos esta vez, consume la API.
export default function Createproduct() {
    const [product, setProduct] = useState({ Nombre: "", Descripción: "", Precio: "", imagenURL: "" })
    //Acá se guarda la info de la API

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value /* Para cambiar las claves de forma dinámica y almacenar los datos. Hace una copia de todo. */
        })
    }

    const handleSubmit = () => {
        axios.post("https://backend-proyectoshop.onrender.com/products",product) //El Back recibe el product en azul, o sea, los datos que subimos.
    .then((data)=>console.log(data)) //Para enviar la data, muestra la data con el console.log
    .catch((data)=>console.log(data)) // Toma la data, la exhiba y muestra si todo salió bien o mal.
    }

    return (
        <div className="load">
            <label>Nombre</label> {/* Es lo que vas a hacer en el input */}
            <input type="text" name="Nombre" onChange={handleChange}></input>
            <label>Descripción</label>
            <input type="text" name="Descripción" onChange={handleChange}></input>
            <label>Precio</label>
            <input type="text" name="Precio" onChange={handleChange}></input>
            <label>imagenURL</label>
            <input type="text" name="imagenURL" onChange={handleChange} ></input>
            {/* El "name" lo usamos para indicar la clave del objeto donde se guardan los datos de cada uno de los input. */}
            {/* El "onChange handleChange" es para ingresar múltiples nombres, precios, img, etc. Básicamente cambiás datos por otros con esa función. Es "bajo cambio" */}

            <button onClick={()=>handleSubmit()}>Subir</button> {/* Llamamos la función de arriba cuando clickeamos */}
        </div>
    )
}