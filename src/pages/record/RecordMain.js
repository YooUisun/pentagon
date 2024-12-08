import "./Record.css";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState } from "react";

export default function RecordMain() {
    const [selectDay, setSelectDay] = useState(''); // 선택된 날짜
    const [workoutDays, setWorkoutDays] = useState([]); // 운동한 날짜 리스트
    const [workoutData, setWorkoutData] = useState({}); // 날짜별 운동 데이터 저장
    const [data1, setData1] = useState([]); // 운동 기록 데이터
    const [resetModal, setResetModal] = useState(false); // 모달 입력 초기화 상태

    const handleSelectdayFromChild = (value) => { // 날짜 클릭 시, 선택된 날짜 업데이트
        setSelectDay(value);
        setResetModal(true); // 날짜가 바뀌면 모달 초기화
    };


    // 선택된 날짜에 맞는 데이터를 새로 추가하는 함수
    const dataUpdate1 = (newRecord) => {
        setData1((prevData) => [...prevData, newRecord]);
        dataUpdate(newRecord); // 날짜별 데이터 업데이트 함수 호출
    };

    const dataUpdate = (newRecord) => {
        const day = parseInt(selectDay.split('일')[0].split(' ')[2]);
        if (day) {
            const updatedWorkoutDays = [...new Set([...workoutDays, day])];
            setWorkoutDays(updatedWorkoutDays); // 운동한 날짜 리스트 업데이트

            // 날짜별 데이터 저장
            setWorkoutData((prevData) => {
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

    // X 버튼 클릭시 운동 데이터 삭제 및 초록불 상태 업데이트
    const handleDeleteWorkout = (newData) => {
        setData1(newData); // 전체 데이터 업데이트

        const updatedWorkoutData = newData.reduce((acc, record) => {
            const day = parseInt(record.date.split('일')[0].split(' ')[2]);
            if (day) {
                const dayKey = day.toString();
                acc[dayKey] = acc[dayKey] ? [...acc[dayKey], record] : [record];
            }
            return acc;
        }, {});

        setWorkoutData(updatedWorkoutData); // 날짜별 운동 데이터 업데이트

        const updatedWorkoutDays = Object.keys(updatedWorkoutData).map(Number);
        setWorkoutDays(updatedWorkoutDays); // 운동한 날짜 리스트 업데이트
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="recordMain">
                <h1>My Workout Diary</h1>

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
                            data={getSelectedDayData()} // 선택된 날짜의 데이터만 전달
                            // data1={data1} // 전체 운동 기록 데이터
                            setData={(newData) => {
                                const day = parseInt(selectDay.split('일')[0].split(' ')[2]);
                                if (day) {
                                    setWorkoutData((prevData) => ({
                                        ...prevData,
                                        [day.toString()]: newData
                                    }));
                                }
                            }}
                            selectedDay={selectDay}
                            workoutDays={workoutDays}
                            setWorkoutDays={setWorkoutDays}
                            setData1={handleDeleteWorkout} // 삭제 시 초록불 업데이트
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
