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

const loadOneProduct = () => ({
  type: "LOAD_ONE_PRODUCT_START",
});

const loadOneProductSuccess = (data) => ({
  type: "LOAD_ONE_PRODUCT_SUCCESS",
  payload: data,
});

const loadOneProductFailled = (msg) => ({
  type: "LOAD_ONE_PRODUCT_FAILLED",
  payload: msg,
});

export const getOneProductAction = (id) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loadOneProduct());
  axios.get(`${API}/products/${id}`)
    .then((response) => {
      const { data } = response;
      dispatch(loadOneProductSuccess(data[0]));
      resolve();
    }).catch((err) => {
      dispatch(loadOneProductFailled(err.message));
      reject();
    });
});

export const as = "";
