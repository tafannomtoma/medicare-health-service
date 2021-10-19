import React from 'react';
import { FcStumbleupon } from "react-icons/fc";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">< FcStumbleupon size="2em" />
                        MEDICO</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/about">AboutUs</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {
                            user?.email ?
                                <Button onClick={logOut} variant="dark">LogOut</Button> :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{
                                user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;