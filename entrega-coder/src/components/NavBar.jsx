import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <nav className="nav-contenedor">
      <img className="logo1" src="../src/assets/img/logotecno.png" alt="" />  
        <Link to="/">
          <Buttons name="Home" color="rgb(17, 129, 209)" />
        </Link>

        <Link to="/category/computacion">
        <Buttons name="Computación" color="rgb(17, 129, 209)" />
        </Link>

        <Link to="/category/telefonia">
        <Buttons name="Telefonia" color="rgb(17, 129, 209)" />
        </Link>

        <Link to="/category/robotica">
        <Buttons name="Robotica" color="rgb(17, 129, 209)" />
        </Link>
        


        <Link to="/contact">
          <Buttons name="Contacto" color="rgb(17, 129, 209)" />
        </Link>

        <img
          className="logo1"
          src="../src/assets/img/cart-copy.svg"
          alt="logo1"
        />
      </nav>
    </>
  );
}
