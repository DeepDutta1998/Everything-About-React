import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../styles/navbar.css';
import { Link }  from "react-router-dom";
import LogInForm from "./LogInForm";
import RegistrationForm from "./RegistrationForm";
export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}