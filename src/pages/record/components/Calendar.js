import React, { useState } from "react";

function Calendar({ onValueChange }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectDay, setSelectDay] = useState(new Date().getDay());
  // 운동 기록이 있는 날짜 (예시)
  const workoutDays = [2,3];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const changeSelectDay = (day) => {
    console.log(day)
    setSelectDay(day);
    onValueChange(currentYear+"년 "+(currentMonth+1)+"월 "+day+"일");
  };

  const renderCalendarDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const isWorkoutDay = workoutDays.includes(i);
      days.push(
        <div key={i} className="calendar-day" onClick={()=>changeSelectDay(i)}>
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
