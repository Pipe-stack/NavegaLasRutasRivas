import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductDetail from "../components/Product/ProductDetail";
import Spinner from "../components/Spinner";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const found = data.find((p) => p.id === Number(productId)); // ✅ clave
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading product:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <Spinner />;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="product-detail-container">
      <h2>Detalles del producto</h2>
      <ProductDetail product={product} />
    </div>
  );
}
