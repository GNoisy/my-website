import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"

const Header = () => {
  return (
    <>
      <Container>
        <Navbar
          className="navigBar"
          collapseOnSelect
          expand="lg"
          // bg="dark"
          bg-transparent="true"
          variant="dark"
        >
          {/* <Navbar.Brand className="navBrand" href="/">Giovanni Noisy</Navbar.Brand> */}
          <Navbar.Brand href="#home">
            <img
              src="/logo-01.png"
              width="17%"
              height="17%"
              className="d-inline-block align-top"
              // alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0"
          />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav activeKey="/home" className="navItems">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
