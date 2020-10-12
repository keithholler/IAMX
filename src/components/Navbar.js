import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";




const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="navBar">
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="http://localhost:3000/home" className="NavbarBrand">
        <h1>xMAI</h1>
        </NavbarBrand>
        
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar className="ml-auto">
          
            <NavItem>
              <NavLink href="/">
              <i className="fa fa-cog fa-lg" />  Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
              <i className="fa fa-globe fa-lg" />  Language
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
              <i className="fa fa-sign-out fa-lg" />  Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
