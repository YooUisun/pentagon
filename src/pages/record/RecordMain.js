import "./Record.css";

import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState } from "react";
import WorkoutList from "./data/WorkoutList";

export default function RecordMain() {

    const [ selectDay, setSelectDay ] = useState();
    // 자식 컴포넌트에서 값을 받는 함수

    const handleSelectdayFromChild = (value) => {
        console.log(value);
        setSelectDay(value);
    };

    // 자식 컴포넌트에서 값을 받는 함수 (Record Modal컴포넌트에서 제출하는 기록)
    const [ data, setData ] = useState([ WorkoutList ]);

    const dataUpdate = (value) => {
        setData(value);
    }

    // const [ totalSet, setTotalSet] = useState();

    // const totalSetUpdate = (setVal) => {
    //     setTotalSet(setVal);
    // }


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="recordMain">
                <h1>My Workout Diary</h1>
                <section className="contents">
                    <div className="myWork">
                        <Calendar onValueChange={handleSelectdayFromChild} />
                        <RecordModal
                            value={selectDay}
                            dataUpdate={dataUpdate}
                        />
                    </div>
                    <div className="statisticContent">
                        <Statistics />
                        {/* <Statistics totalHour={totalHour} totalSet={totalSet} /> */}
                    </div>
                </section>
            </div>
        </div>
    );
}
