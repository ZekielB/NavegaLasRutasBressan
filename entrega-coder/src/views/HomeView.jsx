import { Link } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { productos } from "../services/asyncMock";
import Buttons from "../components/Buttons";

export default function HomeView() {
  return (
    <>
      <h1>Bienvenidos a MISION TECNO</h1>
      <img className="logo2" src="../src/assets/img/logotecno.png" alt="" />
      <p>Todos nuestros productos, eliga la categoria o eliga un producto</p>

      <Link to="/category/computacion">
        <Buttons name="Computación" color="rgb(17, 129, 209)" />
      </Link>

      <Link to="/category/telefonia">
        <Buttons name="Telefonía" color="rgb(17, 129, 209)" />
      </Link>

      <Link to="/category/robotica">
        <Buttons name="Robótica" color="rgb(17, 129, 209)" />
      </Link>
      <ItemListContainer productos={productos} />
    </>
  );
}
