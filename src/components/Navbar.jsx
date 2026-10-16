import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

function MyNavbar() {
  
 return (
    <Navbar expand="md" className="navbar-custom" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white fw-bold">
          Chaima Salhi
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Accueil</Nav.Link>
            <Nav.Link as={NavLink} to="/apropos">À propos</Nav.Link>
            <Nav.Link as={NavLink} to="/projets">Projets</Nav.Link>
            <Nav.Link as={NavLink} to="/competence">Compétences</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar