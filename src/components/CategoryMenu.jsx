import { Link } from "react-router-dom";

export default function CategoryMenu() {
  return (
    <nav className="category-menu">
      <Link to="/" className="active">Inicio</Link>
      <Link to="/category/electronica">Electrónica</Link>
      <Link to="/category/ropa">Ropa</Link>
      <Link to="/category/libros">Libros</Link>
    </nav>
  );
}
