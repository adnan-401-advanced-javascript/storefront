import React from "react";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpleCart from "./components/SimpleCart";

import "./App.css";

const App = () => (
  <>
    <Header />
    <SimpleCart />
    <Categories />
    <Products />
    <Footer />
  </>
);
export default App;
