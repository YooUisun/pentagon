import "../assets/NavBar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import MyProfile from './MyProfile';

function NavBar({ isLoggedIn, setIsLoggedIn }) {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal 상태 관리
    const modalRef = useRef(null);
    const userIconRef = useRef(null);

    const location = useLocation(); // 현재 URL 정보 가져오기

    const handleLogout = () => {
        setIsLoggedIn(false); // 로그아웃 상태로 전환
        alert("로그아웃 되었습니다.");
    };

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target) && 
                userIconRef.current &&
                !userIconRef.current.contains(event.target)
            ) {
                setIsModalOpen(false); // 외부 클릭 시 모달 닫기
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // 페이지가 변경될 때마다 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
    }, [location]);

    const [query, setQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const searchContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutsideSearch = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsHovered(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideSearch);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideSearch);
        };
    }, []);

    const handleSearch = () => {
        if (query && !searchHistory.includes(query)) {
            setSearchHistory((prevHistory) => [query, ...prevHistory]);
            setQuery('');
        }
    };

    const handleInputChange = (event) => setQuery(event.target.value);

    const handleHistoryClick = (item) => setQuery(item);

    const handleHistoryDelete = (item) => {
        setSearchHistory((prevHistory) => prevHistory.filter((historyItem) => historyItem !== item));
    };

    return (
        <>
            <header className="header">
                <Navbar className="navbar">
                    <Container className="navbar-container">
                        <Navbar.Brand style={{ color: 'white', marginLeft: '50px' }}>
                            <Nav.Link as={Link} to="/">
                                <h1 className="main-logo-title">Pentagon</h1>
                            </Nav.Link>
                        </Navbar.Brand>
                        <div ref={searchContainerRef} className="search-container">
                            <input
                                type="search"
                                className="search-box"
                                placeholder="검색..."
                                value={query}
                                onChange={handleInputChange}
                                onFocus={() => setIsHovered(true)}
                            />
                            <button className="search-btn" onClick={handleSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                            </button>
                            {isHovered && searchHistory.length > 0 && (
                                <div className="search-history">
                                    <ul>
                                        {searchHistory.map((item, index) => (
                                            <li key={index}>
                                                <span onClick={() => handleHistoryClick(item)}>{item}</span>
                                                <button onClick={(e) => { e.stopPropagation(); handleHistoryDelete(item); }}>X</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Nav className="nav-links" style={{ marginRight: '50px' }}>
                            <Nav.Link as={Link} to="/Notice" className="side-navlink">공지사항</Nav.Link>
                            <Nav.Link as={Link} to="/ExcerciseMain" className="side-navlink">운동</Nav.Link>
                            <Nav.Link as={Link} to="/RecordMain" className="side-navlink">기록</Nav.Link>
                            <Nav.Link as={Link} to="/Ai" className="side-navlink">상담</Nav.Link>
                            {isLoggedIn ? (
                                <>
                                    <Nav.Link onClick={handleLogout} className="side-navlink">로그아웃</Nav.Link>
                                    <div className="profile-background">
                                        <Nav.Link
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleModal();
                                            }}
                                            ref={userIconRef}
                                            className="side-navlink"
                                        >
                                            <FontAwesomeIcon icon={faUser} id="usericon"/>
                                        </Nav.Link>
                                        {isModalOpen && (
                                            <div className="modal-container" ref={modalRef}>
                                                <MyProfile />
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/Login" className="side-navlink">로그인</Nav.Link>
                                    <Nav.Link as={Link} to="/Signin" className="side-navlink">회원가입</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default NavBar;