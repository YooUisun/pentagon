import "./Record.css";

import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState } from "react";
// import WorkoutList from "./data/WorkoutList";

export default function RecordMain() {

    const [ selectDay, setSelectDay ] = useState();
    // 자식 컴포넌트에서 값을 받는 함수

    const handleSelectdayFromChild = (value) => {
        console.log(value);
        setSelectDay(value);
    };


    const [ data, setData ] = useState([]); //운동기록데이터
    const [ countType, setCountType] = useState({});

    const dataUpdate = (newRecord) => {
        setData( (prevData) => [...prevData, newRecord]); // 업데이트된 값을 setData에 반영
    }

    const typeUpdate = (value) => {
        setCountType( (prevType) => value(prevType));
    }

    console.log(countType);

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
                            typeUpdate={typeUpdate}
                        />
                    </div>

                    <div className="statisticContent">
                        <Statistics data={data} setData={setData} countType={countType}/>
                    </div>
                </section>

            </div>
        </div>
    );
}
