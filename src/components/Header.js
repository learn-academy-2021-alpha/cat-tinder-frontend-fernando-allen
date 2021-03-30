import React, { Component, useState } from 'react'
import {
  Jumbotron,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Superhero Tinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/superheroindex/">Browse All</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/superheroshow/">Find</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <NavItem>
              <NavLink href="/superheronew/">Create an Account</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Super Tinder</h1>
          <p className="lead">Like Tinder but for superheroes.</p>
        </Container>
      </Jumbotron>
    </>
  )
}
export default Header