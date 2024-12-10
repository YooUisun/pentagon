import "../assets/NavBar.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import MyProfile from './MyProfile';



function NavBar({ isLoggedIn, setIsLoggedIn }) {
    const location = useLocation(); // 현재 URL 정보 가져오기
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal 상태 관리


    const handleLogout = () => {
        setIsLoggedIn(false); // 로그아웃 상태로 전환
        alert("로그아웃 되었습니다.");
    }

    const openModal=()=>setIsModalOpen(true); // Modal 열기
    const closeModal=()=>setIsModalOpen(false); // Modal 닫기

    useEffect(() => {
        // 페이지가 변경될 때마다 스크롤을 맨 위로 이동시킴
        window.scrollTo(0, 0);
    }, [location]); // location이 변경될 때마다 실행


    const [query, setQuery] = useState('');  // 현재 검색어 상태
    const [searchHistory, setSearchHistory] = useState([]);  // 검색 기록 상태
    const [isHovered, setIsHovered] = useState(false);  // 마우스 hover 여부 상태
    const searchContainerRef = useRef(null);  //참조객체 생성. current속성 가짐. 렌더링해도 값을 유지

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                // 클릭한 곳이 searchContainerRef에 해당하는 DOM 요소 바깥인지를 체크
                //searchContainerRef.current.contains(event.target):
                //이 메서드는 클릭한 요소(event.target)가 searchContainerRef.current 안에 포함되는지를 검사.
                //만약 클릭한 요소가 searchContainerRef.current 내부에 있으면 true, 그렇지 않으면 false를 반환
                setIsHovered(false); //영역 밖을 클릭 했을때 false가 됨
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); //클린업 함수. 이벤트리스너 제거
        };
    }, []);
    const handleSearch = () => {
        if (query && !searchHistory.includes(query)) {
            setSearchHistory(prevHistory => {
                const updatedHistory = [query, ...prevHistory];
                console.log("업데이트된 검색 기록:", updatedHistory);
                return updatedHistory;
            });
            setQuery('');
        } else {
            console.log("검색어가 비어 있거나 이미 기록에 있음:", query);
        }
    };
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleHistoryClick = (item) => {
        console.log('검색 기록 클릭:', item);
        setQuery(item);
    };
    const handleHistoryDelete = (item) => {
        console.log('검색 기록 삭제:', item);
        setSearchHistory(prevHistory => {
            const updatedHistory = prevHistory.filter(historyItem => historyItem !== item);
            console.log("업데이트된 검색 기록 (삭제 후):", updatedHistory);
            return updatedHistory;
        });
    };
    return (
        <>
            <header className="header">
                <Navbar className="navbar">
                    <Container className="navbar-container">
                        <Navbar.Brand style={{ color: 'white', marginLeft: '50px' }}>
                            <Nav.Link as={Link} to="/" >
                                <h1 className="main-logo-title">Pentagon</h1>
                            </Nav.Link>
                        </Navbar.Brand>
                        <div
                            ref={searchContainerRef}
                            className="search-container"
                        >
                            <input
                                type="search"
                                className="search-box"
                                placeholder="검색..."
                                value={query}
                                onChange={handleInputChange}
                                onFocus={() => {
                                    setIsHovered(true);
                                }}
                            />
                            <button className="search-btn" onClick={handleSearch}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                            </button>
                            {isHovered && searchHistory.length > 0 && (
                                <div className="search-history">
                                    <ul>
                                        {searchHistory.map((item, index) => (
                                            <li key={index}>
                                                <span
                                                    onClick={() => {
                                                        handleHistoryClick(item);
                                                        // 항목 클릭 시 검색 기록 유지
                                                    }}
                                                >
                                                    {item}
                                                </span>
                                                <button
                                                    onClick={(e) => {
                                                        // 이벤트 전파 방지
                                                        e.stopPropagation();
                                                        handleHistoryDelete(item);
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Nav className="nav-links" style={{ marginRight: '50px' }}>
                            <Nav.Link as={Link} to="/Notice" className="side-navlink">공지사항</Nav.Link>
                            <Nav.Link as={Link} to="/ExcerciseMain" className="side-navlink">운동</Nav.Link>
                            <Nav.Link as={Link} to= "/RecordMain" className="side-navlink">기록</Nav.Link>
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
                            <div className="profile-background">
                            <Nav.Link
                            onClick={openModal}
                            className="side-navlink"
                            style={{ cursor: "pointer" }}
                            > <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.8rem' }} className="profile"/>
                            </Nav.Link>
                            </div>
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