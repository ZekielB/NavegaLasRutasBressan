import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { getCategory } from "../services/asyncMock";
import ProductCard from "../components/ProductCard";
import './CategoryView.css'

export default function CategoryView() {
  const { itemName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    getCategory(itemName).then((response) => setCategoryProducts(response));
  }, [itemName]);

  return (
    
    <div className="item-list">
      <h1>Productos de {itemName} </h1>

      {categoryProducts.map((product) => (

      
       
<ProductCard key={product.id} product={product}/>



      ))}
   </div>
  );
}
