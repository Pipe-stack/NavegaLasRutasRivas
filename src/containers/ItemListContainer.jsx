import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import { getProducts } from "../data/products";
import Spinner from "../components/Spinner";

export default function ItemListContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryFilter = !category || category.toLowerCase() === "inicio" ? null : category;

  useEffect(() => {
    setLoading(true);
    getProducts(categoryFilter)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="product-list-container">
      <h1>
        {categoryFilter
          ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)
          : "Todos los productos"}
      </h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
