import { useEffect, useState } from "react";
import { getProduct } from "../services/asyncMock";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((resp) => {
      setProduct(resp);
    });
  }, [id]);

  const sumar = () => {
    if (cantidad < product.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {};

  return (
    <div className="detail-container">
      <div className="detail-info">
        <h1> {product?.name} </h1>
        <p>ID de producto: {product?.id}</p>

        <p>Descripcion: {product?.description}</p>
        <img src={product?.image} alt="" />
        <p>Precio ${product?.price}</p>
        <p>Categoria: {product?.category}</p>

        <div>
          <button onClick={restar}>-</button>
          <span>{cantidad}</span>
          <button onClick={sumar}>+</button>
        </div>
        <button onClick={agregarAlCarrito}>Sumar al Carrito</button>
      </div>
    </div>
  );
}
