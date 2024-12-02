//메인페이지
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MainPage.css'; //

function MainPage() {
    return (
        
        <> {/* 여러 부모 요소를 사용하기 위함 */}
        {/* 헤더 영역 */}
        <div>
            <header className="header">
                <Navbar className="navbar">
                    <Container className="navbar-container">
                        <Navbar.Brand style={{ color: 'white', marginLeft: '30px' }}><h1>Pentagon</h1></Navbar.Brand>
                            <Nav className="nav-links" style={{ marginRight: '30px' }}>
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
        <div id="introduce-page">
            <h1 className="mainpage_title">운동에 관한 모든 것, The Pentagon. 펜타곤은 각종 소요층이 요구하는 운동 정보와 본인의 의지로 이뤄낸 운동 레코드 서비스를 제공하는 사이트입니다.</h1>
        </div>
        </>
        
    )
}

export default MainPage;
