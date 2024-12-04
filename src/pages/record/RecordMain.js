import "./Record.css";

import CalendarHeader from "./components/CalendarHeader";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState } from "react";

export default function RecordMain() {

    const [ selectDay, setSelectDay ] = useState();
    // 자식 컴포넌트에서 값을 받는 함수

    const handleSelectdayFromChild = (value) => {
        console.log(value);
        setSelectDay(value);
    };


    // 종원 시간 입력값 받아서 통계로 넘김
    // 자식 컴포넌트에서 값을 받는 함수 (총 시간)
    const [ totalHour, setTotalHour ] = useState();

        // 자식 컴포넌트에서 값을 받는 함수 (총 세트수)
    const [ totalSet, setTotalSet] = useState();

    const totalHourUpdate = (hourVal) => {
        setTotalHour(hourVal); // 총 시간 상태 업데이트
    } // recordModal에서 인자 가져옴

    const totalSetUpdate = (setVal) => {
        setTotalSet(setVal);
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="recordMain">
                <h1>My Workout Diary</h1>
                <section className="contents">
                    <div className="myWork">
                        <Calendar onValueChange={handleSelectdayFromChild} />
                        <RecordModal value={selectDay} totalHourUpdate={totalHourUpdate} totalSetUpdate={totalSetUpdate} />
                    </div>
                    <div className="statisticContent">
                        <Statistics totalHour={totalHour} totalSet={totalSet} />
                    </div>
                </section>
            </div>
        </div>
    );
}
