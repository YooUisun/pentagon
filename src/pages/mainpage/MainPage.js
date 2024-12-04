//메인페이지
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MainPage.css';
import Footer from './Footer' // Footer 컴포넌트 import.


function MainPage() {
    return (
        <> {/* 여러 부모 요소를 사용하기 위함 */}
        {/* 헤더 영역 */}
        <Header/>;
        {/* 비디오 배경이 포함된 콘텐츠 영역 */}
        <ContentOne/>;
        <ContentTwo/>;
        <Container id="introduce-page3">
            <h1>
                기록 메인
            </h1>
            <h3>
                기록 메인에서는 그 날 본인이 했던 운동들의 자세한 정보들을 사이트에 기록할 수 있습니다.
                성실하게 수행 하고 있는 본인의 운동 기록들을 펜타곤에 기록해보세요.
            </h3>
        </Container>
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
