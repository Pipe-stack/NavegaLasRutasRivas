import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import CategoryMenu from "./components/CategoryMenu";

function App() {
  return (
    <BrowserRouter>
      <CategoryMenu />
      <Routes>
        <Route path="/" element={<h1 className="welcome-title">Bienvenido a nuestra tienda</h1>} />
        <Route path="/category/:category" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
