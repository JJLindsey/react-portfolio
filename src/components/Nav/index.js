import Container from 'react-bootstrap/Container'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'



function Nav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                Jennifer Lindsey
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Nav
