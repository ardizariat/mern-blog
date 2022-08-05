import React, { useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ArticleDetail = () => {
  const { articleDetail } = useSelector((state) => state);
  const article = articleDetail;
  const dispatch = useDispatch();
  const params = useParams();
  const articleId = params.articleId;
  const getArticle = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${articleId}`
    );
    dispatch({ type: "GET_ARTICLE_DETAIL", payload: data });
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <Link className="mt-4 btn btn-outline-dark" to="/articles">
        Back
      </Link>
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.body}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default ArticleDetail;
