import { useState } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import ProductDetails from './product-details-section/ProductDetails';
import ProductSpecifications from './ProductSpecifications';
import Footer from './Footer';


function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <ProductDetails />
      <ProductSpecifications />
      <Footer />
    </div>
  )
}

export default App
