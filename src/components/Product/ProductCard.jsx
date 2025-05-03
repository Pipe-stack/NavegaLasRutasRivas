import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={`https://via.placeholder.com/300x200?text=${product.name}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <Link to={`/producto/${product.id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
}
