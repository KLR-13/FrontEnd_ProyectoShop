import { useState } from "react" // Para guardar info y renderizarlo apenas tenga la info respectivamente. El UseEffect no se usa porque no es necesario, ya que no necesita hacer nada.
import axios from "axios" // Para llamar a los productos esta vez, consume la API.
import "../Register.css"
export default function Register() {
    const [register,setRegister] = useState({Usuario:"", Email: "", Contrasena:"",})



const handleChange = (event) => {
    setRegister({
        ...register,
        [event.target.name]: event.target.value /* Para cambiar las claves de forma dinámica y almacenar los datos. Hace una copia de todo. */
    })
}

const handleSubmit = () => {
    axios.post("http://localhost:3001/register",register) //El Back recibe el product en azul, o sea, los datos que subimos.
.then((data)=>console.log(data)) //Para enviar la data, muestra la data con el console.log
.catch((data)=>console.log(data)) // Toma la data, la exhiba y muestra si todo salió bien o mal.
}

return (
    <div className="contain">
    <div className="load">
        <label>Usuario</label>
        <input type="text" name="Usuario" onChange={handleChange}></input>
        <label>E-Mail</label>
        <input type="email" name="Email" onChange={handleChange}></input>
        <label>Contraseña</label>
        <input type="password" name="Contrasena" onChange={handleChange}></input>

        <button onClick={()=>handleSubmit()}>REGISTER</button> {/* Llamamos la función de arriba cuando clickeamos */}
        
        </div>

        </div>
)}