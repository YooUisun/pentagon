


export default function Calendar (props) {



    return (

        <div className="calendar_container">
            달력 기능
            <br/>
            <button onClick={props.onOff_detail}>
                달력 날짜 random 입력
            </button>
        </div>
    )
}