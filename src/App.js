import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Categories from "./components/Categories";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpleCart from "./components/SimpleCart";

import { getCategoriesAction, getProductsAction, changeActiveCategoryAction } from "./redux/actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const { getCategories, getProducts, changeActiveCategory } = this.props;
    getCategories()
      .then((categories) => {
        getProducts()
          .then(() => {
            if (categories.length) changeActiveCategory(categories[0].name);
          });
      });
  }

  render() {
    return (
      <>
        <Header />
        <SimpleCart />
        <Categories />
        <Products />
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  changeActiveCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getCategories: getCategoriesAction, getProducts: getProductsAction, changeActiveCategory: changeActiveCategoryAction,
};

export default connect(null, mapDispatchToProps)(App);
