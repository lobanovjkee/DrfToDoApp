import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Menu = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">ToDo App</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to='/'>Users</NavLink>
                    <NavLink to='projects'>Projects</NavLink>
                    <NavLink to='todos'>TODOs</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
};

const Nav = styled.nav`
  display: flex;
`
const NavLink = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
  
  &:hover {
    color: whitesmoke;
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`
export default Menu