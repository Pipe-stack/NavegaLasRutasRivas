export default function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <strong>Precio: ${product.price}</strong>
    </div>
  );
}
