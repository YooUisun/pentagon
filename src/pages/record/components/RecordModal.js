import React, { useState } from 'react';
import Calendar from './Calendar';

export default function RecordModal({ value, totalHourUpdate, totalSetUpdate } ) {
    const day = useState();
    let [ inputHour, setInputHour ] = useState();
    let [ inputSet, setInputSet ] = useState();



    // 총 시간합계 txt 값 가져오기
    function inputH_Record(event) {
        setInputHour(event.target.value);
    }

    function inputS_Record(event) {
        setInputSet(event.target.value);
    }

    // 최종 입력버튼 값 가져오기
    function inputBtn(event) {
        event.preventDefault();

        let hourVal = Number(inputHour);
        let setVal = Number(inputSet);

        if (isNaN(hourVal) || hourVal === 0 ) {
            alert('시간을 숫자로 입력하세요');
            return;
        } 
        
        if ( isNaN(setVal) || setVal === 0 ) {
            alert('세트를 숫자로 입력하세요');
            return;
        }

        totalHourUpdate(hourVal);
        totalSetUpdate(setVal);
        setInputHour('');
        setInputSet('');
    }

    return (

        <div className="recordModal_container">

            <div className="recordModal_content_detail">
                Title<button>삭제?수정?</button>
            </div>

            <div className="recordModal_content_detail">
                날짜선택 (캘린더 기능 추가)
                <div>{value}</div>
            </div>

            <div className="recordModal_content_detail">
                추가내용 입력 (노트 기능 추가)
            </div>

            <div className="recordModal_content">
                <div>
                    <div>아이콘 + 기간</div>
                    <div>총 시간 합계 (숫자)</div>
                    <input type='text' value={inputHour} onChange={inputH_Record}></input>
                </div>
                <div>
                    <div>아이콘 + 세트</div>
                    <div>총 세트 합계 (숫자)</div>
                    <input type='text' value={inputSet} onChange={inputS_Record}></input>
                </div>
                <div>
                    <div>아이콘 + 무게</div>
                    <div>총 무게 합계 (숫자)</div>
                </div>
            </div>

            <div className="recordModal_content_detail">
                <button onClick={inputBtn}>입력</button>
            </div>

        </div>
    )
}