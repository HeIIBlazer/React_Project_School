import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../assets/logo192.png';

import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default function Header() {
   const [name, setName] = React.useState('');
   const [role, setRole] = React.useState('');
   let navbar_admin = [];
   let navbar_user = [];
   let navbar_guest = [];

   React.useEffect(() => {
      refreshToken();
   });

   const refreshToken = async () => {
      try {
         const response = await axios.get(`http://localhost:5000/users/token`);
         const decoded = jwt_decode(response.data.accessToken);
         setName(decoded.name);
         setRole(decoded.role);
      } catch (error) {
         console.log(error);
      }
   };

   if (role === 'admin') {
      navbar_admin = [
         { name: 'Manage Professions', href: '/profession' },
         { name: 'Manage Departments', href: '/department' },
         { name: 'Users List', href: '/users' },
      ];
      navbar_user = [
         { name: 'Profile', href: '/profile' },
         { name: 'Logout', href: '/logout' },
      ];
   } else if (role === 'user') {
      navbar_admin = [];
      navbar_user = [
         { name: 'Profile', href: '/profile' },
         { name: 'Logout', href: '/logout' },
      ];
   } else {
      navbar_admin = [];
      navbar_user = [];
      navbar_guest = [
         { name: 'Login', href: '/login' },
         { name: 'Register', href: '/register' },
      ];
   }

   return (
      <header>
         <Navbar
            sticky="top"
            collapseOnSelect
            expand="md"
            bg="success"
            variant="dark"
         >
            <Container>
               <Navbar.Brand href="/">
                  <img
                     src={logo}
                     height="30"
                     width="30"
                     className="d-inline-block align-top"
                     alt="Logo"
                  />
                  ReactApp - ProjectSchool
               </Navbar.Brand>
               <NavbarToggle aria-controls="responsive-navbar-nav" />
               <NavbarCollapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/specialty">Specialties</Nav.Link>
                     {/* <Nav.Link href="/profession">Manage Professions</Nav.Link>
                     <Nav.Link href="/department">Manage Departments</Nav.Link>
                     <Nav.Link href="/users">Users List</Nav.Link> */}
                  </Nav>
                  <Nav>
                     {navbar_admin.map((value, i) => (
                        <Nav.Link href={value.href} key={i}>
                           {value.name}
                        </Nav.Link>
                     ))}
                     {navbar_user.map((value, i) => (
                        <Nav.Link href={value.href} key={i}>
                           {value.name}
                        </Nav.Link>
                     ))}
                     <Navbar.Text> {name}</Navbar.Text>
                     {navbar_guest.map((value, i) => (
                        <Nav.Link href={value.href} key={i}>
                           {value.name}
                        </Nav.Link>
                     ))}
                  </Nav>
                  {/* <Nav>
                     <Nav.Link href="/profile">Profile</Nav.Link>
                     <Nav.Link href="/logout">Logout</Nav.Link>
                     <Nav.Link href="/login">Login</Nav.Link>
                     <Nav.Link href="/register">Register</Nav.Link>
                  </Nav> */}
               </NavbarCollapse>
            </Container>
         </Navbar>
      </header>
   );
}
