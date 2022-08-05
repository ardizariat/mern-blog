import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Row className="mt-5 d-flex justify-content-center align-items-center">
      <Col lg={4} md={4} sm={12}>
        <Card className="shadow">
          <Card.Body>
            <form>
              <h3>Sign In</h3>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Don't have account? <Link to="/register">Register</Link>
              </p>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
