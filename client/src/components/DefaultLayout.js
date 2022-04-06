import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar expand="lg" className='nav'>
        <Container>
          <Navbar.Brand href="#home">GetTheCar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content">{props.children}</div>
    </>
  );
};

export default DefaultLayout;
