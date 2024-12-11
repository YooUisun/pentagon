import '../../assets/DetailPage.css'
import { useEffect } from 'react';

function ExDescription({ dcData, setDcData, index }) {

    useEffect(() => {
        const textAnimeElement = document.querySelector('.textAnime');

        // IntersectionObserver 콜백 함수
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('textAnime'); // 화면에 보이면 애니메이션 실행
                    observer.unobserve(entry.target); // 애니메이션 실행 후 옵저버를 제거하여 중복 실행 방지
                }
            });
        }, {
            threshold: 0.75 // 요소의 75%가 화면에 보일 때 실행
        });

        if (textAnimeElement) {
            observer.observe(textAnimeElement); // observer를 해당 요소에 적용
        }

        // Cleanup: 컴포넌트가 언마운트되면 옵저버 제거
        return () => {
            if (textAnimeElement) {
                observer.unobserve(textAnimeElement);
            }
        };
    }, []);

    return (
        <div className='dc-container'>
            <div className='dcText textAnime'>
                {dcData[index].content1}
            </div>
            <img
                className='dcImg'
                src={dcData[index].imageURL}
            ></img>
            <h1>{dcData[index].name} 운동 가이드</h1>

            <h2>시작 자세</h2>
            {dcData[index].content2}
            {/* 
                <div>
                    <p> {content2} </p>
                </div>
            */}

            <h2>운동 동작</h2>
            {dcData[index].content3}

            <h2>호흡법</h2>
            {dcData[index].content4}

            <h2>주의사항</h2>
            {dcData[index].content5}
        </div>
    )
}

export default ExDescription;