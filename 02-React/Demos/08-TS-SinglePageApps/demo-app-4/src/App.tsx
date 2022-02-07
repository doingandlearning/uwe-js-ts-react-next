import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Menu from './MenuWithLinks';
import Menu from './MenuWithNavLinks';
import Home from './Home';
import Products from './Products';
import Product from "./Product"
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import ProductsMasterDetail from './ProductsMasterDetail';

function App() {
  return (
    <div>

      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productsmasterdetail/*" element={<ProductsMasterDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
