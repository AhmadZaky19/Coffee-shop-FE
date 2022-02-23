import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import Logo from "../../assets/icons/logo.png";
import Search from "../../assets/icons/search.png";
import Chat from "../../assets/icons/chat.png";
import User from "../../assets/img/user.png";

import "./index.css";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img alt="" src={Logo} className="d-inline-block align-top" />
          <Navbar.Text className="brand__logo">Coffee Shop</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="#home" className="menu px-4">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="menu px-4">
              Product
            </Nav.Link>
            <Nav.Link href="#link" className="menu px-4">
              Your Cart
            </Nav.Link>
            <Nav.Link href="#link" className="menu px-4">
              History
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end navbar__right"
        >
          <Nav>
            <img alt="" src={Search} className="icon__right px-3" />
            <img alt="" src={Chat} className="icon__right px-3" />
            <img alt="" src={User} className="user__image px-3 " />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
