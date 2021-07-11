import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const Header = ({ onNext, onBack, dateDisplay }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Doctors-Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">January</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">February</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">March </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">April </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">May </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">June </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">July </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">August </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">September </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.0">October </NavDropdown.Item>
              <NavDropdown.Item href="#action/3">November </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">December </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">2019</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2020</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">2021</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="mr-3" id="monthDisplay">
            {dateDisplay}
          </div>
          <div>
            <Button className="mr-3" onClick={onBack} id="backButton">
              Back
            </Button>
            <Button className="mr-3" onClick={onNext} id="nextButton">
              Next
            </Button>
          </div>

          <div>
            <Button variant="outline-success">Appoint</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
