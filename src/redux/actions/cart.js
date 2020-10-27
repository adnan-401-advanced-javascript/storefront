import axios from "axios";

import API from "./API";

const setInventory = (name, inventoryCount) => ({
  type: "SET_INVENTORY",
  payload: { name, inventoryCount },
});

const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const addToCartAction = (item) => (dispatch) => {
  axios.put(`${API}/products/${item._id}`, { type: "buy" })
    .then(({ data }) => {
      dispatch(addToCart(item));
      dispatch(setInventory(data.name, data.inventoryCount - 1)); // api return old value before update
    }).catch((err) => {
      console.log("failled to add to cart", err.message); // eslint-disable-line
    });
};

const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

export const removeFromCartAction = (item) => (dispatch) => {
  axios.put(`${API}/products/${item._id}`, { type: "refund" })
    .then(({ data }) => {
      dispatch(removeFromCart(item));
      dispatch(setInventory(data.name, data.inventoryCount + 1)); // api return old value before update
    }).catch((err) => {
      console.log("failled to add to cart", err.message); // eslint-disable-line
    });
};
