const initialState = {
  categories: [{
    name: "electronics",
    displayName: "Electronics",
    description: "electronics",
  },
  {
    name: "food",
    displayName: "Food",
    description: "food",
  },
  ],
  activeCategory: "electronics",
};

export default (state = initialState, action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case "CHANGEACTIVE":
      return {
        ...state,
        activeCategory: payload,
      };
    default:
      return state;
  }
};
