
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";
import ShoesCategory from "./Pages/Category";
import ProductsShowcase from "./Pages/Products";
import DealOfTheWeek from "./Pages/DealOfTheWeek";
import BestSelling from "./Pages/BestSelling";
import HeroSlider from "./Pages/Hero";
import Buy2Get1Free from "./Pages/Buy2Get1Free";


const Home = () => {
  return (
    <>
      <HeroSlider/>
      <ShoesCategory />
      <ProductsShowcase />
       <BestSelling />
      <DealOfTheWeek />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shoes" element={<ShoesCategory />} />
          <Route path="/buy-2-get-1-free" element={<Buy2Get1Free />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
