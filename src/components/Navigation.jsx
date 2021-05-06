import React from "react";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";

const Navigation = (props) => {
  const { menuTitles, urlEndPoints } = props;
  const idVar = "Dario";

  return (
    <Navbar
      collapseOnSelect
      expands="md"
      bg="dark"
      variant="dark"
      style={{ marginTop: "0.75rem" }}
    >
      <Container>
        <NavbarBrand href="/">{idVar}</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {menuTitles.map((menuItem, Index) => (
              <Nav.Link href={urlEndPoints[Index]}>{menuItem}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
