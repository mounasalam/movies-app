import React from 'react';
import '../styles/header.css';
import  { Navbar, Nav } from 'react-bootstrap'

import { Overlay } from "@react-md/overlay";


function Header() {
    const toggle = true;
    const requestClose = false;
  return (
      <div className="wrapper">
          <div className="background-img"> 
          <div className="overlay"></div>
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
                <Nav.Link href="#deets">
                    {/* <input type="text" name="q" id="search-q" class="field -borderless" data-lpignore="true" value=""> */}
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
    </div>
  );
}

export default Header;
