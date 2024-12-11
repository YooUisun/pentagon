import "./Record.css";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState, useEffect } from "react";

export default function RecordMain() {
    const [selectDay, setSelectDay] = useState(''); // 선택된 날짜
    const [workoutDays, setWorkoutDays] = useState([]); // 운동한 날짜 리스트
    const [workoutData, setWorkoutData] = useState({}); // 날짜별 운동 데이터 저장

    const handleSelectdayFromChild = (value) => { 
        setSelectDay(value); // 선택된 날짜 업데이트
    };

    const dataUpdate1 = (newRecord) => {
        const date = selectDay; // 'YYYY-MM-DD' 형식
        if (!date) return;

        setWorkoutData((prevData) => {
            const updatedData = { ...prevData };
            if (!updatedData[date]) {
                updatedData[date] = [];
            }
            updatedData[date].push(newRecord);
            return updatedData;
        });

        setWorkoutDays((prevDays) => [...new Set([...prevDays, date])]); // 중복 제거
    };

    const getSelectedDayData = () => {
        return workoutData[selectDay] || [];
    };

    const handleDeleteWorkout = (newData) => {
        setWorkoutData((prevData) => {
            const updatedData = { ...prevData };
            if (selectDay) {
                updatedData[selectDay] = newData;

                // 데이터가 비어 있으면 해당 날짜 삭제
                if (newData.length === 0) {
                    delete updatedData[selectDay];
                }
            }
            return updatedData;
        });
    };

    // **useEffect 추가**: workoutData를 기반으로 workoutDays 동기화
    useEffect(() => {
        const updatedDays = Object.keys(workoutData).filter((day) => {
            return workoutData[day] && workoutData[day].length > 0;
        });
        setWorkoutDays(updatedDays);
    }, [workoutData]); // workoutData가 변경될 때마다 실행

    return (
        
            <div className="recordMain">
            
                <section className="contents">
                    <div className="myWork">
                        <Calendar
                            onValueChange={handleSelectdayFromChild}
                            workoutDays={workoutDays} // 운동한 날짜 리스트 전달
                        />
                        <RecordModal
                            value={selectDay}
                            dataUpdate1={dataUpdate1} // 운동 기록 추가 로직
                        />
                    </div>
                    <div className="statisticContent">
                        <Statistics
                            data={getSelectedDayData()} // 선택된 날짜의 데이터 전달
                            setData={(newData) => {
                                setWorkoutData((prevData) => ({
                                    ...prevData,
                                    [selectDay]: newData,
                                }));
                            }}
                            selectedDay={selectDay}
                            workoutDays={workoutDays}
                            setWorkoutDays={setWorkoutDays}
                            setData1={handleDeleteWorkout} // 삭제 시 초록불 업데이트
                        />
                    </div>
                </section>
            </div>
        
    );
}
