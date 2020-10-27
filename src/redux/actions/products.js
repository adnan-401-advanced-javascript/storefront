import axios from "axios";
import API from "./API";

const loadProducts = () => ({
  type: "LOAD_PRODUCTS_START",
});

const loadProductsSuccessfully = (data) => ({
  type: "LOAD_PRODUCTS_SUCCESS",
  payload: data,
});

const loadProductsFailled = (msg) => ({
  type: "LOAD_PRODUCTS_FAILLED",
  payload: msg,
});

export const getProductsAction = () => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loadProducts());
  axios.get(`${API}/products`)
    .then((response) => {
      const { data: { results } } = response;
      dispatch(loadProductsSuccessfully(results));
      resolve();
    }).catch((err) => {
      dispatch(loadProductsFailled(err.message));
      reject();
    });
});

export const as = "";
