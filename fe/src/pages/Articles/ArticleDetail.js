import React, { useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticleDetail } from "../../config/redux/actions";

const ArticleDetail = () => {
  const { articleDetail } = useSelector((state) => state.articlesReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    dispatch(getArticleDetail(articleId));
  }, [dispatch]);

  return (
    <>
      <Link className="mt-4 btn btn-outline-dark" to="/articles">
        Back
      </Link>
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Card className="shadow">
          <Card.Body>
            <Card.Title>{articleDetail.title}</Card.Title>
            <Card.Text>{articleDetail.body}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default ArticleDetail;
