const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case "ADDTOCART":
      return { ...state, items: [...state.items, payload] };
    case "REMOVEFROMCART":
      return { ...state, items: state.items.filter((item) => item.name !== payload) };
    default:
      return state;
  }
}
