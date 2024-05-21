// Los componentes en React siempre van en mayúscula si no rompen.
import { useNavigate } from "react-router-dom"
export default function Header() { //Export es para exportar todo para llevarlo al App.JS
    const navigate = useNavigate()
    return (      // Return solo devuelve una función. Para crear + divs, se hace uno general y se ponen dentro los otros.
        <div className="nav-bar">
            <div className="primer-nav">
                <div className="one">
                    <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}> <h1>Storefront</h1> </a> {/* El barra no tiene nada,
                     porque el link no tiene ningún nombre. */}
                    <p>Just another WebCommerce site</p>
                </div>
                <div className="two">
                    <a style={{ cursor: "pointer" }} onClick={() => navigate("/register")}> Register </a> {/* Style es para ponerle
                     el cursor! */}
                    <a style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>MyAccount</a>
                    <div className="Input1"><input className="i-uno" placeholder="Search products..."></input><i class="fas fa-search"></i></div>
                </div>
            </div>
            <div className="segundo-nav-bar">
                <div className="three">
                    <a>Shop</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
                <div className="search">
                    <a>$0.00</a>
                    <div className="Input2"><label for="0 items">0 items</label><i class="fas fa-shopping-basket"></i></div>
                </div>

            </div>
        </div>

    )
}
