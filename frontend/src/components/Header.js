import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../assets/logo192.png';

export default function Header() {
    return (
        <header>
            <Navbar sticky="top" collapseOnSelect expand="md" bg='success' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo} height="30" width="30" className='d-inline-block align-top' alt="Logo" />
                        ReactApp - ProjectSchool
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/specialty'>Specialties</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    )
}
