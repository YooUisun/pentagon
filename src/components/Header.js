import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'; // Header에 대한 css 스타일 파일

function Header() {
    return (
    <div>
        <header className="header">
            <Navbar className="navbar">
                <Container className="navbar-container">
                    <Navbar.Brand style={{ color: 'white', marginLeft: '50px' }}><h1>Pentagon</h1></Navbar.Brand>
                        <Nav className="nav-links" style={{ marginRight: '50px' }}>
                            <Nav.Link className="side-navlink">운동</Nav.Link> 
                            <Nav.Link className="side-navlink">기록</Nav.Link>
                            <Nav.Link className="side-navlink">상담</Nav.Link>
                            <Nav.Link className="side-navlink">로그인</Nav.Link>
                            <Nav.Link className="side-navlink">회원가입</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    </div>
    )
}
export default Header;