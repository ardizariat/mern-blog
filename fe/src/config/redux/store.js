import { createStore } from "redux";

const initialState = {
  articles: [],
  articleDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    case "GET_ARTICLE_DETAIL":
      return {
        ...state,
        articleDetail: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
