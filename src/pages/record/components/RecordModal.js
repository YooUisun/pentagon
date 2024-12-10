import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuClipboardList, LuBicepsFlexed } from "react-icons/lu";

export default function RecordModal({ value, dataUpdate1 }) {
    // 상태 관리
    const [title, setTitle] = useState(""); // 운동 입력값
    const [time, setTime] = useState(""); // 기간 입력값
    const [sets, setSets] = useState(""); // 세트 입력값
    const [weight, setWeight] = useState(""); // 무게 입력값
    const [type, setType] = useState(""); // 셀렉트박스 그룹값

    // 운동 입력 핸들러
    const handleTitleChange = (e) => {
        const selectedOption = e.target.value; // 선택된 운동명
        setTitle(selectedOption);

        // optgroup의 label 값을 가져오기
        const selectedGroup = e.target.options[e.target.selectedIndex].parentNode.label;
        setType(selectedGroup);
    };

    // 입력값 변경 핸들러
    const handleInputChange = (setter, min, max) => (e) => {
        const value = Number(e.target.value);
        if (value >= min && value <= max) {
            setter(value);
        } else if (e.target.value === "") {
            setter("");
        }
    };

    // 제출 핸들러: 입력값 초기화
    const handleSubmit = () => {
        // 입력값 유효성 검사
        if (!title) return alert("운동명을 선택해주세요.");
        if (!time) return alert("운동 시간을 입력해주세요.");
        if (!sets) return alert("세트를 입력해주세요.");
        if (!weight) return alert("무게를 입력해주세요.");

        // 새로운 운동 기록 생성
        const newRecord = {
            date: value, // 부모 컴포넌트로부터 전달받은 YYYYMMDD 값
            title,
            time: Number(time),
            sets: Number(sets),
            weight: Number(weight),
            type,
        };

        dataUpdate1(newRecord); // 부모 컴포넌트에 새로운 기록 전달

        // 입력값 초기화
        setTitle("");
        setTime("");
        setSets("");
        setWeight("");
    };

    return (
        <div className="recordModal_container">
            <div className="recordModal_content_detail">
                <h3>오늘의 운동</h3>
                <select name="exercise" value={title} onChange={handleTitleChange}>
                    <option value="" disabled>
                        운동을 선택하세요
                    </option>
                    <optgroup label="어깨">
                        <option value="밀리터리 프레스">밀리터리 프레스</option>
                        <option value="사이드 레터럴 레이즈">사이드 레터럴 레이즈</option>
                        <option value="페이스 풀">페이스 풀</option>
                        <option value="아놀드 프레스">아놀드 프레스</option>
                    </optgroup>
                    <optgroup label="팔">
                        <option value="바벨 컬">바벨 컬</option>
                        <option value="해머 컬">해머 컬</option>
                        <option value="트라이셉스 푸쉬다운">트라이셉스 푸쉬다운</option>
                    </optgroup>
                    <optgroup label="가슴">
                        <option value="벤치 프레스">벤치 프레스</option>
                        <option value="푸쉬업">푸쉬업</option>
                        <option value="인클라인 벤치 프레스">인클라인 벤치 프레스</option>
                        <option value="케이블 크로스오버">케이블 크로스오버</option>
                    </optgroup>
                    <optgroup label="등">
                        <option value="풀업">풀업</option>
                        <option value="바벨 로우">바벨 로우</option>
                        <option value="랫 풀다운">랫 풀다운</option>
                        <option value="데드리프트">데드리프트</option>
                    </optgroup>
                    <optgroup label="복근">
                        <option value="크런치">크런치</option>
                        <option value="레그 레이즈">레그 레이즈</option>
                        <option value="플랭크">플랭크</option>
                        <option value="바이시클 크런치">바이시클 크런치</option>
                    </optgroup>
                    <optgroup label="허벅지">
                        <option value="스쿼트">스쿼트</option>
                        <option value="런지">런지</option>
                        <option value="레그 프레스">레그 프레스</option>
                    </optgroup>
                </select>
            </div>

            <div className="recordModal_content_detail">
                <h3>날짜</h3>
                <div>{value}</div> {/* YYYYMMDD 형식으로 표시 */}
            </div>

            <div className="recordModal_content">
                {/* 운동시간 */}
                <div className="RecordModal_content_time">
                    <AiOutlineClockCircle />
                    <div>운동시간(Min)</div>
                    <input
                        type="number"
                        placeholder="최소 1분 이상"
                        value={time}
                        onChange={handleInputChange(setTime, 1, 60)}
                    />
                </div>

                {/* 세트 */}
                <div className="RecordModal_content_set">
                    <LuClipboardList />
                    <div>세트(Set)</div>
                    <input
                        type="number"
                        placeholder="최대 20"
                        value={sets}
                        onChange={handleInputChange(setSets, 1, 20)}
                    />
                </div>

                {/* 무게 */}
                <div className="RecordModal_content_weight">
                    <LuBicepsFlexed />
                    <div>무게(Weight)</div>
                    <input
                        type="number"
                        placeholder="최대 500kg"
                        value={weight}
                        onChange={handleInputChange(setWeight, 1, 500)}
                    />
                </div>
            </div>

            {/* 제출 버튼 */}
            <div className="submit_button">
                <button onClick={handleSubmit}>제출</button>
            </div>
        </div>
    );
}
