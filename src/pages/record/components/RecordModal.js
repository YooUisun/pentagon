

export default function RecordModal() {



    return (

        <div className="recordModal_container">

            <div className="recordModal_content_detail">
                Title<button>삭제?수정?</button>
            </div>

            <div className="recordModal_content_detail">
                날짜선택 (캘린더 기능 추가)
            </div>

            <div className="recordModal_content_detail">
                추가내용 입력 (노트 기능 추가)
            </div>

            <div className="recordModal_content">
                <div>
                    <div>아이콘 + 기간</div>
                    <div>총 시간 합계 (숫자)</div>
                </div>
                <div>
                    <div>아이콘 + 세트</div>
                    <div>총 세트 합계 (숫자)</div>
                </div>
                <div>
                    <div>아이콘 + 무게</div>
                    <div>총 무게 합계 (숫자)</div>
                </div>
            </div>

            <div className="recordModal_content_detail">
                <div>운동명</div>
                <div>추가내용 입력에 입력된 데이터 가져옴 → N세트 : N kg x N회</div>
            </div>

        </div>
    )
}