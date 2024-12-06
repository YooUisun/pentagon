import React, { useState } from "react";

function Calendar({ onValueChange, workoutDays }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // 1월에서 이전 달로 이동 시 12월로 설정.
      setCurrentYear(currentYear - 1); // 연도 감소.
    } else {
      setCurrentMonth(currentMonth - 1); // 월 감소.
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // 12월에서 다음 달로 이동 시 1월로 설정.
      setCurrentYear(currentYear + 1); // 연도 증가.
    } else {
      setCurrentMonth(currentMonth + 1); // 월 증가.
    }
  };

  const changeSelectDay = (day) => {
    const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
    const selectedDate = new Date(currentYear, currentMonth, day);
    const dayOfWeek = weekDays[selectedDate.getDay()];

    onValueChange(`${currentYear}년 ${currentMonth + 1}월 ${day}일 (${dayOfWeek})`);
  };

  const renderCalendarDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const isWorkoutDay = workoutDays.includes(i);
      days.push(
        <div
          key={i}
          className="calendar-day"
          onClick={() => changeSelectDay(i)}
        >
          <span>{i}</span>
          {isWorkoutDay && <div className="workout-indicator"></div>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>◀</button>
        <div>
          {currentYear}년 {currentMonth + 1}월
        </div>
        <button onClick={handleNextMonth}>▶</button>
      </div>
      <div className="calendar-days">{renderCalendarDays()}</div>
    </div>
  );
}

export default Calendar;