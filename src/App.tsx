import "./App.css";
import Navbar from "./navbar/Navbar.tsx";
import ProductDetails from "./product-details-section/ProductDetails.tsx";
import ProductSpecifications from "./product-specification-section/ProductSpecifications.tsx";
import Footer from "./footer/Footer.js";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ProductDetails />
      <ProductSpecifications />
      <Footer />
    </div>
  );
}

export default App;
