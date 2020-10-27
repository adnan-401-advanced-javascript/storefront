import axios from "axios";
import API from "./API";

export const changeActiveCategoryAction = (name) => ({
  type: "CHANGE_ACTIVE",
  payload: name,
});

const loadCategories = () => ({
  type: "LOAD_CATEGORIES_START",
});

const loadCategoriesSuccessfully = (data) => ({
  type: "LOAD_CATEGORIES_SUCCESS",
  payload: data,
});

const loadCategoriesFailled = (msg) => ({
  type: "LOAD_CATEGORIES_FAILLED",
  payload: msg,
});

export const getCategoriesAction = () => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loadCategories());
  axios.get(`${API}/categories`)
    .then((response) => {
      const { data: { results } } = response;
      dispatch(loadCategoriesSuccessfully(results));
      resolve(results);
    }).catch((err) => {
      dispatch(loadCategoriesFailled(err.message));
      reject();
    });
});
