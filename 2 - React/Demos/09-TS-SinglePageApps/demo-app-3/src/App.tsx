import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Menu from './MenuWithLinks';
import Menu from './MenuWithNavLinks';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div>

      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
