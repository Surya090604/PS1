import React, { Component } from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';
import About from './About';
  

export default class CustomNavbar extends Component {
  render() {
    return (
        
        <Navbar bg="transparent" variant="dark" className="bg-grey">
        <Container>
          <Navbar.Brand as={Link} to={"/"} style={{ color: 'black',fontSize:'24px' }}>Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/about"}style={{ color: 'black',fontSize:'24px' }}>About</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    );
  }
}
