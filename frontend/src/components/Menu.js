import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">ToDo App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Link 1</Nav.Link>
                    <Nav.Link href="#">Link 2</Nav.Link>
                    <Nav.Link href="#">Link 3</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Menu