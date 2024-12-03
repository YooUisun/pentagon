import './Record.css';

import CalendarHeader from "./components/CalendarHeader";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";
import { useState } from 'react';

export default function RecordMain() {

    let [calendarModal, setCalModal] = useState(false);
    let [detailModal, setDetailModal] = useState(false);

    // 캘린더 모달 on/off
    function onOff_calendar (event) {
        event.preventDefault();
        
        if(calendarModal) {
            setCalModal(false);
        } else {
            setCalModal(true);
        }
    }

    // 세부정보 모달 on/off
    function onOff_detail (event) {
        event.preventDefault();

        if(detailModal) {
            setDetailModal(false);
        } else {
            setDetailModal(true);
        }
    }



    return (

        <div className='recordMain'>

            <h1>Gym Day</h1>
            <br />

            <CalendarHeader onOff_calendar={onOff_calendar}/>
            <br />

            {
                calendarModal === true ? <Calendar onOff_detail={onOff_detail}/> : null
            }

            {
                detailModal === true ? <RecordModal /> : null
            }

            <br />

            <Statistics />
        </div>
    )
}