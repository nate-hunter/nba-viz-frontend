import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import nbaLogo from '../images/nba-logo-transparent.png';
import bbrLogo from '../images/bbr-logo.png';
import GithubLogo from '../images/GitHub-Logo-03.png';
import TwitterLogo from '../images/Logo-twitter.png';




class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            // <Container fluid>
            <Navbar className="nav-color" dark expand="md" >
                <NavbarBrand className="nav-img" tag={Link} to="https://www.nba.com"><img src={nbaLogo} alt="NBA Logo" /></NavbarBrand>
                <NavbarBrand className="nav-img" tag={Link} to="https://www.basketball-reference.com/"><img src={bbrLogo} alt="BBall Ref Logo" /></NavbarBrand>
                {/* <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <NavbarBrand tag={Link} to="/about">About</NavbarBrand> */}
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {/* <NavLink className="nav-img" href="https://data.cityofnewyork.us/Environment/Water-and-Sewer-Permits/4k4u-823g"><img src={DataLogo} alt="Open Data Logo" /></NavLink> */}
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="nav-item" href="https://twitter.com/_nate_hunter_">@_nate_hunter_</NavLink> */}
                            <NavLink className="nav-img" href="https://twitter.com/_nate_hunter_"><img src={TwitterLogo} alt="Twitter Logo" /></NavLink>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="nav-item" href="https://github.com/nate-hunter">GitHub</NavLink> */}
                            <NavLink className="nav-img" href="https://github.com/nate-hunter"><img src={GithubLogo} alt="Github Logo" /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            // </Container>
        );
    };
};

export default NavBar;