import React, { useState } from "react";

function Calendar({ onValueChange, workoutDays = [] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // // const workoutDays = [2, 3]; // 운동 기록 날짜 (예시) << 이거 "12월7일 의선" 삭제했습니다. 놔두면 2,3일 초록불 고정됨

  // 데이터를 여기서 입력을 하는게 아니라 입력받은걸 가지고 와야해서

  const [selctDay, setSelectDay] = useState(new Date().getDay());

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
    const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
    const selectedDate = new Date(currentYear, currentMonth, day);
    const dayOfWeek = weekDays[selectedDate.getDay()];  //요일계산
    setSelectDay(day);

    // 년, 월, 일, 요일 정보를 전달
    onValueChange(`${currentYear}년 ${currentMonth + 1}월 ${day}일 (${dayOfWeek})`);
  };

  const renderCalendarDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const isWorkoutDay = workoutDays.includes(i);

      // 12월7일 의선 수정: isWorkoutDay에 따라 CSS 클래스 추가
      days.push(
        <div
          key={i}
          className={`calendar-day ${isWorkoutDay ? "workout-day" : ""}`}
          onClick={() => changeSelectDay(i)}
        >
          <span>{i}</span>
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
