import React from "react";
import { NavbarComponent } from "../../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Articles, Home, Login, Register } from "../../pages";
import { Container } from "react-bootstrap";

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/articles/*" element={<Articles />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
