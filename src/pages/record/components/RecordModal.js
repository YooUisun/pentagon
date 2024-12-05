import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuClipboardList, LuBicepsFlexed } from "react-icons/lu";

export default function RecordModal({ value }) {
    // 상태 관리
    const [time, setTime] = useState(""); // 기간 입력값
    const [sets, setSets] = useState(""); // 세트 입력값
    const [weight, setWeight] = useState(""); // 무게 입력값

    // 시간 입력 핸들러
    const handleTimeChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= 60) {
            setTime(value);
        } else if (e.target.value === "") {
            setTime("");
        }
    };

    // 세트 입력 핸들러
    const handleSetsChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= 20) {
            setSets(value);
        } else if (e.target.value === "") {
            setSets("");
        }
    };

    // 무게 입력 핸들러
    const handleWeightChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= 500) {
            setWeight(value);
        } else if (e.target.value === "") {
            setWeight("");
        }
    };

    // 제출 핸들러: 입력값 초기화
    const handleSubmit = () => {
        // 입력값을 모두 초기화
        setTime("");
        setSets("");
        setWeight("");
    };

    return (
        <div className="recordModal_container">
            <div className="recordModal_content_detail">
                오늘의 운동
                <br />
                <select name="upper" id="">
                    <optgroup label="상체">
                        <option value="Push_up">푸쉬업</option>
                        <option value="Sit_up">싯업</option>
                        <option value="Bench_press">벤치프레스</option>
                        <option value="Dead_lift">데드리프트</option>
                        <option value="Over_head_Press">오버헤드 프레스</option>
                        <option value="Barbell_row">바벨로우</option>
                    </optgroup>
                    <optgroup label="하체">
                        <option value="Band_Step_up">밴드 스텝업</option>
                        <option value="Babel_squat">바벨스쿼트</option>
                    </optgroup>
                </select>
            </div>

            <div className="recordModal_content_detail">
                날짜선택
                <div>{value}</div>
            </div>

            <div className="recordModal_content">
                {/* 기간 입력 */}
                <div className="RecordModal_content_time">
                    <AiOutlineClockCircle />
                    <div>운동시간(Min)</div>
                    <input
                        type="number"
                        placeholder="00"
                        value={time}
                        onChange={handleTimeChange}
                    />
                </div>

                {/* 세트 입력 */}
                <div className="RecordModal_content_set">
                    <LuClipboardList />
                    <div>세트(Set)</div>
                    <input
                        type="number"
                        placeholder="최대 20"
                        value={sets}
                        onChange={handleSetsChange}
                    />
                </div>

                {/* 무게 입력 */}
                <div className="RecordModal_content_weight">
                    <LuBicepsFlexed />
                    <div>무게(Weight)</div>
                    <input
                        type="number"
                        placeholder="최대 500kg"
                        value={weight}
                        onChange={handleWeightChange}
                    />
                </div>
            </div>

            {/* 제출 버튼 */}
            <div className="summit_button">
                <button onClick={handleSubmit}>제출버튼</button>
            </div>
        </div>
    );
}
