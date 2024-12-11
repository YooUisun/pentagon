import React, { useEffect } from 'react';
import './ContentTwo.css';
import title2 from '../../src/assets/image/page2title.jpg';
import { Link } from 'react-router-dom';  // react-router-dom에서 Link 컴포넌트 가져오기

function ContentTwo() {

    useEffect(() => {
        const observerOptions = {
            root: null, // Viewport 전체를 root로 설정
            rootMargin: '0px', // 추가적인 여백 없이 정확히 Viewport 경계에서 감지
            threshold: 0.4, // 요소가 40% 이상 보일 때 감지
        };

        const slideUpElements = document.querySelectorAll('.slide-up'); //모든 '.slide-up' 으로 되있는 클래스들 선택

        // Intersection Observer 콜백 함수
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // 요소가 화면에 보이면
                    entry.target.classList.add('visible'); // 'visible' 이라는 클래스 추가
                    observer.unobserve(entry.target); // 이미 나타난 요소에게는 관찰 중단.
                }
            });
        };

        // Intersection Observer 생성
        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // slide-up 클래스가 있는 요소들을 관찰하도록 설정
        slideUpElements.forEach(element => {
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
        <div id="introduce-page2">
            <div className="content2">
                <h1 className="page2-title slide-up">
                    Workout Plans by Level
                </h1>
                <p className="page2-description slide-up">
                    개인별 레벨에 최적화된 운동 프로그램을 제공하며,
                    <br />
                    각 레벨에 맞는 체계적이고 실용적인 프로그램을 소개합니다.
                    <br />
                </p>
                <p className="page2-description slide-up">
                    초급부터 고급까지 세분화된 프로그램으로,
                    <br />
                    펜타곤에서 효율적인 운동과 안전을 동시에 경험해보세요.
                </p>
                <Link to="/ExcerciseMain" className="learn-more-button slide-up"><p>View More</p></Link> {/* 버튼 누르면 운동 메인 페이지로 */}
            </div>
            <div className="logoimage1 slide-up">
                <img src={title2} alt="Logoimage" />
            </div>
        </div>
    )
}
export default ContentTwo;