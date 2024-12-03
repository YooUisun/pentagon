import './Record.css';

import CalendarHeader from "./components/CalendarHeader";
import Calendar from "./components/Calendar";
import RecordModal from "./components/RecordModal";
import Statistics from "./components/Statistics";

export default function RecordMain() {


    return (

        <div className='recordMain'>

            <h1>Gym Day</h1>
            <br />

            <CalendarHeader />
            <br />

            <Calendar />

            <RecordModal />
            <br/>

            <Statistics />
        </div>
    )
}