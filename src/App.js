import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Checkout from "./components/pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/pages/ProductDetails";

import "./App.css";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/storefront" component={Home} />
      <Route exact path="/products/:id" component={ProductDetails} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
    <Footer />
  </Router>
);
