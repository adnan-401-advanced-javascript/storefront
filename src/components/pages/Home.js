import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Categories from "../Categories";
import Products from "../Products";
import SimpleCart from "../SimpleCart";

import { getCategoriesAction, getProductsAction, changeActiveCategoryAction } from "../../redux/actions";

class Home extends Component {
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
        <SimpleCart />
        <Categories />
        <Products />
      </>
    );
  }
}

Home.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  changeActiveCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getCategories: getCategoriesAction, getProducts: getProductsAction, changeActiveCategory: changeActiveCategoryAction,
};

export default connect(null, mapDispatchToProps)(Home);
