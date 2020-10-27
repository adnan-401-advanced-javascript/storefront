export const decreaseInventoryAction = (name) => ({
  type: "DECREASEINVENTORY",
  payload: name,
});

export const increaseInventoryAction = (name) => ({
  type: "INCREASEINVENTORY",
  payload: name,
});
