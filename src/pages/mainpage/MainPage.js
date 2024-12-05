//메인페이지
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MainPage.css';
import Header from '../../components/Header'; // Header 컴포넌트 import.
import Footer from '../../components/Footer'; // Footer 컴포넌트 import.
import ContentOne from '../../components/ContentOne'; // 첫번째 콘텐츠 컴포넌트 import.
import ContentTwo from '../../components/ContentTwo'; // 두번째 콘텐츠 컴포넌트 import.
import ContentThree from '../../components/ContentThree'; // 세번째 콘텐츠 컴포넌트 import.
import ContentFour from '../../components/ContentFour'; // 네번째 콘텐츠 컴포넌트 import.


function MainPage() {
    const scrollToTop =()=>{
        window.scrollTo({
          top: 0, // Y 좌표 0으로 설정 (맨 위)
          behavior: 'smooth', // 부드럽게 스크롤
        });
    };

    return (
        <> {/* 여러 부모 요소를 사용하기 위함 */}
        {/* 헤더 영역 */}
        <Header/>
        <div>
      {/* 스크롤 버튼 */}
    <button className="buttonStyle" onClick={scrollToTop}>
        ↑ Top
    </button>
    </div>
        {/* 첫번째 콘텐츠 영역 */}
        <ContentOne/>
        {/* 두번째 콘텐츠 영역 */}
        <ContentTwo/>
        {/* 세번째 콘텐츠 영역 */}
        <ContentThree/>
        {/* 네번째 콘텐츠 영역 */}
        <ContentFour/>
        {/* Footer 컴포넌트 */}
        <Footer/>
        </>
    )
};

export default MainPage;
