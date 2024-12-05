//메인페이지
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MainPage.css';
import Header from '../../components/Header'; // Footer 컴포넌트 import.
import Footer from '../../components/Footer'; // Footer 컴포넌트 import.
import ContentOne from '../../components/ContentOne'; // Footer 컴포넌트 import.
import ContentTwo from '../../components/ContentTwo'; // Footer 컴포넌트 import.
import ContentThree from '../../components/ContentThree';


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
        {/* 비디오 배경이 포함된 콘텐츠 영역 */}
        <ContentOne/>
        <ContentTwo/>
        <ContentThree/>
        <Container id="introduce-page4">
            <h1>
                상담 메인
            </h1>
            <h3>
                상담 메인에서는 다이어트, 벌크업, 재활 등 각 운동의 목적에 따른 전문가들의 AI 상담 서비스를 제공합니다.
            </h3>
        </Container>

        {/* Footer 컴포넌트 */}
        <Footer/>
        </>
        
    )
};

export default MainPage;
