import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import categories from "./reducers/categories";
import products from "./reducers/products";
import cart from "./reducers/cart";

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const reducers = combineReducers({ categories, products, cart });

const store = () => createStore(reducers, applyMiddleware(...middlewares));

export default store();
