import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <>
      <article className="item-card">
        <h3>
          {product.name} - {product.id}
        </h3>
        <img className="item-card-img" src={product.image} alt={product.name} />
        <p>${product.price}</p>

        <Link to={`/productos/${product.id}`} className="details-btn">
        Más detalles
      </Link>
      </article>
    </>
  );
}
