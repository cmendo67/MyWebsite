import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color:#0d47a1;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color:#e3f2fd ;
    }
    &:hover{
        color:#1a237e;
    }
}
`;

export const NavigationBar = () =>(
    <Styles>
      <Navbar expand="lg">
      <Navbar.Brand href="/">CM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About Me</Nav.Link>
        <Nav.Link href="/Projects">Projects</Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1o1vvM5RjPV7if1h4aw6MJiMRumKPmAZn/view?usp=sharing">Resume</Nav.Link>
     </Nav>
    </Navbar.Collapse>
    </Navbar>
  </Styles>
)