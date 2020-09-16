import React from 'react';
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../resources/Logo.png'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <Container>
            <Row>
                <Col>
                    <Navbar expand="lg">
                    <Link className="head-logo" to="/home"> <img src={logo} alt=""/> </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline>
                        <input type="text" name="searchBox" className="search-bar" formControl placeholder="Search Your Destination..." id=""/>
                        </Form>
                        <Nav className="ml-auto">
                        <Link className="head-menu" to="/news">News</Link>
                        <Link className="head-menu" to="/destination">Destination</Link>
                        <Link className="head-menu" to="/blog">Blog</Link>
                        <Link className="head-menu" to="/contact">Contact</Link>
                        <button className="head-button">Login</button>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Header;