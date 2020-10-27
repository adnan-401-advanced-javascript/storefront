export const addToCartAction = (item) => ({
  type: "ADDTOCART",
  payload: item,
});
export const removeFromCartAction = (item) => ({
  type: "REMOVEFROMCART",
  payload: item,
});
