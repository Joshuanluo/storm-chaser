import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DisplayNavbar = () => {
  const element = <FontAwesomeIcon icon={faBars} className="white" />;
  return (
    <Navbar expand="xxl" className="mainNav">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://higginsstormchasing.com/wp-content/uploads/2020/12/higgins_logo_trans-min.png"
            alt="Higgins Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {element}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Higgins Public TV</Nav.Link>
            <Nav.Link href="#">Weather News & Forcasts</Nav.Link>
            <Nav.Link href="#">Premium Portal</Nav.Link>
            <Nav.Link href="#">Merch</Nav.Link>
            <Nav.Link href="#">My Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DisplayNavbar;
