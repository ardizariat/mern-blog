import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Row className="mt-5 d-flex justify-content-center align-items-center">
      <Col lg={4} md={4} sm={12}>
        <Card className="shadow">
          <Card.Body>
            <form>
              <h3>Sign Up</h3>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
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
                  Register
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Have account? <Link to="/login">Login</Link>
              </p>
            </form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
