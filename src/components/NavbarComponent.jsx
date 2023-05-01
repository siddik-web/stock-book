import React from "react";
import { Button, Navbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Stock Book</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button>Cat 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
