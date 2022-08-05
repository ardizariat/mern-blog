import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ArticleTable = () => {
  const { articles } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getArticles = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch({ type: "GET_ARTICLES", payload: data });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Row className="d-flex justify-content-center align-items-center">
      {articles &&
        articles.map((article, index) => (
          <Col md={4} lg={4} sm={12} key={index} className="my-3">
            <Card>
              <Card.Img
                variant="top"
                alt="image"
                src="https://random.imagecdn.app/500/150"
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.body}</Card.Text>
                <Link to={`/articles/${article.id}`} className="btn btn-dark">
                  Detail
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default ArticleTable;
