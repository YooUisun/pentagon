//메인페이지
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MainPage.css';
import backgroundvideo from '../../assets/video/MaintitleVideo.mp4'
import Header from '../../components/Header';
import Footer from '../../components/Footer'; // Footer 컴포넌트 import.


function MainPage() {
    return (
        
        <> {/* 여러 부모 요소를 사용하기 위함 */}
        {/* 헤더 영역 컴포넌트 */}
        <Header/>;
        {/* 비디오 배경이 포함된 콘텐츠 영역 */}
        <Container id="introduce-page1">
            <div className="background">
                <video 
                    autoPlay
                    loop 
                    muted 
                    playsInline>
                    <source src={backgroundvideo} type='video/mp4'/>
                </video>
            </div>
            <div className="title-container">
                <h1 className="mainpage_title">
                운동에 관한 모든 것, Pentagon.
                </h1>
                <h2 className="mainpage_title2">
                펜타곤은 각종 소요층이 요구하는 운동 정보와 운동 레코드 서비스를 제공합니다. 펜타곤과 함께 당신의 새로운 하루들을 시작해보세요.
                </h2>
            </div>
        </Container>
        <Container id="introduce-page2">
            <h1>
                운동 메인
            </h1>
            <h3>
            운동 메인에서는 초급,중급,고급 영역의 운동들과 그 운동의 방식들을 소개해드립니다.
            본인의 역량과 상황에 맞게 알맞은 운동들을 선택하여 건강한 하루를 시작해보세요.
            </h3>
        </Container>
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
        <Container>
        <Footer />
        </Container>
        { /*
        <Container id="footer">
        <h4 className="font-form">상호명 및 호스팅 서비스 제공 : ㈜펜타곤</h4>
        <br></br>
        <p className="font-form">사업자 등록번호: 123-45-67890 | 대표이사 : 유의선</p>
        <p className="font-form">충청남도 천안시 동남구 대흥로 215 7층</p>
        <p className="font-form">Copyright ⓒ Pentagon Co., Ltd. All Rights Reserved. </p>
        </Container> */ }
        </>
        
    )
};

export default MainPage;
