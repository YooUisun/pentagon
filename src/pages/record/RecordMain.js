import "./Record.css";

import CalendarHeader from "./components/CalendarHeader";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import {useState} from "react";

export default function RecordMain() {

    const [selectDay, setSelectDay] = useState();
// 자식 컴포넌트에서 값을 받는 함수
    const handleSelectdayFromChild = (value) => {
        console.log(value);
        setSelectDay(value);
    };
return (
    <div className="recordMain">
    <h1>My Workout Diary</h1>
    <section className="contents">
        <div className="myWork">
            <Calendar onValueChange={handleSelectdayFromChild}/>
            <RecordModal value={selectDay}/>
        </div>
        <div className="statisticContent">
            <Statistics />
        </div>
    </section>
    </div>
);
}
