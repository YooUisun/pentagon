import "../assets/NavBar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <>
            <header className="header">
                <Navbar className="navbar">
                    <Container className="navbar-container">
                        <Navbar.Brand style={{ color: 'white', marginLeft: '50px' }}>
                            <Nav.Link as={Link} to="/MainPage" >
                            <h1 className="main-logo-title">Pentagon</h1>
                            </Nav.Link>
                            </Navbar.Brand>
                        <Nav className="nav-links" style={{ marginRight: '50px' }}>
                            <Nav.Link as={Link} to="/ExcerciseMain" className="side-navlink">운동</Nav.Link>
                            <Nav.Link className="side-navlink">기록</Nav.Link>
                            <Nav.Link as={Link} to="/Ai" className="side-navlink">상담</Nav.Link>
                            <Nav.Link as={Link} to="/Login" className="side-navlink">로그인</Nav.Link>
                            <Nav.Link as={Link} to="/Signin" className="side-navlink">회원가입</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>            
        </>
    )
}

export default NavBar;