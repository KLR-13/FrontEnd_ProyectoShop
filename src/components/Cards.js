import imagen from "../assests/Zapas.jpg"
import axios from "axios" // Es una dependencia para llamar y consumir API´s, lee los productos
import {useState, useEffect} from "react" // Para guardar info y renderizarlo apenas tenga la info respectivamente.
export default function Cards() { //Export es para exportar todo para llevarlo al App.JS
const [products, setProducts]=useState([]) //Acá se guarda la info de la API

useEffect(()=>{
    axios.get("http://localhost:3001/products")
    .then((data)=>setProducts(data.data)) // Esta data es a lo que responde el axios... Si sale bien.
.catch((error)=>console.log(error))
},[]) 
//El useEffect ejecuta primero lo que tiene primero (), el segundo es lo que hace que se vuelva a lanzar (si está vacío, solo se lanza una vez) [],
    return (
        <div className= "bloque">
            <div className="Titulo">
                <h1>- Comprar por categoría -</h1>
            </div>
            <div className="tarjetas">
                {products.length?
                products.map((product)=>{return(
                    <div className="uno">
                    <h3>{product.Nombre}</h3>
                    <h3>${product.Precio}</h3>
                    <h3>{product.Descripción}</h3>
                    <img src={product.imagenURL}></img> {/* Traemos todo del Back End! Recorremos todo y nos devuelve cada div subido con sus diferentes contenidos. */}
                </div>
                )}) 
                :null} 
                {/* El map recorre un array para darte otro array */}
                {/* <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div>
                <div className="uno">
                    <h3>Nombre</h3>
                    <h3>Precio</h3>
                    <h3>Descripción</h3>
                    <img src={imagen}></img>
                </div> */}
            </div>
        </div>
    )
}