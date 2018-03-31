import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    NavItem,
    NavLink,
    } from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {withRouter} from 'react-router'
import locations from '../../routes/locations';

class OWONavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        console.log(window.location.pathname)
        return (
            <Navbar color="indigo" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>OWO</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav className="" left>
                        <NavItem active={window.location.pathname === locations.groups}>
                            <NavLink className="nav-link" to={locations.groups}>Groups</NavLink>
                        </NavItem>
                        <NavItem active={window.location.pathname === locations.profile}>
                            <NavLink className="nav-link" to={locations.profile}>Profile</NavLink>
                        </NavItem>
                        <NavItem active= {window.location.pathname === locations.stripe}>
                            <NavLink className="nav-link" to={locations.stripe}>Stripe</NavLink>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                            <Link to={locations.logout}>
                                <Button color="danger" className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search">Logout</Button>
                            </Link>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default OWONavbar;