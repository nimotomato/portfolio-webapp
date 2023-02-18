import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
      <Navbar sticky="top" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#top-anchor">To top</Nav.Link>
            <Nav.Link href="#bio-anchor">Bio</Nav.Link>
            <Nav.Link href="#cv-anchor">CV</Nav.Link>
            <Nav.Link href="#contact-anchor">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;