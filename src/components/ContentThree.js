import React, { useEffect } from 'react';
import './ContentThree.css';


function ContentThree() {
    useEffect(() => {
        // Intersection Observer 설정
        const observerOptions = {
            root: null, // Viewport 전체를 root로 설정
            rootMargin: '0px', // 추가 여백 없이 감지
            threshold: 0.4, // 요소가 40% 이상 보일 때 감지
        };

        const slideUpElements = document.querySelectorAll('.slide-up');

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // visible 클래스 추가
                    observer.unobserve(entry.target); // 감지 중단
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        slideUpElements.forEach(element => observer.observe(element));

        return () => {
            slideUpElements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (    
        <div>
            {/* 배경 이미지 */}
            <div id="introduce-page3">
                {/* 텍스트 컨테이너 */}
                <div className="text-container">
                    <p id="title3" className='slide-up'>운동 레코드 페이지</p>
                    <p className='content3 slide-up' >
                        매일 본인이 했던 운동을 펜타곤에서 기록해보세요.
                    </p>
                    <p className='content3 slide-up'>
                        당신의 값진 노력으로 이뤄낸 성과들을 분석하여 데이터 형식으로 분석하여드립니다.
                    </p>
                    <button className="learn-more-button2 slide-up">자세히 보기</button> {/* 버튼 누르면 운동 메인 페이지로 */}
                </div>
            </div>
        </div>
    )
}

export default ContentThree;