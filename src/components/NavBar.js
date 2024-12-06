import "../assets/NavBar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function NavBar() {
    const location = useLocation(); // 현재 URL 정보 가져오기

    useEffect(() => {
        // 페이지가 변경될 때마다 스크롤을 맨 위로 이동시킴
        window.scrollTo(0, 0);
    }, [location]); // location이 변경될 때마다 실행
    return (
        <>
            <header className="header">
                <Navbar className="navbar">
                    <Container className="navbar-container">
                        <Navbar.Brand style={{ color: 'white', marginLeft: '50px' }}><h1>Pentagon</h1></Navbar.Brand>
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