import "./Record.css";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState, useEffect } from "react";

export default function RecordMain() {
    // 선택된 날짜를 저장하는 상태 (ex: '2024-12-13')
    const [selectDay, setSelectDay] = useState('');
    // 운동 기록이 있는 날짜 목록을 저장하는 상태 (ex: ['2024-12-12', '2024-12-13'])
    const [workoutDays, setWorkoutDays] = useState([]);
    // 날짜별 운동 데이터를 저장하는 상태 (ex: { '2024-12-13': [{...}, {...}] })
    const [workoutData, setWorkoutData] = useState({});


    //캘린더에서 날짜를 선택했을 때 호출되는 함수
    const handleSelectdayFromChild = (value) => {
        // 부모 컴포넌트로 전달된 선택된 날짜를 업데이트
        setSelectDay(value);

    };
        // 새로운 운동 기록을 추가하는 함수
    const dataUpdate = (newRecord) => {
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
                        dataUpdate={dataUpdate} // 운동 기록 추가 로직
                    />
                </div>
                <div className="statisticContent">
                    <Statistics
                        selData={getSelectedDayData()} // 선택된 날짜의 데이터 전달
                        handleDeleteWorkout={handleDeleteWorkout} // 삭제 시 초록불 업데이트
                    />
                </div>
            </section>
        </div>

    );
}
