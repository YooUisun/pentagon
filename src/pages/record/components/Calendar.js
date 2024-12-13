import React, { useState } from "react";

function Calendar({ onValueChange, workoutDays = [] }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); //현재 월
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // 현재 연도

    //이전 달로 이동
    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            // 현재 달이 1월(0)이면, 12월(11)로 설정하고 연도를 -1 감소
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            // 그렇지 않으면 현재 달을 -1 감소
            setCurrentMonth(currentMonth - 1);
        }
    };
    //다음 달로 이동
    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };
    // 특정 날짜를 선택했을 때, 부모 컴포넌트로 선택된 날짜를 전달
    const changeSelectDay = (day) => {
        // 날짜를 'YYYY-MM-DD' 형식으로 포맷팅
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        // 부모 컴포넌트로 선택된 날짜 전달
        onValueChange(formattedDate);
    };
    // 현재 달에 표시될 날짜를 렌더링
    const renderCalendarDays = () => {
        // 해당 월의 마지막 날짜를 구함 (ex: 2024년 2월 -> 29)

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const days = [];
        // 1일부터 해당 월의 마지막 날까지 날짜 생성
        for (let i = 1; i <= daysInMonth; i++) {
            // 각 날짜를 'YYYY-MM-DD' 형식으로 포맷팅
            const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            // 해당 날짜가 운동 기록에 포함되어 있는지 확인
            const isWorkoutDay = workoutDays.includes(formattedDate);

            // 날짜를 달력의 한 칸으로 생성
            days.push(
                <div
                    key={i}  // React에서 각 요소는 고유한 key 필요
                    className={`calendar-day ${isWorkoutDay ? "workout-day" : ""}`} // 운동 기록 여부에 따라 스타일링
                    onClick={() => changeSelectDay(i)} // 날짜 클릭 시 선택된 날짜 업데이트
                >
                    <span>{i}</span> {/* 날짜 숫자를 화면에 표시 */}
                </div>
            );
        }

        return days; // 생성된 날짜 배열 반환
    };

    return (
        <div className="calendar-container">
            {/* 달력 상단 헤더: 이전/다음 버튼과 현재 연도 및 월 */}
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>◀</button> {/* 이전 달 이동 버튼 */}
                <div>
                    {currentYear}년 {currentMonth + 1}월 {/* 현재 연도와 월 표시 */}
                </div>
                <button onClick={handleNextMonth}>▶</button> {/* 다음 달 이동 버튼 */}
            </div>
            {/* 달력 날짜 영역 */}
            <div className="calendar-days">{renderCalendarDays()}</div>
        </div>
    );
}

export default Calendar;
