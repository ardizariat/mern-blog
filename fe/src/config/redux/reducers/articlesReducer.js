const initialStateArticles = {
  articles: [],
  articleDetail: {},
};

const articlesReducer = (state = initialStateArticles, action) => {
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

export default articlesReducer;
