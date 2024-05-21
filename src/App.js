import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Register from "./components/Register"
import Login from "./components/Login"
import Createproduct from "./components/Createproduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productdetail from "./components/Productdetail";
import Editproduct from "./components/Editproduct";


function App() {


  return (


    <Router>
      <Header></Header>
      <Routes> {/* Varía según las URL. Según ellas, muestra una cosa u otra */}
        <Route exact path="/" element={<Home />} /> {/* El "exact" es para la primer ruta solamente */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element= {<Login />} />
        {/* El primero va sin nombre porque es el path exacto, los otros sí, porque tienen que definirse */}
        <Route path="/createproduct" element={<Createproduct />}/> 
        <Route path="/productdetail/:id" element={<Productdetail/>} />
        <Route path="/editproduct" element={<Editproduct/>} />
      </Routes>
      <Footer></Footer>
      
    </Router>
  );
}

export default App;


