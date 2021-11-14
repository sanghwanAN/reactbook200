import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class R048_ReactstrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false }
  }

  toggle = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    return (
      <>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
        <NavbarToggler onClick={this.toggle} className="mr-2" />
        <Collapse isOpen={this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">react</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://example.com/">200</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </>
   )
  }
}

export default R048_ReactstrapModal;