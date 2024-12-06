import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { LuClipboardList, LuBicepsFlexed } from "react-icons/lu";

export default function RecordModal({ value, dataUpdate, typeUpdate }) {
    // 상태 관리
    const [ title, setTitle ] = useState(''); //운동 입력값
    const [ time, setTime ] = useState(0); // 기간 입력값
    const [ sets, setSets ] = useState(0); // 세트 입력값
    const [ weight, setWeight ] = useState(0); // 무게 입력값
    const [ type, setType ] = useState('');
    // const [newWorkoutList, setNewWorkoutList] = useState([]); // 총 데이터 입력

    // 운동 입력 핸들러
    const handleTitleChange = (e) => {
        const title = e.target.value; // 운동명 밸류값

        const getOptIndex = (e.target.options[ e.target.selectedIndex ]); // 선택옵션 인덱스값
        const getOptLabel = getOptIndex.parentNode.label; // 선택옵션 인덱스값의 레이블

        setTitle(title); //운동명 렌더링
        setType(getOptLabel); // 운동종류 렌더링

        typeUpdate((prevType) => ({
            ...prevType, [ getOptLabel ]: (prevType[ getOptLabel ] || 0) + 1
        })) // 기존 countType객체를 복사해서 getOptLabel 키값을 1씩 증가

        // (Object.values(countType));
        console.log(getOptLabel);
    }

    // 시간 입력 핸들러
    const handleTimeChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= 60) {
            setTime(value);
        } else if (e.target.value === "") {
            setTime("");
        }

        console.log(value);
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
        if (value >= 1 && value <= 500) {
            setWeight(value);
        } else if (e.target.value === "") {
            setWeight("");
        }
    };

    // 제출 핸들러: 입력값 초기화
    const handleSubmit = () => {
        // 입력값 유효성 검사
        if (!title) {
            alert("운동명을 선택해주세요.");
            return;
        }
        if (!time) {
            alert("운동 시간을 입력해주세요.");
            return;
        }
        if (!sets) {
            alert("세트를 입력해주세요.");
            return;
        }
        if (!weight) {
            alert("무게를 입력해주세요.");
            return;
        }

        // 입력값이 유효할 경우, 새로운 운동 기록 추가
        const newRecord = {
            title: title,
            time: time,
            sets: sets,
            weight: weight,
            type: type
        }

        // 새로운 기록을 부모 컴포넌트로 전달
        dataUpdate(newRecord);

        // 입력값 초기화
        setTitle(""); // 운동명 초기화
        setTime("");
        setSets("");
        setWeight("");

        console.log(newRecord);
    };

    return (
        <div className="recordModal_container">
            <div className="recordModal_content_detail">
                오늘의 운동
                <br />
                <select name="upper" onChange={handleTitleChange}>
                <option value="" disabled selected>운동을 선택하세요</option> {/* placeholder-like option */}
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
