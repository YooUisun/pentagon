

export default function RecordModal() {



    return (

        <div className="recordModal_container">

            <div className="recordModal_content_title">

                <input className="recordModal_content_txt"
                    type="text" placeholder="title">
                </input>
            </div>
            
            <input
                type="text" className="recordModal_content_detail" placeholder="날짜선택 (캘린더 기능 추가)">
            </input>

            <input
                type="text" className="recordModal_content_detail" placeholder="추가내용 입력 (노트 기능 추가)">
            </input>

            <div className="recordModal_content">
                <div className="recordModal_content_div">
                    <input type="text" placeholder="아이콘 + 기간"></input>
                    <input type="text" placeholder="총 시간 합계 (숫자)"></input>
                </div>
                <div className="recordModal_content_div">
                    <input type="text" placeholder="아이콘 + 세트"></input>
                    <input type="text" placeholder="총 세트 합계 (숫자)"></input>
                </div>
                <div className="recordModal_content_div">
                    <input type="text" placeholder="아이콘 + 무게"></input>
                    <input type="text" placeholder="총 무게 합계 (숫자)"></input>
                </div>
            </div>

            <div className="recordModal_content_detail">
                <input type="text" placeholder="운동명"></input>
                <input type="text" placeholder="추가내용 입력에 입력된 데이터 가져옴 → N세트 : N kg x N회"></input>
            </div>

        </div>
    )
}