const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const [isExist] = state.items.filter((item) => item.name === payload.name);
      return { ...state, items: isExist ? [...state.items] : [...state.items, payload] };
    } case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter((item) => item.name !== payload.name) };
    default:
      return state;
  }
}
