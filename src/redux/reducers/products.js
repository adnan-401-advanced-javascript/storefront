/* eslint-disable no-param-reassign */
const initialState = {
  products: [], // currentProducts
  allPrdoucts: [],
  /*
  products: [{
    category: "electronics",
    name: "Samsung TV",
    description: "4k Smart tv 65\"",
    price: "999.99",
    inventoryCount: 100,
    image: "https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/104994/aecbf447-71c2-4053-9091-d1d420737198.jpg",
  },
  {
    category: "food",
    name: "Burgger",
    description: "KFC",
    price: "11.99",
    inventoryCount: 15,
    image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
  },
  {
    category: "food",
    name: "Banana",
    description: "Banana",
    price: "16.99",
    inventoryCount: 2000,
    image: "https://www.news-medical.net/image.axd?picture=2018%2F2%2Fbanana.jpg",
  },
  ],
  */
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
        products: state.allPrdoucts.filter((product) => product.category === payload),
      };
    case "SET_INVENTORY":
      return {
        ...state,
        products: state.products.map((product) => {
          const { name, inventoryCount } = payload;
          if (product.name === name) {
            product.inventoryCount = inventoryCount;
          }
          return product;
        }),
      };
    case "LOAD_PRODUCTS_START":
      return {
        ...state,
        isLoading: true,
        allPrdoucts: [],
      };
    case "LOAD_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        allPrdoucts: [...payload],
      };
    case "LOAD_PRODUCTS_FAILLED":
      return {
        ...state,
        isLoading: false,
        msg: payload,
      };
    default:
      return state;
  }
};
