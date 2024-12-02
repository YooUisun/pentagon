/*메인페이지*/
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MainPage.css';

function MainPage() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand id="title"><h1>Pentagon</h1></Navbar.Brand>
                <Nav className = "side-nav">
                    <Nav.Link>운동</Nav.Link>
                    <Nav.Link>기록</Nav.Link>
                    <Nav.Link>상담</Nav.Link>
                    <Nav.Link>로그인</Nav.Link>
                    <Nav.Link>회원가입</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MainPage;