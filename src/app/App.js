import "../style/App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../common/pages/AboutPage";
import ContactPage from "../common/pages/ContactPage";
import Error404Page from "../common/pages/Error404Page";
import LoginPage from "../common/pages/LoginPage";
import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import ProductsPage from "../common/pages/ProductsPage";
import CartPage from "../common/pages/CartPage";
import AddProductPage from "../common/pages/AddProductPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="add-product" element={<AddProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
