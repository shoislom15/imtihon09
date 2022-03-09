import { createStore } from "redux";

const initialState = {
  categories: [],
  books: [],
  search: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload.data };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload.data };
    case "SET_BOOKS":
      return { ...state, books: { ...action.payload.data } };
    default:
      return initialState;
  }
};

const store = createStore(reducer);

const dispatch = store.dispatch;

export { dispatch };

export default store;
