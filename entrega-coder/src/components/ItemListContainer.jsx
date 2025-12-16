import { productos } from "../services/asyncMock";
import './ItemListContainer.css'

import ProductCard from "./ProductCard";

export default function ItemListContainer({productos}) {
  return (
    <div className="item-list">
      {productos.map((productos) => (
        <ProductCard key={productos.id} product={productos} />
      ))}
    </div>
  );
};
