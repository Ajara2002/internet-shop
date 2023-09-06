import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Products from '../Components/Products/Products';
 
const Main = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("internet-shop")) || []);

  useEffect(() => {
    localStorage.setItem("internet-shop", JSON.stringify(cart))
  }, [cart])
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:product" element={<Products />} />
      </Routes>
    </div>
  );
};

export default Main;
