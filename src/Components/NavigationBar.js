import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './navigationbar.css';
const NavigationBar = () =>{
    return(
      <Navbar className="navcolor" expand="lg">
      <Navbar.Brand  id="navlink"href="/">Carlos Mendoza</Navbar.Brand>
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav nav navlink">
      <Nav className="ml-auto ">
        {/* <Nav.Link id="navlink" href="/">Home</Nav.Link> */}
        <Nav.Link id="navlink" href="/">Home</Nav.Link>
        <Nav.Link id="navlink" href="/Projects">Projects</Nav.Link>
        <Nav.Link id="navlink" href="https://drive.google.com/file/d/1o1vvM5RjPV7if1h4aw6MJiMRumKPmAZn/view?usp=sharing">Resume</Nav.Link>
     </Nav>
    </Navbar.Collapse>
    </Navbar>
)
}
export default NavigationBar;