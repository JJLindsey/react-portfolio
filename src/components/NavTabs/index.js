import {Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/cartoonJenn2.jpg'
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './nav.css'

function NavTabs(props) {

    // const tabs = ['Home', 'About', 'Projects', 'Contact'];
    // return (
    //     <ul className="nav nav-tabs">
    //         {tabs.map(tab => (
    //             <li className="nav-item" key={tab}>
    //                 <a
    //                     href={'#' + tab.toLowerCase()}
    //                     // Whenever a tab is clicked on,
    //                     // the current page is set through the handlePageChange props.
    //                     onClick={() => props.handlePageChange(tab)}
    //                     className={
    //                         props.currentPage === tab ? 'nav-link active' : 'nav-link'
    //                     }
    //                 >
    //                     {tab}
    //                 </a>
    //             </li>
    //         ))}
    //     </ul>
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
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
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.handlePageChange('Home')} href="#home">Home</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('About')} href='#about'>About</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Projects')} href='#projects'>Projects</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Contact')} href='#contact'>Contact</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Resume')} href='#resume'>Resume</Nav.Link> 
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    )  
}

export default NavTabs
