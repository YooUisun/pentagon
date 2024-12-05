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
                <select name="Health" id="Health">
                    <optgroup label="어깨">
                    <option value="Military_Press">밀리터리 프레스</option>
                    <option value="lateral_Raise">사이드 레터럴 레이즈</option>
                    <option value="Face_Pull">페이스 풀</option>
                    <option value="Arnold_Press">아놀드 프레스</option>

                    </optgroup>
                    <optgroup label="팔">
                    <option value="Babel_Curl">바벨 컬</option>
                    <option value="Hammer_curl">해머 컬</option>
                    <option value="Triceps_Push_Down">트라이셉스 푸쉬다운</option>
                    </optgroup>
                    <optgroup label="가슴">
                    <option value="Bench_Press">벤치 프레스</option>
                    <option value="Push_Up">푸쉬업</option>
                    <option value="Incline_Bench_Press">인클라인 벤치 프레스</option>
                    <option value="cable_crossover">케이블 크로스오버</option>

                    </optgroup>
                    <optgroup label="등">
                    <option value="Pull_Up">풀업</option>
                    <option value="Babel_Row">바벨 로우</option>
                    <option value="lat-Pulldown">랫 풀다운</option>
                    <option value="Dead_Lift">데드리프트</option>

                    </optgroup>
                    <optgroup label="복근">
                    <option value="Crunch">크런치</option>
                    <option value="Leg_raise">레그 레이즈</option>
                    <option value="Plank">플랭크</option>
                    <option value="Bicycle_Maneuver">바이시클 크런치</option>

                    </optgroup>
                    <optgroup label="허벅지">
                    <option value="squat">스쿼트</option>
                    <option value="Lunge">런지</option>
                    <option value="Leg_press">레그 프레스</option>
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
                        placeholder="최소 1분 이상"
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
