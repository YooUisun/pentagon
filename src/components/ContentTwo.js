import React from 'react';
import './ContentTwo.css';
import title2 from '../../src/assets/image/page2title.jpg';

function ContentTwo() {
    return (
        <div id="introduce-page2">
        <div className="content2">
            <h1 className="page2-title">
                운동 프로그램 페이지
            </h1>
            <p className="page2-description">
                과학 기반의 통합 개인화 운동 프로그램을 소개해드리며, 각 코스별로 웰빙, 신체 및 스포츠 수행 목표를 충족하는 프로그램을 설계하여 소개해드립니다.
            </p>
            <p className="page2-description"> 
                초급, 중급, 고급 프로그램 세분화된 운동 프로그램등을 통해 자신의 몸과 정신을 기쁘게 하는 경험을 누려보세요.
            </p>
                <button className="learn-more-button">자세히 보기</button> {/* 버튼 누르면 운동 메인 페이지로 */}
            </div>
            <div className="logoimage1">
                <img src={title2} alt="Logoimage" style={{ width: '400px', height: '450px' }}/>
            </div>
        </div>
    )
}
export default ContentTwo;