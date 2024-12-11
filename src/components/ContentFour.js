import React, { useEffect } from 'react';
import './ContentFour.css';
import title4 from '../../src/assets/image/page4title.jpg';
import { Link } from 'react-router-dom';


function ContentFour() {
    useEffect(() => {
        const observerOptions = { 
            root: null, // Viewport 전체를 root로 설정
            rootMargin: '0px', // 추가적인 여백 없이 정확히 Viewport 경계에서 감지
            threshold: 0.1, // 요소가 10% 이상 보일 때 감지
        };

        const slideUpElements = document.querySelectorAll('.slide-up'); // 모든 '.slide-up' 클래스를 가진 요소들 선택

        // Intersection Observer 콜백 함수
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // 요소가 화면에 보이면
                    entry.target.classList.add('visible'); // 'visible' 클래스를 추가
                    observer.unobserve(entry.target); // 이미 나타난 요소는 관찰을 중단
                }
            });
        };

        // Intersection Observer 생성
        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // slide-up 클래스가 있는 요소들을 관찰하도록 설정
        slideUpElements.forEach((element, index) => {
            observer.observe(element);
        });

        // Clean up (컴포넌트가 언마운트될 때 observer 해제)
        return () => {
            slideUpElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div id="introduce-page4">
            <div className="logoimage2 slide-up">
                <img src={title4} alt="Logoimage" style={{ width: '400px', height: '450px' }}/>
            </div>
            <div className="content4">
                <h1 className="page4-title slide-up">
                AI 전문가 상담 페이지
                </h1>
                <p className="page4-description slide-up">
                AI 전문가 상담 페이지에서는 다이어트, 벌크업, 재활 등 각 운동의 목적에 따른 AI 전문가들의 상담 서비스를 제공합니다.
                </p>
                <p className="page4-description slide-up">
                AI 전문가들의 조언에 따라 더 효과적이고 효율적으로 운동 목표와 계획을 수립해나가세요.
                </p>
                <Link to="/Ai" className="learn-more-button3 slide-up"><p>View More</p></Link> {/* 버튼 누르면 Ai 상담 페이지로 */}
            </div>
        </div>
    )
}

export default ContentFour;