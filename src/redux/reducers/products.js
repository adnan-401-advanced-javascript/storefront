/* eslint-disable no-param-reassign */
const initialState = {
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
        products: initialState.products.filter((product) => product.category === payload),
      };
    case "DECREASEINVENTORY":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.name === payload) {
            product.inventoryCount -= 1;
          }
          return product;
        }),
      };
    case "INCREASEINVENTORY":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.name === payload) {
            product.inventoryCount += 1;
          }
          return product;
        }),
      };
    default:
      return state;
  }
};
