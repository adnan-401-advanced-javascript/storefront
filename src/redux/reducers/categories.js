const initialState = {
  categories: [],
  /*
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
  */
  activeCategory: null,
  isLoading: false,
  msg: "",
};

export default (state = initialState, action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case "CHANGE_ACTIVE":
      return {
        ...state,
        activeCategory: payload,
      };
    case "LOAD_CATEGORIES_START":
      return {
        ...state,
        isLoading: true,
        categories: [],
      };
    case "LOAD_CATEGORIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        categories: [...payload],
      };
    case "LOAD_CATEGORIES_FAILLED":
      return {
        ...state,
        isLoading: false,
        msg: payload,
      };
    default:
      return state;
  }
};
