import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../../components/CartWidget/CartWidget';



function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Andino Outfiters</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Remera</Nav.Link>
            <Nav.Link href="#pricing">Cargos</Nav.Link>
            <Nav.Link href="#pricing">Buzos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#pricing">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;
