import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <div className="header bg-black">
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand as={Link} to="/" className="text-white">React-SSR Kit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                            <Nav.Link as={Link} to="/settings" className="text-white">Configure</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
