import axios from "axios";

const setArticles = () => async (dispatch) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  dispatch({ type: "GET_ARTICLES", payload: data });
};

const getArticleDetail = (articleId) => async (dispatch) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );

  dispatch({ type: "GET_ARTICLE_DETAIL", payload: data });
};

export { setArticles, getArticleDetail };
