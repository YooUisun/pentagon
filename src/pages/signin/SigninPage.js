import React, { useState, useEffect } from 'react';
import '../../assets/SigninPage.css';

function SigninPage() {

    let [year,setYear] = useState('');
    let [month,setMonth] = useState('');
    let [day,setDay] = useState('');

    // 현재 년도와 월을 기준으로 선택 가능한 년,월,일을 설정
    let currentYear = new Date().getFullYear();
    let years = Array.from({length : 100}, (_, i) => currentYear - i); //100년전부터
    //길이가 100인 배열을 생성. 배열의 각 항목에 대해 (_, i) => currentYear - i 함수를 적용.

    let months = Array.from({length: 12}, (_, i) => i + 1); 
    // i가 0부터 11이므로 +1 해야 1~12월

    let daysInMonth = (year, month) => {
        let date = new Date(year, month, 0); //0은 1월 11은 12월, 이전월의 마지막 날짜 반환
        return Array.from({length: date.getDate()}, (_, i)=> i+1); 
        // date.getDate() = 월의 마지막날짜 반환, 배열에 1부터 마지막일까지 저장
    };
    //선택한 년, 월에 따라 일수 업데이트
    useEffect(()=> {
        if(year){
            setDay(''); //년을 변경하면 월, 일은 초기화
            setMonth('');
        }
    }, [year]); //year, month가 변경될때마다 실행
    useEffect(()=> {
        if(month){
            setDay(''); //월을 변경하면 일은 초기화            
        }
    }, [month]);
    

    return (
        <div className='signContainer'>
            <div className='signinBox'>
                <h1>회원가입</h1>
                <form className='formStyle'>
                    <br></br>
                    <h3>기본정보</h3>
                    <label>Email</label>
                    <input type="text" className="inputField" placeholder='honggildong@naver.com'></input>
                    <label>Password</label>
                    <input type="password" className="inputField" placeholder='******'></input>
                    <label>Password 확인</label>
                    <input type="password" className="inputField" placeholder='******'></input>
                    <br></br>
                    <h3>닉네임</h3>
                    <input type="text" className="inputField" placeholder='닉네임'></input>

                    <br></br>
                    <h3>전화번호</h3>
                    <div className='phone'>
                        <select>
                            <option selected>010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                        </select><input type="text" className="inputField" placeholder='휴대폰번호를 입력해주세요'></input>
                    </div>
                    <br></br>
                    <div >
                        <div>
                            <h3>생일</h3>                           
                        </div>
                        <div>
                            {/* 년도 선택 */}
                            <select                                
                                value={year}
                                onChange={(e) => setYear(e.target.value)}>
                                {/* e는 이벤트객체, e요소를 setYear로 전달하여 year 업데이트 */}
                                <option value="">년도 선택</option>
                                {years.map((yearOption, index) => (
                                    <option key={index} value={yearOption}>
                                        {yearOption}
                                    </option>
                                ))}
                            </select>

                            {/* 월 선택 */}
                            <select                                
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                disabled={!year}
                            >
                                <option value="">월 선택</option>
                                {months.map((monthOption, index) => (
                                    <option key={index} value={monthOption}>
                                        {monthOption}
                                    </option>
                                ))}
                            </select>

                            {/* 일 선택 */}
                            <select                                
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                disabled={!month}
                            >
                                <option value="">일 선택</option>
                                {year && month &&
                                    daysInMonth(year, month).map((dayOption, index) => (
                                        <option key={index} value={dayOption}>
                                            {dayOption}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <button className="inputField">Signin</button>
                </form>
            </div>
        </div>
    )
}

export default SigninPage;