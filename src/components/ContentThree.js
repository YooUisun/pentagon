import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './ContentThree.css';


function ContentThree() {
    return (    
        <div>
            {/* 배경 이미지 */}
            <div id="introduce-page3">
                {/* 텍스트 컨테이너 */}
                <div className="text-container">
                    <p id="title3">운동 레코드 페이지</p>
                    <p className='content3'>
                        매일 본인이 했던 운동을 펜타곤에서 기록해보세요.
                    </p>
                    <p className='content3'>
                        당신의 값진 노력으로 이뤄낸 성과들을 분석하여 데이터 형식으로 분석하여드립니다.
                    </p>
                    <button className="learn-more-button2">자세히 보기</button> {/* 버튼 누르면 운동 메인 페이지로 */}
                </div>
            </div>
        </div>
    )
}

export default ContentThree;