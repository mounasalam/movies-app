import React from 'react';
import '../styles/header.css';
// import Navbar from 'react-bootstrap/Navbar'
import  { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'



function Header() {
  return (
      <div className="wrapper">
          <div className="background-img"> 
          <div className="layer"></div>
           </div>
      <header className="app-header">
        <Navbar collapseOnSelect expand="md" variant="dark">
            <Navbar.Brand href="#home" className="logo-color">
                MOVIES APP
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Sign in</Nav.Link>
                <Nav.Link href="#deets">Create Account</Nav.Link>
                <Nav.Link href="#deets">Films</Nav.Link>
                <Nav.Link href="#deets">List</Nav.Link>
            
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
    </div>

  );
}

export default Header;
