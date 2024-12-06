import "./Record.css";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState } from "react";

export default function RecordMain() {
    const [selectDay, setSelectDay] = useState('');
    const [workoutDays, setWorkoutDays] = useState([]); // 운동한 날짜 추가
    const [workoutData, setWorkoutData] = useState({}); // 날짜별 운동 데이터

    // 자식 컴포넌트에서 값을 받는 함수
    const handleSelectdayFromChild = (value) => {
        console.log(value);
        setSelectDay(value);
    };

    const dataUpdate = (newRecord) => {
        // 선택된 날짜의 일자 추출
        const day = parseInt(selectDay.split('일')[0].split(' ')[2]);
        if (day) {
            // 중복 방지를 위해 Set 사용
            const updatedWorkoutDays = [...new Set([...workoutDays, day])];
            setWorkoutDays(updatedWorkoutDays);

            // 날짜별 데이터 저장 (날짜를 키로 사용)
            setWorkoutData(prevData => {
                const dayKey = day.toString();
                const existingDayData = prevData[dayKey] || [];
                return {
                    ...prevData,
                    [dayKey]: [...existingDayData, newRecord]
                };
            });
        }
    };

    // 선택된 날짜의 데이터를 가져오는 함수
    const getSelectedDayData = () => {
        const day = parseInt(selectDay.split('일')[0].split(' ')[2]);
        return day ? workoutData[day.toString()] || [] : [];
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="recordMain">
                <h1>My Workout Diary</h1>
                <section className="contents">
                    <div className="myWork">
                        <Calendar 
                            onValueChange={handleSelectdayFromChild}
                            workoutDays={workoutDays}
                        />
                        <RecordModal
                            value={selectDay}
                            dataUpdate={dataUpdate}
                        />
                    </div>
                    <div className="statisticContent">
<Statistics 
    data={getSelectedDayData()} 
    setData={(newData) => {
        const day = parseInt(selectDay.split('일')[0].split(' ')[2]);
        if (day) {
            setWorkoutData(prevData => ({
                ...prevData,
                [day.toString()]: newData
            }));
        }
    }}
    selectedDay={selectDay} 
    workoutDays={workoutDays} 
    setWorkoutDays={setWorkoutDays}
/>
                    </div>
                </section>
            </div>
        </div>
    );
}