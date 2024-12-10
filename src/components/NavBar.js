import "../assets/NavBar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import MyProfile from './MyProfile';


function NavBar( { isLoggedIn, setIsLoggedIn }) {
    const location = useLocation(); // 현재 URL 정보 가져오기
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal 상태 관리

    const handleLogout=()=>{
        setIsLoggedIn(false); // 로그아웃 상태로 전환
        alert("로그아웃 되었습니다.");
    }

    const openModal=()=>setIsModalOpen(true); // Modal 열기
    const closeModal=()=>setIsModalOpen(false); // Modal 닫기

    useEffect(() => {
        // 페이지가 변경될 때마다 스크롤을 맨 위로 이동시킴
        window.scrollTo(0, 0);
    }, [location]); // location이 변경될 때마다 실행
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
                        <div class="search-container">
                            <input type="text" class="search-box" placeholder="검색..."/>
                                <button className="search-btn">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ verticalAlign: 'middle', marginRight: '8px'}}/>
                                </button>
                        </div>
                        <Nav className="nav-links" style={{ marginRight: '50px' }}>
                            <Nav.Link as={Link} to="/Notice" className="side-navlink">공지사항</Nav.Link>
                            <Nav.Link as={Link} to="/ExcerciseMain" className="side-navlink">운동</Nav.Link>
                            <Nav.Link className="side-navlink">기록</Nav.Link>
                            <Nav.Link as={Link} to="/Ai" className="side-navlink">상담</Nav.Link>
                            {isLoggedIn ? (
                            <>
                                <Nav.Link
                                onClick={handleLogout}
                                className="side-navlink"
                                style={{ cursor: "pointer" }}
                            >
                                로그아웃
                            </Nav.Link>
                            <Nav.Link
                            onClick={openModal}
                            className="my-profile side-navlink"
                            style={{ cursor: "pointer" }}
                            > <FontAwesomeIcon icon={faUser} size="1x"/>
                            </Nav.Link>
                            </>
                        ) : (
                            <>
                            <Nav.Link as={Link} to="/Login" className="side-navlink">
                                로그인
                            </Nav.Link>
                        
                            <Nav.Link as={Link} to="/Signin" className="side-navlink">
                            회원가입
                            </Nav.Link>
                        </>
                        )}
                        </Nav>
                    </Container>
                </Navbar>
            </header>

            {/* Modal 컴포넌트 */}
            {isModalOpen && <MyProfile onClose={closeModal}/>}
        </>
    );
}

export default NavBar;