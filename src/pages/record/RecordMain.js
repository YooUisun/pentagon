import "./Record.css";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState } from "react";

export default function RecordMain() {
    const [selectDay, setSelectDay] = useState('');
    const [workoutDays, setWorkoutDays] = useState([]); // 운동한 날짜 추가
    const [workoutData, setWorkoutData] = useState({}); // 날짜별 운동 데이터


    const handleSelectdayFromChild = (value) => { // recordModal에 캘린더 클릭시 날짜 전달해줌 (value 매개변수)
        setSelectDay(value);
    };

    //------------------------------------------------------------------------------------------------------------
    // data1에 recordModal에서 입력하는 값 데이터 들어옴 + 차트로 넘어가는 데이터
    const [data1, setData1] = useState([]); //운동기록데이터

    const dataUpdate1 = (newRecord) => {
        setData1((prevData) => [...prevData, newRecord]); // 업데이트된 값을 setData에 반영
    }

    //------------------------------------------------------------------------------------------------------------


    // 의선님 작업 -> 수정 요청 (불필요 코드 찾기)  - 12월 06일
    // 코드 삭제 x, 변수명 or 함수명 변경시 주석 처리 및 주석 꼭 달아주세요
    // return부분에 calendar, statistics 컴포넌트에 props값 보낸것도 정리 한번 필요합니다. -> data1, setData1은 지우지 말아주세요 (데이터 보내는 props임)


    // 선택된 날짜의 일자 추출
    const dataUpdate = (newRecord) => {
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
    }

    // 선택된 날짜의 데이터를 가져오는 함수
    const getSelectedDayData = () => {
        const day = parseInt(selectDay.split('일')[0].split(' ')[2]);
        return day ? workoutData[day.toString()] || [] : [];
    };

    //------------------------------------------------------------------------------------------------------------

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
                            dataUpdate1={dataUpdate1}
                        />
                    </div>

                    <div className="statisticContent">
                        <Statistics
                            data={getSelectedDayData()}
                            data1={data1}
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
                            setData1={setData1}
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}
