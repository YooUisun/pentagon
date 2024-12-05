//메인페이지
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './MainPage.css';
import Footer from '../../components/Footer'; // Footer 컴포넌트 import.
import ContentOne from '../../components/ContentOne'; // 첫번째 콘텐츠 컴포넌트 import.
import ContentTwo from '../../components/ContentTwo'; // 두번째 콘텐츠 컴포넌트 import.
import ContentThree from '../../components/ContentThree'; // 세번째 콘텐츠 컴포넌트 import.
import ContentFour from '../../components/ContentFour'; // 네번째 콘텐츠 컴포넌트 import.
import NavBar from '../../components/NavBar';
import DetailPage01 from '../exerciseMain/DetailPage01';
import DetailPage02 from '../exerciseMain/DetailPage02';
import DetailPage03 from '../exerciseMain/DetailPage03';
import Ai from '../ai/Ai';
import LoginPage from '../login/LoginPage';
import SigninPage from '../signin/SigninPage';
import ExerciseMain from '../exerciseMain/ExerciseMain';
import PrivacyPolicyPage from '../../components/PrivacyPolicyPage';


function MainPage() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Y 좌표 0으로 설정 (맨 위)
            behavior: 'smooth', // 부드럽게 스크롤
        });
    };

    return (
        <> {/* 여러 부모 요소를 사용하기 위함 */}
            {/* 헤더 영역 */}
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div>
                                {/* 스크롤 버튼 */}
                                <button className="buttonStyle" onClick={scrollToTop}>
                                    ↑ Top
                                </button>
                            </div>
                            <ContentOne />
                            <ContentTwo />
                            <ContentThree />
                            <ContentFour />
                        </>
                    }
                />
                {/* 상세 페이지 */}
                <Route path="/details1" element={<DetailPage01 />} />
                <Route path="/details2" element={<DetailPage02 />} />
                <Route path="/details3" element={<DetailPage03 />} />

                {/* 다른 페이지들 */}
                <Route path="/MainPage" element={<MainPage/>}/>
                <Route path="/Ai" element={<Ai />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Signin" element={<SigninPage />} />
                <Route path="/ExcerciseMain" element={<ExerciseMain />} />
                <Route path="/Privacy-policy" element={<PrivacyPolicyPage/>} />
            </Routes>

            {/* Footer 컴포넌트 */}
            <Footer />
        </>
    );
}

export default MainPage;
