import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/cartoonJenn2.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import './nav.css'

function NavTabs() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="logo d-inline-block align-top"
                        />{' '}
                    Jennifer Lindsey
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" onClick={handleClick}>
                        <Nav className="mr-auto">
                            <Nav.Link href='/'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                                Home
                            </Nav.Link>

                            <Nav.Link href='/About'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                                About
                            </Nav.Link>

                            <Nav.Link href='/Contact'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                                Contact
                            </Nav.Link>

                            <Nav.Link href='/Projects'
                            className='nav-links'
                            onClick={closeMobileMenu}>
                                Projects
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )  
}

export default NavTabs
