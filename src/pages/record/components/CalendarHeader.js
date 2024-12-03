

export default function CalendarHeader(props) {

    return (
        
        <div>
            <div className="day_container">
                <div className="day_style">
                    <h3>월</h3><button className="btn_round" onClick={props.onOff_calendar}>2</button>
                </div>
                <div className="day_style">
                    <h3>화</h3><button className="btn_round" onClick={props.onOff_calendar}>3</button>
                </div>
                <div className="day_style">
                    <h3>수</h3><button className="btn_round" onClick={props.onOff_calendar}>4</button>
                </div>
                <div className="day_style">
                    <h3>목</h3><button className="btn_round" onClick={props.onOff_calendar}>5</button>
                </div>
                <div className="day_style">
                    <h3>금</h3><button className="btn_round" onClick={props.onOff_calendar}>6</button>
                </div>
                <div className="day_style">
                    <h3>토</h3><button className="btn_round" onClick={props.onOff_calendar}>7</button>
                </div>
                <div className="day_style">
                    <h3>일</h3><button className="btn_round" onClick={props.onOff_calendar}>8</button>
                </div>
            </div>
        </div>
    )
}