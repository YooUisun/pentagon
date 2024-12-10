import React, { useState } from "react";

function Calendar({ onValueChange, workoutDays = [] }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

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
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        onValueChange(formattedDate);
    };

    const renderCalendarDays = () => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const days = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const isWorkoutDay = workoutDays.includes(formattedDate);

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
