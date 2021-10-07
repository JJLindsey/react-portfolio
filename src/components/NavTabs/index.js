import {Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/JLlogo.svg'
import React from 'react';

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

        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
            
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
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
