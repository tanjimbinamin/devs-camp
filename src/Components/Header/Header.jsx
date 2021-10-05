import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="pt-4 pb-4 px-5"><NavLink exact to ="/" style={{textDecoration:"none",color:"white"}}>Developers-BootCamp</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto px-4">
                        <Nav.Link >
                            <NavLink exact to="/home" style={{textDecoration:"none",color:"white"}}>
                            Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link ><NavLink exact to="/services" style={{textDecoration:"none",color:"white"}}>
                           Services
                            </NavLink></Nav.Link>
                        <Nav.Link ><NavLink exact to="/about" style={{textDecoration:"none",color:"white"}}>
                            About 
                            </NavLink></Nav.Link>
                        <Nav.Link ><NavLink exact to="/contact" style={{textDecoration:"none",color:"white"}}>
                            Contact
                            </NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
    );
};

export default Header;