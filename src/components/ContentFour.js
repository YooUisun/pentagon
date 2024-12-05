import React from 'react';
import './ContentFour.css';
import title4 from '../../src/assets/image/page4title.jpg';


function ContentFour() {
    return (
        <div id="introduce-page4">
            <div className="logoimage2">
                <img src={title4} alt="Logoimage" style={{ width: '400px', height: '450px' }}/>
            </div>
            <div className="content4">
                <h1 className="page4-title">
                AI 전문가 상담 페이지
                </h1>
                <p classNAme="page4-description">
                AI 전문가 상담 페이지에서는 다이어트, 벌크업, 재활 등 각 운동의 목적에 따른 AI 전문가들의 상담 서비스를 제공합니다.
                </p>
                <p classNAme="page4-description">
                AI 전문가들의 조언에 따라 더 효과적이고 효율적으로 운동 목표와 계획을 수립해나가세요.
                </p>
                <button className="learn-more-button3">자세히 보기</button> {/* 버튼 누르면 운동 메인 페이지로 */}
            </div>
        </div>
    )
}

export default ContentFour;