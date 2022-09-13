import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Collapse, Nav, NavItem } from 'reactstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar
        color="dark"
        expand="md"
        dark
        container
      >
          <NavbarBrand href="/">
            React Forms
          </NavbarBrand>
          <Collapse navbar>
            <Nav
              className="me-auto navbar-custom"
              navbar
            >
              <NavItem>
                <NavLink
                  className="nav-link"
                  to="/simple"
                >
                  Simple Form
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="nav-link"
                  to="/complex"
                >
                  Complex Form
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="nav-link"
                  to="/formik"
                >
                  Formik Form
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  className="nav-link"
                  to="/survey"
                >
                  Survey
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;